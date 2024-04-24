import { SET_AREA, SET_EMPLOYEES, SET_USER } from "./types";

const reducer = (state, action) => {
    switch (action.type) {
      case SET_EMPLOYEES:
        return { ...state, employees: action.payload };
      case SET_USER:
        return { ...state, user: action.payload };
      case SET_AREA:
        return { ...state, area: action.payload };
      default:
        return state;
    }
  };

  export default reducer