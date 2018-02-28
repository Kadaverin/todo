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
            this.props.makeTaskNotActive();
        }
    }

    handleClickOnTaskTitle(){
        this.activeTask.focus(); 
        this.props.makeTaskActive(); 
    }

    handleKeyDown(e){
        if (e.keyCode === 38) { 
            e.preventDefault()
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();

            this.props.moveUpTask( this.props.indexInTasksIdsArray , this.props.task.id); 
            this.props.trackChangesOfTasksOrder();
            this.props. handleChangeTasOrderForSercerSide();
        }

        if (e.keyCode === 40) { 
            e.preventDefault()
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();

            this.props.moveDownTask( this.props.indexInTasksIdsArray , this.props.task.id); 
            this.props.trackChangesOfTasksOrder();
            this.props. handleChangeTasOrderForSercerSide();
        }
    }

    render(){
        return (
            <div className = 'task-title-with-edit-icons'>
                <div className = 'task-title'
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