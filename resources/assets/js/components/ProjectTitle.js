import React , {Component} from 'react';
import ProjectEditIcons from './ProjectEditIcons';

export default class ProjectTitle extends Component {

    render(){
        return (
            <div className = 'project-title-with-edit-icons'>
                <div className = 'project-title' >
                    <span className = '	glyphicon '>  &#xe032; {this.props.project.name}  </span>       
                </div>    

                <ProjectEditIcons 
                            project = {this.props.project}
                            deleteProject = {this.props.deleteProject}
                            startEditing = {this.props.startEditing}
                />
            </div>
        )
    }
}