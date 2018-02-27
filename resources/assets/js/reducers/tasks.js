import 
        {
        EDIT_TASK_TITLE_SUCCESS,
        CHANGE_TASK_STATUS_SUCCESS,
        CHANGE_TASK_STATUS_ERROR,
        EDIT_TASK_TITLE_ERROR,
        FETCH_USERS_TODO_SUCCESS,
        DELETE_PROJECT_SUCCESS,
        DELETE_TASK_SUCCESS,
        ADD_TASK_SUCCESS,
        ADD_TASK_ERROR,
        MOVE_UP_TASK,
        MOVE_DOWN_TASK,
        DELETE_TASK,
        UPDATE_TASK, LOGOUT} from '../constants/ActionTypes';

import { moveArrEllementUpOrInTail , moveArrEllementDownOrInHead } from '../helpers/data/arrays';

        const initialState = {
                tasksById : {},
                projectsTasksIds : {}
        }


export default function tasks (state = initialState , action){
        switch (action.type) {  

             case FETCH_USERS_TODO_SUCCESS : 
                return {
                        ...state , 
                        tasksById : {...action.payload.tasksById } ,
                        projectsTasksIds : {...action.payload.projectsTasksIds }
                       };
              break;    

              case CHANGE_TASK_STATUS_SUCCESS :
                  {
                    let id = action.payload.id;
                    return {
                            ...state,
                               tasksById : {  
                                            ...state.tasksById , 
                                              [id] : { ...state.tasksById[id] , isDone : !state.tasksById[id].isDone }
                                            }
                           }
                  }

              case MOVE_UP_TASK :
                  {
                    let taskId = action.payload.id;
                    let project_id = state.tasksById[ taskId ].project_id ;
                    let currentIndex = action.payload.currentIndex;
                    let newTasksIds = [ ...state.projectsTasksIds[project_id] ];
                    moveArrEllementUpOrInTail( newTasksIds , currentIndex)
                    return {
                            ...state,
                               projectsTasksIds : {
                                                  ...state.projectsTasksIds,
                                                     [ project_id ] : newTasksIds

                               }
                    }
                  }

                case MOVE_DOWN_TASK :
                  {
                    let taskId = action.payload.id;
                    let project_id = state.tasksById[ taskId ].project_id ;
                    let currentIndex = action.payload.currentIndex;
                    let newTasksIds = [ ...state.projectsTasksIds[project_id] ];
                    moveArrEllementDownOrInHead( newTasksIds , currentIndex)
                    return {
                            ...state,
                               projectsTasksIds : {
                                                  ...state.projectsTasksIds,
                                                     [ project_id ] : newTasksIds

                               }
                    }
                  }



           case EDIT_TASK_TITLE_SUCCESS : {
                  let targetId =  action.payload.id;
                  let updatedTask = { ... state.tasksById[ targetId ] };
                  updatedTask.name = action.payload.newName;
                  return { 
                          ...state, 
                             tasksById : { 
                                          ...state.tasksById, 
                                             [ targetId ]  : updatedTask 
                                         }
                  };
                }     


        
            case DELETE_TASK_SUCCESS : {
                  let id = action.payload;
                  let project_id = state.tasksById[id].project_id ;
                  let newTasksIdsOfTargetProject = state.projectsTasksIds[project_id].filter( deletedId => deletedId !== id);
                  let newTasksIds = {...state.projectsTasksIds , [project_id] : newTasksIdsOfTargetProject}
                  let newTasksList = state.tasksById; 
                  delete (newTasksList [id]);
                  
                  return {
                         ...state ,
                         tasksById :  newTasksList ,
                         projectsTasksIds : newTasksIds
                  }
                }
              break;

            case ADD_TASK_SUCCESS : {
                  let id = action.payload.id;
                  let project_id = action.payload.project_id
                  let currentProjectTasksIds = state.projectsTasksIds[project_id];
                  let newTasksList = state.tasksById;
                  let newTasksIds
                  newTasksList [id] = action.payload;
                  if (currentProjectTasksIds) {
                          newTasksIds = {...state.projectsTasksIds , [project_id] : [...currentProjectTasksIds , id ] }
                  }else{
                          newTasksIds = {...state.projectsTasksIds , [project_id] : [id]}
                  }
                  return {
                         ...state ,
                         tasksById :  newTasksList ,
                         projectsTasksIds : newTasksIds
                  }
                }
              break;

            case DELETE_PROJECT_SUCCESS : {
                 let deleted_project_id = action.payload;
                 let newTasksIds = { ... state.projectsTasksIds } ;
                 let newTasksList = { ... state.tasksById};
                 let tasksIdsToDelete = newTasksIds[ deleted_project_id];
                 delete (newTasksIds[ deleted_project_id]);
                 if (tasksIdsToDelete) {
                    for (let id of tasksIdsToDelete){
                        delete (newTasksList[ id ]);
                    }
                 }
                 return {
                        ...state ,
                        tasksById : newTasksList,
                        projectsTasksIds : newTasksIds
                       }
               }  
             break;

             case LOGOUT : 
                 return {
                               tasksById : { } ,
                               projectsTasksIds : {}
                           }
              

            default : return state;
         }
}

