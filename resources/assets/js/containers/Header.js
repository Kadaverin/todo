import React, {Component} from 'react';
import AddProjectForm from '../components/AddProjectForm';
import { connect } from 'react-redux';
import	{	bindActionCreators	}	from	'redux';
import {addProject} from '../actions/project';
import {logout} from '../actions/user';

export  class Header extends Component{

    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

 handleLogout(){
     localStorage.removeItem('token');
     this.props.logout();
}

    render(){

        return(
            <div className = 'ToDoHeader'>
                <button onClick = {this.handleLogout} id ='logout-btn'>  logout </button>
                <AddProjectForm addProject = {this.props.addProject}/>;
            </div>
        )
    }
}

function	mapDispatchToProps(dispatch)	{
		return	{
				addProject:	bindActionCreators(addProject , dispatch),
                logout : bindActionCreators(logout , dispatch)
                
		}
}

export default connect ( null, mapDispatchToProps)(Header)









