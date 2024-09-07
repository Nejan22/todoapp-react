import Addtaskbutton from './Addtaskbutton';
import './App.css';
import Todoheader from './Header';
import Taskcard from './Taskcard';
import NewTaskaddel from './Newtaskaddel';
import Axios from "axios";
import { useEffect, useState } from "react";
import Taskcardarea from './Taskcardarea';

function App() {

  const[tasks,setTasks] = useState([])
  let updateStatement = false;

  useEffect(()=>{
    getTasks();
  },[]);

  function getTasks(){
      Axios.get('http://localhost:3001/api/tasks')
        .then(res =>{
          setTasks(res.data?.response || []);
        })
        .catch(error =>{
          console.error('Axios Error :'+error);
        })
  }

  function addTask(taskname){
    newTaskAreaStatus(false)
    window.location.reload();
    const newid = getNewID(tasks);

    const payload = {
      id:newid,
      taskname:taskname,
    }

    Axios.post('http://localhost:3001/api/createtask',payload)
      .then(()=>{

      })
      .catch(error =>{
        console.error('Axios Error :'+error);
      })
  }

  function completeTask(id){
    const payload ={id:id}
    Axios.post('http://localhost:3001/api/completetask',payload)
      .then(()=>{
        window.location.reload();
      })
      .catch(error =>{
        console.error('Axios Error :'+error);
      })    
  }
  function updateTask(id,newtaskname){
    if(updateStatement==false){
      updateTaskSubShowUpdateBox(id);
      updateStatement=true;
    }
    else if(updateStatement==true){
      updateTaskSubSendUpdateMsg(id,newtaskname);
      updateTaskSubHideUpdateBox(id);
      updateStatement=false;
    }
    
  }

  function updateTaskSubShowUpdateBox(id){
    const updateTaskCard = document.getElementById(`sub${id}`);
    updateTaskCard.style.display="block";    
  }
  function updateTaskSubHideUpdateBox(id){
    const updateTaskCard = document.getElementById(`sub${id}`);
    updateTaskCard.style.display="none";    
  }
  function updateTaskSubSendUpdateMsg(id,newtaskname){

    const payload ={
      id:id,
      taskname:newtaskname  
    }
    Axios.post('http://localhost:3001/api/updatetask',payload)
      .then(()=>{
        window.location.reload();
      })
      .catch(error =>{
        console.error('Axios Error :'+error);
      })  

  }


  function newTaskAreaStatus(status){
    const newTaskCardEl = document.querySelector('.newtaskcard-element');
    const addTaskButton = document.querySelector('.add-task-button-area');
    if(status==true){
      newTaskCardEl.style.display="block";
      addTaskButton.style.display="none";
    }
    else if(status==false){
      newTaskCardEl.style.display="none";
      addTaskButton.style.display="block";
    }
  }

  function getNewID(tasks){
    const ids = tasks.map(task => task.id);
    ids.sort((a, b) => a - b);
    for (let i = 0; i < ids.length; i++) {
      if (ids[i] + 1 !== ids[i + 1]) {
        return ids[i] + 1;
      }
    }
    return ids[ids.length - 1] + 1;  
  }


  return (
    <div className="App">
      <Todoheader/>
      <NewTaskaddel
        addTask={addTask}
        newTaskAreaStatus={newTaskAreaStatus}
      />
      <Taskcardarea
        tasks={tasks}
        completeTask={completeTask}
        updateTask={updateTask}
      />
      <Addtaskbutton 
        newTaskAreaStatus={newTaskAreaStatus}
      />
    </div>
  );

}

export default App;
