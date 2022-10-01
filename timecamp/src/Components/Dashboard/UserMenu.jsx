import { Flex, Img, Text } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { logout } from "../../Store/auth/auth.actions";

export default function Usermenu({title}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = () =>{
        dispatch(logout());
        navigate("/");
    }

    return (
        <Flex justifyContent="space-between" alignItems="center" px="50px" h="60px" borderBottom="1px solid rgba(128, 128, 128, 0.490)">
            <Text fontSize="xl"> {title} </Text>
            <Flex id="user-menu" alignItems="center" gap="20px">
                <Img src={require("../../Resources/icons/dashboard/user-menu/settings.png")} alt="settings" />
                <Img src={require("../../Resources/icons/dashboard/user-menu/help.png")} alt="help" />
                <Img src={require("../../Resources/icons/dashboard/user-menu/add-user.png")} alt="add_user" />
                <Img src={require("../../Resources/icons/dashboard/user-menu/profile.png")} alt="profile" onClick={handleClick} />
            </Flex>
        </Flex>
    )
}