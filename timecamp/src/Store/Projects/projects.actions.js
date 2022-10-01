import axios from "axios";

import {    
    PROJECT_FETCH_ERROR,
    PROJECT_FETCH_LOADING,
    PROJECT_FETCH_SUCCESS,
    ADD_PROJECT,
    DELETE_PROJECT,
    UPDATE_PROJECT
} from "./projects.type";


export const login = (creds) =>  async (dispatch) => {
    dispatch({type:PROJECT_FETCH_LOADING});
    try{
        let response = await axios.post("http://localhost:8080/projects", {email: creds.email, password: creds.password});
        dispatch({type:PROJECT_FETCH_SUCCESS, payload: response.data})
        return response.data;
    } catch (e) {
        dispatch({type:PROJECT_FETCH_ERROR,payload:e.response.data});
    }
}