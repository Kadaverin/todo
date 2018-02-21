import {
        LOGIN_REQUEST,
        LOGIN_ERROR,
        LOGIN_SUCCESS,
        REGISTER_REQUEST,
        REGISTER_ERROR,
        REGISTER_SUCCESS ,
        AUTO_LOGIN , LOGOUT, }  from '../constants/ActionTypes';

import post from '../helpers/requests/postDataFunction';


export  function login(userInfo){
    return dispatch => {

            dispatch (loginRequest())
            return  post('api/login' ,JSON.stringify(userInfo)).then (

                        responseData => {
                            localStorage.setItem("token" , responseData.token)
                            dispatch (logined(userInfo))
                        },
                        error => {
                            dispatch(loginError(error));
                        }
                    );
          }
}


export  function register(userInfo){
   
   return dispatch => {

            dispatch (registerRequest())
            return  post('api/register' , JSON.stringify(userInfo)).then (

                        responseData => {
                            dispatch (registered());
                            localStorage.setItem("token" , responseData.token);
                        },
                        error => {
                             dispatch (registerError({message : error.message }));
                        }
                    );
          }
}

export function logout(){
    return {
        type : LOGOUT
    }
}

export function autoLogin(){
    return {
        type : AUTO_LOGIN
    }
}

 function loginRequest(){
    return {
        type :  LOGIN_REQUEST,
    }
}

 function loginError(error){
    return {
        type :  LOGIN_ERROR,
        payload : error
    }
}

function logined(userInfo){
    return {
        type :  LOGIN_SUCCESS,
    }
}


 function registerError(error){
    return {
        type :  REGISTER_ERROR,
        payload : error
    }
}

 function registered(){
    return {
        type :  REGISTER_SUCCESS,
        
    }
}


 function registerRequest(){
    return {
        type :  REGISTER_REQUEST,
    }
}


    
