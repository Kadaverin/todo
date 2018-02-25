import React, {Component} from 'react'; 
import ProjectEditIcons from './ProjectEditIcons';
import AddTaskForm from './AddTaskForm';
import EditTitleForm from './EditTitleForm';
import ProjectTitle from './ProjectTitle';

export default class ProjectHeader extends Component {

    constructor(){
        super();
        this.state = {
            titleIsEditing : false
        }
        this.startStopEditingSwitcher = this.startStopEditingSwitcher.bind(this);
    }

    startStopEditingSwitcher(){
        this.setState({
            titleIsEditing : !this.state.titleIsEditing
        });
    }

    render(){       
        return(
            <div className = 'project-header' >
              {
                !this.state.titleIsEditing 
                ?   
                 <ProjectTitle
                    project = {this.props.project}
                    deleteProject = {this.props.deleteProject}
                    startEditing = {this.startStopEditingSwitcher}
                  />
                : 
                 <EditTitleForm 
                    project = {this.props.project}
                    handleEditProjectTitle = {this.props.editProjectTitle}
                    stopEditing = {this.startStopEditingSwitcher}
                />
             }
                {/*<AddTaskForm 
                    projectId = {this.props.project.id}
                    addTask = {this.props.addTask} 
                />*/}
            </div>
        )
    }

}