import Taskcard from './Taskcard';


function Taskcardarea({tasks,completeTask,updateTask}){

    return(
        <>
            {
                tasks.length > 0 ? tasks.map(task=>(
                    <Taskcard 
                        task={task}
                        completeTask={completeTask}
                        updateTask={updateTask}
                    />
                )) : (
                    <dev></dev>
                )
            }

        </>
    )
    
    
}

export default Taskcardarea