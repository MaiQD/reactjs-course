import { createContext } from "react";
import useAuth from "../hooks/useAuth";

export const globalContext = createContext();

function GlobalContextProvider({ children }) {
  const auth = useAuth();
  
  return (
    <globalContext.Provider value={auth}>{children}</globalContext.Provider>
  );
}

export default GlobalContextProvider;
