import {  Box, Flex, Grid, Img, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Navbar from "../Components/Login/Logo-bar"
import SignupForm from "../Components/Login/SignupForm"

export default function Signup () {
    return (
        <Grid>
            <Navbar />
            <Grid  w="100vw" h="90vh" alignItems="center" justifyContent="center" >
                    <Box w="80%" m="auto">
                        <form className="gridding form-div" >
                            <Text fontSize="3xl" fontWeight="bold">Start Tracking Time</Text>
                            <Text fontSize="xl" color="grey" fontWeight="700">Create an account and start with a free 14-day trial</Text>
                            <Text fontSize="lg" color="grey">All features. No credit card required</Text>
                            <Flex border="1px solid rgba(128, 128, 128, 0.226)" alignItems="center" justifyContent="center" py="8px" gap="10px"> 
                                <Img src={require("../Resources/icons/google.png")} h="20px" w="20px" alt="google-icon" />
                                <Text color="grey">Sign up with Google</Text>
                            </Flex>
                            <Text>or</Text>
                            <SignupForm />
                            <Text fontSize="sm">By signing up you agree to our <Link>Terms of Service</Link> and <Link>Privacy Policy</Link></Text>
                        </form>
                    </Box>
            </Grid>
        </Grid>
    )
}