import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';

export default class RegisterForm extends Component {
 
  constructor(props) {
    super(props);
    this.handleRegister =this.handleRegister.bind(this);
  }
   
  componentDidMount(){
      findDOMNode(this.refs.login).focus();
  }
  handleRegister(e) {
    //preventDefault prevents page reload   
    e.preventDefault();
    const login = findDOMNode(this.refs.login).value.trim();
    const password = findDOMNode(this.refs.password).value.trim();
    const password_confirm = findDOMNode(this.refs.password_confirm).value.trim();
    const email = findDOMNode(this.refs.email).value.trim();

    if (!login || !password || !password_confirm || !email) return;
    this.props.handleRegisterFunc({ 
                    name : login, 
                    email : email, 
                    password : password, 
                    password_confirmation : password_confirm
                });
  }
 
  render() {     
    return(
            <div className="register-form"> 
              <div> 
              <form onSubmit={this. handleRegister}>
                  <input 
                      type="text" 
                      placeholder = 'Login'
                      ref = 'login'/>
                  <br/>

                  <input 
                      type="email" 
                      placeholder = 'Email'
                      ref = 'email' />
                  <br/>
              
                  <input 
                      type = 'password'
                      placeholder = 'Password'
                      ref = 'password'/>
                  <br/>
              
                  <input 
                      type = 'password'
                      placeholder = 'Confirm password'
                      ref = 'password_confirm'/>
                  <br/>
                <input type="submit" value="Register" id="submit-register"/>
              </form>
            </div>
          </div>
        )
  }
}