import {Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,} from "@mui/material";
import React, { useEffect, useState } from "react";
import { AreasButton } from "../../button/AreasButton";
import { EditButton } from "../../button/EditButton";

export const UserTable = ({ employee, userId }) => {
  // ! /////////////////////////7
  const [user, setUser] = useState([]);

  const getUser = () => {
    fetch(`http://localhost:3005/users/${userId}`)
      .then((resp) => resp.json())
      .then((data) => setUser(data));
  };
  // ! /////////////////////////7

  const [areaName, setAreaName] = useState([]);

  const getArea = () => {
    fetch(`http://localhost:3005/areas/${userId}`)
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
  }, []);

  const names = areaName.map(name => name.joaName);

  console.log(areaName);

  return (
    <>
      <TableContainer component={Paper}>
        <AreasButton userId={userId} />
      <EditButton employee={employee}/>

        <h3>Usuario</h3>
        <Table className="UserTable">
          <TableHead></TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ fontSize: "15px" }}>Nombre</TableCell>
              <TableCell>{user.usrName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontSize: "15px" }}>Correo</TableCell>
              <TableCell>{user.usrEmail}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontSize: "15px" }}>Áreas</TableCell>
              <TableCell>{names.join(", ")}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
