import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { IconButton, Modal, Switch } from "@mui/material";

export const EditButton = ({ employee }) => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(employee.empSystemAccess);
  const [formData, setFormData] = useState(employee);
  const [formUser, setFormUser] = useState({
    usrName: "",
    usrEmail: "",
    usrPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onChangeUser = (e) => {
    const { name, value } = e.target;
    setFormUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitUser = (e) => {
    e.preventDefault();
    return fetch(`http://localhost:3005/users/${employee.id}`, {
      method: "PUT",
      body: JSON.stringify(formUser),
    })
      .then((resp) => resp.json())
      .catch((error) => console.error("Error updating user:", error));
  };

  const submitEmployee = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3005/employees/${employee.id}`, {
      method: "PUT",
      body: JSON.stringify(formData),
    }).then((resp) => resp.json());
  };

  const globalSubmit = (e) => {
    e.preventDefault();
    submitEmployee(e);
    submitUser(e);
    window.location.reload();
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleCheck = () => {
    setChecked((prevChecked) => !prevChecked);
    handleChange({ target: { name: "empSystemAccess", value: !checked } });
  };

  const getUser = () => {
    fetch(`http://localhost:3005/users/${employee.id}`)
      .then((resp) => resp.json())
      .then((data) => setFormUser(data))
  };

  useEffect(() => {
    getUser();
  }, []);

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
                  value={formUser.usrEmail}
                  onChange={onChangeUser}
                  placeholder="Email"
                />
                <input
                  type="password"
                  id="usrPassword"
                  name="usrPassword"
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
