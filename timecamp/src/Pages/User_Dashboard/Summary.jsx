import React from 'react';
import {Box, Select,Text} from "@chakra-ui/react"
import Navbar from '../../Components/Dashboard/Navbar';


const Summary = () => {
  return (
    <div>
        <Navbar />
        <Box display="flex" style={{justifyContent:"space-between",width:"80%",margin:"auto"}}>
         <Box>
         <Text color="gray">Date Range</Text>
         <Select style={{marginRight:"10px"}} placeholder='This Month'>
             <option value='option1'>Option 1</option>
             <option value='option2'>Option 2</option>
             <option value='option3'>Option 3</option>
         </Select>
         </Box>
         <Box>
         <Text color="gray">People</Text>
         <Select style={{marginRight:"10px"}} placeholder='User'>
             <option value='option1'>Option 1</option>
             <option value='option2'>Option 2</option>
             <option value='option3'>Option 3</option>
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