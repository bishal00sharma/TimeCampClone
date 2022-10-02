import { Box, Flex, Grid, GridItem, Heading, Image, Select, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../../Components/Dashboard/Navbar';
import Sidebar from '../../Components/Dashboard/Sidebar';
import Usermenu from './CommonNavbar';

const Attendance = () => {
    const [data, setData]=useState({});
    const [cliLen, setCli]=useState(0);
    const [tagLen, setTag]=useState(0);
    const [clients, setClients]=useState([]);

    async function getData(){//give user id here
        // localStorage.setItem("token","63344372e20682bebf2433eb:bishal@gmail.com:no");
        let token=localStorage.getItem("token");
        let [id]=token.split(":");
        let dataRes= await fetch(`http://localhost:8080/users/tags/${id}`);
        let res= await dataRes.json();
        setData(res)
        setCli(res.clients.length);
        setClients(res.clients)
        setTag(res.tags.length)
        }
        useEffect(()=>{
          getData()
        },[])
        console.log(data)
  return (
    
      <Flex>
        <Box>
           <Sidebar />
        </Box>
        <Box>
        <Navbar />
        <Usermenu title="Attendance"/>
    
    <Box width="90%" margin="auto" mt="30px">
        <Text fontSize="24px" mb="40px" textAlign="left" fontWeight="500"></Text>
       
        <Select w="30%" placeholder='All People'>
         
              {clients.map((item)=>(
                <option value='option1'>{item}</option>
             ))}
        
            
            
        </Select>
        
                <Box mt="100px">
                <Flex pb="10px">
                    <Box><Image borderRadius="50%" width="50px" src="https://www.gravatar.com/avatar/575b5643e80b0a7cd8476c67d0da33d8?s=90&d=mm" /></Box>
                    <Text ml="10px" fontSize="22px">{data.email}</Text>
                </Flex>
         
                <Grid
                    h='200px'
                    templateColumns='repeat(4, 1fr)'
                    gap={4}
                    >
                    <GridItem w='100%' h='100' bg='blue.100'><Box><Box>NUMBER TAGS</Box><Text fontSize="27px" color="green">{tagLen} tags</Text></Box></GridItem>
                    <GridItem w='100%' h='100' bg='blue.100'><Box><Box>NUMBER CLIENTS</Box><Text fontSize="27px" color="green">{cliLen}</Text></Box></GridItem>
                    <GridItem w='100%' h='100' bg='blue.100'><Box><Box>FIRST AND LAST TIME ENTRY</Box><Text fontSize="27px" color="green"> - </Text></Box></GridItem>
                    <GridItem w='100%' h='100' bg='blue.100'><Box><Box>PRODUCTIVE DAYS / WORKING DAYS</Box><Text fontSize="27px" color="green">0 sec</Text></Box></GridItem>
                    <GridItem w='100%' h='100' bg='blue.100'><Box><Box>TOTAL BETWEEN FIRST AND LAST TIME ENTRY</Box><Text fontSize="27px" color="green">0 sec</Text></Box></GridItem>
                    <GridItem w='100%' h='100' bg='blue.100'><Box><Box>USED VACATION HOURS THIS YEAR</Box><Text fontSize="27px" color="green">0s / 0h</Text></Box></GridItem>
                    <GridItem w='100%' h='100' bg='blue.100'><Box><Box>NON WORKING DAY</Box><Text fontSize="27px" color="green">0</Text></Box></GridItem>
                    <GridItem w='100%' h='100' bg='blue.100'><Box><Box>FIRST AND LAST TIME ENTRY</Box><Text fontSize="27px" color="green"> - </Text></Box></GridItem>
                    </Grid>
             </Box>
           
       
    </Box>
    </Box>
      </Flex>
      
  )
}
export default Attendance;