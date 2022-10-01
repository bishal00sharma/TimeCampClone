import { Flex,Icon, Img, Text } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"

import style from "./CalenderDiv.module.css"
export default function CalendarDiv () {
    const today = new Date();
    const day = today.getDay()
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = today.getDate()
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const m = today.getMonth();
    return (
        <Flex alignItems="center" gap="10px">
            <Flex className={style.controller}>
                <Icon as={ChevronLeftIcon} w={6} h={6} />
                <Flex>
                    <Img src={require("../../../Resources/icons/dashboard/user-menu/calendar.png")} alt="calendar"/>
                    <Icon as={ChevronDownIcon} w={6} h={6} />
                </Flex>
                <Icon as={ChevronRightIcon} w={6} h={6} />
            </Flex>
            <Flex>
                <Text>{days[day]}, {date} {months[m]}</Text>
            </Flex>
        </Flex>
    )
}