import { useEffect, useState } from "react";

export const useFetchGet = () => {
  const [employees, setEmployees] = useState([]);
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const employeesResponse = await fetch("http://localhost:3005/employees");
    const employeesData = await employeesResponse.json();
    setEmployees(employeesData);

    const usersResponse = await fetch("http://localhost:3005/users");
    const usersData = await usersResponse.json();
    setUsers(usersData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { employees, users };
};
