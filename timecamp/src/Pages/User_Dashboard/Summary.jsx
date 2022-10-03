import React, { useEffect, useState } from 'react';
import {Box, Flex, Grid, Select,Text} from "@chakra-ui/react"
import Navbar from '../../Components/Dashboard/Navbar';
import Usermenu from './CommonNavbar';
import Sidebar from '../../Components/Dashboard/Sidebar';
import style from "./Detailed.module.css"


const Summary = () => {
    const [data, setData]=useState([]);

    async function getData(){
        localStorage.setItem("token","63344372e20682bebf2433eb:bishal@gmail.com:no");
        let token=localStorage.getItem("token");
        let [id]=token.split(":");
        let dataa= await fetch(`http://localhost:8080/users/${id}/clients`);
        let res= await dataa.json();
        setData(res.clients)
    }

    useEffect(()=>{
        getData()
    },[]);

  return (
    <Grid templateColumns="15vw 85vw">
        <Sidebar />
        <Grid>
        <Navbar />
        <Box h="93vh">
        <Usermenu title="Summary"/>
            <Flex justifyContent="space-between" px="30px" mt="50px" p={20} backgroundColor="rgba(128,128,128,0.2)" className={style.reportsDiv}>
                <Box> 
                <Text color="gray">Date Range</Text>
                <Select style={{marginRight:"10px"}} placeholder='This Month'>
                    <option value='option1'>Today</option>
                    <option value='option2'>Yesterday</option>
                    <option value='option3'>This Week</option>
                    <option value='option3'>This Month</option>
                    <option value='option3'>Last Month</option>
                    <option value='option3'>This Year</option>
                </Select>
                </Box>
                <Box>
                <Text color="gray">People</Text>
                <Select  placeholder='User'>
                    {
                        data?.map((item)=>(
                            <option value={item}>{item}</option>
                        ))
                    }
                </Select>
                </Box>
                <Box>
                <Text color="gray">Projects</Text>
                <Select style={{marginRight:"10px"}} placeholder='All my Projects'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
                </Box>
                <Box>
                <Text color="gray">Active/archived</Text>
                <Select style={{marginRight:"10px"}} placeholder='Active tasks'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
                </Box>
                <Box>
                <Text color="gray">Tags</Text>
                <Select style={{marginRight:"10px"}} placeholder='Any Tags'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
                </Box>

                <Box>
                <Text color="gray">Billing Status</Text>
                <Select style={{marginRight:"10px"}} placeholder='All'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
                </Box>
                <Box>
                <Text color="gray">Notes</Text>
                <Select style={{marginRight:"10px"}} placeholder='Search'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
                </Box>
            </Flex>
         </Box>
    </Grid>
    </Grid>
  )
}
export default Summary; 