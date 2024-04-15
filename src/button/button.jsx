import { Box, Button, Modal } from "@mui/material";
import React from "react";
import { UserForm } from "../Form/userForm";
import { useButtonHook } from "../hooks/useButtonHook";
import { MiComponente } from "../test/Pruebas";

export const UserButton = () => {
  const { isFormOpen, changeForm } = useButtonHook(); 

  return (
    <>
      <Box display="flex" justifyContent="flex-end">
        <Button variant="outlined" onClick={changeForm}>Agregar</Button>
        {isFormOpen && <UserForm onClose={changeForm}/>} 
      </Box>
    </>
  );
};
 