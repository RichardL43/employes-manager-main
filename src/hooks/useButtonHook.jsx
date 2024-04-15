import { useState } from "react";

export const useButtonHook = () => {
  const [isFormOpen, setIsFormOpen] = useState(false); 

  const changeForm = () => {
    setIsFormOpen(prev => !prev); 
  };

  return { isFormOpen, changeForm };
};
