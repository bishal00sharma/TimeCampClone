import axios from "axios";

import {    
    ADD_TASK,
    TASKS_DELETE,
    TASKS_FETCH_ERROR,
    TASKS_FETCH_LOADING,
    TASKS_FETCH_SUCCESS,
    TASKS_UPDATE,
} from "./tasks.type";


const token =  JSON.parse(localStorage.getItem("userToken")) || "6333f7c01cc7acad26c89dcb:example@gmail.com:123";
export const getTasks = (auth) =>  async (dispatch) => {
    dispatch({type:TASKS_FETCH_LOADING});
    try{
        let response = await axios.get("https://timecamp-clone.herokuapp.com/tasks",{headers:{ "token": auth || token }});
        dispatch({type:TASKS_FETCH_SUCCESS, payload: response.data})
        return response.data;
    } catch (e) {
        dispatch({type:TASKS_FETCH_ERROR,payload:e.response.data});
    }
}

export const postTask = (taskDetails) =>  async (dispatch) => {
    dispatch({type:TASKS_FETCH_LOADING});
    try{
        let response = await axios.post("https://timecamp-clone.herokuapp.com/tasks", taskDetails,{headers:{ "token": token}});
        dispatch({type:ADD_TASK})
        return response.data;
    } catch (e) {
        dispatch({type:TASKS_FETCH_ERROR,payload:e.response.data});
    }
}

export const deleteTask = (id) =>  async (dispatch) => {
    dispatch({type:TASKS_FETCH_LOADING});
    try{
        let response = await axios.delete(`https://timecamp-clone.herokuapp.com/tasks/${id}`,{headers:{ "token": token}});
        dispatch({type:TASKS_DELETE})
        return response.data;
    } catch (e) {
        dispatch({type:TASKS_FETCH_ERROR,payload:e.response.data});
    }
}


export const updateTask = ({id,status}) =>  async (dispatch) => {
    dispatch({type:TASKS_FETCH_LOADING});
    try{
        let response = await axios.patch(`https://timecamp-clone.herokuapp.com/tasks/${id}`,{isBillingStatus: status},{headers:{ "token": token}});
        dispatch({type:TASKS_UPDATE})
        return response.data;
    } catch (e) {
        dispatch({type:TASKS_FETCH_ERROR,payload:e.response.data});
    }
}