import React, {Component} from 'react'; 
import {findDOMNode} from 'react-dom';

export default class EditTitleForm extends Component {

        constructor(props){
        super(props);
        this.handleUpdateTitle = this.handleUpdateTitle.bind(this);
        this.cancelEditing = this.cancelEditing.bind(this);
    }

    componentDidMount(){
         //findDOMNode(this.refs.newProjectTitle).focus();
         this.newProjectTitleInput.focus();
    }

    handleUpdateTitle(e){
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

    render(){

        return(
            <div>
                <input 
                    defaultValue={this.props.project.name}
                    ref = {(newProjectTitle) => {this.newProjectTitleInput = newProjectTitle}}
                /> 
                 <span className = 'glyphicon glyphicon-ok' onClick = { this.handleUpdateTitle } > </span>
                 <span className = 'glyphicon glyphicon-remove' onClick = { this.cancelEditing } > </span>
            </div>
                
           
        )
    }
}