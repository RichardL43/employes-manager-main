import { useContext, useEffect, useReducer, useState } from "react"
import reducer from "../context/reducer"
import axios from "axios";
import { EmployeeContext } from "./EmployeeContext";
import { SET_AREA, SET_EMPLOYEES, SET_USER } from "./types";

const initialState = {
  employees: [],
  user: [],
  area: []
}

export const EmployeeProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [id, setId] = useState(null); 
  
    const fetchData = async () => {
      const employeesResponse = await axios.get("http://localhost:3005/employees")
      const employeesData = employeesResponse.data;
      dispatch({type: SET_EMPLOYEES , payload: employeesData}) 
    }
  
    const fetchDataId = async (id) => {
      try {
        const usersResponse = await axios.get(`http://localhost:3005/users/${id}`);
        const usersData = usersResponse.data;
        dispatch({ type: SET_USER, payload: usersData });
  
        const areasResponse = await axios.get(`http://localhost:3005/areas/${id}`);
        const areaData = areasResponse.data;
        dispatch({ type: SET_AREA, payload: areaData });
      } catch (error) {
        console.error("Error fetching user or area:", error);
      }
    };
  
    useEffect(() => {
      fetchData();
      if (id !== null) {
        fetchDataId(); 
      }
    }, [id]);
  
    return (
      <EmployeeContext.Provider value={{...state, fetchDataId}}>
        {children}
      </EmployeeContext.Provider>
    );
  }
  