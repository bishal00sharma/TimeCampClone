import axios from "axios";

import {
    AUTH_LOGIN_ERROR,
    AUTH_LOGIN_LOADING,
    AUTH_LOGIN_SUCCESS,
    AUTH_SIGNUP_ERROR,
    AUTH_SIGNUP_LOADING,
    AUTH_SIGNUP_SUCCESS,
    AUTH_LOGOUT
} from "./auth.type";


export const login = (creds) =>  async (dispatch) => {
    dispatch(AUTH_LOGIN_LOADING);
    try{
        let response = await axios.post("http://localhost:8080/users/login", creds);
        dispatch({type:AUTH_LOGIN_SUCCESS, payload: response.data});
        return response.data;
    } catch (e) {
        dispatch(AUTH_LOGIN_ERROR);
    }
}

export const signup = (creds) => async (dispatch) => {
    dispatch(AUTH_SIGNUP_LOADING);
    try{
        let response = await axios.post("http://localhost:8080/users/signup", creds);
        dispatch({type:AUTH_SIGNUP_SUCCESS, payload: response.data});
        return response.data;
    } catch (e) {
        dispatch(AUTH_SIGNUP_ERROR);
    }
}
