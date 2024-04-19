import React, { useContext } from 'react'
import { EmployeeIdContext } from '../table/MainTable';

export const useFetchDelete = () => {
    
    const ID = useContext(EmployeeIdContext);
    const {id} = ID || {};

    const deleteEmployee = () => {
        fetch(`http://localhost:3005/employees/${id}`, {
          method: 'DELETE'
        });
      };
      
      const deleteUser = () => {
        fetch(`http://localhost:3005/users/${id}`, {
          method: 'DELETE'
        });
      };
      
      const deleteArea = () => {
        fetch(`http://localhost:3005/areas/${id}`, {
          method: 'DELETE'
        });
      };
  return {deleteEmployee, deleteUser, deleteArea}
}
