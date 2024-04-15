import { Button } from "@mui/material";
import React, { useState } from "react";
import { useRandomId } from "../context/Provider";

export const UserAcces = () => {
  const randomId = useRandomId();
  const [formData, setFormData] = useState({
    id: "",
    usrEmail: "",
    usrName: "",
    usrPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3005/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      // .then((data) => console.log(data))
    };

  return (
    <>
      <form >
        <label htmlFor="usrName">Nombre de Usuario:</label>
        <input
          type="text"
          id="usrName"
          name="usrName"
          // value={formData.usrName}
          onChange={handleChange}
          placeholder="Nombre"
        />
        <label htmlFor="usrEmail">Correo:</label>
        <input
          type="email"
          id="usrEmail"
          name="usrEmail"
          // value={formData.usrEmail}
          onChange={handleChange}
          placeholder="correo@google.com"
          className=" form-control"
        />
        <label htmlFor="usrPassword">Contraseña:</label>
        <input
          type="password"
          id="usrPassword"
          name="usrPassword"
          // value={formData.usrPassword}
          onChange={handleChange}
          placeholder="-------"
          className=" form-control"
        />
        <div>
          <button className="btn btn-outline-primary" type="button" onClick={handleSubmit}>Guardar</button>
        </div>
      </form>
    </>
  );
};
