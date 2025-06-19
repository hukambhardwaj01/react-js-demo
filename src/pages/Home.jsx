import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Dynamic } from "./Dynamic";
import { TreeChart } from "../components/TreeChart";
import { dataUtility } from "../ utils/dataUtility";
import  FoodProductList  from "../components/FoodProductList";
import { FiLogOut } from 'react-icons/fi';
import { useUserName } from "../contexts/userContext";







export const Home = () => { 

  const location  = useLocation();

   const { name } = useUserName();
   

  const navigate = useNavigate();

  const [display, setDisplay] = useState(true);
  const [users, setUsers] = useState([]);

  console.log('user-user ', name);

  const handleLogin = () => {
    navigate("/");
  };

  const handleToggle = () => {
    setDisplay(!display);
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.clear();
    navigate("/");
  };


  useEffect(() => {
    const userToken = localStorage.getItem("token");

    // ✅ Redirect if token is missing or empty
    if (dataUtility.isEmpty(userToken)) {
      navigate("/");
      return;
    }

    // ✅ Fetch user data
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Fetch Error", err));
  }, [navigate]);

  return (
    <>
    
      <h4 style={styles.topLeftBtn}>Welcome To Home { name }</h4>
      <button style={styles.topRightBtn} onClick={logoutHandler}>
       <FiLogOut size={20} />
      </button>

  
      <div>
        <FoodProductList />
      </div>






      {/* <div>
        <ul style={styles.listStyle}>
          {users.map((user) => (
            <li key={user.id}>
              <strong> {user.name} </strong> : {user.email} :  {user.address.city}
            </li>
          ))}
        </ul>
      </div> */}



      {/* <button onClick={handleToggle}>Toggle Now</button>
          {display ? <h4>Toggle In</h4> : <h4>Toggle Out</h4>} */}

      {/* <TreeChart /> */}
      {/* <Dynamic/> */}
    </>
  );
};

export const styles = {
  topRightBtn: {
    // margin: "10px",
    position: "absolute",
    top: "10px",
    right: "70px",
    padding: "10px 20px",
    backgroundColor: "rgb(68 68 68)",
    color: "white",
    border: "none",
    // borderRadius: "5px",
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
  },

  listStyle: {
      listStyle: 'none',
      padding: 0,     
      margin: 0,
  }
};
