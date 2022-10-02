import { Box, Grid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Dashboard/Navbar";
import Sidebar from "../../Components/Dashboard/Sidebar";
import Usermenu from "../../Components/Dashboard/UserMenu";
import style from "./ReportsMenu.module.css"

export default function Menu () {
    return (
        <Grid templateColumns="15vw 85vw">
            <Sidebar />
            <Grid>
                <Navbar />
                <Box h="93vh">
                    <Usermenu title="Timesheet" />
                    <Grid className={style.menudiv} textAlign="left" p={20}>
                        <Box>
                            <Text >TIME REPORTS</Text>
                            <Grid templateColumns="repeat(2,1fr)" justifyContent="start" gap="20px" alignItems="center" p={10}>
                                <Link to="/dashboard/reports/summary"><Box>SUMMARY</Box></Link>
                                <Link to="/dashboard/reports/detailed"><Box>DETAILED</Box></Link>
                                <Link to=""><Box>BY DAYS</Box></Link>
                                <Link to=""><Box>CUSTOM</Box></Link>
                            </Grid>
                        </Box>
                        <Box>
                            <Text>PEOPLE REPORTS</Text>
                            <Grid templateColumns="repeat(2,1fr)" justifyContent="start" gap="20px" alignItems="center" p={10}>
                                <Link to="/dashboard/reports/summary"><Box>People by tasks</Box></Link>
                                <Link to="/dashboard/reports/detailed"><Box>People by days & tasks</Box></Link>
                                <Link to=""><Box>People by days</Box></Link>
                                <Link to=""><Box>People by projects</Box></Link>
                            </Grid>
                        </Box>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}