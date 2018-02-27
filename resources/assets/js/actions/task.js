import { ADD_TASK,
         DELETE_TASK,
         UPDATE_TASK,
         MOVE_UP_TASK,
         MOVE_DOWN_TASK,
         ADD_TASK_SUCCESS,
         ADD_TASK_ERROR,
         DELETE_TASK_SUCCESS,
         DELETE_TASK_ERROR,
         EDIT_TASK_TITLE_SUCCESS,
         EDIT_TASK_TITLE_ERROR ,
         CHANGE_TASK_STATUS_SUCCESS,
         CHANGE_TASK_STATUS_ERROR,  } from '../constants/ActionTypes';

import request from '../helpers/requests/requestPromiseFunc';



export function moveUpTask(currentIndex , id){
    return {
        type : MOVE_UP_TASK,
        payload : { currentIndex: currentIndex , id : id}
    }
}

export function moveDownTask(currentIndex , id){
    return {
        type : MOVE_DOWN_TASK,
        payload : { currentIndex: currentIndex , id : id}
    }
}

export function changeTaskStatus(id){
    return dispatch => {
        return request('PUT','api/change_task_status' , JSON.stringify({id : id})).then(

            success => {
                dispatch(changeTaskStatusSuccess(id));
            },
            error =>{
                dispatch(changeTaskStatusError(error.message));
            }
        )
    }
}

export function addTask(name , projectId , priority){
    return dispatch => {
        return request('POST','/api/add_task' , JSON.stringify({name : name , project_id : projectId , priority : priority})).then(

                    addedTask => {
                        dispatch(addTaskSucess(addedTask))
                    },
                    error =>{
                        dispatch(addTaskError(error.message))
                    }
               );
    }
}

export function deleteTask(targetId){
    return dispatch => {
        return request('DELETE','/api/delete_task' ,JSON.stringify({id : targetId})).then(

            success => {
                dispatch(deleteTaskSuccess(targetId));
            },
            error => {
                dispatch(deleteTaskError(error.message));
            }
        )
    }
}

export function editTaskTitle(targetId , newName){
    return dispatch => {
        return request('PUT','/api/edit_task_title' , JSON.stringify( {id : targetId , newName : newName} )).then(

            success => {
                dispatch(editTaskTitleSuccess(targetId , newName));
            },
            error => {
                dispatch(editTaskTitleError(error.message));
            }
        )
    }
}

function changeTaskStatusSuccess(id){
    return {
        type : CHANGE_TASK_STATUS_SUCCESS,
        payload : id
    }
}

function changeTaskStatusError(errorMessage){
    return {
        type : CHANGE_TASK_STATUS_ERROR,
        payload : errorMessage
    }
}

function editTaskTitleSuccess(targetId , newName){
    return{
        type : EDIT_TASK_TITLE_SUCCESS,
        payload : {id : targetId , newName : newName}
    }
}


function editTaskTitleError(errorMassage){
    return{
        type : EDIT_TASK_TITLE_ERROR,
        payload : error.message
    }
}

function deleteTaskSuccess(id){
    return {
        type : DELETE_TASK_SUCCESS,
        payload : id
    }
}

function deleteTaskError(errorMassage){
    return {
        type : DELETE_TASK_ERROR,
        payload : errorMassage
    }
}

function addTaskError(errorMassage){
    return {
        type : ADD_TASK_SUCCESS,
        payload : errorMassage
    }
}

function addTaskSucess(addedTask){
     return {
        type : ADD_TASK_SUCCESS,
        payload : addedTask
    }
}