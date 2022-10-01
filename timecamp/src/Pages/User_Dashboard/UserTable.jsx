import { Button, Flex, Table, TableCaption, TableContainer, Thead } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import {FaRegUserCircle} from "react-icons/fa";
import {MdDeleteForever} from "react-icons/md";
import axios from "axios";
import {
   Tbody,
    Tfoot,
    Tr,Box,
    Th,
    Td,
    
  } from '@chakra-ui/react'
import UserAdd from './UserAdd';

const UserTable = () => {

  const [show, setShow] =useState(false);
  const [data, setData]=useState([]);
  const [loading, setLoading] =useState(false)
  const [value, setValue]=useState("");
  const [get, setGet]=useState(false)

  async function getData(){
      try {
        const response = await fetch("http://localhost:8080/projects", {
          method: 'GET', 
          headers: {
            "token":"6336ce76b22c509b0ee3e3d9:lokesh0910@gmail.com:lokesh0910",
            'Content-Type': 'application/json'
          }        });
       return (response.json());
      }
    
    catch (e) {
      console.log(e);
  }}
  console.log(data)

  
  async function userDelete(id){
    try {
      const response = await fetch(`http://localhost:8080/projects/${id}` ,{
        method: 'DELETE', 
        headers: {
          "token":"6336ce76b22c509b0ee3e3d9:lokesh0910@gmail.com:lokesh0910",
          'Content-Type': 'application/json'
        }        });
        setGet(!get)
     return (response.json());
    }
  
  catch (e) {
    console.log(e);
}}
function changeGet(){
  setGet(!get)
}

useEffect(()=>{
  getData().then(res=>(setData(res)))
  
},[get]);

  return (
    <Box marginTop="20px">
      <TableContainer>
  <Table  >
    <TableCaption> Hide disabled users from lists in reports</TableCaption>
    <Thead>
      <Tr>
        <Th color="blue.300" fontSize="15px">users/groups</Th>
        <Th color="blue.300" fontSize="15px">involved in</Th>
        <Th color="blue.300" fontSize="15px">assign</Th>
        <Th color="blue.300" fontSize="15px">external id</Th>
      </Tr>
    </Thead>
    <Tbody>
    <Tr>
        <Flex>
        <Td mb="15px" fontWeight="800" color='teal' fontSize="18px">Project</Td>
         <UserAdd  changeGet={changeGet}/>
        </Flex>
        <Td></Td>
        <Td ></Td>
        <Td ></Td>
      </Tr>
      {
        data?.map((item)=>(
            <Tr >
            <Td > <Flex><Box marginLeft="25px" paddingRight="15px"><FaRegUserCircle color='skyblue' fontSize="23px"/></Box> {item.title}<Button onClick={()=>userDelete(item._id)} ml="35px" bgColor="red.100"><MdDeleteForever color='red' fontSize="20px"/></Button></Flex></Td>
            {/* <Td>{item.tags?item.tags:"0"} Tags</Td> */}
            {/* <Td >{item.user.email}</Td> */}
            <Td ></Td>
          </Tr>
        ))
      }
    </Tbody>
   
  </Table>
</TableContainer>
    </Box>
  )
}
export default UserTable ;