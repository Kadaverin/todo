import React, {Component} from 'react'; 
import {findDOMNode} from 'react-dom';

export default class EditTaskNameForm extends Component {

        constructor(props){
        super(props);
        this.handleUpdateTitle = this.handleUpdateTitle.bind(this);
        this.handleEnterDown = this.handleEnterDown.bind(this);
        this.cancelEditing = this.cancelEditing.bind(this);
    }

    componentDidMount(){
        this.newTaskTitleInput.focus();
    }

    handleUpdateTitle(){
        const newTaskTitle = this.newTaskTitleInput.value.trim();

        if(!newTaskTitle || newTaskTitle === this.props.task.title) {
            this.props.stopEditing();
        }
        this.props.handleEditTaskTitle(this.props.task.id , newTaskTitle)
        this.props.stopEditing();
    }

    cancelEditing(e){
        e.preventDefault();
        this.props.stopEditing();
    }

    handleEnterDown(e){ 
        if (e.keyCode == 13) this.handleUpdateTitle();
    }

    render(){

        return(
            <div className = 'edit-task-name-form'>
                <input 
                    defaultValue={this.props.task.name}
                    ref = { (newTaskTitle) => this.newTaskTitleInput = newTaskTitle }
                    onKeyDown = {this.handleEnterDown}
                />
               <div className = 'ok-cancel-toolbox'>
                 <span className = 'glyphicon glyphicon-ok' onClick = { this.handleUpdateTitle } > </span>
                 <span className = 'glyphicon glyphicon-remove' onClick = { this.cancelEditing } > </span>
               </div>
            </div>
                
           
        )
    }
}