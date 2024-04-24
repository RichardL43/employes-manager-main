import React, { useContext, useState } from "react";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Modal, Box } from "@mui/material";
import { TableCard } from "../table/card/TableCard";

export const ViewButton = ({employee}) => {
  const [open, setOpen] = useState(false);
  

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton style={{ color: "black" }} onClick={handleOpen}>
        <VisibilityIcon style={{ fontSize: "2rem" }} />
      </IconButton>
      <Modal style={{  paddingTop: '20px', paddingBottom: '2opx' }} open={open} onClose={handleOpen}>
        <Box>
          <TableCard employee={employee} />
        </Box>
      </Modal>
    </>
  );
};
