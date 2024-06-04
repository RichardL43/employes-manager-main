import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import {Button,Dialog,DialogActions,DialogTitle} from "@mui/material";
import { useFetchDelete } from "../hooks/useFetchDelete";

export const DeleteButton = ({employee}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

const {deleteEmployee, deleteUser, deleteArea} = useFetchDelete(employee.id);

const globalDelete = (e) => {
  deleteEmployee(e);
  deleteUser(e);
  // deleteArea(e);
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
          <Button color="primary" onClick={globalDelete}>SI</Button>
          <Button onClick={handleOpen} color="primary">NO</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
