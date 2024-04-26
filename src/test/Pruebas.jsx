// export const EmployeeProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(reducer, initialState);
//     const [id, setId] = useState(null);
  
//     const fetchGet = async () => {
//       const employeesResponse = await axios.get("http://localhost:3005/employees");
//       const employeesData = employeesResponse.data;
//       dispatch({ type: SET_EMPLOYEES, payload: employeesData });
//     };
  
//     const fetchGetId = async (id) => {
//       try {
//         const usersResponse = await axios.get(`http://localhost:3005/users/${id}`);
//         const usersData = usersResponse.data;
//         dispatch({ type: SET_USER, payload: usersData });
  
//         const areasResponse = await axios.get(`http://localhost:3005/areas/${id}`);
//         const areaData = areasResponse.data;
//         dispatch({ type: SET_AREA, payload: areaData });
//       } catch (error) {
//         console.error("Error fetching user or area:", error);
//       }
//     };
  
//     const fetchPut = async (endpoint, data) => {
//       try {
//         const response = await axios.put(endpoint, data);
//         return response.data;
//       } catch (error) {
//         console.error("Error updating data:", error);
//         throw error;
//       }
//     };
  
//     useEffect(() => {
//       fetchGet();
//       if (id !== null) {
//         fetchGetId(id);
//     }
// }, [id]);
// console.log(id)
  
//     return (
//       <EmployeeContext.Provider value={{ ...state, fetchGetId, fetchPut }}>
//         {children}
//       </EmployeeContext.Provider>
//     );
//   };
  