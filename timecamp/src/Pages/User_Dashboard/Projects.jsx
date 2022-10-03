import { Box, Grid } from "@chakra-ui/react";
import Navbar from "../../Components/Dashboard/Navbar";
import AllProjects from "../../Components/Dashboard/Projects/AllProjects";
import SearchProjects from "../../Components/Dashboard/Projects/SearchProjects";
import Sidebar from "../../Components/Dashboard/Sidebar";
import Usermenu from "../../Components/Dashboard/UserMenu";

export default function Projects() {
    return (
        <Grid templateColumns="15vw 85vw">
            <Sidebar />
            <Grid >
                <Navbar />
                <Box h="93vh">
                    <Usermenu title="Projects" />
                    <SearchProjects />
                    <AllProjects />
                </Box>
            </Grid>
        </Grid>
    ) 
}