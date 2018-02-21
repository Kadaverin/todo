import {
        LOGIN_REQUEST,
        LOGIN_ERROR,
        LOGIN_SUCCESS,
        REGISTER_REQUEST,
        REGISTER_ERROR,
        REGISTER_SUCCESS,
        AUTO_LOGIN , LOGOUT}     from '../constants/ActionTypes';



const initialState = {
     isAuth : false
}

export default function user(state = initialState , action){

        switch (action.type) {

            case  REGISTER_SUCCESS : 
                return {...state, isAuth : true}; 
               break;

            case  REGISTER_ERROR : 
                return {...state , registerError : true , error : action.payload }; 
               break;

            case  LOGIN_SUCCESS : 
                return {...state, isAuth : true}; 
               break;

            case   LOGIN_ERROR : 
                return {...state , loginError : true , error : action.payload }; 
               break;

            case AUTO_LOGIN : 
                return { ...state , isAuth : true };
              break;
            
            case LOGOUT : 
                return { ...state , isAuth : false };
              break;
            
            default : return state;
         }
}