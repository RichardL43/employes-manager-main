import { useEffect, useState } from "react";

export const newAddEmployee = (uniqueId) => {
  const [formData, setFormData] = useState({
    id: uniqueId,
    empName: "",
    empFirstName: "",
    empLastName: "",
    empSystemAccess: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3005/employees", {
      method: "POST",
      body: JSON.stringify(formData),
    }).then((response) => response.json());
  };

  return {
    handleChange,
    handleSubmit,
    formData,
  };
};

