import { ADD_PROJECT,
         EDIT_PROJECT_TITLE_SUCCESS,
         EDIT_PROJECT_TITLE_ERROR,
         DELETE_PROJECT_SUCCESS,
         DELETE_PROJECT_ERROR,
         UPDATE_PROJECT,
         ADD_PROJECT_SUCCESS,
         ADD_PROJECT_ERROR,   } from '../constants/ActionTypes';

import request from '../helpers/requests/requestPromiseFunc';

export function addProject(projectName){
    return dispatch => {

//        dispatch( addProjectRequest());
        return request('POST','/api/add_project' , JSON.stringify( {name : projectName})).then(

                    addedProject => {
                        dispatch(addProjectSucess(addedProject))
                    },
                    error =>{
                        dispatch(addProjectError(error.message))
                    }
               );
    }
}

export function deleteProject(targetId){
    return dispatch => {
        return request('DELETE','/api/delete_project' ,JSON.stringify({id : targetId})).then(

            success => {
                dispatch(deleteProjectSuccess(targetId));
            },
            error => {
                dispatch(deleteProjectError(error.message));
            }
        )
    }
}

export function editProjectTitle(targetId , newName){
    return dispatch => {
        return request('PUT','/api/edit_project_title' , JSON.stringify( {id : targetId , newName : newName} )).then(

            success => {
                dispatch(editProjectTitleSuccess(targetId , newName));
            },
            error => {
                dispatch(editProjectTitleError(error.message));
            }
        )
    }
}

function editProjectTitleSuccess(targetId , newName){
    return{
        type : EDIT_PROJECT_TITLE_SUCCESS,
        payload : {id : targetId , newName : newName}
    }
}


function editProjectTitleError(errorMassage){
    return{
        type : EDIT_PROJECT_TITLE_ERROR,
        payload : error.message
    }
}

function deleteProjectSuccess(id){
    return {
        type : DELETE_PROJECT_SUCCESS,
        payload : id
    }
}

function deleteProjectError(errorMassage){
    return {
        type : DELETE_PROJECT_ERROR,
        payload : errorMassage
    }
}



function addProjectError(errorMassage){
    return {
        type : ADD_PROJECT_ERROR,
        payload : errorMassage
    }
}

function addProjectSucess(addedProject){
     return {
        type : ADD_PROJECT_SUCCESS,
        payload : addedProject
    }
}