import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import  FormErrors  from './FormErrors';

export default class RegisterForm extends Component {
 
  constructor(props) {
    super(props);
    this.handleRegister =this.handleRegister.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
        this.state ={
                    login: '',
                    password: '',
                    confirm : '',
                    formErrors: {login: '', password: '' , confirm : ''},
                    emailValid: false,
                    passwordValid: false,
                    passwordConfirmed : false,
                    formValid: false
        }
  }
   
  handleRegister(e) {
    // e.preventDefault();
    // const login = findDOMNode(this.refs.login).value.trim();
    // const password = findDOMNode(this.refs.password).value.trim();
    // const password_confirm = findDOMNode(this.refs.password_confirm).value.trim();

    // if (!login || !password || !password_confirm ) return;
    // this.props.handleRegisterFunc({ 
    //                 name : login, 
    //                 password : password, 
    //                 password_confirmation : password_confirm
    //             });
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
    let passwordConfirmed = this.state.confirm;

    switch(fieldName) {
      case 'login':
        loginValid = value.length > 0;
        fieldValidationErrors.login = loginValid ? '' : ' is requared';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      case 'confirm':
        passwordConfirmed = (value === this.state.password);
        fieldValidationErrors.confirm = passwordConfirmed ? '' : ' your password '
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    loginValid: loginValid,
                    passwordValid: passwordValid,
                    passwordConfirmed : passwordConfirmed
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.loginValid && this.state.passwordValid && this.state.passwordConfirmed});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }
 
  render() {     
    return(
            <div className="register-form"> 
              <form onSubmit={this. handleRegister}>
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
              
                  <input 
                      className={`form-group ${this.errorClass(this.state.formErrors.confirm)}`}
                      type = 'password'
                      name="confirm"
                      value = {this.state.password_confirm}
                      placeholder = 'Confirm password'
                      onChange={this.handleUserInput}
                  />
                  <br/>

                   <button type='submit' disabled={!this.state.formValid} id="submit-register" >Register</button>

                   <div className = 'form-errors-box'>
                    <FormErrors formErrors={this.state.formErrors} />
                   </div>
                  
                
              </form>
          </div>
        )
  }
}