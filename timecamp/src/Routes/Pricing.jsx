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
  ListItem,
  UnorderedList,
  SimpleGrid,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Accordion,
  AccordionPanel,
  AccordionButton,
  AccordionItem,
} from "@chakra-ui/react";
import style from "../Routes/home.module.css";

const Pricing = () => {
  
  const customerApi = [
    {
      title: "Improving your records every day",
      desc: "Being able to measure the time each task takes or each activity that takes place during the day, brings control to your time and improves your own records to grow professionally every day more.",
      name: "Felipe",
      desig: "Software Developer",
    },
    {
      title: "A huge asset for our remote business",
      desc: "TimeCamp was a recent implementation for us after using a different time tracking system. It is a clean easy to use software with barely any learning curve. It has everything we need, min by min tracking, notes, projects, tasks, multiple reports, etc. It has been a huge asset to our remote business",
      name: "Michelle",
      desig: "Recruiting Director",
    },
    {
      title: "We can distribute workload in a fair basis",
      desc: "With TimeCamp we are capable to understand exactly which part of the project require more time so we can find a solution and also the saturation of the team so we can distribute workload in a fair basis",
      name: "Capterra user",
      desig: "Freelancer",
    },
  ];
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
            <Heading
              fontWeight={[400, 600, 700]}
              marginTop={"5%"}
              fontSize={["2xl", "4xl"]}
            >
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
              backgroundColor="#f7b801"
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

      {/* ******************* what customers say ************************** */}
      <Text fontSize={"37px"} fontWeight="bold">
        What customers say
      </Text>
      <SimpleGrid
        columns={[1, null, 3]}
        marginTop="4%"
        marginLeft="10%"
        marginRight={"10%"}
        // border="1px"
        spacing="80px"
      >
        {customerApi.map((el) => {
          return (
            <>
              <Box
                height="auto"
                borderRadius={"2%"}
                boxShadow="rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;"
              >
                <Text
                  marginTop="11%"
                  fontSize={"17px"}
                  fontWeight={"600"}
                  marginLeft="9%"
                  textAlign="start"
                >
                  {el.title}
                </Text>
                <Text
                  marginTop="7%"
                  fontSize={"17px"}
                  fontWeight={"500"}
                  marginLeft="9%"
                  marginRight={"5%"}
                  textAlign="start"
                >
                  {el.desc}
                </Text>
                <Text
                  marginTop="14%"
                  fontSize={"14px"}
                  fontWeight={"500"}
                  marginLeft="9%"
                  marginRight={"10%"}
                  textAlign="end"
                >
                  {el.name}
                </Text>
                <Text
                  marginTop="1%"
                  fontSize={"15px"}
                  fontWeight={"400"}
                  marginLeft="9%"
                  marginRight={"9%"}
                  textAlign="end"
                  marginBottom={"12%"}
                >
                  {el.desig}
                </Text>
              </Box>
            </>
          );
        })}
      </SimpleGrid>

      {/* ********************************************** */}
      <Text fontSize={"38px"} marginTop="8%" fontWeight="bold">
        Choose the right fit for you
      </Text>

      {/* ******************** table ********************** */}
      <TableContainer marginTop={"2%"} width="81%" margin={"auto"}>
        <Table variant="striped" colorScheme="gray">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th fontWeight={"600"}>Time tracking</Th>
              <Th width={"30px"}>Free</Th>
              <Th width={"30px"}>Basic</Th>
              <Th width={"30px"}>Pro</Th>
              <Th width={"30px"}>Enterprise</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td
               fontSize={"14px"}>Time entries</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"14px"}>Multi-platform tracking</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"14px"}>Projects & Tasks</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"14px"}>Tags</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"14px"}>Notes</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"14px"}>Goals</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"14px"}>Automatic time tracking</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"14px"}>Daily/weekly timesheet</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"14px"}>Idle time tracking</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontWeight={"600"}>Reporting</Td>
            </Tr>
            <Tr>
              <Td fontSize={"14px"}>Detailed projects & tasks</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"14px"}>GPS</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"14px"}>Export data to PDF</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"14px"}>Productivity reportss</Td>
              <Td></Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"14px"}>Export data to Excel</Td>
              <Td></Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"14px"}>Time budget report</Td>
              <Td></Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"14px"}>Revenue, Cost, Margin </Td>
              <Td></Td>
              <Td></Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontWeight={"600"}>Billing & Invoicing</Td>
            </Tr>
            <Tr>
              <Td fontSize={"14px"}>Billable & unbillable hours</Td>
              <Td></Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"14px"}>Time estimations</Td>
              <Td></Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"14px"}>Time budget</Td>
              <Td></Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"14px"}>Billing rates</Td>
              <Td></Td>
              <Td></Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"14px"}>Invoices</Td>
              <Td></Td>
              <Td></Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontWeight={"600"}>Integrations & Add-ons</Td>
            </Tr>
            <Tr>
              <Td fontSize={"14px"}>Detailed projects & tasks</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"14px"}>Desktop App</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"14px"}>Mobile App</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"14px"}>Integrations</Td>
              <Td fontSize={"14px"}> One integration</Td>
              <Td fontSize={"14px"}>Unlimited integrations</Td>
              <Td fontSize={"14px"}>Unlimited integrations</Td>
              <Td fontSize={"14px"}>Unlimited integrations</Td>
            </Tr>
            <Tr>
              <Td fontSize={"14px"}>Calendar integration</Td>
              <Td></Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontWeight={"600"}>Security</Td>
            </Tr>
            <Tr>
              <Td fontSize={"14px"}>GDPR compliance</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"14px"}>Advanced permission system</Td>
              <Td></Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"14px"}>SSO</Td>
              <Td></Td>
              <Td></Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"14px"}>On-premise</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"14px"}>Private SaaS</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td>✔️</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      {/* *************************************************** */}
      <Container maxW={"6xl"} my={8}>
        <Image
          src="https://cdn-m.timecamp.com/img/greenbranding/greenSmallSkewCircle.svg"
          mx={[20, 40, 60, 80]}
          mb={-8}
        />
        <Image
          src="https://cdn-m.timecamp.com/img/greenbranding/redSmallCircle.svg"
          mx={[200, 400, 600, 800]}
          mb={-2}
        />
        <Stack
          as={Box}
          borderRadius="20px"
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          bg={"#F3F3F3"}
          p={10}
          rounded={10}
        >
          <Flex
            flexDirection={["column", "column", "row"]}
            justifyContent={"space-between"}
          >
            <Flex marginLeft={"20%"} spacing={6} textAlign={"left"}>
              <Heading fontWeight={600} fontSize={["md", "lg", "xl"]}>
                Just when you had enough.
              </Heading>
              <Heading fontWeight={400} fontSize={["md", "lg", "xl"]}>
                Try Time Camp.
              </Heading>
            </Flex>
            <Stack marginLeft="-12" width={"30%"}>
              <Button
                color={"white"}
                bg={"#F7B801"}
                rounded={"full"}
                marginLeft="-10%"
                width="50%"
                _hover={"#ffbf00"}
              >
                Book a Demo
              </Button>
            </Stack>
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

      {/* ******************************************************** */}
      <Text
        fontSize="3xl"
        fontWeight={"500"}
        marginTop={"3%"}
        marginBottom="10"
      >
        Frequently Asked Questions
      </Text>
      <Accordion maxW={"4xl"} marginLeft="15%" allowMultiple>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  {isExpanded ? <Box>➖</Box> : <Box>➕</Box>}
                  <Box
                    height={"12"}
                    flex="1"
                    marginTop={"6"}
                    marginLeft="4"
                    fontSize={"20"}
                    textAlign="start"
                    fontWeight={"500"}
                  >
                    What forms of payment do you accept?
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign="start">
                We accept all major credit cards - Visa, Mastercard, American
                Express, PayPal. We also accept wire transfers and check that
                cover annual payments over $2000. You'll receive an invoice for
                each charge made.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
      <Accordion maxW={"4xl"} marginLeft="15%" allowMultiple>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  {isExpanded ? <Box>➖</Box> : <Box>➕</Box>}
                  <Box
                    height={"12"}
                    flex="1"
                    marginTop={"6"}
                    marginLeft="4"
                    fontSize={"20"}
                    textAlign="start"
                    fontWeight={"500"}
                  >
                    Can i change my plan?
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign="start">
                You can switch plans, change the number of seats, upgrade or
                cancel your subscription any time you want or during the billing
                period, without any consequences. Additional charges will be
                automatically prorated. According to our policy, we do not grant
                any refunds.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
      <Accordion maxW={"4xl"} marginLeft="15%" allowMultiple>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  {isExpanded ? <Box>➖</Box> : <Box>➕</Box>}
                  <Box
                    height={"12"}
                    flex="1"
                    marginTop={"6"}
                    marginLeft="4"
                    fontSize={"20"}
                    textAlign="start"
                    fontWeight={"500"}
                  >
                    Do you offer discounts?
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={3} textAlign="start">
                We offer a 10% discount when billed annually. You can also
                contact us for an additional discount for larger volume of
                seats. Please contact us at sales@timecamp.com.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
      <Accordion maxW={"4xl"} marginLeft="15%" allowMultiple>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  {isExpanded ? <Box>➖</Box> : <Box>➕</Box>}
                  <Box
                    height={"12"}
                    flex="1"
                    marginTop={"6"}
                    marginLeft="4"
                    fontSize={"20"}
                    textAlign="start"
                    fontWeight={"500"}
                  >
                    Do you offer discounts for non-profit organizations?
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={3} textAlign="start">
                We offer an additional 30% discount for non-profits,
                universities, students and schools. Please contact our support
                at help@timecamp.com with a copy of your 501(c)(3) paperwork.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
      <Accordion maxW={"4xl"} marginLeft="15%" allowMultiple>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  {isExpanded ? <Box>➖</Box> : <Box>➕</Box>}
                  <Box
                    height={"12"}
                    flex="1"
                    marginTop={"6"}
                    marginLeft="4"
                    fontSize={"20"}
                    textAlign="start"
                    fontWeight={"500"}
                  >
                    Do you offer an on-premise version of TimeCamp?
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign="start">
                Yes, for bigger organizations with more than 100 employees. For
                more information please contact us at sales@timecamp.com.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Pricing
