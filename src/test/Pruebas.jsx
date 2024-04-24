// import React, { useReducer, useRef } from 'react'

// const Pruebas = () => {

//     const inputRef = useRef();
//     const ADD_TASK = 'ADD_TASK'
//     const REMOVE_TASK = 'REMOVE_TASK'
//     const [tasks , dispatch] = useReducer((state = [] , action) => {
//         switch (action.type) {
//             case ADD_TASK: {
//                 return [
//                     ...state,
//                     {
//                         id: state.length,
//                         title: action.title
//                     }
//                 ]
//             }
//             case REMOVE_TASK: {
//                 return state.filter((task,index) => index !== action.index )             
//             }
//             default: {
//                 return state;
//             }
//         }
//     });

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch({
//             type: ADD_TASK,
//             title: inputRef.current.value
//         });
//     }

//   return (
//     <div>
//         <h1>Lista de Tareas</h1>
//         <form onSubmit={handleSubmit}>
//             <label>Tarea</label>
//             <input type="text" name='title' ref={inputRef}/>
//             <input type="submit" value="Enviar"/>
//         </form>
//         <div className='tasks'>
//             {tasks && tasks.map((task, index) => (
//                 <div className='task' key={index}>
//                     <p>{task.title}</p>
//                     <button onClick={() => dispatch({type: REMOVE_TASK, index })}>Borrar</button>
//                 </div>
//             ))}
//         </div>
//     </div>
//   )
// }

// export default Pruebas
