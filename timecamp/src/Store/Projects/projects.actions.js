import axios from "axios";
import baselink from "../baselink";

import {    
    PROJECT_FETCH_ERROR,
    PROJECT_FETCH_LOADING,
    PROJECT_FETCH_SUCCESS,
    ADD_PROJECT,
    DELETE_PROJECT,
} from "./projects.type";


const token = JSON.parse(localStorage.getItem("userToken")) || "" 
export const fetchProject = () => async(dispatch) => {
    if(token!==""){
        dispatch({type:PROJECT_FETCH_LOADING});
        try{
            let response = await axios.get(`${baselink}/projects`,{headers:{ "token": token}});
            dispatch({type:PROJECT_FETCH_SUCCESS, payload: response.data})
            return response.data;
        } catch (e) {
            dispatch({type:PROJECT_FETCH_ERROR,payload:e.response.data});
        }    
    }
}


export const deleteProject = (id) => async (dispatch) => {
    if(token!==""){
        try{
            let response = await axios.delete(`${baselink}/projects/${id}`,{headers:{ "token": token}});
            dispatch({type:DELETE_PROJECT})
            return response.data;
        } catch (e) {
            dispatch({type:PROJECT_FETCH_ERROR,payload:e.response.data});
        }    
    }
}


export const addProject = (data) => async (dispatch) => {
    if(token!=="") {
        try{
            let response = await axios.post(`${baselink}/projects`,data,{headers:{ "token": token}});
            dispatch({type:ADD_PROJECT, payload: response.data})
            return response.data;
        } catch (e) {
            dispatch({type:PROJECT_FETCH_ERROR,payload:e.response.data});
        }    
    }
}

