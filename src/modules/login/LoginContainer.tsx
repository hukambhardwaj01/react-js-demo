import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserName } from "../../contexts/userContext";

const LoginContainer = () => {
  const navigate = useNavigate();

   const { setName } = useUserName();
   

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [retry, setRetry] = useState(0);
  const [newotp, setnewotp] = useState("");

  const handleLogin = () => {
    // e.preventDefault(); // prevent page reload
    console.log("email and password : ", email, password);

    if (!email || !password) {
      alert("Please fill email and password");
    } else {
      const randamOTP = Math.floor(10000 + Math.random() * 900000).toString();
      setnewotp(randamOTP);
      console.log("newotp", randamOTP);
      setStep(2);
    }
  };

  const handleOtp = () => {
    console.log("OTP Ok", otp);

    if (retry <= 4) {

      if (otp === newotp) {

        setRetry(0);
        console.log("OTP Ok", otp);
        localStorage.setItem("token", "fake-token-123456");

         setName("Hukam"); // example: "Hukam" // set global user data

        navigate("/home", { state: { email } }); // ✅ Redirect to Home

      } else {

        console.log("❌ Invalide OTP");
        setRetry(retry + 1);
        alert("Invalide OTP Try Again");
      }
    } else {
      alert("Try again later");
      navigate('/');
    }
  };

  // const handleSend = () => {
  //   const encodedMessage = encodeURIComponent(message);
  //   const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  //   window.open(url, "_blank");
  // };

  return (
    <div>
      {step === 1 && (
        <form style={formStyle}>
          <h2>Login</h2>

          {/* <label style={lableStyle}>Email</label> */}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />

          {/* <label>Password</label> */}
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />

          {/* <label>Login</label> */}
          <button type="button" style={buttonStyle} onClick={handleLogin}>
            Login
          </button>
        </form>
      )}

      {step === 2 && (
      
        <form style={formStyle}>
            <h4>Your OTP is : {newotp}</h4>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            style={inputStyle}
          />

          <button type="button" style={buttonStyle} onClick={handleOtp}>
            Verify OTP
          </button>
          {/* <button onClick={handleSend}>Send via WhatsApp</button> */}
        </form>
      )}
    </div>
  );
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  maxWidth: "300px",
  margin: "50px auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "8px",
};

const lableStyle = {};
const inputStyle = {
  padding: "8px",
  marginBottom: "10px",
  borderRadius: "4px",
  border: "1px solid #ddd",
};

const buttonStyle = {
  padding: "10px",
  backgroundColor: "#007BFF",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default LoginContainer;
