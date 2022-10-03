import { Box, Text, Flex, Button, Input, Link, Grid } from '@chakra-ui/react';
import React from 'react'
import {BiUserPlus} from "react-icons/bi";
import {FiMail} from "react-icons/fi"
import Navbar from '../../Components/Dashboard/Navbar';
import Sidebar from '../../Components/Dashboard/Sidebar';
import Usermenu from '../../Components/Dashboard/UserMenu';
import UserTable from './UserTable';

const Users = () => {
  return (
    <Grid templateColumns={"15vw 85vw"}>
      <Box>
         <Sidebar />
      </Box>
      <Box>
        <Navbar />
        <Usermenu title="Teams  " />
      <Box  ml="60px" mt="50px">
        <Flex borderRadius="10px" color="blue" bgColor="blue.100" padding="5px">
              < BiUserPlus style={{fontSize:"40px",marginLeft:"10px"}} />
            <Text  style={{fontSize:"17px",marginTop:"6px",marginLeft:"8px"}}> You can now invite guests like clients, vendors, or contractors. You can add them free of charge. Invite guest</Text>
        </Flex>


        <Flex width="90%" m="auto" mt="50px" bgColor="gray.100" p="20px" borderRadius="20px">
            <Flex width="80%">
                <Button bgColor="green.400" color="white" mr="20px">+Invite People</Button>
                <Button bgColor="gray.300" mr="20px">Create Group</Button>
                <Button bgColor="gray.300" mr="20px"><FiMail /></Button>
                <Text mt="7px" mr="20px">1/100 Users</Text>
                <Link mt="8px" color="blue" mr="20px">Change Number of seats</Link>
            </Flex>
            <Box width="20%">
              <Input bgColor="gray.300" placeholder="Search Users" /> 
            </Box>
        </Flex>
        <UserTable/>

    </Box>
      </Box>
    </Grid>
   

  )
}
export default Users;