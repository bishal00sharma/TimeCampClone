import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Box,
    color,
} from '@chakra-ui/react'

import { TriangleDownIcon } from "@chakra-ui/icons";

import style from "../Components/nav.module.css"
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className={style.nav}>
      <div className={style.comp}>
        <div className={style.logo}>
          <Link to="/">
            <img src="https://cdn-m.timecamp.com/img/greenbranding/colorLogo.svg" />
          </Link>
        </div>
        <div className={style.box}>
          <Menu>
            <MenuButton
              borderRadius="none"
              _hover={{ color: "#25CF60" }}
              bg="white"
              marginLeft="80px"
              as={Button}
              rightIcon={<TriangleDownIcon fontSize="2xs" />}
            >
              Features
            </MenuButton>
            <MenuList color="black" display="flex">
              <Box>
                <MenuItem _hover={{ bgColor: "#25CF60" }}>
                  <img
                    style={{ marginRight: "10px" }}
                    src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/automatic-time-tracking.svg"
                  />
                  Autotime Tracking
                </MenuItem>
                <MenuItem _hover={{ bgColor: "#25CF60" }}>
                  <img
                    style={{ marginRight: "10px" }}
                    src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/reporting.svg"
                  />
                  Reporting
                </MenuItem>
                <MenuItem _hover={{ bgColor: "#25CF60" }}>
                  <img
                    style={{ marginRight: "10px" }}
                    src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/productivity-tracking.svg"
                  />
                  Productivity tracking
                </MenuItem>
                <MenuItem _hover={{ bgColor: "#25CF60" }}>
                  <img
                    style={{ marginRight: "10px" }}
                    src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/timesheet-approvals.svg"
                  />
                  Timesheet approvals
                </MenuItem>
                <MenuItem _hover={{ bgColor: "#25CF60" }}>
                  <img
                    style={{ marginRight: "10px" }}
                    src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/invoicing.svg"
                  />
                  Invoicing
                </MenuItem>
                <MenuItem _hover={{ bgColor: "#25CF60" }}>
                  <img
                    style={{ marginRight: "10px" }}
                    src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/billing-rates.svg"
                  />
                  Billing rates & budgeting
                </MenuItem>
                <MenuItem _hover={{ bgColor: "#25CF60" }}>
                  <img
                    style={{ marginRight: "10px" }}
                    src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/attendance-tracking.svg"
                  />
                  Time off & attendance
                </MenuItem>
              </Box>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              borderRadius="none"
              _hover={{ color: "#25CF60" }}
              bg="none"
              marginLeft="5px"
              as={Button}
            >
              Pricing
            </MenuButton>
          </Menu>
          <Menu>
            <MenuButton
              rightIcon={<TriangleDownIcon fontSize="2xs" />}
              borderRadius="none"
              _hover={{ color: "#25CF60" }}
              bg="white"
              marginLeft="5px"
              as={Button}
              //   rightIcon={<TriangleDownIcon fontSize="2xs" />}
            >
              Integrations
            </MenuButton>
            <MenuList color="black" display="flex">
              <Box>
                <MenuItem _hover={{ bgColor: "#25CF60" }}>
                  <img
                    style={{ marginRight: "10px" }}
                    src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/Trello.svg"
                  />
                  Trello
                </MenuItem>
                <MenuItem _hover={{ bgColor: "#25CF60" }}>
                  <img
                    style={{ marginRight: "10px" }}
                    src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/GCalendar.svg"
                  />
                  Google Calendar
                </MenuItem>
                <MenuItem _hover={{ bgColor: "#25CF60" }}>
                  <img
                    style={{ marginRight: "10px" }}
                    src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/iCal.svg"
                  />
                  iCal
                </MenuItem>
                <MenuItem _hover={{ bgColor: "#25CF60" }}>
                  <img
                    style={{ marginRight: "10px" }}
                    src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/Asana.svg"
                  />
                  Asana
                </MenuItem>
                <MenuItem _hover={{ bgColor: "#25CF60" }}>
                  <img
                    style={{ marginRight: "10px" }}
                    src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/Monday.svg"
                  />
                  Monday.com
                </MenuItem>
                <MenuItem _hover={{ bgColor: "#25CF60" }}>
                  <img
                    style={{ marginRight: "10px" }}
                    src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/billing-rates.svg"
                  />
                  Jira
                </MenuItem>
                <MenuItem _hover={{ bgColor: "#25CF60" }}>
                  <img
                    style={{ marginRight: "10px" }}
                    src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/attendance-tracking.svg"
                  />
                  Time off & attendance
                </MenuItem>
              </Box>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              borderRadius="none"
              _hover={{ color: "#25CF60" }}
              bg="none"
              as={Button}
              marginLeft="5px"
            >
              Blog
            </MenuButton>
          </Menu>
        </div>
      </div>
      <div>
        <Menu>
          <MenuButton
            borderRadius="none"
            _hover={{ color: "#25CF60" }}
            bg="none"
            as={Button}
            borderRight="1px solid #25CF60"
          >
            Book a Demo
          </MenuButton>
        </Menu>
        <Menu>
          <MenuButton
            borderRadius="none"
            _hover={{ color: "#25CF60" }}
            bg="none"
            as={Button}
          >
            Signin
          </MenuButton>
        </Menu>
      </div>
      <div className={style.comp2}>
        <Button
          _hover={{ opacity: "80%" }}
          bg="#EAAA00"
          color="white"
          height="50px"
          fontSize="17px"
          width="145px"
          borderRadius="3xl"
          mr="50px"
        >
          Go to App
        </Button>
      </div>
    </div>
  );
}

export default Navbar