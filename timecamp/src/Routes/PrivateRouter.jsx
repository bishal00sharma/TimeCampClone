import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function PrivateRouter({children}){
    const token = useSelector((store)=> store.auth.token) || JSON.parse(localStorage.getItem("userToken")) || "6333f7c01cc7acad26c89dcb:example:gvbdshdh";
    const navigate = useNavigate()

    useEffect(()=>{
        if(token===""){
            return navigate("/auth/login");
        }
    },[navigate,token])

    return (
       children
    )

}