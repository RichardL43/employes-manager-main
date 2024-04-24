import {Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,} from "@mui/material";
import React, { useContext } from "react";
import { AreasButton } from "../../button/AreasButton";
import { EditButton } from "../../button/EditButton";
import { useFetchGet } from "../../hooks/useFetchGet";
import { EmployeeContext } from "../../context/EmployeeContext";

export const UserTable = () => {
  // const { user, area } = useFetchGet();
  const { user, area } = useContext(EmployeeContext);
  // const {user, area } = state;
  const names = Object.values(area).map((e) => e.joaName);
  return (
    <TableContainer id="UserTable" component={Paper}>
      <Table>
        <TableHead>
          <TableRow className="rowSeparation">
            <TableCell id="tcButtonArea">
              <AreasButton/>
            </TableCell>
            <TableCell id="tcButtonEdit">
              <EditButton/>
            </TableCell>
          </TableRow>
          <TableRow className="rowSeparation">
            <TableCell id="tc4h" colSpan={2}><h4>Usuario</h4></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow className="rowSeparation">
            <TableCell id="tcNameUser">Nombre</TableCell>
            <TableCell id="tcUsrName">{user.usrName}</TableCell>
          </TableRow>
          <TableRow className="rowSeparation">
            <TableCell id="tcCorreoUser">Correo</TableCell>
            <TableCell id="tcUsrCorreo">{user.usrEmail}</TableCell>
          </TableRow>
          <TableRow className="rowSeparation">
            <TableCell id="tcAreas">Áreas</TableCell>
            <TableCell id="tcUsrAreas">{names.join(", ")}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

