import { useState } from "react";
import axios from "axios";
import { useRandomId } from "./useRandomId";

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

  const employeeSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3005/employees", employee)
      .then((resp) => resp.data)
  };

  // * User
  const [user, setUser] = useState({
    id: randomId,
    usrEmail: "",
    usrName: "",
    usrPassword: "",
  });

  const onChangeUser = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({ ...prevData, [name]: value }));
  };

  const userSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3005/users", user)
      .then((resp) => resp.data)
  };

  // * Area
  const [area, setArea] = useState({
    id: randomId,
  });

  const areaSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3005/areas", area)
      .then((resp) => resp.data)
  };

  return { onChangeEmployee, employeeSubmit, employee, onChangeUser, userSubmit, user, areaSubmit, area };
};
