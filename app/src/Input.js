import React from "react";
import {useState} from "react";



let newId = 1;
let taskFirst = [];
let showing = [];

export default function TaskSet({pages}) {
    const [body, setBody] = useState('');
    const [active, setActive] = useState(1);
    const [task, setTask] = useState(taskFirst);
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
        console.log(task);
    };

    console.log(pages)
    if (pages===0){
        showing = task.filter((e)=> e.active===1);
    }
    else if (pages===1){
        showing = task.filter((e)=> e.active===0);
    }
    else if (pages===2){
        showing = task
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
                    <li key={e.id}>{e.body} <button onClick={() => e.active=0}>compleate</button> </li>
                ))}
            </ul>
        </>
    );}




    // <DelButton key={e.id} active={e.active}/>



