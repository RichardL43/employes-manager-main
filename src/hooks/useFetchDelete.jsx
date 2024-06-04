import { useContext } from 'react';
import axios from 'axios';
import { EmployeeIdContext } from '../table/MainTable';

export const useFetchDelete = (id) => {

  const deleteEmployee = () => {
    axios.delete(`http://localhost:3005/employees/${id}`)
  };

  const deleteUser = () => {
    axios.delete(`http://localhost:3005/users/${id}`)
  };

  const deleteArea = () => {
    axios.delete(`http://localhost:3005/areas/${id}`)
  };

  return { deleteEmployee, deleteUser, deleteArea };
};
