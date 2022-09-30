import { Box, Img } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <Box h="10vh" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" className="gridding">
          <Link to="/">
            <Img src="https://cdn-m.timecamp.com/img/greenbranding/colorLogo.svg" alt="TimeClamp-logo" />
          </Link>
        </Box>
    )
}