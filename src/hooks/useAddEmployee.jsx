import { useEffect, useState } from "react";
import { useRandomId } from "../context/Provider";

export const useAddEmployee = () => {
  const [formData, setFormData] = useState({
    id: "",
    empName: "",
    empFirstName: "",
    empLastName: "",
    empSystemAccess: false,
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({...prevData,[name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3005/employees", {
      method: "POST",
      body: JSON.stringify(formData),
    }).then((response) => response.json());
    // handleClose();
  };

  return {
    handleChange,
    handleSubmit,
    formData,
  };
};
