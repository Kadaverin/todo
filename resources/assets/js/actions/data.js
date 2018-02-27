import {FETCH_USERS_TODO_SUCCESS,
        FETCH_USERS_TODO_REQUEST,
        FETCH_USERS_TODO_ERROR} from '../constants/ActionTypes';

import request from '../helpers/requests/requestPromiseFunc';

export function fetch_users_todo(){
    return dispatch =>{
        dispatch(fetchTodoRequest())
        return request('GET','/api/get_users_todo_list').then(

            response =>{
                console.log (response);
                dispatch (fetchTodoSuccess(response ));
            },
            error =>{
                 dispatch(fetchTodoError (error.message));
            }
        );
    }
}


function fetchTodoRequest(){
    return {
        type : FETCH_USERS_TODO_REQUEST,
    }
}

function fetchTodoSuccess(toDoList){
    return {
        type : FETCH_USERS_TODO_SUCCESS,
        payload : toDoList
    }
}

function fetchTodoError(errorMessage){
    return {
        type : FETCH_USERS_TODO_ERROR,
        payload : errorMessage
    }
}

