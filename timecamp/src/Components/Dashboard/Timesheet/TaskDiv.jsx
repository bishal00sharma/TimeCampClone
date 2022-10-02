import { Flex, Text } from "@chakra-ui/react";

export default function TaskDiv({t}) {
    return (
        <Flex >
            <Text>{t.task}</Text>
            <Text>{t.startTime}</Text>
            <Text>{t.endTime}</Text>
        </Flex>
    )
}