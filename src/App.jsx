import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
// import Login from './pages/auth/Login';
// import Register from './pages/auth/Register';
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/ Header";
import { CartProvider } from "./contexts/cartContext";
import { UserProvider } from "./contexts/userContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    // <div>
    //   <h4>Working Fine</h4>
    //   <p>Count is : {count}</p>
    //   <button onClick={() => setCount(count + 2)}>+...</button>
    //   <button onClick={() => setCount(count - 2*2)}>-...</button>
    // </div>

    <ThemeProvider>
      <UserProvider>
      <CartProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <div
        style={{
          position: "absolute",
          top: "5px",
          right: "5px",
        }}
      >
        <Header />
      </div>
      </CartProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
