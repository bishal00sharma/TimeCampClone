import { Box, Grid } from "@chakra-ui/react";
import Navbar from "../../Components/Dashboard/Navbar";
import Sidebar from "../../Components/Dashboard/Sidebar";
import Usermenu from "../../Components/Dashboard/UserMenu";
export default function TimeSheet() {
    return (
        <Grid templateColumns="12vw 88vw">
            <Sidebar />
            <Grid>
                <Navbar />
                <Box h="93vh">
                    <Usermenu />
                </Box>
            </Grid>
        </Grid>
    )
}