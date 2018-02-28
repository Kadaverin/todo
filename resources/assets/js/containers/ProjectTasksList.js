import React, {Component} from 'react';
import { connect } from 'react-redux';
import	{ bindActionCreators }	from	'redux';
import SimpleProjectTask from './SimpleProjectTask';
import {addTask , updateTasksPriority} from '../actions/task';
import AddTaskForm from '../components/AddTaskForm';
import debounce from '../helpers/data/debounce';
import request from '../helpers/requests/requestPromiseFunc';


export class ProjectTasksList extends Component {

    constructor(props){
        super(props);
        this.tasksOrderIsChanged = false;
        this.trackChangesOfTasksOrder = this.trackChangesOfTasksOrder.bind(this);
        this.handleChangeTasOrderForSercerSide = this.handleChangeTasOrderForSercerSide.bind(this);
        this.sendTaskOrderChengeToSercer = debounce( this.sendTaskOrderChengeToSercer , 500)
    }

     sendTaskOrderChengeToSercer()  {
            let  tasksIds  = this.props.projectsTasksIds[this.props.project.id]

            let newTaskPriority = tasksIds.map( (taskId , taskIndex) =>{
               return { id : taskId , priority : taskIndex };
            })
                this.props.updateTasksPriority(newTaskPriority);
             } 
             
    trackChangesOfTasksOrder(){
        this.tasksOrderIsChanged = true;
    }

    handleChangeTasOrderForSercerSide(){
        if (this.tasksOrderIsChanged){ this.sendTaskOrderChengeToSercer() ;}
    } 

    render(){
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
                                    task = {task} 
                                    indexInTasksIdsArray = {index}
                                    allTasksIdsOfCurrentProject = {tasksIds}
                                    trackChangesOfTasksOrder = {this.trackChangesOfTasksOrder}
                                    handleChangeTasOrderForSercerSide = {this.handleChangeTasOrderForSercerSide}
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
                addTask :       bindActionCreators(addTask , dispatch),
                updateTasksPriority : bindActionCreators(updateTasksPriority , dispatch),
		}
}

export default connect ( mapStateToProps, mapDispatchToProps)(ProjectTasksList)
