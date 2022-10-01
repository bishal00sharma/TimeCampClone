import {    
    PROJECT_FETCH_ERROR,
    PROJECT_FETCH_LOADING,
    PROJECT_FETCH_SUCCESS,
    ADD_PROJECT,
    DELETE_PROJECT,
    UPDATE_PROJECT
} from "./projects.type";


let initState = {
    loading: false,
    error: "",
    data : []
}


export const projectReducer = (state = initState, {type, payload}) =>{

    switch(type){
        case PROJECT_FETCH_LOADING : 
            return {
                ...state,
                loading : true,
                error: "",
            }
        case PROJECT_FETCH_ERROR : 
            return {
                ...state,
                loading : false,
                error: payload,
            }
        case PROJECT_FETCH_SUCCESS : 
            return {
                ...state,
                loading : false,
                error: "",
                data : payload,
            }
        case ADD_PROJECT : 
            return {
                ...state,
                loading: true,
                error:"",
            }
        case UPDATE_PROJECT : 
            return {
                ...state,
                loading: true,
                error: ""
            }
        case DELETE_PROJECT : 
            return {
                ...state,
                loading: false,
                error: ""
            }
        default :
            return state;
    }

}