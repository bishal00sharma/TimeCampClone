import { Button, Input, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {login} from "../../Store/auth/auth.actions"
import { useEffect } from "react";

export default function LoginForm () {

    const [ creds, setCreds] = useState({email : "", password:""});
    const [ InputError, setError] = useState("");
    const dispatch = useDispatch();
    const {token,error} = useSelector((store)=> store.auth)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setCreds({...creds,[name]: value});
    } 

    const handleSubmit = (e) => {
        if(creds.email===""|| creds.password===""){
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

    return (
        <>
        {
            InputError!=="" && <Text color="red">{InputError}</Text>
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