import { useState } from "react";
import { useRandomId } from "./useRandomId";
import axios from "axios";

export const useFetchPost = () => {
  const { randomId } = useRandomId();

  // * Employee
  const [employee, setEmployee] = useState({
    id: randomId,
    empName: "",
    empFirstName: "",
    empLastName: "",
    empSystemAccess: false,
  });

  const onChangeEmployee = (e) => {
    const { name, value } = e.target;
    setEmployee((prevData) => ({ ...prevData, [name]: value }));
  };

  const employeeSubmitPost = () => {
    axios
      .post("http://localhost:3005/employees", employee)
      .then((resp) => resp.data);
  };

  // * User
  const [user, setUser] = useState({
    id: randomId,
    usrEmail: "",
    usrName: "",
    usrPassword: "",
    usrAreas: [],
  });

  const onChangeUser = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({ ...prevData, [name]: value }));
  };

  const userSubmitPost = () => {
    axios.post("http://localhost:3005/users", user).then((resp) => resp.data);
  };

  // * Area
  const areasTotales = [
    { id: "1", joaName: "Area 1", joaAbbreviation: "A1" },
    { id: "2", joaName: "Area 2", joaAbbreviation: "A2" },
    { id: "3", joaName: "Area 3", joaAbbreviation: "A3" },
    { id: "4", joaName: "Area 4", joaAbbreviation: "A4" },
  ];
  const [area, setArea] = useState(areasTotales);

  const areaSubmitPost = () => {
    axios.post("http://localhost:3005/areas", area);
    // .then((resp) => resp.data)
  };

  return {
    onChangeEmployee,
    employeeSubmitPost,
    employee,
    onChangeUser,
    userSubmitPost,
    user,
    areaSubmitPost,
    area,
  };
};
