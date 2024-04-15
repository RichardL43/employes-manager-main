import { useState } from "react";

export const useHandle = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true)
  };

  const handleClose = () => {
    setOpenModal(false)
  };

  return (
        handleClose,
        handleOpen,
        openModal
    )
}
