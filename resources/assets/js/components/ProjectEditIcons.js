import React, {Component} from 'react';

// Конектить отдельно от ToDoPage ?
export default class ProjectEditIcons extends Component {

    constructor(){
        super();
        this.handleStartEditing = this.handleStartEditing.bind(this);
        this.handleDelete = this.handleDelete.bind(this)
    }
    
    handleDelete(e){
        e.preventDefault();
        this.props.deleteProject(this.props.project.id);
    }

    handleStartEditing(e){
        e.preventDefault();
        this.props.startEditing();
    }

    render(){
        return(
            <div className = 'project-edit-icons'>
                 <span className = 	'glyphicon glyphicon-pencil' onClick={this.handleStartEditing} > </span> 
                 <span className = 	'glyphicon glyphicon-trash' onClick = {this.handleDelete} > </span> 
            </div>

        )
    }
}