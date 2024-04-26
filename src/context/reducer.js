import {POST_AREA,POST_EMPLOYEE,POST_USER,SET_AREA,SET_EMPLOYEES,SET_USER,} from "./types";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_EMPLOYEES:
      return { ...state, employees: action.payload };
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_AREA:
      return { ...state, area: action.payload };
    case POST_EMPLOYEE:
      return { ...state, employee: action.payload };
    case POST_USER:
      return { ...state, user: action.payload };
    case POST_AREA:
      return { ...state, area: action.payload };
    default:
      return state;
  }
};

export default reducer;
