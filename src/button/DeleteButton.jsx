import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import {Button,Dialog,DialogActions,DialogTitle} from "@mui/material";

export const DeleteButton = ({ userId }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
const deleteEmployee = () => {
  fetch(`http://localhost:3005/employees/${userId}`, {
    method: 'DELETE'
  });
};

const deleteUser = () => {
  fetch(`http://localhost:3005/users/${userId}`, {
    method: 'DELETE'
  });
};

const deleteArea = () => {
  fetch(`http://localhost:3005/areas/${userId}`, {
    method: 'DELETE'
  });
};

const globalDelete = (e) => {
  deleteEmployee(e);
  deleteUser(e);
  deleteArea(e);
  window.location.reload();
}


  return (
    <>
      <IconButton style={{ color: "black" }} onClick={handleOpen}>
        <PersonRemoveIcon style={{ fontSize: "2rem" }} />
      </IconButton>
      <Dialog open={open} onClose={handleOpen}>
        <DialogTitle id="alert-dialog-title">
          {"¿Seguro que quieres eliminarlo?"}
        </DialogTitle>

        <DialogActions style={{ justifyContent: "space-between" }}>
          <Button color="primary" onClick={globalDelete}>si</Button>
          <Button onClick={handleOpen} color="primary">no</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
