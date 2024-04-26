import { useEffect, useReducer, useState } from "react";
import reducer from "../context/reducer";
import axios from "axios";
import { EmployeeContext } from "./EmployeeContext";
import {POST_EMPLOYEE,POST_USER,SET_AREA,SET_EMPLOYEES,SET_USER,} from "./types";
import { useRandomId } from "../hooks/useRandomId";
import initialState from "./initialState";

export const EmployeeProvider = ({ children }) => {
  const { randomId } = useRandomId();

  const [state, dispatch] = useReducer(reducer, initialState(randomId));
  
  const [id, setId] = useState(null);

  // !!!!! GET !!!!!!!

  const fetchGet = async () => {
    try {
      const employeesResponse = await axios.get(
        "http://localhost:3005/employees"
      );
      const employeesData = employeesResponse.data;
      dispatch({ type: SET_EMPLOYEES, payload: employeesData });
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const fetchGetId = async (id) => {
    try {
      const usersResponse = await axios.get(
        `http://localhost:3005/users/${id}`
      );
      const usersData = usersResponse.data;
      dispatch({ type: SET_USER, payload: usersData });

      const areasResponse = await axios.get(
        `http://localhost:3005/areas/${id}`
      );
      const areaData = areasResponse.data;
      dispatch({ type: SET_AREA, payload: areaData });
    } catch (error) {
      console.error("Error fetching user or area:", error);
    }
  };

  // !!!!!! POST !!!!!!

  const onChangeEmployee = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: POST_EMPLOYEE,
      payload: { ...state.employee, [name]: value },
    });
  };

  const onChangeUser = (e) => {
    const { name, value } = e.target;
    dispatch({ type: POST_USER, payload: { ...state.user, [name]: value } });
  };

  const employeeSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3005/employees", state.employee)
      .then((resp) => resp.data);
  };

  const userSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3005/users", state.user)
      .then((resp) => resp.data);
  };

  const areaSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3005/areas", state.area)
      .then((resp) => resp.data);
  };

  // !!!!!! PUT !!!!!!

  useEffect(() => {
    fetchGet();
    if (id !== null) {
      fetchGetId();
    }
  }, [id]);

  return (
    <EmployeeContext.Provider
      value={{
        ...state,
        fetchGetId,
        onChangeEmployee,
        onChangeUser,
        employeeSubmit,
        userSubmit,
        areaSubmit,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
