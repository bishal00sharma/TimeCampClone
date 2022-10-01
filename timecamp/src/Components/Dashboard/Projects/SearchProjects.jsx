import { Button, Flex, Grid, Img, Input, Text } from "@chakra-ui/react";
import style from "./Search.module.css";
export default function SearchProjects () {
    return (
        <Grid className={style.search} templateColumns="1fr 2fr" p="20px"> 
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
        </Grid>
    )
}