import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { EmployeeIdContext } from "../table/MainTable";

export const useFetchGet = () => {
  const [employees, setEmployees] = useState([]);
  const [user, setUsers] = useState([]);
  const [area, setArea] = useState([])
  const [anEmployee, setAnEmployee] = useState();
  const contextId = useContext(EmployeeIdContext);
  const {id} = contextId || {};

  const fetchData = async () => {
    const employeesResponse = await fetch("http://localhost:3005/employees");
    const employeesData = await employeesResponse.json();
    setEmployees(employeesData);
 
    
 
  };

  const fetchDataId = async () => {
    const anEmployeeResponse = await fetch(`http://localhost:3005/employees/${id}`);
    const anEmployeeData = anEmployeeResponse.json();
    setAnEmployee(anEmployeeData);

    const usersResponse = await fetch(`http://localhost:3005/users/${id}`);
    const usersData = await usersResponse.json();
    setUsers(usersData);
    
    const areasResponse = await fetch(`http://localhost:3005/areas/${id}`);
    const areaData = await areasResponse.json();
    setArea(areaData);
  }
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if(id !== undefined) {
      fetchDataId()
    }
  }, []);


  return { employees, user, area, anEmployee};
};
