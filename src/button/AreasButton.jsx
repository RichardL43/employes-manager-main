import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import { IconButton, Modal, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Button } from "@mui/material";
import { useState } from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

export const AreasButton = ({ userId }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const tableData = [
    { id: 1, 
      joaName: "Area 1" ,
      joaAbbreviation: "A1"
    },
    { 
      id: 2, 
      joaName: "Area 2",
      joaAbbreviation: "A2"
    },
    { id: 3, 
      joaName: "Area 3",
      joaAbbreviation: "A3"
    },
    { id: 4,
      joaName: "Area 4",
      joaAbbreviation: "A4"
    },
  ];

  const handleRowSelect = (rowId) => {
    if (selectedRows.includes(rowId)) {
      setSelectedRows(selectedRows.filter((id) => id !== rowId));
    } else {
      setSelectedRows([...selectedRows, rowId]);
    }
  };

  const isRowSelected = (rowSelected) => selectedRows.includes(rowSelected);

  const editArea = () => {
    const selectedAreas = selectedRows.map((rowId) => {
      const area = tableData.find((row) => row.id === rowId);
      return {
        ...area,
      };
    });
    fetch(`http://localhost:3005/areas/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(selectedAreas)
    });

    window.location.reload();
  };

  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };


  return (
    <>
      <IconButton onClick={handleToggle}>
        <AccountTreeOutlinedIcon />
      </IconButton>
      <Modal open={toggle} onClose={handleToggle}>
        <div className="AreasButton">
          <h2>Areas Asociadas</h2>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                {tableData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.joaName}</TableCell>
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
          </div>
          <div>
            <Button onClick={handleToggle}>Cancelar</Button>
            <Button variant="contained" type="button" onClick={editArea}>
              Guardar
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
