import { Button, Flex, Table, TableCaption, TableContainer, Thead } from '@chakra-ui/react';
import React from 'react';
import {FaRegUserCircle} from "react-icons/fa";
import {MdDeleteForever} from "react-icons/md"
import {
   Tbody,
    Tfoot,
    Tr,Box,
    Th,
    Td,
    
  } from '@chakra-ui/react'
import UserAdd from './UserAdd';
const arr=[
    {
  "user":"bishalsharma",
  "project":2,
  "role":'Admin'
    },
    {
     "user":"sharma",
     "project":1,
      "role":'user'
      },{
       "user":"masai",
       "project":1,
       "role":'normal'
         },
]

const UserTable = () => {
  function userDelete(){
    alert("Yes")
  }
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
        <Th color="blue.300" fontSize="15px">external id</Th>
      </Tr>
    </Thead>
    <Tbody>
    <Tr>
        <Flex>
        <Td mb="15px" fontWeight="800" color='teal' fontSize="18px">People (1 user)</Td>
         <UserAdd />
        </Flex>
        <Td></Td>
        <Td ></Td>
        <Td ></Td>
      </Tr>
      {
        arr.map((item)=>(
            <Tr >
            <Td > <Flex><Box marginLeft="25px" paddingRight="15px"><FaRegUserCircle color='skyblue' fontSize="23px"/></Box> {item.user}<Button onClick={userDelete} ml="35px" bgColor="red.100"><MdDeleteForever color='red' fontSize="20px"/></Button></Flex></Td>
            <Td>{item.project} Projects</Td>
            <Td >{item.role}</Td>
            <Td ></Td>
          </Tr>
        ))
      }
    </Tbody>
    {/* <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th >multiply by</Th>
      </Tr>
    </Tfoot> */}
  </Table>
</TableContainer>
    </Box>
  )
}
export default UserTable ;