import { Box, Button, Flex, Heading, Image, StackDivider, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import { HiOutlineExclamationCircle} from 'react-icons/hi';
import { GrDownload} from 'react-icons/gr';
import { BsWindows} from 'react-icons/bs';
import { BsApple} from 'react-icons/bs';
import { FaUbuntu} from 'react-icons/fa';
const Dashboard = () => {
    
  return (
    
    <Flex justifyContent="space-evenly">
        <hr />
    <Box textAlign="left">
        <Heading as='h4' size='md' mb="15px" mt="15px" color="teal">TimeCamp - Desktop Application</Heading>
        <Heading as='h4' size='md' mb="15px">Computer Usage Statistics</Heading>
         <Text>TimeCamp can track applications and sites you are actively using.</Text>
         <Text>» comprehensive reports about your time usage</Text>
         <Text>» track time spend on applications</Text>
         <Text>» track time spend on websites</Text>

         <Heading as='h4' size='md' mb="15px" mt="17px">Simple Time Tracking</Heading>
         <Text>Most simple time tracking application right from your desktop.</Text>
         <Text>» projects and tasks</Text>
         <Text>» effortless time tracking</Text>
         <Text>» automatic stopwatch</Text>

         <Heading as='h4' size='md' mb="15px" mt="17px">Effortless & Automatic</Heading>
         <Text>TimeCamp captures your time automatically, so you don't need to.</Text>
         <Text>» idle time detection</Text>
         <Text>» works offline</Text>
         <Text>» lightweight app - 7 MB</Text>

    </Box>
    <Box width="40%" padding="10px" bgColor="teal.100" mt="20px" borderRadius="20px">
        <Image width="95%" margin="auto" src="https://cdn.timecamp.com/res/css/dashboard/timesheet-activities.1664285842.png"/>
       <Flex><HiOutlineExclamationCircle fontSize="70px" color="blue"/><Text padding="15px">By default all above features are activated. If you have any privacy concerns you can easily change desktop app behaviour by going to Settings  Add-ons  Desktop App Settings page.</Text></Flex>  
      
      <Box>
        <a href="https://timecamp.s3.amazonaws.com/downloadsoft/1.7.2.0/TimeCampSetup_Win.exe"><Button  p="10px" bgColor="green.400" color="white"> <GrDownload /> Download TimeCamp</Button></a> 
      </Box>
      <Flex justifyContent="space-evenly" mt="12">
         <BsWindows width="8%" color="gray" fontSize="45px" />
         <BsApple width="8%" color="gray" fontSize="45px" />
         <FaUbuntu width="8%" color="gray" fontSize="45px" />
      </Flex>
    </Box>
    
   </Flex>
  )
}
export default Dashboard;