import React, { useContext, useEffect, useState } from "react";
import { EmployeeIdContext } from "../table/MainTable";

export const useFetchPut = () => {
    const employeeContext = useContext(EmployeeIdContext);
    const {employee, id, empSystemAccess} = employeeContext || {};

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
      fetch(`http://localhost:3005/employees/${id}`, {
        method: "PUT",
        body: JSON.stringify(formData),
      }).then((resp) => resp.json());
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
    return fetch(`http://localhost:3005/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(formUser),
    })
      .then((resp) => resp.json())
      .catch((error) => console.error("Error updating user:", error));
  };
//* getUser
  const getUser = () => {
    fetch(`http://localhost:3005/users/${id}`)
      .then((resp) => resp.json())
      .then((data) => setFormUser(data))
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


  return {handleChange, submitEmployee, formData, onChangeUser, submitUser, formUser, setFormUser, handleCheck, checked}
};
