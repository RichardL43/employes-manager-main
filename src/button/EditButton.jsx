import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { IconButton, Modal, Switch } from "@mui/material";
import { useFetchPut } from "../hooks/useFetchPut";

export const EditButton = () => {
  const {
    handleChange,
    submitEmployee,
    formData,
    onChangeUser,
    submitUser,
    formUser,
    handleCheck,
    checked,
  } = useFetchPut();
  const [open, setOpen] = useState(false);

  const globalSubmit = (e) => {
    e.preventDefault();
    submitEmployee(e);
    submitUser(e);
    window.location.reload();
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton onClick={handleOpen}>
        <ModeEditIcon style={{ fontSize: "2rem", color: "black" }} />
      </IconButton>

      <Modal open={open} onClose={handleOpen}>
        <div className="divNewForm">
          <form onSubmit={globalSubmit}>
            <h4>Editar Empleado</h4>
            <div>
              <input
                type="text"
                id="empName"
                name="empName"
                value={formData.empName}
                onChange={handleChange}
                placeholder="Nombre"
              />
              <input
                type="text"
                id="empFirstName"
                name="empFirstName"
                value={formData.empFirstName}
                onChange={handleChange}
                placeholder="Apellido Paterno"
              />
              <input
                type="text"
                id="empLastName"
                name="empLastName"
                value={formData.empLastName}
                onChange={handleChange}
                placeholder="Apellido Materno"
              />
            </div>
            <label htmlFor="Switch" className="form-label mb-0">
              ¿Acceso al Sistema?
            </label>
            <span> NO</span>
            <Switch
              id="Switch"
              checked={checked}
              onChange={handleCheck}
              inputProps={{ "aria-label": "controlled" }}
            />
            <span>SI</span>
            {checked && (
              <div>
                <input
                  type="text"
                  id="usrName"
                  name="usrName"
                  value={formUser.usrName}
                  onChange={onChangeUser}
                  placeholder="Nombre"
                />
                <input
                  type="email"
                  id="usrEmail"
                  name="usrEmail"
                  autoComplete="username"
                  value={formUser.usrEmail}
                  onChange={onChangeUser}
                  placeholder="Email"
                />
                <input
                  type="password"
                  id="usrPassword"
                  name="usrPassword"
                  autoComplete="current-password"
                  value={formUser.usrPassword}
                  onChange={onChangeUser}
                  placeholder="Contraseña"
                />
              </div>
            )}
            <div>
              <Button onClick={handleOpen}>Cancelar</Button>
              <Button variant="contained" type="submit">
                Guardar
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};
