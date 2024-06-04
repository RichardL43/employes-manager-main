import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import { IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { EmployeeContext } from "../context/EmployeeContext";

export const NewButtonAreas = ({ areaData, employee }) => {
  const { userGet, submitUser, fetchGetId } = useContext(EmployeeContext);
  const [toggle, setToggle] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleCheckboxChange = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSave = async () => {
    const selectedAreas = Object.keys(checkedItems).filter((id) => checkedItems[id]);
    const updatedEmployee = {
      ...userGet,
      usrAreas: selectedAreas,
    };
    await submitUser(employee.id, updatedEmployee);
    await fetchGetId(employee.id);
    setToggle(false);
  };

  useEffect(() => {
    if (userGet && userGet.usrAreas) {
      const initialCheckedItems = userGet.usrAreas.reduce((acc, id) => {
        acc[id] = true;
        return acc;
      }, {});
      setCheckedItems(initialCheckedItems);
    }
  }, [userGet]);

  return (
    <>
      <IconButton onClick={handleToggle}>
        <AccountTreeOutlinedIcon style={{ fontSize: "1.7rem", color: "black" }} />
      </IconButton>
      <Modal open={toggle} onClose={handleToggle}>
        <div className="AreasButton">
          <Paper>
            <h2>Areas Asociadas</h2>
            <TableContainer>
              <Table>
                <TableBody>
                  {areaData.map((area) => (
                    <TableRow key={area.id}>
                      <TableCell>
                        <IconButton onClick={() => handleCheckboxChange(area.id)}>
                          {checkedItems[area.id] ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
                        </IconButton>
                      </TableCell>
                      <TableCell>{area.joaName}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Button onClick={handleToggle}>Cancelar</Button>
            <Button variant="contained" type="button" onClick={handleSave}>Guardar</Button>
          </Paper>
        </div>
      </Modal>
    </>
  );
};
