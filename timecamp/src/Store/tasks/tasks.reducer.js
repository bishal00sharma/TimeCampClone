import {    
    TASKS_FETCH_ERROR,
    TASKS_FETCH_LOADING,
    TASKS_FETCH_SUCCESS,
    TASKS_DELETE
} from "./tasks.type";


let initState = {
    loading: false,
    error: "",
    data : []
}


export const tasksReducer = (state = initState, {type, payload}) =>{

    switch(type){
        case TASKS_FETCH_LOADING : 
            return {
                ...state,
                loading : true,
                error: "",
            }
        case TASKS_FETCH_ERROR : 
            return {
                ...state,
                loading : false,
                error: payload,
            }
        case TASKS_FETCH_SUCCESS : 
            return {
                ...state,
                loading : false,
                error: "",
                data : payload,
            }
            case TASKS_DELETE:
                 let newTasks = state.filter((task) => task.id !==payload.id)
                 return {
                    ...state,
                    tasks: newTasks
                   }
          
     
        default :
            return state;
    }

}