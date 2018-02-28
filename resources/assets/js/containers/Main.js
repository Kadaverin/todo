import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import AuthPage from './AuthPage';
import ToDoPage from '../components/ToDoPage';
import { connect } from 'react-redux';
import	{ bindActionCreators }	from	'redux'
import {autoLogin} from '../actions/user';

 class Main extends Component{

   componentWillMount(){
         if (localStorage.getItem('token') !== null) {
             this.props.autoLogin();
         }
    }

    render(){
        const isAuthorized = this.props.user.isAuth;
        return (
                <div className = 'main'>
                    {
                        !isAuthorized 
                        ?
                            <AuthPage/>
                        :
                            <ToDoPage/>
                    }
                </div>
        )
    }
}


function	mapStateToProps(state)	{
		return	{
				user:	    state.user,
		}
}

function	mapDispatchToProps(dispatch)	{
		return	{
                autoLogin :     bindActionCreators(autoLogin , dispatch)           
		}
}

export default connect (mapStateToProps , mapDispatchToProps)(Main)
