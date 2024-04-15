import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useButtonHook } from "../hooks/useButtonHook";
import { Modal, Box } from "@mui/material";
import { CardEmployee } from "../table/card/Card";

export const ViewButton = ({ employee, userId }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton style={{ color: "black" }} onClick={handleOpen}>
        <VisibilityIcon style={{ fontSize: "2rem" }} />
      </IconButton>
      <Modal open={open} onClose={handleOpen}>
        <Box className="tableCard">
          <CardEmployee employee={employee} userId={userId} />
        </Box>
      </Modal>
    </>
  );
};
