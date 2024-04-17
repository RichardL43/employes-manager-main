import {Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { AreasButton } from "../../button/AreasButton";
import { EditButton } from "../../button/EditButton";
import { EmployeeIdContext } from "../MainTable";

export const UserTable = ({ employee, userId }) => {
  // ! /////////////////////////7
  const [user, setUser] = useState([]);
  const Id = useContext(EmployeeIdContext);


  const getUser = () => {
    fetch(`http://localhost:3005/users/${Id}`)
      .then((resp) => resp.json())
      .then((data) => setUser(data));
  };
  // ! /////////////////////////7

  const [areaName, setAreaName] = useState([]);

  const getArea = () => {
    fetch(`http://localhost:3005/areas/${Id}`)
      .then((resp) => resp.json())
      .then((data) => {
        const areas = Object.values(data).map((item) => item);
        setAreaName(areas);
      });
  };
  // ! /////////////////////////7

  useEffect(() => {
    getUser();
    getArea();
    console.log(Id)
  }, []);

  const names = areaName.map((name) => name.joaName);

  return (
    <>
      <TableContainer id="UserTable" component={Paper}>
          <TableRow className="rowSeparation" >
            <TableCell id="tcButtonArea"><AreasButton userId={userId} /></TableCell>
           <TableCell id="tcButtonEdit"><EditButton employee={employee} /></TableCell> 
          </TableRow>
          <h4>Usuario</h4>
        <Table >
          <TableBody>
            <TableRow className="rowSeparation" >
              <TableCell  id="tcNameUser">Nombre</TableCell>
              <TableCell  id="tcUsrName">{user.usrName}</TableCell>
            </TableRow>
            <TableRow className="rowSeparation">
              <TableCell id="tcCorreoUser">Correo</TableCell>
              <TableCell id="tcUsrCorreo">{user.usrEmail}</TableCell>
            </TableRow>
            <TableRow className="rowSeparation">
              <TableCell id="tcAreas" >Áreas</TableCell>
              <TableCell id="tcUsrAreas">{names.join(", ")}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
