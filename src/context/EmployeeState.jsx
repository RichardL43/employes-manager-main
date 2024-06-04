import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { EmployeeContext } from "./EmployeeContext";
import { POST_AREA, POST_EMPLOYEE, POST_USER, PUT_EMPLOYEE, PUT_USER, SET_AREA, SET_EMPLOYEES, SET_USER } from "./types";
import { useRandomId } from "../hooks/useRandomId";
import { reductor } from "./reducer";
import { initialState } from "./initialState";

export const EmployeeProvider = ({ children }) => {
  const { randomId } = useRandomId();
  const [state, dispatch] = useReducer(reductor, initialState(randomId));
  const [id, setId] = useState(null);

  const fetchGet = async () => {
    try {
      const employeesResponse = await axios.get("http://localhost:3005/employees");
      const employeesData = employeesResponse.data;
      dispatch({ type: SET_EMPLOYEES, payload: employeesData });
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const fetchGetId = async (id) => {
    try {
      const usersResponse = await axios.get(`http://localhost:3005/users/${id}`);
      const usersData = usersResponse.data;
      dispatch({ type: SET_USER, payload: usersData });
    } catch (error) {
      console.error(`Error fetching user or area with id ${id}:`, error);
    }
  };

  const employeeSubmitPost = async (employee) => {
    try {
      const { data } = await axios.post("http://localhost:3005/employees", employee);
      dispatch({ type: POST_EMPLOYEE, payload: data });
    } catch (error) {
      console.error("Error posting employee:", error);
    }
  };

  const userSubmitPost = async (user) => {
    try {
      const { data } = await axios.post("http://localhost:3005/users", user);
      dispatch({ type: POST_USER, payload: data });
    } catch (error) {
      console.error("Error posting user:", error);
    }
  };

  const areaSubmitPost = async (area) => {
    try {
      const { data } = await axios.post("http://localhost:3005/areas", area);
      dispatch({ type: POST_AREA, payload: data });
    } catch (error) {
      console.error("Error posting area:", error);
    }
  };

  const submitEmployee = async (id, formData) => {
    try {
      const { data } = await axios.put(`http://localhost:3005/employees/${id}`, formData);
      dispatch({ type: PUT_EMPLOYEE, payload: data });
    } catch (error) {
      console.error(`Error updating employee with id ${id}:`, error);
    }
  };

  const submitUser = async (id, formUser) => {
    try {
      const { data } = await axios.put(`http://localhost:3005/users/${id}`, formUser);
      dispatch({ type: PUT_USER, payload: data });
    } catch (error) {
      console.error(`Error updating user with id ${id}:`, error);
    }
  };

  useEffect(() => {
    fetchGet();
    if (id !== null) {
      fetchGetId(id);
    }
  }, [id]);

  const value = {
    ...state,
    fetchGetId,
    submitEmployee,
    submitUser,
    employeeSubmitPost,
    userSubmitPost,
    areaSubmitPost,
  };

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
};
