import React from "react";
import { MainTable } from "./table/MainTable";


export const App = ({ onEmployeeIdChange }) => {
  return (
      <MainTable onEmployeeIdChange={onEmployeeIdChange }/>
  );
};
