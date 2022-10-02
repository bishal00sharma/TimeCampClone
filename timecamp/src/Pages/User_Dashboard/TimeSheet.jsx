import { Box, Flex, Grid, Img, Text } from "@chakra-ui/react";
import Navbar from "../../Components/Dashboard/Navbar";
import Sidebar from "../../Components/Dashboard/Sidebar";
import AllTasks from "../../Components/Dashboard/Timesheet/Alltasks";
import CalendarDiv from "../../Components/Dashboard/Timesheet/CalendarDiv";
import CreateTask from "../../Components/Dashboard/Timesheet/CreateTask";
import TimeSheetController from "../../Components/Dashboard/Timesheet/TimeSheetController";
import Usermenu from "../../Components/Dashboard/UserMenu";

export default function TimeSheet() {
    const today = new Date();
    const day = today.getDay()
    return (
        <Grid templateColumns="15vw 85vw">
            <Sidebar />
            <Grid>
                <Navbar />
                <Box h="93vh">
                    <Usermenu title="Timesheet" />
                    <Grid px="100px" py="30px">
                        <Flex id="timesheet-menu" alignItems="center" justifyContent="space-between" h="80px">
                            <CalendarDiv />
                            <TimeSheetController />
                        </Flex>
                        <CreateTask />
                        <Flex justifyContent="center"> 
                            <Img src={require("../../Resources/timsheet-time.png")}  />
                        </Flex>
                        <Flex alignItems="center" gap="10px">
                            <Text>Day Type : </Text>
                            <Box border="1px solid rgba(128,128,128, 0.290)" borderRadius="10px" p="10px">{day===0 || day===6 ? "Non-working day" : "Working day"}</Box>
                        </Flex>
                        <AllTasks />
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}