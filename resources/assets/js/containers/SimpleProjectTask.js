 import React , {Component} from 'react';
 import { connect } from 'react-redux';
 import	{ bindActionCreators }	from	'redux';
 import TaskTitle from '../components/TaskTitle';
 import EditTaskNameForm from '../components/EditTaskNameForm';
 import TaskIsDoneCheckBox from '../components/TaskIsDoneCheckBox';
 import {deleteTask , editTaskTitle , moveUpTask , moveDownTask , changeTaskStatus} from '../actions/task';
 
 export  class SimpleProjectTask extends Component {

     constructor(props){
        super(props);
        this.state = {
            taskNameIsEditing : false,
            taskIsActive : false
        }
        this.startStopEditingSwitcher = this.startStopEditingSwitcher.bind(this);
        this.makeTaskActive = this.makeTaskActive.bind(this);
        this.makeTaskNotActive = this.makeTaskNotActive.bind(this);
        
    }

    makeTaskActive(){
        if (!this.state.taskIsActive){
            this.setState( { taskIsActive : true })
        }
    }

    makeTaskNotActive(){
        if (this.state.taskIsActive){
              this.setState( { taskIsActive : false } );
        }
    }

    startStopEditingSwitcher(){
        this.setState({
            taskNameIsEditing : !this.state.taskNameIsEditing
        });
    }

    render(){
        return(
            <div className = 'simple-project-task'>
                 <TaskIsDoneCheckBox
                    taskIsDone = {this.props.task.isDone}
                    handleCheck = {this.props.changeTaskStatus}
                    taskId = {this.props.task.id}
                  />
              {
               !this.state.taskNameIsEditing 
               ?
                 <TaskTitle
                    handleChangeTasOrderForSercerSide = {this.props.handleChangeTasOrderForSercerSide}  
                    trackChangesOfTasksOrder = {this.props.trackChangesOfTasksOrder}
                    indexInTasksIdsArray = {this.props.indexInTasksIdsArray}
                    taskIsActive = {this.state.taskIsActive}
                    makeTaskActive = {this.makeTaskActive}
                    makeTaskNotActive = {this.makeTaskNotActive}
                    startEditing = {this.startStopEditingSwitcher}
                    moveUpTask = {this.props.moveUpTask}                    
                    moveDownTask = {this.props.moveDownTask}                    
                    deleteTask = {this.props.deleteTask} 
                    task = {this.props.task}  
                   
                  />
               :
                 <EditTaskNameForm
                     task = {this.props.task}
                     handleEditTaskTitle = {this.props.editTaskTitle}
                     replaceTask = {this.props.replaceTask}
                     stopEditing = {this.startStopEditingSwitcher}
                />
              }
            </div>
        )
    }

 }

function	mapDispatchToProps(dispatch)	{
		return	{  
                deleteTask :    bindActionCreators( deleteTask , dispatch ),
                editTaskTitle : bindActionCreators( editTaskTitle , dispatch ),
                moveUpTask : bindActionCreators( moveUpTask , dispatch ),
                moveDownTask : bindActionCreators( moveDownTask , dispatch ),
                changeTaskStatus : bindActionCreators( changeTaskStatus , dispatch ),
		}
}

export default connect ( null, mapDispatchToProps)(SimpleProjectTask)