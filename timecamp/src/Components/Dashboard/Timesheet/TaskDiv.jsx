import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { BsCurrencyDollar, BsFillPlayFill } from "react-icons/bs"
import { useDispatch } from "react-redux";
import { deleteTask, getTasks } from "../../../Store/tasks/tasks.actions";
import style from "./Task.module.css";
export default function TaskDiv({t}) {
    const dispatch = useDispatch();

    async function handleDelete(id) {
        await dispatch(deleteTask(id));
        dispatch(getTasks());
    }

    return (
        <Flex justifyContent="space-between" alignItems='center' className={style.TaskDiv}>
            <Box>
                <Text>{t.task}</Text>
                <Text>add a Tag</Text>
            </Box>
            <Text>{t.note}</Text>  
            <Flex gap="10px">
                <Button size="sm">
                    <Icon as={BsCurrencyDollar} w={5} h={5} />
                </Button>
                
                <Button size="sm" onClick={()=>handleDelete(t._id)}>
                    <Icon as={DeleteIcon} w={4} h={4} />
                </Button>
            </Flex>
            <Flex gap="50px">
                <Flex gap="10px">
                    <Text>{t.startTime}</Text>
                    <Text> - </Text>
                    <Text>{t.endTime}</Text>
                </Flex>
                <Text>
                    0h: 00m
                </Text>
            </Flex>
            <Flex gap="5px">
                
                <Button size="sm">
                    <Icon as={BsFillPlayFill} w={6} h={6} />
                </Button>
                
            </Flex>
        </Flex>
    )
}