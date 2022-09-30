import {  Box, Button, Flex, Grid, Img, Stack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import LoginForm from "../Components/Login/LoginForm"
import Navbar from "../Components/Login/Navbar"

export default function Login () {
    return (
        <Grid>
            <Navbar />
            <Grid  w="100vw" h="90vh" alignItems="center" justifyContent="center" >
                <Grid templateColumns={{base:"1fr", sm:"1fr", md:"1fr", lg:"1fr 1.4fr"}} gap="100px" m="auto" w={{base:"80%",sm:"80%", md:"70%",lg:"55%"}} alignItems="center" >
                    <Stack textAlign="left" spacing='24px'>
                        <Text fontSize='xs' color="green">PRODUCT UPDATE</Text>
                        <Text fontSize="5xl" fontWeight="700">TimeCamp Plugin for Google Chrome</Text>
                        <Text fontWeight="500" fontSize="xl" color="grey">Track time without leaving Chrome in 70+ online apps.</Text>
                        <Button colorScheme="green" borderRadius="30px">Add TimeCamp for Chrome</Button>
                        <Img src={require("../Resources/login-comp.png")} alt=""></Img>
                    </Stack>
                    <Box>
                        <form className="gridding form-div">
                            <Text fontSize="2xl" fontWeight="bold">Log in to TimeCamp</Text>
                            <Flex border="1px solid rgba(128, 128, 128, 0.226)" alignItems="center" justifyContent="center" py="8px" gap="10px"> 
                                <Img src={require("../Resources/icons/google.png")} h="20px" w="20px" alt="google-icon" />
                                <Text color="grey">Log in with Google</Text>
                            </Flex>
                            <Text>or</Text>
                            <LoginForm />
                            <Grid gap="10px" templateColumns={{base:"1fr", sm:"1fr", md:"1fr 0.2fr 1f", lg:"1fr 0.2fr 1fr"}} justifyContent="center" >
                                <Link to="/auth/signup">No Account? Sign Up</Link>
                                <Text border="1px solid rgba(128, 128, 128, 0.226)">or</Text>
                                <Link>Login with SSO </Link>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}