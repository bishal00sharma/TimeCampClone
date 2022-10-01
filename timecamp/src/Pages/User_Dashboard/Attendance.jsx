import { Box, Flex, Grid, GridItem, Heading, Image, Select, Text } from '@chakra-ui/react';
import React from 'react';
const data= [
    {
        "users":'bishalsharma',
        "startTime":3,
        "endTime":6
    },
    {
        "users":'lokesh',
        "startTime":4,
        "endTime":10
    },
    {
        "users":'choudhary',
        "startTime":4,
        "endTime":20
    }
]

const Attendance = () => {
  return (
    <Box width="90%" margin="auto" mt="30px">
        <Text fontSize="24px" mb="40px" textAlign="left" fontWeight="500">Attendance</Text>
       
        <Select w="30%" placeholder='Select People'>
         {
              data.map((item)=>(
                <option value='option1'>{item.users}</option>
             ))
         }
            
            
        </Select>
        {
            data.map((item)=>(
                <Box mt="100px">
                <Flex pb="10px">
                    <Box><Image borderRadius="50%" width="50px" src="https://www.gravatar.com/avatar/575b5643e80b0a7cd8476c67d0da33d8?s=90&d=mm" /></Box>
                    <Text ml="10px" fontSize="22px">{item.users}</Text>
                </Flex>
         
                <Grid
                    h='200px'
                    templateColumns='repeat(4, 1fr)'
                    gap={4}
                    >
                    <GridItem w='100%' h='100' bg='blue.100'><Box><Box>PER DAY TIME</Box><Text fontSize="27px" color="green">{item.endTime-item.startTime} sec</Text></Box></GridItem>
                    <GridItem w='100%' h='100' bg='blue.100'><Box><Box>TOTAL</Box><Text fontSize="27px" color="green">{item.endTime-item.startTime} sec</Text></Box></GridItem>
                    <GridItem w='100%' h='100' bg='blue.100'><Box><Box>USED VACATION HOURS THIS YEAR</Box><Text fontSize="27px" color="green"> - </Text></Box></GridItem>
                    <GridItem w='100%' h='100' bg='blue.100'><Box><Box>PER DAY (BETWEEN FIRST AND LAST TIME)</Box><Text fontSize="27px" color="green">0 sec</Text></Box></GridItem>
                    <GridItem w='100%' h='100' bg='blue.100'><Box><Box>TOTAL BETWEEN FIRST AND LAST TIME ENTRY</Box><Text fontSize="27px" color="green">0 sec</Text></Box></GridItem>
                    <GridItem w='100%' h='100' bg='blue.100'><Box><Box>PRODUCTIVE DAYS / WORKING DAYS</Box><Text fontSize="27px" color="green">0 / 21</Text></Box></GridItem>
                    <GridItem w='100%' h='100' bg='blue.100'><Box><Box>NON WORKING DAY</Box><Text fontSize="27px" color="green">0</Text></Box></GridItem>
                    <GridItem w='100%' h='100' bg='blue.100'><Box><Box>FIRST AND LAST TIME ENTRY</Box><Text fontSize="27px" color="green"> - </Text></Box></GridItem>
                    </Grid>
             </Box>
            ))
        }
       
    </Box>
  )
}
export default Attendance;