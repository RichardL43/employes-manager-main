import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { TableCard } from "./TableCard";
import { CounterProvider } from "../../context/Provider";
import { useEffect } from "react";
import { useState } from "react";

export const CardEmployee = ({employee,userId}) => {

  return (
      <Card >
      <TableCard employee={employee} userId={userId}/>
      </Card>
  );
};
