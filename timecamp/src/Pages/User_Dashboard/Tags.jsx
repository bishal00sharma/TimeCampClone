import React from 'react'
import {Box,Text,Button,Input,Flex, Spinner, Grid} from "@chakra-ui/react"
import { useState } from 'react'
import { useEffect } from 'react';
import { BiPlus} from 'react-icons/bi';
import { BsArchive } from 'react-icons/bs';
import axios from "axios";
import Navbar from '../../Components/Dashboard/Navbar';
import Usermenu from '../../Components/Dashboard/UserMenu';
import Sidebar from '../../Components/Dashboard/Sidebar';

 const Tags = () => {
  const [show, setShow] =useState(false);
  const [data, setData]=useState([]);
  const [loading, setLoading] =useState(false)
  const [value, setValue]=useState("");
  const [get, setGet]=useState(false)

  function change(){
    setShow(!show)
  }
  async function getData(){
    let token=JSON.parse(localStorage.getItem("userToken")) || "63344372e20682bebf2433eb:bishal@gmail.com:no";
    let id=token.split(":")[0];

    let response = await axios.get(`http://localhost:8080/users/tags/${id}`,{headers : {"token": token}});
    setData(response.data.tags)
    setTimeout(()=>{
      setLoading(true)
    },100)
    
  }
  async function addList(value){
   //localStorage.setItem("userToken","63344372e20682bebf2433eb:bishal@gmail.com:no");
    let userToken=JSON.parse(localStorage.getItem("userToken") ) || "63344372e20682bebf2433eb:bishal@gmail.com:no";
    let id=userToken.split(":")[0];
    await axios.patch(`http://localhost:8080/users/tags/${id}`,{"tags":value},{headers:{ "token": userToken}})
    setGet(!get)
    setValue("")
  }


  function handleChange(e){
   setValue(e.target.value);
  }
  useEffect(()=>{
    getData()
  },[get]);

  return (
    <Grid templateColumns="15vw 84vw" overflowY="hidden">
      <Box>
       <Sidebar />
    </Box>
      <Box>
      <Navbar />
        <Usermenu title="Tags" />
        <Grid w="50%" mt="30px" ml="100px">
            <Button style={{marginLeft:"550px",marginBottom:"20px"}} colorScheme="green" color="white" onClick={change}>+Add Tag List</Button>
            <Text>Manage your tags, like list of customers or activities. All workspace members can assign tags to time entries, when they track time. Project managers can set lists of tags for projects. Reports can be filtered and grouped by tags.</Text>
            {
            show && 
              <Flex style={{marginBottom:"50px",marginTop:"50px"}}>
                <Input type="text" placeholder='New List Name' onChange={handleChange} value={value}/>
                <Flex style={{marginBottom:"50px"}}>
                  <Button onClick={()=>addList(value)} style={{margin:"0px 20px"}} bgColor="green.400" color="white">Add</Button>
                  <Button onClick={()=>setShow(false)}>Cancel</Button>
                </Flex>
              </Flex>
            }
            {!loading && <Spinner thickness='4px'speed='1.65s'emptyColor='gray.200'color='blue.500'size='xl'/>}
            { loading && 
              data?.map((item)=>(
                <Grid key={item} bgColor="gray.100" p="15px 30px" borderRadius="15px" justifyContent="space-between" marginTop="10px"  textAlign="left" templateColumns="2fr 0.5fr">
                  <Box> <Text fontSize="18px">{item}</Text></Box>
                  <Flex>
                    <Button marginRight="10px" colorScheme="green">
                        <BiPlus />
                    </Button>
                    <Button bgColor="gray.300"> 
                      {/* <BsArchive /> */}
                      Archieve
                    </Button>
                  </Flex>
                  
                </Grid>
               
              ))
            }
            <hr style={{marginTop:"50px",marginBottom:"10px"}}/>
          <Box style={{marginBottom:"50px",display:"flex"}}>
          <Button marginRight="10px" colorScheme="green" color="white">Save Settings</Button>
          <Button>Back to addons list</Button>
        </Box>
        </Grid>
        <hr style={{marginTop:"50px"}}/>
        </Box>
    </Grid>
  )
}
export default Tags;