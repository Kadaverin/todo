import React, {Component} from 'react'; 
import {findDOMNode} from 'react-dom';

export default class EditProjectNameForm extends Component {

        constructor(props){
        super(props);
        this.handleUpdateTitle = this.handleUpdateTitle.bind(this);
        this.handleEnterDown = this.handleEnterDown.bind(this);
        this.cancelEditing = this.cancelEditing.bind(this);
    }

    componentDidMount() {
        this.newProjectTitleInput.focus();
    }

    handleUpdateTitle(){
        const newProjectTitle = this.newProjectTitleInput.value.trim();

        if(!newProjectTitle || newProjectTitle === this.props.project.name) {
            this.props.stopEditing();
        }
        this.props.handleEditProjectTitle(this.props.project.id , newProjectTitle);
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
            <div className = 'edit-project-name-form'>
                <input 
                    defaultValue={this.props.project.name}
                    ref = {(newProjectTitle) => {this.newProjectTitleInput = newProjectTitle}}
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