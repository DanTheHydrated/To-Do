import React from "react";
import { useState } from "react";
import TaskSet from "./Input";

export default function ControleB(){
const [pages, setpages] = useState()
if (pages === 0 || pages ===1) {
    return(
        <ul>
            <li>
                <button onClick={() => setpages(0)}>Not Finished</button>
                <button onClick={() => setpages(1)}>All</button>
                <button onClick={() => setpages(2)}>Finished</button>
            </li>
            <TaskSet pages={pages} />
        </ul>
    )
} 
else {
    return (
        <ul>
        <li>
            <button onClick={() => setpages(0)}>Not Finished</button>
            <button onClick={() => setpages(1)}>All</button>
            <button onClick={() => setpages(2)}>Finished</button>
        </li>
        <TaskSet pages={pages} />
    </ul>
    )
}
};