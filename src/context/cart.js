import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
});

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (cuisine) => {
    setCart((prevCart) => {
      if (Array.isArray(prevCart)) {
        const test = prevCart.find((cui) => cui.id === cuisine.id);

        if (test !== undefined) {
          return prevCart.map((item) =>
            item.id === cuisine.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          return [
            ...prevCart,
            {
              id: cuisine.id,
              title: cuisine.title,
              rate: cuisine.price,
              quantity: 1,
            },
          ];
        }
      }
    });

    toast.success("Item has been added");
  };

  console.log(cart);

  return (
    <CartContext.Provider value={{ addToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
}
