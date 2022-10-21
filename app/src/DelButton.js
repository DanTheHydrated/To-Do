

export default function DelButton({task, setTask, thisId}) {

    const newTask = [...task]

    function Clicked() {
        const newId = newTask.map((i)=> {
            if(i === thisId) {
                return {
                    ...thisId,
                    active: 0,
                };
            }
        });
        setTask(newId);
    };

    
    return(
        <button onClick = {Clicked()}>
            Delete
        </button>
    );
};
    

//     // setTask(props.active===0)