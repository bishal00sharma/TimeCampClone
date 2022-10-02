import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box,  Flex, Icon, Img, Input, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import style from "./TimeSheetController.module.css";
export default function TimeSheetController() {
    const user = JSON.parse(localStorage.getItem('userToken')).split(":")[1] || "6333f7c01cc7acad26c89dcb:example:gvbdshdh";
    return (
        <Flex className={style.controller}>
            <Flex className={style.options}>
                <Text>Day</Text>
                <Text>Calendar</Text>
            </Flex>
            <Box className={style.options}>
                <Img src={require("../../../Resources/icons/dashboard/user-menu/refresh.png")}/>
            </Box>

            <Menu>
                <MenuButton>
                    <Flex className={style.options}>
                        <Img src={require("../../../Resources/icons/dashboard/user-menu/user.png")}/>
                        <Icon as={ChevronDownIcon} w={6} h={6} />
                    </Flex>
                </MenuButton>
                <MenuList>
                        <Input placeholder="Search" />
                    <MenuItem>{ user }</MenuItem>
                </MenuList>
            </Menu>
            <Flex className={style.options}>
                <Img src={require("../../../Resources/icons/dashboard/user-menu/edit.png")}/>
                <Text>Bulk Edit</Text>
            </Flex>
            <Box className={style.options}>
                <Img src={require("../../../Resources/icons/dashboard/user-menu/more.png")}/>
            </Box>

        </Flex>
    )
}