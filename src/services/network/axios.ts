
import axios, { AxiosRequestConfig } from "axios";
import { error } from "console";
import AuthenticationService from "../authService";
import { DataUtility } from "../../ utils/dataUtility";


const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://your-api-url.com';

const axiosInstance = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com",
    timeout: 10000,
    headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },

});

// REQUEST Interceptor
axiosInstance.interceptors.request.use( async (config) => {
    // const token = localStorage.getItem('access_token');
     const accessToken = await AuthenticationService.getAccessToken();
    if (!DataUtility.isEmpty(accessToken)) {
        config.headers['Authrization'] = `Bearer ${accessToken}`;
    }

    return;

},
    (error) => {
        return Promise.reject(error);
    }    
);


//RESPONSE INTERCEPTOR
axiosInstance.interceptors.response.use( async (response) => {
    response,
    (error) =>{

        if(error.response.status === '401') {
            console.warn('Unauthorized: Token might be expired');
        }

        return Promise.reject(error);
    }
});

export default axiosInstance;