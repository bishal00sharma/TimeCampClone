import { Box,  Flex, Grid, Img, MenuButton, MenuItem, MenuList, Text, useDisclosure,Divider } from "@chakra-ui/react";
import { Menu,} from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import LogoBar from "../../Components/Login/Logo-bar"


export default function Sidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Grid boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" alignItems="flex-start" templateRows="7vh 93vh" pos="relative">
            <Box pos="absolute" right="-20px" top="10px" backgroundColor="white" p="10px" borderRadius="50%" border="1px solid rgba(100, 100, 111, 0.2)"> <ChevronLeftIcon w={6} h={6} /> </Box>
            <LogoBar />
            <Grid id="sidebar">
                <Grid h="fit-content"  >
                    <Text>TRACK</Text>
                    <Flex>
                      <Link to="/dashboard/timesheet">
                          <Img src={require("../../Resources/icons/dashboard/timesheet.png")} alt="TimeSheet" />
                          <Text>TimeSheet</Text>
                        </Link>
                    </Flex>
                </Grid>
                <Grid>
                    <Text>ANALYZE</Text>
                    <Flex>
                        <Img src={require("../../Resources/icons/dashboard/dashboard.png")} alt="TimeSheet" />
                        <Text>Dashboard</Text>
                    </Flex>
                    <Menu isOpen={isOpen} sidebar_div>
                        <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose}>
                        <Flex className="menu">
                            <Img src={require("../../Resources/icons/dashboard/reports.png")} alt="TimeSheet" />
                            <Text>Reports </Text>
                            <ChevronRightIcon w={4} h={4} />
                        </Flex>
                        </MenuButton>
                        <MenuList color="black" display="flex" onMouseEnter={onOpen} onMouseLeave={onClose}>
              <Box>
                <Text textAlign={"left"} color="gray.500">TIME REPORTS</Text>
                  <MenuItem _hover={{ bgColor: "#25CF60" }}>
                    <img
                      style={{ marginRight: "10px" }}
                      src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/reporting.svg"
                      alt=""
                    />
                    Summary
                  </MenuItem>
                  <MenuItem _hover={{ bgColor: "#25CF60" }}>
                    <img
                      style={{ marginRight: "10px" }}
                      src={"https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"}
                      alt=""
                    />
                    Detailed
                  </MenuItem>
                  <MenuItem _hover={{ bgColor: "#25CF60" }}>
                    <img
                      style={{ marginRight: "10px" }}
                      src="https://cdn-icons-png.flaticon.com/512/2370/2370266.png"
                      alt=""
                    />
                    By days
                  </MenuItem>
                  <MenuItem _hover={{ bgColor: "#25CF60" }}>
                    <img
                      style={{ marginRight: "10px" }}
                      src="https://cdn3.iconfinder.com/data/icons/outline-style-1/512/apps-512.png"
                      alt=""
                    />
                    Custom
                  </MenuItem>
                  <Divider colorScheme={"gray"}/>
                  <Text textAlign={"left"} color="gray.500">PEOPLE REPORTS</Text>
                  <MenuItem _hover={{ bgColor: "#25CF60" }}>
                    <img
                      style={{ marginRight: "10px" }}
                      src="https://icons.veryicon.com/png/o/education-technology/alibaba-big-data-oneui/multi-user.png"
                      alt=""
                    />
                    People By Tasks
                  </MenuItem>
               
                
                <MenuItem _hover={{ bgColor: "#25CF60" }}>
                  <img
                    style={{ marginRight: "10px" }}
                    src="https://icons.veryicon.com/png/o/education-technology/alibaba-big-data-oneui/multi-user.png"
                    alt=""
                  />
                  People By Days & Tasks
                </MenuItem>
                
      
                <MenuItem _hover={{ bgColor: "#25CF60" }}>
                  <img
                    style={{ marginRight: "10px" }}
                    src="https://icons.veryicon.com/png/o/education-technology/alibaba-big-data-oneui/multi-user.png"
                    alt=""
                  />
                  People By Tasks
                </MenuItem>
                <MenuItem _hover={{ bgColor: "#25CF60" }}>
                  <img
                    style={{ marginRight: "10px" }}
                    src="https://icons.veryicon.com/png/o/education-technology/alibaba-big-data-oneui/multi-user.png"
                    alt=""
                  />
                  People By Projects
                </MenuItem>
                <Divider colorScheme={"gray"}/>
                  <Text textAlign={"left"} color="gray.500">PEOPLE REPORTS</Text>
                  <MenuItem _hover={{ bgColor: "#25CF60" }}>
                    <img
                      style={{ marginRight: "10px" }}
                      src="https://static.thenounproject.com/png/912665-200.png"
                      alt=""
                    />
                    Billable,unbillable,invoiced
                  </MenuItem>
               
                
                <MenuItem _hover={{ bgColor: "#25CF60" }}>
                  <img
                    style={{ marginRight: "10px" }}
                    src="https://cdn-icons-png.flaticon.com/512/39/39563.png"
                    alt=""
                  />
                  Estimates
                </MenuItem>
                <Divider colorScheme={"gray"}/>
                  <Text textAlign={"left"} color="gray.500">OTHER</Text>
                  <MenuItem _hover={{ bgColor: "#25CF60" }}>
                    <img
                      style={{ marginRight: "10px" }}
                      src="https://pic.onlinewebfonts.com/svg/img_273202.png"
                      alt=""
                    />
                    Real-Time Dashboard
                  </MenuItem>
              </Box>
            </MenuList>

                    </Menu>
                    <Flex className="menu">
                        <Img src={require("../../Resources/icons/dashboard/computer-time.png")} alt="TimeSheet" />
                        <Text>Computer Time</Text>
                        {/* <ChevronRightIcon w={4} h={4} /> */}
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
                        <Text>Tags</Text>
                    </Flex>
                </Grid>
                <Grid>
                    <Text>TEAM</Text>
                    <Flex>
                        <Img src={require("../../Resources/icons/dashboard/users.png")} alt="TimeSheet" />
                        <Text>Users</Text>
                    </Flex>
                    <Flex>
                        <Img src={require("../../Resources/icons/dashboard/attendance.png")} alt="TimeSheet" />
                        <Text>Attendance</Text>
                    </Flex>
                </Grid>
            </Grid>
        </Grid>
    )
}