import React, { useContext } from "react";
import { EmployeeIdContext } from "./MainTable";

const DeleteButton = () => {
  // Accede al contexto
  const employeeIds = useContext(EmployeeIdContext);

  const handleDelete = (userId) => {
    console.log("Eliminar empleado con ID:", userId);
    // Llama a la función de eliminación o realiza cualquier otra lógica necesaria
  };

  return (
    <div>
      {employeeIds.map(userId => (
        <button key={userId} onClick={() => handleDelete(userId)}>Eliminar {userId}</button>
      ))}
    </div>
  );
};

export default DeleteButton;
