import {
    AUTH_LOGIN_ERROR,
    AUTH_LOGIN_LOADING,
    AUTH_LOGIN_SUCCESS,
    AUTH_SIGNUP_ERROR,
    AUTH_SIGNUP_LOADING,
    AUTH_SIGNUP_SUCCESS,
    AUTH_LOGOUT
} from "./auth.type"

let token = localStorage.getItem('token') || "";

let initState = {
    loading: false,
    error: false,
    token: token,
}


export const authReducer = (state = initState, {type, payload}) =>{

    switch(type){
        case AUTH_LOGIN_LOADING : 
            return {
                ...state,
                loading : true,
                error: false,
            }
        case AUTH_LOGIN_ERROR : 
            return {
                ...state,
                loading : false,
                error: true,
            }
        case AUTH_LOGIN_SUCCESS : 
            return {
                ...state,
                loading : false,
                error: false,
                token : payload,
            }
        case AUTH_SIGNUP_LOADING : 
            return {
                ...state,
                loading :true,
                error: false,
            }
        case AUTH_SIGNUP_ERROR : 
            return {
                ...state,
                loading : false,
                error: true,
            }
        case AUTH_SIGNUP_SUCCESS : 
            return {
                ...state,
                loading : false,
                error: false,
                token : payload,
            }
        case AUTH_LOGOUT : 
            localStorage.removeItem('token')
            return {
                ...state,
                token: ""
            }
        default :
            return state;
    }

}