import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import { connect } from 'react-redux';
// Коннектить отдельно ???
export default class AddTaskForm extends Component{

    constructor(props){
        super(props);
        this.handleAddTask = this.handleAddTask.bind(this);
    }

    handleAddTask(e){
        e.preventDefault();
        const taskNameInput = findDOMNode(this.refs.taskName);
        const taskName = taskNameInput.value.trim();
        if(!taskName) return;

        //диспатчим экшн this.props.addTask(this.props.projectId) 
        this.props.addTask(taskName , this.props.projectId , this.props.newTaskIdsIndex) ;
        taskNameInput.value = '';
    }

    render(){
        return(
            <div className = 'add-task-form'>
                <form  onSubmit = {this.handleAddTask}>
                <input 
                    defaultValue=''
                    ref = 'taskName'
                />
                 <button type='submit'>Add task</button>
            </form>
            </div>
            
        )
    }
}
