import React from 'react';

 const TaskIsDoneCheckBox = (props) => 
     <div className = 'task-is-done-check-box' >
        <input 
            type="checkbox" 
            onChange={ () => props.handleCheck(props.taskId) } 
            defaultChecked={props.taskIsDone}
         />
     </div>

export default TaskIsDoneCheckBox;