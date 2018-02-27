import React , {Component} from 'react';
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';

export default class AuthContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            userWantsToLogin : true
        }
        this.changeFormToLoginForm = this.changeFormToLoginForm.bind(this);
        this.changeFormToRegisterForm = this.changeFormToRegisterForm.bind(this);
    }

    changeFormToLoginForm(e){
         e.preventDefault();
        this.setState ({  userWantsToLogin : true })
    }

     changeFormToRegisterForm(e){
        e.preventDefault();
        this.setState ({  userWantsToLogin : false })
    }
    
    render(){
        return (
            <div className = 'auth-page'>
                <center> 
                    <div className = 'switcher'>
                        <button onClick = {this.changeFormToLoginForm} id="login-btn">Sign in </button>
                        <button onClick = {this.changeFormToRegisterForm} id="register-btn" > Sign up</button>    
                    </div>
                    
                    {
                        this.state.userWantsToLogin 
                        ?
                            <LoginForm handleLoginFunc = {this.props.handleLogin} />            
                        :
                            <RegisterForm handleRegisterFunc = {this.props.handleRegister} /> 
                    }
                </center>
            </div>
        )
    }
}

