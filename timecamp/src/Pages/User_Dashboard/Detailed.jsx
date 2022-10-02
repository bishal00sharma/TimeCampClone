import React, { useEffect, useState } from 'react';
import {Box, Select,Text} from "@chakra-ui/react"
import Navbar from '../../Components/Dashboard/Navbar';
import Usermenu from './CommonNavbar';


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
    <div>
        <Navbar />
        <Usermenu title="Detailed"/>
        <Box display="flex" style={{justifyContent:"space-between",width:"80%",margin:"auto", marginTop:"50px"}}>
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
         
         </Box>
         <Box style={{width:"200px",marginLeft:"150px",marginTop:"20px"}}>
         <Text color="gray">Notes</Text>
         <Select style={{marginRight:"10px"}} placeholder='Search'>
             <option value='option1'>Option 1</option>
             <option value='option2'>Option 2</option>
             <option value='option3'>Option 3</option>
         </Select>
         </Box>
    </div>
  )
}
export default Summary; 