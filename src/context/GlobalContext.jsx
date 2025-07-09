import React, { CreateContext, useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  

  return (
    <GlobalContext.Provider value={{ cart, setCart }}>
      {children}
    </GlobalContext.Provider>
  );
};
