import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import {Box,Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle,} from "@mui/material";

export const DeleteButton = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton style={{ color: "black" }} onClick={handleClickOpen}>
        <PersonRemoveIcon style={{ fontSize: "2rem" }} />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"¿Seguro que quieres eliminarlo?"}
        </DialogTitle>

        <DialogContent></DialogContent>
        <DialogActions style={{ justifyContent: "space-between" }}>
          <Button color="primary">si</Button>
          <Box />
          <Button onClick={handleClose} color="primary">
            no
          </Button>
        </DialogActions>
      </Dialog>
    </>
  ); 
};
