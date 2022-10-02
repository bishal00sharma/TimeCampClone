import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon, Img, Text } from "@chakra-ui/react";
import style from "./TimeSheetController.module.css";
export default function TimeSheetController() {
    return (
        <Flex className={style.controller}>
            <Flex>
                <Text>Day</Text>
                <Text>Calendar</Text>
            </Flex>
            <Box>
                <Img src={require("../../../Resources/icons/dashboard/user-menu/refresh.png")}/>
            </Box>
            <Flex>
                <Img src={require("../../../Resources/icons/dashboard/user-menu/user.png")}/>
                <Icon as={ChevronDownIcon} w={6} h={6} />
            </Flex>
            <Flex>
                <Img src={require("../../../Resources/icons/dashboard/user-menu/edit.png")}/>
                <Text>Bulk Edit</Text>
            </Flex>
            <Box>
                <Img src={require("../../../Resources/icons/dashboard/user-menu/more.png")}/>
            </Box>

        </Flex>
    )
}