import React, { createContext, useContext } from "react";

// Creamos el contexto
const EmployeeContext = createContext();

// Creamos un proveedor personalizado que envuelva a los componentes donde queremos que esté disponible el contexto
export const IdContext = ({ children, value }) => {
  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
};

// Creamos un hook personalizado para acceder al contexto
export const useEmployeeContext = () => useContext(EmployeeContext);
