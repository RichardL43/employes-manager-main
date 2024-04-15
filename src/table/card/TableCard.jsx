import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useFetchJSON } from "../../hooks/useFetchJSON";
import { useContext } from "react";
import { EmployeeContext } from "../../context/EmployeeContext";
import { UserTable } from "./UserTable";
import { EditButton } from "../../button/EditButton";
import { AreasButton } from "../../button/AreasButton";

export const TableCard = ({ employee, userId }) => {
  return (
    <div className="tableContainer">
      <TableContainer component={Paper}>
        <h3>Detalle del Empleado</h3>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell sx={{ fontSize: "20px" }}>Nombre </TableCell>
              <TableCell>{employee.empName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontSize: "20px" }}>Apellido paterno</TableCell>
              <TableCell>{employee.empFirstName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontSize: "20px" }}>Apellido materno </TableCell>
              <TableCell>{employee.empLastName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontSize: "20px" }}>
                ¿Acceso al Sistema?
              </TableCell>
              <TableCell>{employee.empSystemAccess ? "SI" : "NO"}</TableCell>
         
              {/* <TableCell>{employee.usrAreas}</TableCell> */}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {employee.empSystemAccess ? <UserTable employee={employee} userId={userId} /> : null}
      {/* {console.log(employee.usrAreas[0])} */}
    </div>
  );
};
