import {  Flex, Img, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../Store/auth/auth.actions";

export default function Usermenu({title}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = () =>{
        dispatch(logout());
        navigate("/");
    }
    const token = JSON.parse(localStorage.getItem("token")) || "";
    const user = token.split(":")[1] ;
    return (
        <Flex justifyContent="space-between" alignItems="center" px="50px" h="60px" borderBottom="1px solid rgba(128, 128, 128, 0.490)">
            <Text fontSize="xl"> {title} </Text>
            <Flex id="user-menu" alignItems="center" gap="20px" color="grey">
                <Menu>
                   <MenuButton>
                        <Img src={require("../../Resources/icons/dashboard/user-menu/settings.png")} alt="settings" />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                            <Img src={require("../../Resources/icons/dashboard/user-menu/settings.png")} alt="download"  mr="10px" />
                            Settings
                        </MenuItem>
                        <MenuItem>
                            <Img src={require("../../Resources/icons/dashboard/user-menu/puzzle.png")} alt="download"  mr="10px" />
                            Integrations
                        </MenuItem>
                        <MenuItem>
                            <Img src={require("../../Resources/icons/dashboard/user-menu/card.png")} alt="download"  mr="10px" />
                            Subscription
                        </MenuItem>
                    </MenuList>
                </Menu>

                <Menu>
                   <MenuButton>
                        <Img src={require("../../Resources/icons/dashboard/user-menu/help.png")} alt="help" />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                            <Img src={require("../../Resources/icons/dashboard/user-menu/help.png")} alt="download"  mr="10px" />
                            Help
                        </MenuItem>
                        <MenuItem>
                            <Img src={require("../../Resources/icons/dashboard/user-menu/book.png")} alt="download"  mr="10px" />
                            Knowledge Base
                        </MenuItem>
                        <MenuItem>
                        <Img src={require("../../Resources/icons/dashboard/user-menu/message.png")} alt="download"  mr="10px" />
                            Send feedback
                        </MenuItem>
                        <MenuItem>
                            <Img src={require("../../Resources/icons/dashboard/user-menu/partner.png")} alt="download"  mr="10px" />
                            Become a Partner
                        </MenuItem>
                        <hr />
                        <MenuItem>
                            <Img src={require("../../Resources/icons/dashboard/user-menu/gift.png")} alt="download"  mr="10px" />
                            What's new
                        </MenuItem>
                    </MenuList>
                </Menu>
                <Link to="/dashboard/users">
                    <Img src={require("../../Resources/icons/dashboard/user-menu/add-user.png")} alt="add_user" />
                </Link>
                <Menu>
                   <MenuButton>
                        <Img src={require("../../Resources/icons/dashboard/user-menu/profile.png")} alt="profile"  />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                            <Img src={require("../../Resources/icons/dashboard/user-menu/user.png")} alt="download"  mr="10px" />
                            {user}
                        </MenuItem>
                        <hr />
                        <MenuItem>      
                            <Img src={require("../../Resources/icons/dashboard/user-menu/download.png")} alt="download"  mr="10px" />
                            Download App
                        </MenuItem>
                        <MenuItem>
                            <Img src={require("../../Resources/icons/dashboard/user-menu/web.png")} alt="download"  mr="10px" />
                            Browser Plugin
                        </MenuItem>
                        <hr />
                        <MenuItem onClick={handleClick}>
                            <Img src={require("../../Resources/icons/dashboard/user-menu/logout.png")} alt="download"  mr="10px" />
                            Logout
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </Flex>
    )
}