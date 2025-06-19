
import { useNavigate } from 'react-router-dom';
// import LoginContainer from '../../modules/login/LoginContainer';
import LoginContainer from '../modules/login/LoginContainer';
import Header from "../components/ Header";
export const Login = () => {

    const navigation = useNavigate();


    const goToHome = () => {
        navigation('/Home')
    }

    return (
        <>
            <h4 style={styles.topLeftBtn}>Welcome To Login </h4>
            {/* <button style={styles.topRightBtn} onClick={goToHome}>Home Page </button> */}
            <LoginContainer/>
        </>
    );
}


export const styles = {
  topRightBtn: {
    margin: "10px",
    position: "absolute",
    top: "10px",
    right: "10px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
    topLeftBtn: {
    margin: "10px",
    position: "absolute",
    top: "10px",
    left: "10px",
    padding: "10px 20px",
    // backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  }
};