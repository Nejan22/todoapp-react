import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";
function NewTaskaddel({addTask,newTaskAreaStatus}){
    const [newtask,setTask] = useState('')

    return(
        <dev class="newtaskcard-element">
            <TextField id="outlined-basic-input" label="Add New Task" variant="outlined" className="insidenewtaskcard" 
                      sx={{
                        marginBottom: 5,
                        marginRight:5,
                        width:'80%',
                        
                        '& .MuiTextField-root': {
                          margin: '20px', 
                          '& fieldset': {
                            borderColor: 'blue', // Change the border color of the outline
                          },
                          '&:hover fieldset': {
                            borderColor: 'green', // Change the border color on hover
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'red', // Change the border color when focused
                          }
                        }}}
                        onChange={e=> setTask(e.target.value)}
            />
                    <Fab color="primary" aria-label="add" className="add-button-el2"
                         onClick={()=>
                            addTask(newtask)
                        }
                         >
                        <AddIcon></AddIcon>
                    </Fab>
        </dev>
    )
};

export default NewTaskaddel;