import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import AuthPage from './AuthPage';
import ToDoPage from './ToDoPage';
import { connect } from 'react-redux';
import	{	bindActionCreators	}	from	'redux'
import {register , login , autoLogin} from '../actions/user';

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
                            <AuthPage 
                                handleLogin = {this.props.loginFunc}
                                handleRegister = {this.props.registerFunc}
                                autoLoginFunc = {this.props.autoLogin}
                            />
                        :
                            <ToDoPage/>
                    }
                </div>
        )
    }
}

// Законектить AuthPage отдельно ! 
function	mapStateToProps(state)	{
		return	{
				user:	    state.user,
		}
}

function	mapDispatchToProps(dispatch)	{
		return	{
				registerFunc:	bindActionCreators(register , dispatch),
                loginFunc:	    bindActionCreators(login , dispatch) ,
                autoLogin :     bindActionCreators(autoLogin , dispatch)           
		}
}

export default connect ( mapStateToProps, mapDispatchToProps)(Main)
