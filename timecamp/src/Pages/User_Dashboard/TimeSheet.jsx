import { Box, Flex, Grid, Img } from "@chakra-ui/react";
import Navbar from "../../Components/Dashboard/Navbar";
import Sidebar from "../../Components/Dashboard/Sidebar";
import CalendarDiv from "../../Components/Dashboard/Timesheet/CalendarDiv";
import CreateTask from "../../Components/Dashboard/Timesheet/CreateTask";
import TimeSheetController from "../../Components/Dashboard/Timesheet/TimeSheetController";
import Usermenu from "../../Components/Dashboard/UserMenu";

export default function TimeSheet() {
    return (
        <Grid templateColumns="12vw 88vw">
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
                        
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}