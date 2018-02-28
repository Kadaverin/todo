import React, {Component} from 'react';
import ProjectHeader from '../components/ProjectHeader';
import ProjectTasksList from './ProjectTasksList';
import { connect } from 'react-redux';
import	{bindActionCreators}	from	'redux';
import {fetch_users_todo} from '../actions/data';
import {addTask} from '../actions/task';
import {deleteProject , editProjectTitle} from '../actions/project';

export  class ToDoList extends Component {

    componentDidMount(){
        this.props.fetchUsersTodo();
    }

    render(){
        
        const projects  = this.props.state.projects;

        let todo = projects.map (project => {
            return (
                <li key = {project.id}> 

                    <ProjectHeader 
                        project = {project}
                        deleteProject = {this.props.deleteProject}
                        editProjectTitle = {this.props.editProjectTitle}
                        addTask = {this.props.addTask} 
                     /> 

                    <ProjectTasksList  
                        project = {project}           
                    />   
                </li>
            );
         }); 

        return(
            <div className = 'todo-list'>   
               <ul> {todo} </ul>
            </div>
        )
    }
}

function	mapStateToProps(state)	{
		return	{
				state:	    state
		}
}

function	mapDispatchToProps(dispatch)	{
		return	{
				fetchUsersTodo:	bindActionCreators(fetch_users_todo , dispatch),     
                addTask :       bindActionCreators(addTask , dispatch),
                deleteProject : bindActionCreators(deleteProject , dispatch),
                editProjectTitle : bindActionCreators(editProjectTitle , dispatch),
		}
}

export default connect ( mapStateToProps, mapDispatchToProps)(ToDoList)
