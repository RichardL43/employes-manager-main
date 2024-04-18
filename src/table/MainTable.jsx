import React, { createContext } from "react";
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
import { useFetchGet } from "../hooks/useFetchGet";
import { DeleteButton } from "../button/DeleteButton";
 
export const EmployeeIdContext = createContext();
export const MainTable = () => {
  const { employees } = useFetchGet();
  
  return (
    <div className="tableContainer">
      <h1>Empleados</h1>
      <NewForm />
      <TableContainer component={Paper} sx={{ borderRadius: "10px" }}>
        <Table
          sx={{ minWidth: 650, borderRadius: "10px" }}
          >
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                sx={{ fontSize: "23px", border: "1px solid #708090" }}
              >
                Nombre
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: "23px", border: "1px solid #708090" }}
              >
                Apellido Paterno
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: "23px", border: "1px solid #708090" }}
              >
                Apellido Materno
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: "23px", border: "1px solid #708090" }}
                >
                Ver
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: "23px", border: "1px solid #708090" }}
                >
                Editar
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: "23px", border: "1px solid #708090" }}
                >
                Eliminar
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <EmployeeIdContext.Provider key={employee.id} value={{
                 employee: employee, 
                 id: employee.id,
                 empSystemAccess: employee.empSystemAccess }}>
                <TableRow >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontSize: "20px", border: "1px solid #708090" }}
                    >
                    {employee.empName}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "20px", border: "1px solid #708090" }}
                    >
                    {employee.empFirstName}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "20px", border: "1px solid #708090" }}
                    >
                    {employee.empLastName}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "20px", border: "1px solid #708090" }}
                    >
                    <ViewButton employee={employee} userId={employee.id} />
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "20px", border: "1px solid #708090" }}
                  >
                    <EditButton employee={employee} />
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "20px", border: "1px solid #708090" }}
                    >
                    <DeleteButton userId={employee.id} />
                  </TableCell>
                </TableRow>
              </EmployeeIdContext.Provider>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
