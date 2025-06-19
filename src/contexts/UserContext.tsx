// import { useState , createContext } from "react";
import { createContext, useState, useContext } from 'react';




const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [name, setName] = useState(null);

    return (

        <UserContext.Provider value={{ name, setName}}>
            { children }
        </UserContext.Provider>
    )
};

export const useUserName = () => useContext(UserContext); 