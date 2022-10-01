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
    error: "",
    token: token,
}


export const authReducer = (state = initState, {type, payload}) =>{

    switch(type){
        case AUTH_LOGIN_LOADING : 
            return {
                ...state,
                loading : true,
                error: "",
            }
        case AUTH_LOGIN_ERROR : 
            return {
                ...state,
                loading : false,
                error: payload,
            }
        case AUTH_LOGIN_SUCCESS : 
            return {
                ...state,
                loading : false,
                error: "",
                token : payload,
            }
        case AUTH_SIGNUP_LOADING : 
            return {
                ...state,
                loading :true,
                error: "",
            }
        case AUTH_SIGNUP_ERROR : 
            return {
                ...state,
                loading : false,
                error: payload,
            }
        case AUTH_SIGNUP_SUCCESS : 
            return {
                ...state,
                loading : false,
                error: "",
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