import { Button, Input, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {signup} from "../../Store/auth/auth.actions"

export default function SignupForm () {

    const [ creds, setCreds] = useState({email : "", password:""});
    const [ InputError, setError] = useState("");
    const dispatch = useDispatch();
    const {loading,token,error} = useSelector((store)=> store.auth)
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setCreds({...creds,[name]: value});
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
            dispatch(signup(creds));
        }
    }

    useEffect(()=>{
        if(token!==""){
            navigate("/dashboard/timesheet");
        }
    },[navigate,token])

    useEffect(()=>{
        if(error){
            setError("Email Id Already Exists! Try Logging in")
        }
    },[error])

    if(token!==""){
        return <div>Successfully logged in</div>
    }


    return (
        <>
        <Stack >
            <Input placeholder="Email" name="email" onChange={handleChange}/>
            <Input type="password" placeholder="Password" name="password" onChange={handleChange}/>
            <Input placeholder="Phone(Optional)" name="phone" onChange={handleChange}/>
        </Stack>
        {
            InputError!=="" && <Text color="red" backgroundColor="rgba(255, 0, 0, 0.088)" p="5px">{InputError}</Text>
        }
        <Button  isLoading={loading} loadingText='Signing up...' colorScheme="green" borderRadius="30px" onClick={handleSubmit}>Sign Up for free</Button> 
        </>
    )
}