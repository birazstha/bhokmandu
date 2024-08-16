import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ProfileContext } from "./profile-context";

export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  updateCart: () => {},
  flushCartItems: () => {},
});

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const cartItems = localStorage.getItem("cartItems");
    return cartItems && cartItems.length > 0 ? JSON.parse(cartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

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

        const totalOrder = cart.reduce((a, b) => a + b.quantity, 0);
        console.log(totalOrder);
        if (totalOrder < 2) {
          alert("all deleted");
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

  const flushCartItems = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ addToCart, cart, updateCart, flushCartItems }}
    >
      {children}
    </CartContext.Provider>
  );
}
