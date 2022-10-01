import { Button, Flex, Grid, Img, Input, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { fetchProject } from "../../../Store/Projects/projects.actions";
import style from "./Search.module.css";
export default function SearchProjects () {
    const dispatch = useDispatch();
    return (
        <Grid className={style.search} templateColumns="2fr 2fr 0.2fr" p="20px" px="100px"> 
            <Flex>
                <Input placeholder="Search" size="md" />
                <Button colorScheme="green" p="0 30px">Add Project</Button>
            </Flex>
            <Flex>
                <Flex>
                    <Img src={require("../../../Resources/icons/dashboard/user-menu/filter.png")}/>
                    <Text>Filter</Text>
                </Flex>
                <Flex>
                    <Img src={require("../../../Resources/icons/dashboard/user-menu/collapse.png")}/>
                </Flex>
                <Flex>
                    <Text>Archived</Text>
                </Flex>
                <Flex>
                    <Img src={require("../../../Resources/icons/dashboard/user-menu/h-more.png")}/>
                </Flex>
            </Flex>
            <Flex onClick={()=> dispatch(fetchProject())}>
                <Text>Refresh</Text>
            </Flex>
        </Grid>
    )
}