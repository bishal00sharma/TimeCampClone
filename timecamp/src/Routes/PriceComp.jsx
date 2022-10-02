import React from 'react'
import "./price.css";
import style from "../Routes/home.module.css";
import {
  Button,
  Flex,
  Spacer,
  Text,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

const PriceComp = () => {
  return (
    <div>
      <div className={style.pricee}>
        <div>
          <Text
            color="#25CF60"
            fontSize="16"
            textAlign="center"
            fontWeight={"500"}
          >
            Pricing
          </Text>
          <Text
            fontSize="4xl"
            fontWeight={"500"}
            marginTop="5"
            textAlign={"center"}
          >
            Your time costs more
          </Text>
          <Text
            fontSize="18"
            color="gray.500"
            marginTop="4"
            textAlign={"center"}
          >
            Use free forever plan or subscribe to a paid plan to get more
            <br />
            features!
          </Text>
        </div>
        <Flex marginTop={"6"}>
          <Spacer />
          <Button
            backgroundColor="#25CF60"
            height="12"
            marginLeft={"2"}
            marginTop={"2"}
            _hover="#25CF60;"
            color="white"
            borderRadius="22px"
          >
            Annualy 10% discount
          </Button>
          <Button
            backgroundColor="aquawhite"
            height="12"
            width="32"
            marginLeft={"2"}
            marginTop={"2"}
            color="#25CF60"
            borderRadius="22px"
          >
            Monthly
          </Button>
          <Spacer />
        </Flex>
        <div id="price">
          <div id="third">
            <div id="launch">
              <div id="launch_price">
                <Text
                  fontSize="4xl"
                  marginTop={"5%"}
                  textAlign="center"
                  fontWeight={"500"}
                >
                  Free
                </Text>
                <Text fontSize="14px" marginBottom={"5%"} textAlign={"center"}>
                  Free forever plan
                </Text>
              </div>
              <hr />
              <div>
                <Text
                  marginTop={"5%"}
                  fontSize="14px"
                  color="gray.500"
                  textAlign={"start"}
                >
                  Measure on which activities you spend time while working
                </Text>
              </div>
              <Button
                backgroundColor="#25CF60"
                height="12"
                marginLeft={"1"}
                fontWeight="500"
                width={"90%"}
                marginTop={"2"}
                _hover="#25CF60;"
                color="white"
                borderRadius="22px"
              >
                Join for Free
              </Button>
              <div id="launch_list">
                <UnorderedList fontSize="14px" textAlign={"start"}>
                  <ListItem>Unlimited users</ListItem>
                  <ListItem>Unlimited Projects & tasks</ListItem>
                  <ListItem>Desktop & Mobile app</ListItem>
                </UnorderedList>
              </div>
            </div>
          </div>
          {/* ************************** */}
          <div id="third">
            <div id="launch">
              <div id="launch_price">
                <Text
                  fontSize="4xl"
                  marginTop={"5%"}
                  textAlign="center"
                  fontWeight={"500"}
                >
                  $ 6.3
                </Text>
                <Text fontSize="14px" marginBottom={"5%"} textAlign={"center"}>
                  user/mo
                </Text>
              </div>
              <hr />
              <div>
                <Text
                  marginTop={"5%"}
                  fontSize="14px"
                  color="gray.500"
                  textAlign={"start"}
                >
                  Be more transparent and gain customers' trust
                </Text>
              </div>
              <Button
                backgroundColor="#25CF60"
                height="12"
                marginLeft={"1"}
                fontWeight="500"
                width={"90%"}
                marginTop={"2"}
                _hover="#25CF60;"
                color="white"
                borderRadius="22px"
              >
                Start your free trial
              </Button>
              <div id="launch_list">
                <UnorderedList
                  marginTop={"6%"}
                  fontSize="14px"
                  textAlign={"start"}
                >
                  <ListItem>Time rounding</ListItem>
                  <ListItem>Custom report</ListItem>
                  <ListItem>Hide time from users</ListItem>
                  <ListItem>Management roles</ListItem>
                  <ListItem>Team productivity tracking</ListItem>
                  <ListItem>XLS reports export</ListItem>
                  <ListItem>Unlimited integrations</ListItem>
                  <ListItem>Billable time & budgeting</ListItem>
                </UnorderedList>
              </div>
            </div>
          </div>
          {/* **************************** */}
          <div id="third">
            <div id="launch" style={{ backgroundColor: "#25CF60" }}>
              <div id="launch_price">
                <Text
                  color="white"
                  marginTop={"5%"}
                  fontSize="4xl"
                  textAlign="center"
                  fontWeight={"500"}
                >
                  $ 9
                </Text>
                <Text marginBottom={"5%"} fontSize="14px" textAlign={"center"}>
                  user/mo
                </Text>
              </div>
              <hr />
              <div>
                <Text
                  marginTop={"5%"}
                  color="white"
                  fontSize="14px"
                  textAlign={"start"}
                >
                  Get full control over your business
                </Text>
              </div>
              <Button
                color="#25CF60"
                height="12"
                fontWeight="500"
                marginLeft={"1"}
                width={"90%"}
                marginTop={"2"}
                _hover="white"
                backgroundColor={"white"}
                borderRadius="22px"
              >
                Start your free trial
              </Button>
              <div>
                <Text
                  marginTop={"5%"}
                  fontSize="16"
                  color="white"
                  textAlign={"start"}
                >
                  Everything in basic plus
                </Text>
              </div>
              <div id="launch_list">
                <UnorderedList
                  fontSize="14px"
                  color="white"
                  textAlign={"start"}
                >
                  <ListItem>Custom user roles</ListItem>
                  <ListItem>Billing rates</ListItem>
                  <ListItem>Invoicing</ListItem>
                  <ListItem>Timesheet approvals</ListItem>
                  <ListItem>Screenshots</ListItem>
                  <ListItem>SSO login</ListItem>
                  <ListItem>2-factor authentication</ListItem>
                </UnorderedList>
              </div>
            </div>
          </div>
          {/* **************************** */}
          <div id="third">
            <div id="launch">
              <div id="launch_price">
                <Text
                  color="#25CF60"
                  fontSize="s"
                  textAlign="center"
                  fontWeight={"500"}
                >
                  Free
                </Text>
                <Text
                  fontSize="3xl"
                  marginBottom={"5%"}
                  marginTop={"4"}
                  textAlign={"center"}
                >
                  Let's discuss
                </Text>
              </div>
              <hr />
              <div>
                <Text fontSize="14px" color="gray.500" textAlign={"start"}>
                  Customize TimeCamp to your custom needs
                </Text>
              </div>
              <Button
                backgroundColor="#25CF60"
                height="12"
                width={"90%"}
                fontWeight="500"
                marginLeft={"1"}
                marginTop={"2"}
                _hover="#25CF60;"
                color="white"
                borderRadius="22px"
              >
                Contact us
              </Button>
              <Text
                fontSize="16"
                marginTop={"5"}
                marginLeft="5%"
                textAlign={"start"}
              >
                Everything in Pro plus
              </Text>
              <div id="launch_list">
                <UnorderedList
                  marginTop={"5%"}
                  fontSize="14px"
                  textAlign={"start"}
                >
                  <ListItem>Personalized training</ListItem>
                  <ListItem>Private cloud implementation</ListItem>
                  <ListItem>Self hosted server</ListItem>
                </UnorderedList>
              </div>
            </div>
          </div>
        </div>
        <Text fontSize="18" color="gray.500" marginTop="6" textAlign={"center"}>
          SSL Secure Payment
        </Text>
      </div>
    </div>
  );
}

export default PriceComp
