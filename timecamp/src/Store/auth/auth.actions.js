import axios from "axios";
import baselink from "../baselink";

import {
    AUTH_LOGIN_ERROR,
    AUTH_LOGIN_LOADING,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGOUT,
    AUTH_SIGNUP_ERROR,
    AUTH_SIGNUP_LOADING,
    AUTH_SIGNUP_SUCCESS,
} from "./auth.type";

export const logout = () => async (dispatch) => {
    localStorage.removeItem("userToken");
    dispatch({type: AUTH_LOGOUT});
}

export const login = (creds) =>  async (dispatch) => {
    dispatch({type:AUTH_LOGIN_LOADING});
    try{
        let response = await axios.post(`${baselink}/users/login`, {email: creds.email, password: creds.password});
        dispatch({type:AUTH_LOGIN_SUCCESS, payload: response.data.token})
        if(response.data.token){
            localStorage.setItem("userToken",JSON.stringify(response.data.token));
        }
        return response.data;
    } catch (e) {
        dispatch({type:AUTH_LOGIN_ERROR,payload:e.response.data});
    }
}

export const signup = (creds) => async (dispatch) => {
    dispatch({type:AUTH_SIGNUP_LOADING});
    try{
        let response = await axios.post(`${baselink}/users/signup`, {email: creds.email, password: creds.password});
        dispatch({type:AUTH_SIGNUP_SUCCESS, payload: response.data.token});
        if(response.data.token){
            localStorage.setItem("userToken",JSON.stringify(response.data.token));
        }
        return response.data;
    } catch (e) {
        dispatch({type:AUTH_SIGNUP_ERROR, payload:e.response.data});
    }
}
