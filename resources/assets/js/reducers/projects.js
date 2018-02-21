import 
        {
        EDIT_PROJECT_TITLE_SUCCESS,
        EDIT_PROJECT_TITLE_ERROR,
        FETCH_USERS_TODO_SUCCESS,
        DELETE_PROJECT_SUCCESS,
        ADD_PROJECT_SUCCESS,
        ADD_PROJECT_ERROR,
        DELETE_PROJECT,
        UPDATE_PROJECT,} from '../constants/ActionTypes';

         import {} from '../constants/ActionTypes';

const initialState = []

export default function projects (state = initialState , action){
        switch (action.type) {  


            case FETCH_USERS_TODO_SUCCESS : 
                return [...state , ...action.payload.projects ];
              break;  

            case ADD_PROJECT_SUCCESS : 
                return [...state , action.payload ];
              break;

            case DELETE_PROJECT_SUCCESS : 
                return state.filter(project => project.id !== action.payload);
              break;

            case EDIT_PROJECT_TITLE_SUCCESS:
                {
                  let newProjects = [...state];
                  newProjects.forEach(project => {
                    if (project.id === action.payload.id){
                      project.name = action.payload.newName;
                    }
                  });
                  return newProjects;
                }

            default : return state;
         }
}