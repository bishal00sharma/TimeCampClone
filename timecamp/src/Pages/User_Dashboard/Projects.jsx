import { Box, Flex, Grid, Img } from "@chakra-ui/react";
import Navbar from "../../Components/Dashboard/Navbar";
import SearchProjects from "../../Components/Dashboard/Projects/SearchProjects";
import Sidebar from "../../Components/Dashboard/Sidebar";
import Usermenu from "../../Components/Dashboard/UserMenu";

export default function Projects() {
    return (
        <Grid templateColumns="12vw 88vw">
            <Sidebar />
            <Grid>
                <Navbar />
                <Box h="93vh">
                    <Usermenu title="Projects" />
                    <SearchProjects />
                </Box>
            </Grid>
        </Grid>
    ) 
}