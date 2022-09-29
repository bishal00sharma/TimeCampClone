import React from 'react'
import {Box,Text,Button,Input,Flex} from "@chakra-ui/react"
import { useState } from 'react'

 const Tags = () => {
  const [show, setShow] =useState(false);

  function change(){
    setShow(!show)
  }
  return (
    <Box>
        <Box style={{width:"50%",marginLeft:"50px"}}>
            <Button style={{marginLeft:"550px",marginBottom:"20px"}} bgColor="green" color="white" onClick={change}>+Add Tag List</Button>
            <Text>Manage your tags, like list of customers or activities. All workspace members can assign tags to time entries, when they track time. Project managers can set lists of tags for projects. Reports can be filtered and grouped by tags.</Text>
         {show&&<Flex style={{marginBottom:"50px",marginTop:"50px"}}>
            <Input type="text" placeholder='New List Name' />
            <Flex style={{marginBottom:"50px"}}>
              <Button style={{margin:"0px 20px"}} bgColor="green.400" color="white">Add</Button>
              <Button>Cancel</Button>
            </Flex>
            </Flex>}
            <hr style={{marginTop:"50px",marginBottom:"10px"}}/>
          <Box style={{marginBottom:"50px",display:"flex"}}>
          <Button marginRight="10px" bgColor="lightgreen" color="white">Save Settings</Button>
          <Button>Back to addons list</Button>
        </Box>
        </Box>
        <hr style={{marginTop:"50px"}}/>
        
    </Box>
  )
}
export default Tags;