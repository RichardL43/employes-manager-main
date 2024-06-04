import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchPut = (employee) => {
  // * Employee
  const [formData, setFormData] = useState(employee);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitEmployee = () => {
    axios
      .put(`http://localhost:3005/employees/${employee.id}`, formData)
      .then((resp) => resp.data);
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

  const submitUser = () => {
    axios
      .put(`http://localhost:3005/users/${employee.id}`, formUser)
      .then((resp) => resp.data);
  };

  //* getUser
  const getUser = async () => {
      const response = await fetch(`http://localhost:3005/users/${employee.id}`);
      const data = await response.json();
      setFormUser(data);

  };
  

  useEffect(() => {
    // console.log(employee)
    if( employee.id !== undefined) {
      getUser();
    }
  }, []);

  // *Checked
  const [checked, setChecked] = useState(employee.empSystemAccess || false);

  const handleCheck = () => {
    const updatedChecked = !checked;
    setChecked(updatedChecked);
    handleChange({
      target: { name: "empSystemAccess", value: updatedChecked },
    });
  };

  return {
    handleChange,
    submitEmployee,
    formData,
    onChangeUser,
    submitUser,
    formUser,
    setFormUser,
    checked,
    handleCheck,
  };
};
