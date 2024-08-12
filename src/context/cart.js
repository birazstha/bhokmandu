import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { ProfileContext } from "./profile-context";

export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  updateCart: () => {},
});

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const { profile } = useContext(ProfileContext);

  const addToCart = (cuisine) => {
    if (!profile) {
      return (window.location.href = "/login");
    }

    setCart((prevCart) => {
      const test = prevCart.find((cui) => cui.id === cuisine.id);

      if (test !== undefined) {
        return prevCart.map((item) =>
          item.id === cuisine.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                grand_total: item.rate * (item.quantity + 1),
              }
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
            grand_total: cuisine.price,
          },
        ];
      }
    });

    toast.success("Cuisine added to cart");
  };

  console.log(cart);

  const updateCart = (operation, cuisineId) => {
    setCart((prevCart) => {
      if (operation === "add") {
        return prevCart.map((item) =>
          item.id === cuisineId
            ? {
                ...item,
                quantity: item.quantity + 1,
                grand_total: item.rate * (item.quantity + 1),
              }
            : item
        );
      } else if (operation === "remove") {
        let count = prevCart.find((cuisine) => cuisine.id === cuisineId);

        if (count.quantity === 1) {
          return prevCart.filter((cuisine) => cuisine.id !== cuisineId);
        }

        return prevCart.map((item) =>
          item.id === cuisineId
            ? {
                ...item,
                quantity: item.quantity - 1,
                grand_total: item.grand_total - item.rate,
              }
            : item
        );
      }
    });
  };

  return (
    <CartContext.Provider value={{ addToCart, cart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
}
