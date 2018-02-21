import React , {Component} from 'react';
import TaskEditIcons from './TaskEditIcons';

export default class TaskTitle extends Component {

constructor(props){
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleClickOnTaskTitle = this.handleClickOnTaskTitle.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
}

   componentDidMount(){
       if (this.props.taskIsActive){
           this.activeTask.focus();
       }
   }
   
   componentWillMount(){
        document.addEventListener('click', this.handleClickOutside, false);
   }

   componentWillUnmount() {
         document.removeEventListener('click', this.handleClickOutside, false);
   }

    handleClickOutside(event) {
        if (( !this.activeTask || !this.activeTask.contains(event.target))) {
         //   console.log('OUTSIDE ' + this.props.task.name);
            this.props.makeTaskNotActive();
        }
       //  document.body.removeEventListener('keydown',this.cancelScrollingByArrowKeys)
    }

    handleClickOnTaskTitle(){
        this.activeTask.focus(); 
        this.props.makeTaskActive(); 
       // document.body.addEventListener('keydown' ,this.cancelScrollingByArrowKeys )
    }

    // cancelScrollingByArrowKeys(e){
    //         if (e.keyCode == 40 || e.keyCode == 38) // запретить скролл
    //         e.preventDefault();
    //         return false
    // }
    handleKeyDown(e){
      //  console.log('KEYDOWN  ' + e.keyCode + ' IN ' +  this.props.task.name);
        if (e.keyCode === 38) { 
            this.props.moveUpTask( this.props.indexInTasksIdsArray , this.props.task.id); 
            this.props.trackChangesOfTasksOrder();
            this.props.up();
            e.stopPropagation();
        }

        if (e.keyCode === 40) { 
            this.props.moveDownTask( this.props.indexInTasksIdsArray , this.props.task.id); 
            this.props.trackChangesOfTasksOrder();
            this.props.up();
            e.stopPropagation();
        }
    }

    render(){
     //   console.log('RENDER ' + this.props.task.name);
        return (
            <div>
                {/*ПОПРОВИТЬ ПЕРЕМЕЩЕНИЕ ТАСОК ЧЕРЕЗ КРАЙ МАССИВА !!!ТУТ ЧЕКБОКС КОТОРЫЙ БУДЕТ ОТОБРАЖАТЬ СТАТУС ТАСКИ . Если сделана - то галочка*/}
                <div className = 'TaskHeaderTitle'
                     tabIndex="-1"
                     ref = { (taskTitleDiv) => this.activeTask = taskTitleDiv } 
                     onClick = { this.handleClickOnTaskTitle }
                     onKeyDown = { this.handleKeyDown }       
                >
                   { this.props.task.name }        
                </div>    
                
                <TaskEditIcons 
                     task = {this.props.task}
                     deleteTask = {this.props.deleteTask}
                     startEditing = {this.props.startEditing}
                     replaceTask = {this.props.replaceTask}
                     taskIsActive = {this.props.taskIsActive}
                />
         </div>
        )
    }
}