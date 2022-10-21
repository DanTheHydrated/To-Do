import React from "react";
import {useState} from "react";
import DelButton from "./DelButton";


let newId = 1;
let thisA = 1;
let taskFirst = [];

export default function TaskSet() {
    const [body, setBody] = useState('');
    const [task, setTask] = useState(taskFirst);

    function handleClick() {
        const where = 0; 
        const taskNext = [
            ...task.slice(0, where),
            { id: newId++, body: body, active: thisA++ },
            ...task.slice(where)
        ];
        setTask(taskNext);
        setBody('');
    }

    console.log(task);

    function Clicked() {
        setTask();
    };

    let showing = task.filter((e)=> e.active=1);


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
                    <li key={e.id}>{e.body} <button onClick={Clicked()} /> </li>
                ))}
            </ul>
        </>
    );}




    // <DelButton key={e.id} active={e.active}/>



