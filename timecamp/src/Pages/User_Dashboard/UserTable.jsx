
import { Button, Flex, Table, TableCaption, TableContainer, Thead } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import {FaRegUserCircle} from "react-icons/fa";
import {MdDeleteForever} from "react-icons/md";
import {MdTimer} from "react-icons/md";
import {
   Tbody,
    Tr,Box,
    Th,
    Td,
    
  } from '@chakra-ui/react'
import UserAdd from './UserAdd';
import axios from 'axios';

const UserTable = () => {

  const [show, setShow] =useState(false);
  const [data, setData]=useState([]);
  const [user, setUser]=useState("");
  const [get, setGet]=useState(false)

  async function getData(){
    // localStorage.setItem("token","63344372e20682bebf2433eb:bishal@gmail.com:no");
    let token=JSON.parse(localStorage.getItem("userToken"));
    const id=token.split(":")[0];
    let res = await axios.get(`https://timecamp-clone.herokuapp.com/users/${id}/clients`);
    setData(res.data.clients)
  }

function changeGet(){
  setGet(!get)
}

useEffect(()=>{
  getData()
  
},[get]);
console.log(data);

  return (
    <Box marginTop="20px">
      <TableContainer>
  <Table  >
    <TableCaption> Hide disabled users from lists in reports</TableCaption>
    <Thead>
      <Tr>
        <Th color="blue.300" fontSize="15px">users/groups</Th>
        <Th color="blue.300" fontSize="15px">involved in</Th>
        <Th color="blue.300" fontSize="15px">role</Th>
        <Th color="blue.300" fontSize="15px">Invite</Th>
      </Tr>
    </Thead>
    <Tbody>
    <Tr>
        <Flex>
        <Td mb="15px" fontWeight="800" color='teal' fontSize="18px">People</Td>
         <UserAdd  changeGet={changeGet}/>
        </Flex>
          <Td></Td>
          <Td ></Td>
          <Td ></Td>
         </Tr>           
       <Tr >
            <Td > <Flex><Box marginLeft="25px" paddingRight="15px"><FaRegUserCircle fontSize="25px" color="blue"/></Box> {user}</Flex></Td>
            <Td>none </Td>
            <Td color="green"> Account Owner</Td>
            <Td ></Td>
          </Tr>
      {
        data?.map((item)=>(
            <Tr>
            <Td > <Flex><Box marginLeft="25px" paddingRight="15px"><FaRegUserCircle color='skyblue' fontSize="25px"/></Box> {item}</Flex></Td>
            <Td>none </Td>
            <Td >-</Td>
            <Td fontSize="14px" color="orange.500">Pending Invite</Td>
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