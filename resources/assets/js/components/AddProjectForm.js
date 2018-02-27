import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

export default class AddProject extends Component{

    constructor(props){
        super(props);
        this.handleAddProject = this.handleAddProject.bind(this);
    }

    handleAddProject(e){
        e.preventDefault();
        const projectNameInput = findDOMNode(this.refs.projectName);
        const projectName = projectNameInput.value.trim();
        if(!projectName) return;

        this.props.addProject( projectName )
        projectNameInput.value = '';
    }

    render(){

        return(
            <div className = 'add-project-form'>
                <form  onSubmit = {this.handleAddProject}>
                <input 
                    defaultValue=''
                    ref = 'projectName'
                />
                <button type='submit'> Add project</button>
              </form>
            </div>
            
           
        )
    }
}

