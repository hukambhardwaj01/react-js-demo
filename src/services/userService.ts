import axiosInstance from "./network/axios";




const AuthenticationService = {
  async getAccessToken(): Promise<string | null> {
    return localStorage.getItem("token");
  },
  async refreshTokens(): Promise<void> {
    const newToken = "new-fake-token-1234";
    localStorage.setItem("token", newToken);
  },
};




// export const getUserProfile = async () => {
//   const response = await axiosInstance.get('/user/profile');
//   return response.data;
// };