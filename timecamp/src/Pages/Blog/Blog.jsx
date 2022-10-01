import React from 'react'
import { Box, SimpleGrid,Container,
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  IconButton,
  Input,
  HStack,
  Center } from '@chakra-ui/react'
import axios from 'axios'
import BlogCard from './BlogCard'
import { useState } from 'react'
import { useEffect } from 'react'


const Blog = () => {
    const [blog,setBlog]=useState([])
    let getData=()=>{
        return axios.get("https://rohitcena.herokuapp.com/blog")
        .then((res)=>setBlog(res.data))
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <>
    <Container maxW={"7xl"} my={10} w={["100%","95%","85%"]}>
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column",sm:"column", md: "row",lg:"row" ,xl:"row"}}
          >
            <Flex
              flex={1}
              justifyContent={"start"}
              alignItems={"start"}
              w={"100%"}
      
            >
              <Box
                position={"relative"}
                rounded={"2xl"}
                width={"100%"}
                textAlign="left"
              >
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "1xl", sm: "2xl", lg: "3xl" }}
                textAlign="left"
                mb="10px"
              >
                <Text as={"span"} fontSize={"32px"} fontWeight="bold" textAlign="left">
                13 Best Time Tracking Software for Architects
                </Text>
              </Heading>
              <Text color={"black"} textAlign="left" mb="10px">
              Time tracking software for architects can help you better plan your work, manage projects at every stage, and stay profitable. Check our list of the best tools for architects!
              </Text>
              {/* <Button color={"blue"} bg="white" border={"1px solid blue"} borderRadius="20px" ml="0">Read the story</Button> */}
              
            </Box>
            </Flex>
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Box
                position={"relative"}
                rounded={"2xl"}
                width={"full"}
              >
                <Image
                  alt={"Hero Image"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={
                    "https://www.timecamp.com/blog/wp-content/uploads/2019/08/time-tracking-for-architects.jpg"
                  }
                />
              </Box>
            </Flex>
          </Stack>
        </Container>
        <Container maxW={"100%"} my={10} bg="black">
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column",sm:"column", md: "column",lg:"row" }}
            w="85%"
            m="auto"
          >
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
              
            >
              <Box
                position={"relative"}
                rounded={"2xl"}
                width={"full"}
                textAlign="left"
              >
                <Image
                  alt={"Hero Image"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={
                    "https://www.timecamp.com/blog/wp-content/uploads/2022/09/remote-work-automation-header-600x328.jpg.webp"
                  }
                />
                <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              >
                <Text as={"span"} fontSize={"25px"} fontWeight="bold" color={"white"}>
                What Is An Automation For Remote Workers?
                </Text>
              </Heading>
              <Text color={"white"} mb="10px">
              Due to the COVID-19 pandemic, many organizations started offering their employees to work remotely. However, this comes with many challenges that can complicate business processes.
              </Text>
              {/* <Button color={"blue"} bg="white" border={"1px solid blue"} borderRadius="20px" bgColor={"black"}>Read more</Button> */}
              </Box>
            </Flex>
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Box
                position={"relative"}
                rounded={"2xl"}
                width={"full"}
                textAlign="left"
              >
                <Image
                  alt={"Hero Image"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={
                    "https://www.timecamp.com/blog/wp-content/uploads/2018/05/project-time-tracking-min-600x328.jpg.webp"
                  }
                />
                <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              >
                <Text as={"span"} fontSize={"25px"} fontWeight="bold" color={"white"}>
                13 Best Tools for Project Time Tracking
                </Text>
              </Heading>
              <Text color={"white"} mb="10px">
              Different projects require different approaches to working hours tracking and measuring team performance.  A good project time tracking app can help 
              </Text>
              {/* <Button color={"blue"} bg="white" border={"1px solid blue"} borderRadius="20px" bgColor={"black"}>Read more</Button> */}
              </Box>
            </Flex>
          </Stack>
        </Container>
    <Box w={{sm:"100%",md:"90%",lg:"80%"}} m="auto">
        <SimpleGrid columns={[1,1, 2,2, 3]} spacing="10" mt="5" mb="5">
          {blog&&blog.map((el, index) => (
            <BlogCard
              key={el.id}
              image={el.image}
              name={el.title}
              des={el.description}
              id={el.id}
            />
          ))}
        </SimpleGrid>
    </Box>
    </>
  )
}

export default Blog