import React, { useState } from "react";
import { Button, Modal, Switch, TextField } from "@mui/material";
import { MiComponente } from "../test/Pruebas";
import { UserAcces } from "./UserAcces";

export const EditEmployee = () => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    firstName: "",
    lastName: "",
    date: "",
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    handleClose();
  };
  const handle = () => {
    setChecked((p) => !p);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Agregar
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2 id="modal-title">Formulario</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nombre"
              />
              <label htmlFor="firstName">Primer Apellido</label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                placeholder="Primer Apellido"
              />
              <label htmlFor="lastName">Segundo Apellido</label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                placeholder="Segundo Apellido"
              />

              <label htmlFor="firstName">Fecha de Nacimiento</label>
              <input
                type="date"
                id="firstName"
                value={formData.date}
                placeholder="Primer Apellido"
              />
            </div>
            <label htmlFor="Switch" className="form-label mb-0">
              ¿Acceso al Sistema?
            </label>
            <span> NO</span>
            <Switch
              id="Switch"
              checked={checked}
              onChange={handle}
              inputProps={{ "aria-label": "controlled" }}
            />
            <span>SI</span>
            {checked ? <UserAcces /> : null}
            <div>
              <Button type="submit">Cancelar</Button>
              <Button   variant="contained"
                  style={{
                    backgroundColor: "#6eb9ff",
                    color: "white",
                  }}
                  type="submit">Guardar</Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};