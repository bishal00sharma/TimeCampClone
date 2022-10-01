import { Button, Input, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {login} from "../../Store/auth/auth.actions"
import { useEffect } from "react";

export default function LoginForm () {

    const [ creds, setCreds] = useState({email : "", password:""});
    const [ InputError, setError] = useState("");
    const dispatch = useDispatch();
    const {token,error} = useSelector((store)=> store.auth)
    const navigate = useNavigate();


    useEffect(()=>{
        if(token!==""){
            navigate("/dashboard/timesheet");
        }
    },[navigate,token])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setCreds({...creds,[name]: value});
        setError("");
    } 

    const handleSubmit = (e) => {
        if(creds.email==="" && creds.password===""){
            setError("Please enter your Email id & Password")
        }
        else if(creds.email===""){
            setError("Please enter your Email Id");
        }
        else if(creds.password===""){
            setError("Please provide your Password");
        }
        else{
            e.preventDefault();
            dispatch(login(creds));
        }
    }

    useEffect(()=>{
        if(error!==""){
            setError(error)
        }
    },[error])

    return (
        <>
        {
            InputError!=="" && <Text color="red" backgroundColor="rgba(255, 0, 0, 0.088)" p="5px">{InputError}</Text>
        }
        {
            token!=="" && <Text> Successfully logged in</Text>
        }
        <Stack >
            <Input placeholder="Email" name="email" onChange={handleChange}/>
            <Input type="password" placeholder="Password" name="password" onChange={handleChange}/>
        </Stack>
        
        <Link to="/auth/password_reset">Forgotten Password ? </Link>
        <Button colorScheme="green" borderRadius="30px" onClick={handleSubmit}>Log In</Button> 
        </>
    )
}