import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from "react";

function Taskcard({task,completeTask,updateTask}){
  const [newtaskname,setTaskname] = useState('')
  const [expanded, setExpanded] = useState(false);


    return(
        <div key={task.id}>
        <Accordion
          
          sx={{
            backgroundColor: '#DDE6ED',
            color: '#27374D', 
            fontFamily: 'Quicksand',
            fontSize:'20px',
            marginTop:'10px',
            marginBottom:'10px',            
          }}
          expanded={expanded}

        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon
              onClick={()=>{
                if(expanded===false){setExpanded(true)}else{setExpanded(false)}}
              } />}
            aria-controls="panel1-content"
            id="panel1-header"

          >
           
            <p class="taskheading">{task.taskname}</p>
            <dev className={`updatetaskcard`} id={`sub${task.id}`}>
            <TextField id="outlined-basic-input" label="New name of Task" variant="outlined" 
                         sx={{
                          marginLeft:5,                        
                          }}
                        onChange={e=> setTaskname(e.target.value)}
                        onClick={()=>setExpanded(true)}
            />
            </dev>

          </AccordionSummary>
          <AccordionDetails>
            <Stack direction="row" spacing={2}>
            <Button variant="contained"
                onClick={()=> {updateTask(task.id,newtaskname)}}
            >
              Update
            </Button>

            <Button variant="contained"
                onClick={()=> {completeTask(task.id)}}
            >
                Complete
            </Button>
            </Stack>
          </AccordionDetails>
        </Accordion>
      </div>
    )
}

export default Taskcard;