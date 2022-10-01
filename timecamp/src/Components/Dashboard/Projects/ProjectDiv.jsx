import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Grid, Icon, Img, Text } from "@chakra-ui/react";
import style from "./ProjectDiv.module.css"

export default function ProjectDiv({p}) {
    return (
        <Flex px="20px" py="10px" className={style.ProjectDiv} justifyContent="space-between">
            <Grid textAlign="left" alignItems="center"  templateColumns="3fr 1fr">
                <Grid alignItems="center">
                    <Text fontSize="xl">{p.title}</Text>
                    {
                        p.role && <Text fontSize="sm" color="green">{p.role}</Text>
                    }
                </Grid>
                <Box textAlign="left">
                    {
                        p.description &&
                        <Text fontSize="xs" color="grey">{p.description.substring(0, 20)}...</Text>
                    }
                </Box>
            </Grid>
            <Flex gap="20px" alignItems="center">
                <Button colorScheme="green">Add Task</Button>
                <Box>
                    <Img src={require("../../../Resources/icons/dashboard/reports.png")} alt="Reports" />
                </Box>
                <Box>
                    <Img src={require("../../../Resources/icons/dashboard/user-menu/h-more.png")} alt="more_options" />
                </Box>
                <Button colorScheme="red">
                <Icon as={DeleteIcon} w={6} h={6} />
                </Button>
            </Flex>
        </Flex>
    )
}