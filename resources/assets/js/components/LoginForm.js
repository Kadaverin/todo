import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';

export default  class LoginForm extends Component {

    constructor(props){
        super(props)
        this.handleLogin = this.handleLogin.bind(this);
    }

    componentDidMount() { 
      findDOMNode(this.refs.login).focus();
   }

    handleLogin(e) {
         const loginInput = findDOMNode(this.refs.login)
         const passwordInput = findDOMNode(this.refs.password);
         const login = loginInput.value.trim();
         const password = passwordInput.value.trim();
         e.preventDefault();

         if (!login) { 
                alert('Login is requared!');
                loginInput.focus();
                return 
            }    
         if (!password) { 
                alert('Password is requared!'); 
                passwordInput.focus();
                return 
            }  
         this.props.handleLoginFunc( { name : login , password : password} );
   }

    render () {
        return (
                <div className="login-form">
                <form onSubmit = {this.handleLogin} >
                    
                    <input
                        defaultValue=''
                        placeholder='Login'
                        ref='login'
                    /> <br/>

                    <input
                        defaultValue=''
                        type = 'password'
                        placeholder='Password'
                        ref='password'
                    /> <br/>

                    <button type='submit'>Login</button>
                </form>
                </div>
        )

    }
     
}