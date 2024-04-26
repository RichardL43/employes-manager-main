const initialState = (randomId) => ({
    employees: [],
    user: [],
    area: [],
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
    area: {
      id: randomId,
    }
});

export default initialState;