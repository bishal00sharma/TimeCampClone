import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks, postTask } from "../../../Store/tasks/tasks.actions";

const initState = {
    task : "" ,
    note: "",
    startTime: 0,
    endTime : 0,
    isBillingStatus: false
}
export default function CreateTask () {
    const today = new Date();
    const hrs  = today.getHours()
    const min = today.getMinutes();
    const [taskDetails, setTaskDeTails] =  useState(initState);
    const token = useSelector((store)=>store.auth.token);
    const dispatch = useDispatch();

    const handleData = (e) => {
        const {name, value} = e.target;
        setTaskDeTails({...taskDetails, [name]: value});
    }
    const handleAdd = async (e) =>{
        e.preventDefault();
        await dispatch(postTask(taskDetails));
        dispatch(getTasks(token));
        setTaskDeTails(initState);
    }
    return (
        <Flex justifyContent="space-between" alignItems="center" my="50px" p="20px 50px" borderRadius="10px" border="1px solid green" boxShadow= "0px 0px 5px 4px rgba(27,245,129,0.56)">
            <Flex gap="10px">
                <Input placeholder="Select task and project" name="task" onChange={handleData} value={taskDetails.task}/>
                <Input placeholder="note" name="note" onChange={handleData} value={taskDetails.note}/>
            </Flex>
            <Flex gap={10}>
                <Text> {hrs}:{min} {hrs<12 ? "am" : "pm"}</Text>
                <Text> - </Text>
                <Text> {hrs}:{min} {hrs<12 ? "am" : "pm"} </Text>
                <Text>0h:00m</Text>
            </Flex>
            <Flex alignItems="center" gap="20px">
                <Text color="blue">Start Timer</Text>
                <Button colorScheme="green" onClick={handleAdd}>ADD TIME ENTRY</Button>
            </Flex>
        </Flex>
    )
}