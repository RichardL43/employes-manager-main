// import { useReducer } from "react";
// import axios from "axios";
// import { useRandomId } from "./useRandomId";

// const ACTIONS = {
//  POST_EMPLOYEE: "POST_AREA",
//  POST_USER: "POST_USER",
//  POST_AREA: "POST_AREA"
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case ACTIONS.POST_EMPLOYEE:
//       return { ...state, employee: action.payload };
//     case ACTIONS.POST_USER:
//       return { ...state, user: action.payload };
//     case ACTIONS.POST_AREA:
//       return { ...state, area: action.payload };
//     default:
//       return state;
//   }
// };

// export const useFetchPost = () => {
//   const { randomId } = useRandomId();

//   const [state, dispatch] = useReducer(reducer, {
//     employee: {
//       id: randomId,
//       empName: "",
//       empFirstName: "",
//       empLastName: "",
//       empSystemAccess: false,
//     },
//     user: {
//       id: randomId,
//       usrEmail: "",
//       usrName: "",
//       usrPassword: "",
//     },
//     area: {
//       id: randomId,
//     },
//   });

//   const onChangeEmployee = (e) => {
//     const { name, value } = e.target;
//     dispatch({ type: ACTIONS.POST_EMPLOYEE, payload: { ...state.employee, [name]: value } });
//   };

//   const onChangeUser = (e) => {
//     const { name, value } = e.target;
//     dispatch({ type: ACTIONS.POST_USER, payload: { ...state.user, [name]: value } });
//   };

//   const employeeSubmit = (e) => {
//     e.preventDefault();
//     axios.post("http://localhost:3005/employees", state.employee)
//       .then((resp) => resp.data);
//   };

//   const userSubmit = (e) => {
//     e.preventDefault();
//     axios.post("http://localhost:3005/users", state.user)
//       .then((resp) => resp.data);
//   };

//   const areaSubmit = (e) => {
//     e.preventDefault();
//     axios.post("http://localhost:3005/areas", state.area)
//       .then((resp) => resp.data);
//   };

//   return { onChangeEmployee, employeeSubmit, employee: state.employee, onChangeUser, userSubmit, user: state.user, areaSubmit, area: state.area };
// };
