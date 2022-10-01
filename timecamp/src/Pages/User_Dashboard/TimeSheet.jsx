import { Box, Flex, Grid, Input } from "@chakra-ui/react";
import Navbar from "../../Components/Dashboard/Navbar";
import Sidebar from "../../Components/Dashboard/Sidebar";
import CalendarDiv from "../../Components/Dashboard/Timesheet/CalendarDiv";
import TimeSheetController from "../../Components/Dashboard/Timesheet/TimeSheetController";
import Usermenu from "../../Components/Dashboard/UserMenu";

export default function TimeSheet() {
    return (
        <Grid templateColumns="12vw 88vw">
            <Sidebar />
            <Grid>
                <Navbar />
                <Box h="93vh">
                    <Usermenu />
                    <Grid >
                        <Flex id="timesheet-menu" alignItems="center" justifyContent="space-between" h="80px" px="50px">
                            <CalendarDiv />
                            <TimeSheetController />
                        </Flex>
                        <Flex>
                            <Flex>
                                <Input placeholder="Select task and project"/>
                                <Input placeholder="note"/>
                            </Flex>
                        </Flex>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}