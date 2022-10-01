import { Button, Flex, Input, Text } from "@chakra-ui/react";

export default function CreateTask () {
    const today = new Date();
    const hrs  = today.getHours()
    const min = today.getMinutes();
    return (
        <Flex justifyContent="space-between" alignItems="center" my="50px" p="20px 50px" borderRadius="10px" border="1px solid green" boxShadow= "0px 0px 5px 4px rgba(27,245,129,0.56)">
            <Flex gap="10px">
                <Input placeholder="Select task and project"/>
                <Input placeholder="note"/>
            </Flex>
            <Flex gap={10}>
                <Text> {hrs}:{min} {hrs<12 ? "am" : "pm"}</Text>
                <Text> - </Text>
                <Text> {hrs}:{min} {hrs<12 ? "am" : "pm"} </Text>
                <Text>0h:00m</Text>
            </Flex>
            <Flex alignItems="center" gap="20px">
                <Text color="blue">Start Timer</Text>
                <Button colorScheme="green">ADD TIME ENTRY</Button>
            </Flex>
        </Flex>
    )
}