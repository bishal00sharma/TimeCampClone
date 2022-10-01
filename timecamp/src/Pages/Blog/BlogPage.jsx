import axios from 'axios'
import {Box,Heading,Image,Text} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BlogPage = () => {
    const [data,setData]=useState({})
    const params=useParams()
    console.log(params.id)
    const getData=()=>{
        return axios.get(`https://rohitcena.herokuapp.com/blog/${params.id}`)
        .then((res) => setData(res.data))
    }
    useEffect(()=>{
        getData()
    },[])
    console.log(data)
  return (
    <Box mt="150px" textAlign={"left"}>
       <Heading mb="50px" fontSize="50px">{data.title}</Heading>
       <Image src={data.image} alt={data.title} w="100%" mb="50px"/>
       <Text fontSize={"20px"}>{data.description}</Text>
       <Text fontSize={"20px"}>We live in a fast-paced world where time is perceived as an extremely valuable asset, especially when it comes to work. I bet most of you at least once dreamed about an extra hour per day, hoping it’ll be enough to finish all the assignments before the deadlines. For this reason, time tracking has recently become much more popular. Many companies and individuals use time tracking software to stay on top of the work.</Text>
       <Text fontSize={"20px"}>Project management software is an application that helps project managers to organize and manage their tasks and projects effectively. It helps in planning, scheduling, resource allocation, change management, collaboration, and communication with stakeholders.Google project management tools are the apps in the Google Suite that helps project managers organize and manage their tasks and projects effectively. You may integrate the G-Suite apps with dedicated PM software like Trello and Astana to manage your projects more effectively.Project management software is essential because projects can veer off track without a means to keep everything in check.But what exactly are the Google project management tools, how do you measure goals using these apps, and what are the benefits and limitations of using these apps?This ultimate guide to Google project management tools will answer these and more questions.</Text>  
    </Box>
  )
}

export default BlogPage