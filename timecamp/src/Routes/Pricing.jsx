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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  ListItem,
  Th,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Td,
  UnorderedList,
} from "@chakra-ui/react";
import style from "../Routes/home.module.css";
import PriceComp from './PriceComp';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

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
      <Navbar />
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
      <PriceComp />

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
            <Text fontSize={"17px"}>
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
      <TableContainer marginTop={"80px"} width="75%" margin={"auto"}>
        <Table marginTop={"80px"} variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th></Th>
              <Th
                marginLeft={"30%"}
                width={"30px"}
                fontSize={"16px"}
                color="red"
                marginTop={"-4"}
              >
                Free
                <Text
                  color={"black"}
                  marginTop="8"
                  fontSize={"35px"}
                  marginBottom="20"
                >
                  $0
                </Text>
              </Th>
              <Th
                marginLeft={"30%"}
                width={"30px"}
                fontSize={"16px"}
                color="#f7b801;"
              >
                Basic
                <Text color={"black"} marginTop="8" fontSize={"35px"}>
                  $6.3
                </Text>
                <Text
                  fontSize={"13px"}
                  marginBottom="16"
                  marginTop={"6"}
                  color="gray.600"
                  fontWeight={"500"}
                >
                  $7 billed monthly
                </Text>
              </Th>
              <Th
                marginLeft={"30%"}
                width={"30px"}
                fontSize={"16px"}
                color="#00bf71"
              >
                Pro
                <Text color={"black"} marginTop="8" fontSize={"35px"}>
                  $9
                </Text>
                <Text
                  fontSize={"13px"}
                  marginBottom="16"
                  marginTop={"6"}
                  color="gray.600"
                  fontWeight={"500"}
                >
                  $10 billed monthly
                </Text>
              </Th>
              <Th
                marginLeft={"30%"}
                width={"230px"}
                fontSize={"16px"}
                color="#3c91e6;"
              >
                Enterprise
                <br />
                <Button
                  _hover={{ opacity: "80%" }}
                  marginTop="6"
                  bg="#3c91e6;"
                  color="white"
                  marginLeft={"-2.5"}
                  height="50px"
                  fontWeight="400"
                  marginBottom={"46%"}
                  fontSize="15px"
                  width="145px"
                  borderRadius="3xl"
                >
                  Contact Us
                </Button>
              </Th>
            </Tr>
          </Thead>
          <Thead>
            <Th width={"30px"} fontSize={"16px"} color="black">
              Time Tracking
            </Th>
          </Thead>
          <Tbody>
            <Tr>
              <Td fontSize={"12px"} fontWeight="500">
                Time entries
              </Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"12px"} fontWeight="500">
                Multi-platform tracking
              </Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"12px"} fontWeight="500">
                Projects & Tasks
              </Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"12px"} fontWeight="500">
                Tags
              </Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"12px"} fontWeight="500">
                Notes
              </Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"12px"} fontWeight="500">
                Goals
              </Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"12px"} fontWeight="500">
                Automatic time tracking
              </Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"12px"} fontWeight="500">
                Daily/weekly timesheet
              </Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"12px"} fontWeight="500">
                Idle time tracking
              </Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontWeight={"600"}>Reporting</Td>
            </Tr>
            <Tr>
              <Td fontSize={"12px"} fontWeight="500">
                Detailed projects & tasks
              </Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"12px"} fontWeight="500">
                GPS
              </Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"12px"} fontWeight="500">
                Export data to PDF
              </Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"12px"} fontWeight="500">
                Productivity reportss
              </Td>
              <Td></Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td ffontSize={"12px"} fontWeight="500">
                Export data to Excel
              </Td>
              <Td></Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"12px"} fontWeight="500">
                Time budget report
              </Td>
              <Td></Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"12px"} fontWeight="500">
                Revenue, Cost, Margin{" "}
              </Td>
              <Td></Td>
              <Td></Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontWeight={"600"}>Billing & Invoicing</Td>
            </Tr>
            <Tr>
              <Td fontSize={"12px"} fontWeight="500">
                Billable & unbillable hours
              </Td>
              <Td></Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"12px"} fontWeight="500">
                Time estimations
              </Td>
              <Td></Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"12px"} fontWeight="500">
                Time budget
              </Td>
              <Td></Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"12px"} fontWeight="500">
                Billing rates
              </Td>
              <Td></Td>
              <Td></Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"12px"} fontWeight={"500"}>
                Invoices
              </Td>
              <Td></Td>
              <Td></Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontWeight={"600"}>Integrations & Add-ons</Td>
            </Tr>
            <Tr>
              <Td fontSize={"12px"} fontWeight="500">
                Detailed projects & tasks
              </Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"12px"} fontWeight="500">
                Desktop App
              </Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"12px"} fontWeight="500">
                Mobile App
              </Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"12px"} fontWeight="500">
                Integrations
              </Td>
              <Td fontSize={"12px"} fontWeight="500">
                {" "}
                One integration
              </Td>
              <Td fontSize={"12px"} fontWeight="500">
                Unlimited integrations
              </Td>
              <Td fontSize={"12px"} fontWeight="500">
                Unlimited integrations
              </Td>
              <Td fontSize={"12px"} fontWeight="500">
                Unlimited integrations
              </Td>
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
              <Td fontSize={"12px"} fontWeight="500">
                GDPR compliance
              </Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"12px"} fontWeight="500">
                Advanced permission system
              </Td>
              <Td></Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"12px"} fontWeight="500">
                SSO
              </Td>
              <Td></Td>
              <Td></Td>
              <Td>✔️</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"12px"} fontWeight="500">
                On-premise
              </Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td fontSize={"12px"} fontWeight="500">
                Private SaaS
              </Td>
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
        fontSize="30px"
        fontWeight={"600"}
        marginTop={"7%"}
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
                    fontSize={"18"}
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
                    fontSize={"18"}
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
                    fontSize={"18"}
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
                    fontSize={"18"}
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
                    fontSize={"18"}
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
      <Footer />
    </div>
  );
}

export default Pricing
