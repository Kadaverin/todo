import React, {Component} from 'react';
import SimpleProjectTask from '../containers/SimpleProjectTask';
import { connect } from 'react-redux';
import	{	bindActionCreators	}	from	'redux';
import {deleteTask , editTaskTitle , moveUpTask , moveDownTask , addTask, changeTaskStatus} from '../actions/task';
import AddTaskForm from './AddTaskForm';
import debounce from '../helpers/data/debounce';
import request from '../helpers/requests/requestPromiseFunc';


export class ProjectTasksList extends Component {

    constructor(props){
        super(props);
        this.tasksOrderIsChanged = false;
        this.trackChangesOfTasksOrder = this.trackChangesOfTasksOrder.bind(this);
        this.up = this.up.bind(this);

         this.f = debounce( this.f , 500)
    }

    // handleMoveTask(currentTaskPriority , targetTaskId){
        

    // }

     f()  {
            let  tasksIds  = this.props.projectsTasksIds[this.props.project.id]

            let taskPriority = tasksIds.map( (taskId , taskIndex) =>{
               return { id : taskId , priority : taskIndex };
            })
                
                request('PUT','api/update_tasks_list' , JSON.stringify(taskPriority)).then(
                    ok =>{
                        console.log('ok')
                    },
                    notOk =>{
                        console.log('woops')
                    }
                )
             } 
             
    trackChangesOfTasksOrder(){
        this.tasksOrderIsChanged = true;
        console.log("TRACKING " + this.tasksOrderIsChanged)
    }

    up(){

        

        if (this.tasksOrderIsChanged)
          { 
              console.log('UP ')

             this.f();
        }
    }
  
 // updateTasksOrderOnDatabase()

    

    render(){
        console.log('RENDER');
        let  tasksIds  = this.props.projectsTasksIds[this.props.project.id];

        return(
            <div>
                <AddTaskForm 
                    projectId = {this.props.project.id}
                    addTask = {this.props.addTask} 
                    newTaskIdsIndex = { tasksIds ? tasksIds.length : 0 }
                />                
                { 
                tasksIds
                ?
                 <ul className = 'project-tasks-list'>
                    {tasksIds.map((taskId , index) =>{
                        let task = this.props.tasksById[ taskId ];
                        return (
                            <li key = {task.id}>   
                                <SimpleProjectTask  
                                    indexInTasksIdsArray = {index}
                                    moveUpTask = {this.props.moveUpTask} 
                                    moveDownTask = {this.props.moveDownTask} 
                                    deleteTask = {this.props.deleteTask}       
                                    editTaskTitle = {this.props.editTaskTitle}
                                    replaceTask = {this.props.replaceTask} 
                                    allTasksIdsOfCurrentProject = {tasksIds}
                                    changeTaskStatus = {this.props.changeTaskStatus}
                                    trackChangesOfTasksOrder = {this.trackChangesOfTasksOrder}
                                    task = {task}

                                    up = {this.up}
                                />
                            </li>
                        )
                    })}
                 </ul>
                : 
                <div>
                </div>
                }
            </div>
        )
    }
}

function	mapStateToProps(state)	{
		return	{
				tasksById:	    state.tasks.tasksById,
                projectsTasksIds : state.tasks.projectsTasksIds
		}
}

function	mapDispatchToProps(dispatch)	{
		return	{  
                deleteTask :    bindActionCreators( deleteTask , dispatch ),
                editTaskTitle : bindActionCreators( editTaskTitle , dispatch ),
                moveUpTask : bindActionCreators( moveUpTask , dispatch ),
                moveDownTask : bindActionCreators( moveDownTask , dispatch ),
                changeTaskStatus : bindActionCreators( changeTaskStatus , dispatch ),

                addTask :       bindActionCreators(addTask , dispatch),
		}
}

export default connect ( mapStateToProps, mapDispatchToProps)(ProjectTasksList)
