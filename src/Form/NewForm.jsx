import React, { useState } from "react";
import { Button, Modal, Switch } from "@mui/material";
import { UserAcces } from "./UserAcces";
import { useAddEmployee } from "../hooks/useAddEmployee";

export const NewForm = () => {
  const generateId = () => {
    const lengthId = 4;
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomId = "";
    for (let i = 0; i < lengthId; i++) {
      const ind = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(ind);
    }
    return randomId;
  };
  const randomId = generateId();

  //! /////////////// ///////////////
  const [employee, setEmployee] = useState({
    id: randomId,
    empName: "",
    empFirstName: "",
    empLastName: "",
    empSystemAccess: false,
  });

  const onChangeEmployee = (e) => {
    const { name, value } = e.target;
    setEmployee((prevData) => ({ ...prevData, [name]: value }));
  };

  const employeeSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3005/employees", {
      method: "POST",
      body: JSON.stringify(employee),
    }).then((resp) => resp.json());
  };

  //! /////////////// ///////////////
  const [user, setUser] = useState({
    id: randomId,
    usrEmail: "",
    usrName: "",
    usrPassword: "",
    // usrAreas: ["1","2","3","4"]
  });

  const onChangeUser = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({ ...prevData, [name]: value }));
  };

  const userSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3005/users`, {
      method: "POST",
      body: JSON.stringify(user),
    }).then((resp) => resp.json());
  };
  //! ////////////// ////////////////
  const [area, setArea] = useState({
    id: randomId,
  });

  const areaSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3005/areas", {
      method: "POST",
      body: JSON.stringify(area),
    }).then((resp) => resp.json());
  };
  //! ////////////// ////////////////
  const globalSumbit = (e) => {
    employeeSubmit(e);
    userSubmit(e);
    areaSubmit(e);
    windowReload();
  };
  //! ////////////// ////////////////
  // const { handleChange, handleSubmit, formData } = useAddEmployee();
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSwitch = () => {
    setChecked((prev) => !prev);
    onChangeEmployee({ target: { name: "empSystemAccess", value: !checked } });
  };

  const windowReload = () => {
    window.location.reload();
  };


  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" onClick={handleOpen}>
          Agregar
        </Button>
      </div>

      <Modal open={open} onClose={handleClose}>
        <div className="divNewForm">
          <form onSubmit={globalSumbit}>
            <h2 id="modal-title">Agregar Empleado</h2>
            <div>
              <label htmlFor="empName">Nombre</label>
              <input
                type="text"
                id="empName"
                name="empName"
                value={employee.empName}
                onChange={onChangeEmployee}
                placeholder="Nombre"
              />
              <label htmlFor="empFirstName">Apellido Paterno</label>
              <input
                type="text"
                id="empFirstName"
                name="empFirstName"
                value={employee.empFirstName}
                onChange={onChangeEmployee}
                placeholder="Primer Apellido"
              />
              <label htmlFor="empLastName">Apellido Materno</label>
              <input
                type="text"
                id="empLastName"
                name="empLastName"
                value={employee.empLastName}
                onChange={onChangeEmployee}
                placeholder="Segundo Apellido"
              />
            </div>
            <label htmlFor="Switch" className="form-label mb-0">
              ¿Acceso al Sistema?
            </label>
            <span> NO</span>
            <Switch
              id="Switch"
              checked={checked}
              onChange={handleSwitch}
              inputProps={{ "aria-label": "controlled" }}
            />
            <span>SI</span>
            {checked ? (
              <div>
                <label htmlFor="usrName">Nombre de Usuario:</label>
                <input
                  type="text"
                  id="usrName"
                  name="usrName"
                  value={user.usrName}
                  onChange={onChangeUser}
                  placeholder="Nombre"
                />
                <label htmlFor="usrEmail">Correo:</label>
                <input
                  type="email"
                  id="usrEmail"
                  name="usrEmail"
                  value={user.usrEmail}
                  onChange={onChangeUser}
                  placeholder="correo@google.com"
                  className="form-control"
                />
                <label htmlFor="usrPassword">Contraseña:</label>
                <input
                  type="password"
                  id="usrPassword"
                  name="usrPassword"
                  value={user.usrPassword}
                  onChange={onChangeUser}
                  placeholder="-------"
                  className="form-control"
                />
              </div>
            ) : null}

            <div>
              <Button onClick={handleClose}>Cancelar</Button>
              <Button variant="contained" type="submit">
                Guardar
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};
