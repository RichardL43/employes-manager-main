import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ViewButton } from "../button/ViewButton";
import { EditButton } from "../button/EditButton";
import { NewForm } from "../Form/NewForm";
import { useFetchJSON } from "../hooks/useFetchJSON";
import { UserForm } from "../Form/userForm";

export const CustomizedTables = () => {
  const { employees } = useFetchJSON();

  return (
    <div className="tableContainer">
      <h1>Empleados</h1>
      {/* <UserForm/>  */}
      <NewForm />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center"  sx={{ fontSize: "20px" }}>
                Nombre
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "20px" }}>
                Apellido Paterno
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "20px" }}>
                Apellido Materno
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "20px" }}>
                Ver
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "20px" }}>
                Editar
              </TableCell>
              {/* <TableCell align="center" sx={{ fontSize: "20px" }}>
                Eliminar
              </TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee, index) => (
              <TableRow
                key={index}
                // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">{employee.empName}</TableCell>
                <TableCell align="center">{employee.empFirstName}</TableCell>
                <TableCell align="center">{employee.empLastName}</TableCell>
                <TableCell align="center"><ViewButton employee={employee} userId={employee.id}/></TableCell>
                <TableCell align="center"><EditButton employee={employee} /></TableCell>
                {/* <TableCell align="center"><DeleteButton/></TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
