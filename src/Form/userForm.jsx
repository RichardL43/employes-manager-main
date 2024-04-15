import { Box, Button, Modal, Stack, Switch } from "@mui/material";
import { useState } from "react";
import { UserAcces } from "./UserAcces";
import { Pruebas } from "../test/Pruebas";
import { useButtonHook } from "../hooks/useButtonHook";

export const UserForm = () => {
  const [checked, setChecked] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(true);
  // const { isFormOpen, changeForm } = useButtonHook();

  const handleChange = () => {
    setChecked((p) => !p);
  };

  const handleClose = () => {
    setIsFormOpen(false);
  };

  const reset = () => {
    // setIsFormOpen(false);
    window.location.reload();
  };

  if (!isFormOpen) {
    return null;
  }

  return (
    <>
      {/* <Modal> */}

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4 addEmployee ">
            <form>
              <h3>Agregar Empleado</h3>
              <label htmlFor="name" className="form-label mb-3">
                Nombre:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nombre"
                className="mb-3 form-control"
              />
              <label htmlFor="lname" className="form-label mb-3">
                Apellido Paterno:
              </label>
              <input
                type="text"
                id="lname"
                name="lastName"
                placeholder="Primer Apellido"
                className="mb-3 form-control"
              />
              <label htmlFor="sname" className="form-label mb-3">
                Apellido Materno:
              </label>
              <input
                type="text"
                id="sname"
                name="secondName"
                placeholder="Segundo Apellido"
                className="mb-3 form-control"
              />
              <label htmlFor="fecha" className="form-label mb-3">
                Fecha de Nacimiento:
              </label>
              <input
              type="date"
                id="fecha"
                name="fecha"
                placeholder="-- : -- : --"
                className="mb-3 form-control"
              />
              <label htmlFor="Switch" className="form-label mb-0">
                ¿Acceso al Sistema?
              </label>
              <span> NO</span>
              <Switch
                id="Switch"
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <span>SI</span>
              <div>{checked ? <UserAcces /> : null}</div>
              <div className="d-flex justify-content-between mt-3">
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#727272", color: "white" }}
                  onClick={reset}
                >
                  Cancelar
                </Button>

                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#6eb9ff",
                    color: "white",
                  }}
                >
                  Guardar
                </Button>
              </div>
            </form>
          </div>
         </div>
      </div>
      {/* </Modal> */}
    </>
  );
};
