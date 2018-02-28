import React, {Component} from 'react';

export default class TaskEditIcons extends Component {

    constructor(props){
        super(props);
        this.handleStartEditing = this.handleStartEditing.bind(this);
        this.handleDelete = this.handleDelete.bind(this)
    }
    
    handleDelete(e){
        e.preventDefault();
        this.props.deleteTask(this.props.task.id);
    }

    handleStartEditing(e){
        e.preventDefault();
        this.props.startEditing();
    }

    render(){
        return(
            <div className = 'task-edit-icons'>
                <span className = 'glyphicon glyphicon-trash' onClick = {this.handleDelete} > </span> 
                 <span className = 'glyphicon glyphicon-pencil' onClick={this.handleStartEditing} > </span> 
                 <span className = 'glyphicon glyphicon-sort'  style =  {this.props.taskIsActive ? { color : 'orange'} : {} } > </span>
            </div>

        )
    }
}