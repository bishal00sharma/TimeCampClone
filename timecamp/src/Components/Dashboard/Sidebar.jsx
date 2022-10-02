import { Box, Button, Flex, Grid, Img, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { Menu,} from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import LogoBar from "../../Components/Login/Logo-bar"
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <Grid boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" alignItems="flex-start" templateRows="7vh 93vh" pos="relative">
            <Box pos="absolute" right="-20px" top="10px" backgroundColor="white" p="10px" borderRadius="50%" border="1px solid rgba(100, 100, 111, 0.2)"> <ChevronLeftIcon w={6} h={6} /> </Box>
            <LogoBar />
            <Grid id="sidebar">
                <Grid h="fit-content"  >
                    <Text>TRACK</Text>
                    <Flex>
                        <Img src={require("../../Resources/icons/dashboard/timesheet.png")} alt="TimeSheet" />
                        <Text>TimeSheet</Text>
                    </Flex>
                    
                </Grid>
                <Grid>
                    <Text>ANALYZE</Text>
                    <Flex>
                        <Img src={require("../../Resources/icons/dashboard/dashboard.png")} alt="TimeSheet" />
                        <Text>Dashboard</Text>
                    </Flex>
                        <Flex className="menu">
                            <Img src={require("../../Resources/icons/dashboard/reports.png")} alt="TimeSheet" />
                            <Text>Reports </Text>
                            <ChevronRightIcon w={4} h={4} />
                        </Flex>
                    <Flex className="menu">
                        <Img src={require("../../Resources/icons/dashboard/computer-time.png")} alt="TimeSheet" />
                        <Text>Computer Time</Text>
                        <ChevronRightIcon w={4} h={4} />
                    </Flex>
                </Grid>
                <Grid>
                    <Text>MANAGE</Text>
                    <Flex>
                        <Img src={require("../../Resources/icons/dashboard/projects.png")} alt="TimeSheet" />
                        <Text>Projects</Text>
                    </Flex>
                    <Flex>
                        <Img src={require("../../Resources/icons/dashboard/tags.png")} alt="TimeSheet" />
                       <Link to="/dashboard/tags">  <Text>Tags</Text> </Link>
                    </Flex>
                </Grid>
                <Grid>
                    <Text>TEAM</Text>
                    <Flex>
                        <Img src={require("../../Resources/icons/dashboard/users.png")} alt="TimeSheet" />
                        <Link to="/dashboard/users">  <Text>Users</Text> </Link>
                    </Flex>
                    <Flex>
                        <Img src={require("../../Resources/icons/dashboard/attendance.png")} alt="TimeSheet" />
                        <Link to="/dashboard/attendance">  <Text>Attendance</Text> </Link>
                    </Flex>
                </Grid>
            </Grid>
        </Grid>
    )
}