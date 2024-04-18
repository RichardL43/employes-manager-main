import { useState } from "react";
import { useRandomId } from "./useRandomId";

export const useFetchPost = () => {
  const {randomId} = useRandomId();

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
    fetch("http://localhost:3005/employees", {
      method: "POST",
      body: JSON.stringify(employee),
    }).then((resp) => resp.json());
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
    fetch(`http://localhost:3005/users`, {
      method: "POST",
      body: JSON.stringify(user),
    }).then((resp) => resp.json());
  };
  
  // * Area
  const [area, setArea] = useState({
    id: randomId,
  });
  const areaSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3005/areas", {
      method: "POST",
      body: JSON.stringify(area),
    }).then((resp) => resp.json());
  };

  return { onChangeEmployee, employeeSubmit, employee, onChangeUser, userSubmit, user,areaSubmit , area};
};
