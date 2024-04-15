import React, { createContext, useContext, useState } from "react";

const RandomIdContext = createContext();

export const RandomIdProvider = ({ children }) => {
  // const [randomId, setRandomId] = useState("");

  // const generateRandomId = () => {
  //   const generatedId = Math.random().toString(36).substring(7);
  //   setRandomId(generatedId);
  // };
  const randomId = 1;
  return (  
    <RandomIdContext.Provider value={{ randomId }}>
      {children}
    </RandomIdContext.Provider>
  );
};

export const useRandomId = () => {
  return useContext(RandomIdContext);
};
