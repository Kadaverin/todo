import React from 'react';

 const TaskIsDoneCheckBox = (props) => 
     <div style = {{float : 'left' , marginLeft : 0 , padding : 0}}>
        <input 
            type="checkbox" 
            onChange={ () => props.handleCheck(props.taskId) } 
            defaultChecked={props.taskIsDone}
         />
     </div>

export default TaskIsDoneCheckBox;