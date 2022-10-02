import axios from "axios";

import {    
    ADD_TASK,
    TASKS_DELETE,
    TASKS_FETCH_ERROR,
    TASKS_FETCH_LOADING,
    TASKS_FETCH_SUCCESS,
    TASKS_UPDATE,
} from "./tasks.type";


<<<<<<< HEAD

const token =(localStorage.getItem("token")) || "";
=======
const token = JSON.parse(localStorage.getItem("userToken")) || "13242424:example@gmail.com:123";
>>>>>>> 7559708b5b09398818162dc7350f5fd66542ee9e
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

export const postTask = (taskDetails) =>  async (dispatch) => {
    dispatch({type:TASKS_FETCH_LOADING});
    try{
        let response = await axios.post("http://localhost:8080/tasks", taskDetails,{headers:{ "token": token}});
        dispatch({type:ADD_TASK})
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


export const updateTask = ({id,status}) =>  async (dispatch) => {
    dispatch({type:TASKS_FETCH_LOADING});
    try{
        let response = await axios.patch(`http://localhost:8080/tasks/${id}`,{isBillingStatus: status},{headers:{ "token": token}});
        dispatch({type:TASKS_UPDATE})
        return response.data;
    } catch (e) {
        dispatch({type:TASKS_FETCH_ERROR,payload:e.response.data});
    }
}