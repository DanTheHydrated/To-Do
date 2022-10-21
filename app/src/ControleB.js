import React from "react";
import { useState } from "react";
import TaskSet from "./Input";

export default function ControleB(){
const [pages, setpages] = useState(0);

if (pages === 0 || pages ===1) {
    return(
        <>
        <TaskSet pages={pages} />
        <ul>
            <li>
                <button onClick={() => setpages(0)}>Not Finished</button>
                <button onClick={() => setpages(1)}>Finished</button>
                <button onClick={() => setpages(2)}>All</button>
            </li>
        </ul>
        </>
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
    </ul>
    )
}
};