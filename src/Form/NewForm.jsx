import React, { useState } from "react";
import { Button, Modal, Switch } from "@mui/material";
// import { UserAcces } from "./UserAcces";
// import { useAddEmployee } from "../hooks/useAddEmployee";

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
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
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
      <div style={{display: "flex",justifyContent: "flex-end",paddingBottom: "10px",}}>
        <button className="btn btn-outline-primary" onClick={handleOpen}>
          Agregar
        </button>
      </div>

      <Modal open={open} onClose={handleOpen}>
        <div className="divNewForm">
          <form onSubmit={globalSumbit}>
            <h3 id="modal-title">Agregar Empleado</h3>
            <div>
              <input
                type="text"
                id="empName"
                name="empName"
                value={employee.empName}
                onChange={onChangeEmployee}
                placeholder="Nombre"
              />
              <input
                type="text"
                id="empFirstName"
                name="empFirstName"
                value={employee.empFirstName}
                onChange={onChangeEmployee}
                placeholder="Primer Apellido"
              />
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
            {checked && (
              <div>
                <input
                  type="text"
                  id="usrName"
                  name="usrName"
                  value={user.usrName}
                  onChange={onChangeUser}
                  placeholder="Nombre de Usuario"
                />
                <input
                  type="email"
                  autoComplete="email"
                  id="usrEmail"
                  name="usrEmail"
                  value={user.usrEmail}
                  onChange={onChangeUser}
                  placeholder="Email"
                />
                <input
                  type="password"
                  autoComplete="current-password"
                  id="usrPassword"
                  name="usrPassword"
                  value={user.usrPassword}
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
    </div>
  );
};
