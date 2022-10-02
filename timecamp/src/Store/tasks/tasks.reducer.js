import {    
    TASKS_FETCH_ERROR,
    TASKS_FETCH_LOADING,
    TASKS_FETCH_SUCCESS,
    TASKS_DELETE,
    TASKS_UPDATE,
    ADD_TASK
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
        case ADD_TASK : 
            return {
                ...state,
                loading: true,
                error:"",
            }
        case TASKS_DELETE:
            return {
                ...state,
                loading: false,
                error :""
            }
        case TASKS_UPDATE : 
            return {
                ...state,
                loading: false,
                error : ""
            }
        default :
            return state;
    }

}