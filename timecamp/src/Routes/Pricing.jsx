import React from 'react'
import {
  Button,
  Heading,
  Container,
  Box,
  Flex,
  Spacer,
  Stack,
  Text,
  Image,
  SimpleGrid,
  ListItem,
  Accordion,
  AccordionIcon,
  MinusIcon,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  UnorderedList,
} from "@chakra-ui/react";
import style from "../Routes/home.module.css";

const Pricing = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#F3F3F3",
          paddingTop: "6%",
          paddingBottom: "6%",
        }}
      >
        <Text
          fontSize={"34"}
          marginTop="24"
          textAlign="center"
          fontWeight="600"
        >
          TimeCamp fits perfectly for companies big and small.
          <br /> Regardless of your budget.
        </Text>
        <Text
          fontSize={"20"}
          marginTop="6"
          textAlign="center"
          fontWeight="400"
          m
        >
          Choose the most accurate pricing for you and start gaining crucial
          insights for your business.
        </Text>
        <Text fontSize={"20"} marginTop="2" textAlign="center" fontWeight="500">
          You can also start with a free 14-day trial.
        </Text>
      </div>

      {/* ********** price ************* */}
      <div style={{ marginTop: "4%" }}>
        <div>
          <Text color="#25CF60" fontSize="16" textAlign="center" as="b">
            Pricing
          </Text>
          <Text
            fontSize="4xl"
            fontWeight={"bold"}
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
                <Text color="#25CF60" fontSize="5xl" textAlign="center" as="b">
                  Free
                </Text>
                <Text fontSize="s" textAlign={"center"}>
                  Free forever plan
                </Text>
              </div>
              <hr />
              <div>
                <Text fontSize="s" textAlign={"start"}>
                  Measure on which activities you spend time while working
                </Text>
              </div>
              <Button
                backgroundColor="#25CF60"
                height="12"
                marginLeft={"2"}
                marginTop={"2"}
                _hover="#25CF60;"
                color="white"
                borderRadius="22px"
              >
                Join for Free
              </Button>
              <div id="launch_list">
                <UnorderedList textAlign={"start"}>
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
                <Text fontSize="5xl" textAlign="center" as="b">
                  $ 6.3
                </Text>
                <Text fontSize="s" textAlign={"center"}>
                  user/mo
                </Text>
              </div>
              <hr />
              <div>
                <Text fontSize="s" textAlign={"start"}>
                  Be more transparent and gain customers' trust
                </Text>
              </div>
              <Button
                backgroundColor="#25CF60"
                height="12"
                marginLeft={"2"}
                marginTop={"2"}
                _hover="#25CF60;"
                color="white"
                borderRadius="22px"
              >
                Start your free trial
              </Button>
              <div id="launch_list">
                <UnorderedList textAlign={"start"}>
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
                <Text color="white" fontSize="5xl" textAlign="center" as="b">
                  $ 9
                </Text>
                <Text fontSize="s" textAlign={"center"}>
                  user/mo
                </Text>
              </div>
              <hr />
              <div>
                <Text color="white" fontSize="s" textAlign={"start"}>
                  Get full control over your business
                </Text>
              </div>
              <Button
                color="#25CF60"
                height="12"
                marginLeft={"2"}
                marginTop={"2"}
                _hover="white"
                backgroundColor={"white"}
                borderRadius="22px"
              >
                Start your free trial
              </Button>
              <div>
                <Text fontSize="20" color="white" textAlign={"start"}>
                  Everything in basic plus
                </Text>
              </div>
              <div id="launch_list">
                <UnorderedList color="white" textAlign={"start"}>
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
                <Text color="#25CF60" fontSize="s" textAlign="center" as="b">
                  Free
                </Text>
                <Text fontSize="3xl" marginTop={"4"} textAlign={"center"}>
                  Let's discuss
                </Text>
              </div>
              <hr />
              <div>
                <Text fontSize="s" textAlign={"start"}>
                  Customize TimeCamp to your custom needs
                </Text>
              </div>
              <Button
                backgroundColor="#25CF60"
                height="12"
                marginLeft={"2"}
                marginTop={"2"}
                _hover="#25CF60;"
                color="white"
                borderRadius="22px"
              >
                Contact us
              </Button>
              <Text fontSize="20" marginTop={"5"} textAlign={"center"}>
                Everything in Pro plus
              </Text>
              <div id="launch_list">
                <UnorderedList textAlign={"start"}>
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

      {/* ************ Captera *********** */}
      <div className={style.pridiv2}>
        <h3 style={{ marginTop: "-2%" }}>
          Trusted by 18,000 teams from all over the world (and still growing!)
        </h3>
        <div className={style.subpart1}>
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/capterra.svg"
            alt="usp"
          />
          <img src="https://cdn-m.timecamp.com/img/logos/dsv.png" alt="dsv" />
          <img
            src="https://cdn-m.timecamp.com/img/logos/usp.png"
            alt="raindrop"
          />
          <img
            src="https://cdn-m.timecamp.com/img/logos/saatchi.png"
            alt="saatchi"
          />
          <img
            src="https://cdn-m.timecamp.com/img/logos/blitzmetrics.png"
            alt="havalogo"
          />
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/g2crowd.svg"
            alt="havalogo"
          />
        </div>
      </div>

      {/* *************** product touer ********** */}
      <Container maxW={"7xl"} my={8} p={[4, 8, 16]}>
        <Image
          src="https://cdn-m.timecamp.com/img/greenbranding/greenSmallSkewCircle.svg"
          mx={[0, 20, 40, 60, 80]}
          mb={-8}
        />
        <Image
          src="https://cdn-m.timecamp.com/img/greenbranding/redSmallCircle.svg"
          mx={[100, 200, 400, 600, 800]}
          mb={-2}
        />
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          bg={"#F3F3F3"}
          p={10}
          rounded={16}
        >
          <Stack spacing={4} textAlign={"center"} px={[2, 4, 8, 16, 32]}>
            <Heading fontWeight={[400, 600, 700]} marginTop={"5%"} fontSize={["2xl", "4xl"]}>
              If you want a product tour, here you can book a call demo with our
              experts.
            </Heading>
            <Text color={"gray.500"} fontSize={["sm", "md", "lg"]}>
              Hop on a call with TimeCamp's top minds to get the best possible
              introduction to our product.
            </Text>
          </Stack>
          <Flex
            justifyContent={"center"}
            direction={["column", "row", "row"]}
            my={2}
            gap={4}
          >
            <Button
              backgroundColor= "#f7b801"
              rounded={"full"}
              px={6}
              fontSize={"18"}
              fontWeight={"semibold"}
              _hover={"#ffbf00"}
              color={"white"}
              marginBottom="3%"
            >
              Book a demo
            </Button>
          </Flex>
        </Stack>
        <Image
          src="https://cdn-m.timecamp.com/img/greenbranding/blueSmallCircle.svg"
          mx={[20, 40]}
          mt={-8}
        />
        <Image
          src="https://cdn-m.timecamp.com/img/greenbranding/greenSmallCircle.svg"
          mx={[200, 400, 600, 800]}
          mt={-2}
        />
      </Container>
    </div>
  );
}

export default Pricing
