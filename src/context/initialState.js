export const initialState = (randomId) => ({
    employees: [],
    userGet: [],
    areaGet: [],
    employee: {
      id: randomId,
      empName: "",
      empFirstName: "",
      empLastName: "",
      empSystemAccess: false,
    },
    user: {
      id: randomId,
      usrEmail: "",
      usrName: "",
      usrPassword: "",
    },
//     area: {
//       id: randomId
// }
});
