import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Box,
    useDisclosure,
} from '@chakra-ui/react'

import { TriangleDownIcon } from "@chakra-ui/icons";

import style from "../Components/nav.module.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen:menu2isOpen, onOpen:menu2onOpen, onClose:menu2onClose } = useDisclosure()
  return (
    <div className={style.nav}>
      <div className={style.comp}>
        <div className={style.logo}>
          <Link to="/">
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/colorLogo.svg"
              alt=""
            />
          </Link>
        </div>
        <div className={style.box}>
          <Menu isOpen={isOpen}>
            <Link to="/features">
              <MenuButton
                borderRadius="none"
                _hover={{ color: "#25CF60" }}
                bg="white"
                marginLeft="80px"
                as={Button}
                rightIcon={<TriangleDownIcon fontSize="2xs" />}
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
              >
                Features
              </MenuButton>
            </Link>
            <MenuList color="black" display="flex" onMouseEnter={onOpen} onMouseLeave={onClose}>
              <Box>
                <Link to="/automatic">
                  <MenuItem _hover={{ bgColor: "#25CF60" }}>
                    <img
                      style={{ marginRight: "10px" }}
                      src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/automatic-time-tracking.svg"
                      alt=""
                    />
                    Autotime Tracking
                  </MenuItem>
                </Link>
                <Link to="/reporting">
                  <MenuItem _hover={{ bgColor: "#25CF60" }}>
                    <img
                      style={{ marginRight: "10px" }}
                      src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/reporting.svg"
                      alt=""
                    />
                    Reporting
                  </MenuItem>
                </Link>
                <Link to="/productivity">
                  <MenuItem _hover={{ bgColor: "#25CF60" }}>
                    <img
                      style={{ marginRight: "10px" }}
                      src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/productivity-tracking.svg"
                      alt=""
                    />
                    Productivity tracking
                  </MenuItem>
                </Link>
                <Link to="/timesheet">
                  <MenuItem _hover={{ bgColor: "#25CF60" }}>
                    <img
                      style={{ marginRight: "10px" }}
                      src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/timesheet-approvals.svg"
                      alt=""
                    />
                    Timesheet approvals
                  </MenuItem>
                </Link>
                <Link to="/invoicing">
                  <MenuItem _hover={{ bgColor: "#25CF60" }}>
                    <img
                      style={{ marginRight: "10px" }}
                      src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/invoicing.svg"
                      alt=""
                    />
                    Invoicing
                  </MenuItem>
                </Link>
                <Link to="/billing">
                <MenuItem _hover={{ bgColor: "#25CF60" }}>
                  <img
                    style={{ marginRight: "10px" }}
                    src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/billing-rates.svg"
                    alt=""
                  />
                  Billing rates & budgeting
                </MenuItem>
                </Link>
                <Link to="/timeoff">
                <MenuItem _hover={{ bgColor: "#25CF60" }}>
                  <img
                    style={{ marginRight: "10px" }}
                    src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/attendance-tracking.svg"
                    alt=""
                  />
                  Time off & attendance
                </MenuItem>
                </Link>
              </Box>
            </MenuList>
          </Menu>
          <Menu>
            <Link to="/Pricing">
              <MenuButton
                borderRadius="none"
                _hover={{ color: "#25CF60" }}
                bg="none"
                marginLeft="5px"
                as={Button}
              >
                Pricing
              </MenuButton>
            </Link>
          </Menu>

            

          <Menu isOpen={menu2isOpen}>

            <MenuButton
              rightIcon={<TriangleDownIcon fontSize="2xs" />}
              borderRadius="none"
              _hover={{ color: "#25CF60" }}
              bg="white"
              marginLeft="5px"
              as={Button}
              onMouseEnter={menu2onOpen}
              onMouseLeave={menu2onClose}
              //   rightIcon={<TriangleDownIcon fontSize="2xs" />}
            >
              Integrations
            </MenuButton>
            <MenuList color="black" display="flex" onMouseEnter={menu2onOpen} onMouseLeave={menu2onClose}>
              <Box>
              <Link to="/trello">
                <MenuItem _hover={{ bgColor: "#25CF60" }}>
                  <img
                    style={{ marginRight: "10px" }}
                    src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/Trello.svg"
                    alt=""
                  />
                  Trello
                </MenuItem>
                </Link>
                <Link to="/googleCalender">
                <MenuItem _hover={{ bgColor: "#25CF60" }}>
                  <img
                    style={{ marginRight: "10px" }}
                    src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/GCalendar.svg"
                    alt=""
                  />
                  Google Calendar
                </MenuItem>
                </Link>
                <MenuItem _hover={{ bgColor: "#25CF60" }}>
                  <img
                    style={{ marginRight: "10px" }}
                    src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/iCal.svg"
                    alt=""
                  />
                  iCal
                </MenuItem>
                <MenuItem _hover={{ bgColor: "#25CF60" }}>
                  <img
                    style={{ marginRight: "10px" }}
                    src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/Asana.svg"
                    alt=""
                  />
                  Asana
                </MenuItem>
                <MenuItem _hover={{ bgColor: "#25CF60" }}>
                  <img
                    style={{ marginRight: "10px" }}
                    src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/Monday.svg"
                    alt=""
                  />
                  Monday.com
                </MenuItem>
                <MenuItem _hover={{ bgColor: "#25CF60" }}>
                  <img
                    style={{ marginRight: "10px" }}
                    src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/billing-rates.svg"
                    alt=""
                  />
                  Jira
                </MenuItem>
                <Link to="/allIntegrations">
                <MenuItem _hover={{ bgColor: "#25CF60" }}>
                  <img
                    style={{ marginRight: "10px" }}
                    src="https://cdn-m.timecamp.com/img/greenbranding/features/icons-menu/all-integrations.svg"
                    alt=""
                  />
                  All Integrations
                </MenuItem>
                </Link>
              </Box>
            </MenuList>
          </Menu>

          <Menu>
            <Link to="/blog">
            <MenuButton
              borderRadius="none"
              _hover={{ color: "#25CF60" }}
              bg="none"
              as={Button}
              marginLeft="5px"
            >
              Blog
            </MenuButton></Link>
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
          <Link to="/auth/login">
          <MenuButton
            borderRadius="none"
            _hover={{ color: "#25CF60" }}
            bg="none"
            as={Button}
          >
            Signin
          </MenuButton>
          </Link>
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