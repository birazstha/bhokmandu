import {createContext} from 'react';

export const CartContext = createContext ({
  cuisines: [],
  addToCart: () => {},
});

const addToCart = data => {
  let cuisinesDetail = {
    userId: 1,
    cuisineId: data,
  };
  console.log (cuisinesDetail);

  //trigger add to cart API.
};

export default function CartContextProvider({children}) {
  return (
    <CartContext.Provider value={{addToCart}}>
      {children}
    </CartContext.Provider>
  );
}
