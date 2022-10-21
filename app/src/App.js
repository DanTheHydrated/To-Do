import React from "react"
import TaskSet from "./Input"
import ControleB from "./ControleB"



//created at + edited at times to come
export default function App({pages}) {
    return (
        <>
    <ControleB />
    </>
    )
};









// const tasksfirst = [
//     {id:0,
//     taskB:'',
//     active:0,
//     }
// ];

// let id = 0;

// export default function Among() {
//     const[task, setTask] = useState('');

//     const[page, setPage] = useState([]);

//     return(
//         <>
//             <h1>To-Do:</h1>
//             <input
//                 value={task}
//                 onChange={e => setTask(e.target.value)}
//             />
//             <button onClick={() => {
//                 setTask('');
//                 setPage([
//                     {id: id++, task: task },
//                     ...page
//                 ]);
//             }}>Add task</button>
//             <ul>
//                 {page.map(e => (
//                     <li key={e.id}>{e.task}</li>
//                 ))}
//             </ul>
//         </>
//     )
// };