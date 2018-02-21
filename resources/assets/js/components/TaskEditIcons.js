import React, {Component} from 'react';

// Конектить отдельно от ToDoPage ?
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
            <div>
                {/*КАК_ТО СДЕЛАТЬ ПЕРЕДВИЖЕНИЕ ТАСОК ОЧЕНЬ ВАЖНЫЙ МОМЕНТ !!!!!!!!!!
                 this.props.replaceTask*/}
                 <span className = 'glyphicon glyphicon-sort'  style =  {this.props.taskIsActive ? { color : 'orange'} : {} } > </span>
                <span className = 'glyphicon glyphicon-pencil' onClick={this.handleStartEditing} > </span> 
                <span className = 'glyphicon glyphicon-trash' onClick = {this.handleDelete} > </span> 
            </div>

        )
    }
}