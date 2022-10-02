import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Grid, Icon, Text } from "@chakra-ui/react";
import { BsCurrencyDollar, BsFillPlayFill } from "react-icons/bs"
import { useDispatch } from "react-redux";
import { deleteTask, getTasks, updateTask } from "../../../Store/tasks/tasks.actions";
import { msToTime } from "../../Utils/msTohrs";
import style from "./Task.module.css";
export default function TaskDiv({t}) {
    const dispatch = useDispatch();

    async function handleDelete(id) {
        await dispatch(deleteTask(id));
        dispatch(getTasks());
    }

    async function handleUpdate(id,status) {
        await dispatch(updateTask({id,status}))
        dispatch(getTasks());
    }
    return (
        <Grid justifyContent="space-between" alignItems='center' className={style.TaskDiv} templateColumns="1fr 1fr 1fr 2fr 0.5fr">
            <Box>
                <Flex gap="10px">
                    <Text>{t.task}</Text>
                    <Text color="green">{t.isBillingStatus ? "$" : "   "}</Text>
                </Flex>
                    <Text>add a Tag</Text>
            </Box>
            <Text>{t.note.substring(0,10)}</Text>  
            <Flex gap="10px">
                <Button size="sm" onClick={()=>handleUpdate(t._id, !t.isBillingStatus)}>
                    <Icon as={BsCurrencyDollar} w={5} h={5} />
                </Button>
                
                <Button size="sm" onClick={()=>handleDelete(t._id)}>
                    <Icon as={DeleteIcon} w={4} h={4} />
                </Button>
            </Flex>
            <Flex gap="50px">
                <Flex gap="10px" color="grey">
                    <Text>{msToTime(t.startTime)}</Text>
                    <Text> - </Text>
                    <Text>{msToTime(t.endTime)}</Text>
                </Flex>
                <Text>
                    {
                       msToTime(Number(t.endTime) - Number(t.startTime)) 
                    }
                </Text>
            </Flex>
            <Flex gap="5px">
                
                <Button size="sm">
                    <Icon as={BsFillPlayFill} w={6} h={6} />
                </Button>
                
            </Flex>
        </Grid>
    )
}