import { createContext, useEffect, useState } from "react";

export const cartContext = createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const saveToLocalStorage = (nextCart) => {
    const cartString = JSON.stringify(nextCart);
    const userString = sessionStorage.getItem("USER");
    if (userString) {
      const jsonUser = JSON.parse(userString);
      localStorage.setItem(`${jsonUser.username}_CART`, cartString);
    }
  };

  const addToCart = (item) => {
    const nextCart = [...cart, item];
    setCart(nextCart);
    saveToLocalStorage(nextCart);
  };

  const initDataCart = () => {
    const userString = sessionStorage.getItem("USER");
    if (!userString) {
      return;
    }
    const jsonUser = JSON.parse(userString);
    const cartString = localStorage.getItem(`${jsonUser.username}_CART`);
    const cartJson = JSON.parse(cartString);
    if (cartJson) {
      setCart(cartJson);
    }
  };

  useEffect(() => {
    initDataCart();
  }, []);

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        initDataCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default CartContextProvider;
