import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { EmployeeIdContext } from "../table/MainTable";

export const useFetchPut = () => {
  const employeeContext = useContext(EmployeeIdContext);
  const { employee, id, empSystemAccess } = employeeContext || {};

  // * Employee
  const [formData, setFormData] = useState(employee);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitEmployee = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3005/employees/${id}`, formData)
      .then((resp) => resp.data)
  };

  // * User
  const [formUser, setFormUser] = useState({
    usrName: "",
    usrEmail: "",
    usrPassword: "",
  });

  const onChangeUser = (e) => {
    const { name, value } = e.target;
    setFormUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitUser = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3005/users/${id}`, formUser)
      .then((resp) => resp.data)
  };

  //* getUser
  const getUser = () => {
    axios.get(`http://localhost:3005/users/${id}`)
      .then((resp) => setFormUser(resp.data))
  };

  useEffect(() => {
    getUser();
  }, []);

  // *Checked
  const [checked, setChecked] = useState(empSystemAccess);

  const handleCheck = () => {
    setChecked((prevChecked) => !prevChecked);
    handleChange({ target: { name: "empSystemAccess", value: !checked } });
  };

  return { handleChange, submitEmployee, formData, onChangeUser, submitUser, formUser, setFormUser, handleCheck, checked };
};
