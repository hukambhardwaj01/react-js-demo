import { error } from "console";
import { createContext, ReactNode, useContext, useState } from "react";


type Product = { id: number, name: string, price: number };

type CartContextType = {
    cart: Product[],
    addToCart: (product : Product) => void;
};

const CartContext =  createContext<CartContextType | undefined> (undefined);

export const CartProvider = ({ children }:{ children:ReactNode}) => {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product :Product) => {
        setCart((prev) => [...prev, product]);
    }


    return (

        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    );
};

export const userCart = () => {
    const context = useContext(CartContext);
    if(!context) throw new Error("useCart  must be  used within CartProvider");
};




