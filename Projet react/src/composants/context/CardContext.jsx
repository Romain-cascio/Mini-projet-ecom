import { createContext , useState } from "react"
import React from "react";

export const CardContext = React.createContext();

export function CardContextProvider({children}) {
    const [cart, setCart] = useState([]);

    function AddCart(item) {
        setCart([...cart, item]);
      }
    function RemoveCart(item) {
        setCart(cart.filter(i => i !== item));
      }
    function ClearCart() {
        setCart([]);
      }

    return (
        <CardContext.Provider value={{cart, AddCart, RemoveCart, ClearCart}}>
          {children}
        </CardContext.Provider>
    );
}