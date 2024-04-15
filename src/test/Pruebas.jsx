import React, { useState } from "react";
import {Table,TableBody,TableCell,TableContainer,TableRow,Paper,IconButton,} from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank"; 
import CheckBoxIcon from "@mui/icons-material/CheckBox";

export const MiComponente = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const tableData = [
    { id: 1, name: "Area 1" },
    { id: 2, name: "Area 2" },
    { id: 3, name: "Area 3" },
    { id: 4, name: "Area 4" },
  ];

  const handleRowSelect = (rowId) => {
    if (selectedRows.includes(rowId)) {
      setSelectedRows(selectedRows.filter((id) => id !== rowId));
    } else {
      setSelectedRows([...selectedRows, rowId]);
    }
  };

  // Función para determinar si una fila está seleccionada
  const isRowSelected = (rowId) => selectedRows.includes(rowId);

  return (
    <div>
      <h2>Areas Asociadas</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.id}>
                {/* <TableCell>{row.id}</TableCell> */}
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleRowSelect(row.id)}>
                    {isRowSelected(row.id) ? (<CheckBoxIcon />) : (<CheckBoxOutlineBlankIcon />)}
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <p>Selected rows: {selectedRows.join(", ")}</p>
      </div>
    </div>
  );
};

