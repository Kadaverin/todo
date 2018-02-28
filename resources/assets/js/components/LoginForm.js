import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import  FormErrors  from './FormErrors';

export default  class LoginForm extends Component {

    constructor(props){
        super(props)
        this.handleLogin = this.handleLogin.bind(this);
       this.handleUserInput = this.handleUserInput.bind(this);
        this.state ={
                    login: '',
                    password: '',
                    formErrors: {login: '', password: ''},
                    emailValid: false,
                    passwordValid: false,
                    formValid: false
        }
    }

    handleUserInput (e)  {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
                    () => { this.validateField(name, value) });
   }

   validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let loginValid = this.state.loginValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'login':
        loginValid = value.length > 0;
        fieldValidationErrors.login = loginValid ? '' : ' is requared';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    loginValid: loginValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.loginValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

   handleLogin(e) {
         e.preventDefault();
         this.props.handleLoginFunc( { name : this.state.login , password : this.state.password} );
   }

   render () {
        return (
                <div className="login-form">
                <form onSubmit = {this.handleLogin}>
                    
                    <input
                        className={`form-group ${this.errorClass(this.state.formErrors.login)}`}
                        placeholder='Login'
                        name="login"
                        value={this.state.email}
                        onChange={this.handleUserInput}
                    /> <br/>

                    <input
                        className={`form-group ${this.errorClass(this.state.formErrors.password)}`}
                        type = 'password'
                        name="password"
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.handleUserInput}
                    /> <br/>

                    <button type='submit' disabled={!this.state.formValid} >Login</button>
              </form>
               <div className = 'form-errors-box'>
                <FormErrors formErrors={this.state.formErrors} />
                </div>
             </div>
        )

   }
     
}