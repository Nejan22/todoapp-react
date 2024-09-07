import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function Addtaskbutton({newTaskAreaStatus}){
    return(
        <dev class="add-task-button-area">
        <Fab color="primary" aria-label="add" className="add-button-el" onClick={()=>newTaskAreaStatus(true)}>
            <AddIcon></AddIcon>
        </Fab>
        </dev>
    )
};

export default Addtaskbutton;