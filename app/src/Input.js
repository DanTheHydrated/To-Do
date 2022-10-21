import React from "react";
import {useState} from "react";

let newId = 1;

export default function TaskSet({pages}) {
    const [body, setBody] = useState('');
    const [active, setActive] = useState(1);
    const [task, setTask] = useState([]);
    // const Clicked = () => {
    //     setActive(0);
    // };

    function handleClick() {
        const where = 0; 
        const taskNext = [
            ...task.slice(0, where),
            { id: newId++, body: body, active: 1 },
            ...task.slice(where)
        ];
        setTask(taskNext);
        setBody('');
        setActive(1);
    };

    //Josh not me.
    function handleComplete(id) {
        let index = task.findIndex((x) => x.id === id);
        let newTasks = [...task];
    if(pages===0){
        newTasks[index].active = 0;
        setTask(newTasks);
        console.log(task);
    } else if (pages===1){
        newTasks[index].active = 1;
        setTask(newTasks);
        console.log(task);
    }
    };

    console.log(pages)
    let showing = task;
    if (pages===0){
        showing = task.filter((e)=> e.active===1);
    }
    else if (pages===1){
        showing = task.filter((e)=> e.active===0);
    };

    return (
        <>
            <h1>To-Do's:</h1>
            <input
                value={body}
                onChange={e => setBody(e.target.value)}
            />
            <button onClick={handleClick}>
                Set Task
            </button>
            <h5>{showing.length} :Tasks left</h5>
            <ul>
                {showing.map(e => (
                    <li key={e.id}>{e.body} <button onClick={() => handleComplete(e.id)}>compleate</button> </li>
                ))}
            </ul>
        </>
    );}




    // <DelButton key={e.id} active={e.active}/>



