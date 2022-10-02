import axios from "axios";

import {    
    TASKS_DELETE,
    TASKS_FETCH_ERROR,
    TASKS_FETCH_LOADING,
    TASKS_FETCH_SUCCESS,
} from "./tasks.type";



const token = JSON.parse(localStorage.getItem("token")) || "";
export const getTasks = () =>  async (dispatch) => {
    dispatch({type:TASKS_FETCH_LOADING});
    try{
        let response = await axios.get("http://localhost:8080/tasks",{headers:{ "token": token}});
        dispatch({type:TASKS_FETCH_SUCCESS, payload: response.data})
        return response.data;
    } catch (e) {
        dispatch({type:TASKS_FETCH_ERROR,payload:e.response.data});
    }
}

export const postTask = (creds) =>  async (dispatch) => {
    dispatch({type:TASKS_FETCH_LOADING});
    try{
        let response = await axios.post("http://localhost:8080/tasks", { email: creds.email, password: creds.password},{headers:{ "token": token}});
        dispatch({type:TASKS_FETCH_SUCCESS, payload: response.data})
        return response.data;
    } catch (e) {
        dispatch({type:TASKS_FETCH_ERROR,payload:e.response.data});
    }
}

export const deleteTask = (id) =>  async (dispatch) => {
    dispatch({type:TASKS_FETCH_LOADING});
    try{
        let response = await axios.delete(`http://localhost:8080/tasks/${id}`,{headers:{ "token": token}});
        dispatch({type:TASKS_DELETE})
        return response.data;
    } catch (e) {
        dispatch({type:TASKS_FETCH_ERROR,payload:e.response.data});
    }
}