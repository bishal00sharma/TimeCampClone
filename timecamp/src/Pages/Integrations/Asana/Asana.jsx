import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
     Button, 
     Container,  
     Flex,  
     Heading, 
     HStack, 
     IconButton, 
     Image, 
     Input, 
     SimpleGrid, 
     Stack, 
     Text 
    } from '@chakra-ui/react';
  import { AiOutlineGoogle } from "react-icons/ai";
  import React from 'react';
  import styles from "../Asana/Asana.module.css"
  import Footer from '../../../Components/Footer';
  import Navbar from '../../../Components/Navbar';
  
  const Asana = () => {
    return (
      <>
      <Navbar />
        <Container
          maxW="100%"   
          pt="96px" 
          pb="128px" 
          px={["0%","8","12%"]}
          >
            <Container 
              maxW="100%"  
              h="100%" 
              px={["0%","6","10%"]}
            >
              <Stack 
                direction={["column","column","row"]}  
                h="100%"  
              >
                <Flex 
                  w={["100%","100%","12%"]}
                  alignItems={["center","center","start"]} 
                  justifyContent={["center","center","end"]}
                >
                  <Image
                    align={["center","center"]}
                    alt={"Hero Image"}
                    maxH={["100px","100px","100px"]}
                    maxW={["100px","100px","100px"]}
                    pt="20px"
                    src={"https://cdn-m.timecamp.com/img/greenbranding/integrations/asana.png"} 
                  /> 
                </Flex>
                <Stack 
                  pl={"20px"}
                  pr={"20px"}
                  flex={1}>
                  <Heading
                    fontWeight={600}
                    display="flex"
                    justifyContent={["center","center","start"]}
                  >
                    <Text
                      as={"span"} 
                      my="16px" 
                      fontSize={"2xl"}>
                      Asana time tracking
                    </Text>
                  </Heading>
                  <Text 
                    color={"blackAlpha.800"} 
                    fontWeight={600} 
                    align={["center","center","start"]} 
                    mt="0px">
                    Connect Asana with TimeCamp for the ultimate project management tool. 
                    Get the best of both worlds and take your project to the next level with the 
                    Asana time tracking integration!
                  </Text>
                  <Stack 
                    spacing={{ base: -8, sm: -10 }} 
                    direction={["column", "column", "row"]}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Flex 
                      gap={["10px","10px","0px"]} 
                      direction={["column", "column", "row"]}
                      w="100%" 
                      mt="30px" 
                      display="flex" 
                      pr={["0px","0px","30px"]}
                      alignItems={["center"]} 
                      justifyContent={"center"}
                    >
                      <Input
                        w={["85%","85%","55%"]}
                        rounded={"full"}
                        size={"lg"}
                        fontWeight={"normal"}
                        fontSize={["xs", "sm", "sm"]}
                        px={6}
                        bg={"white"}
                        placeholder={"Add your email"}
                        boxShadow={"lg"}
                        textAlign={["center","center","start"]}
                      />
                      <Button
                        rounded={"full"}
                        size={"lg"}
                        fontSize={["xs","sm","md"]}
                        px={10}
                        w={["55%","55%","25%"]}
                        color={"white"}
                        bg={"#37c266"}
                        _hover={"#42f87f"}
                      >
                        Start tracking time
                      </Button>
                    </Flex>
                  </Stack>
                  <HStack 
                    spacing={8} 
                  >
                    <Flex 
                      mt="16px" 
                      display="flex" 
                      alignItems="center" 
                      justifyContent={"center"}
                      direction={["column", "column", "row"]} 
                      gap={{ base: 6, sm: 8, md: 6 }}
                    >
                      <Flex 
                        gap={2} 
                        w={"45%"}
                        alignItems={"center"}
                      >
                        <Text 
                          color={"gray.500"} 
                          alignContent={"center"} 
                          justifyContent={"center"}
                        >
                          Or sign up with:
                        </Text>
                        <IconButton
                          icon={<AiOutlineGoogle />}
                          bg={"#37c266"}
                          color={"white"}
                          rounded={"full"}
                          w={4}
                          _hover={"#42f87f"}
                        />
                      </Flex>
                      <Text 
                        w={"55%"} 
                        fontSize={12} 
                        color={"gray.500"}
                      >
                        By signing up you agree to our
                        <Text 
                          as={"span"} 
                          color="#37c266"
                        >
                          {" "}Terms and Conditions{" "}
                        </Text>
                        {" "}and
                        <Text 
                          as={"span"} 
                          color="#37c266"
                        >
                          {" "}Privacy Policy{" "}
                        </Text>
                        .
                      </Text>
                    </Flex>
                  </HStack>
                </Stack>
              </Stack>
            </Container>
        </Container>
        <Container
          maxW={"100%"}
          pb={"75px"}
          px={["6%","8%","12%"]}
        >
          <Box
            h={"100%"}
            maxW="100%"
          >
            <Flex
              h={"60%"}
              pt={"32px"}
              pb="16px"
              display={"flex"}
              direction={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              borderBottom={"1px"}
              borderColor="lightgray"
            >
              <Text
                textAlign={"center"}
                fontWeight={600}
                fontSize={["md", "lg"]}
              >
                Trusted by 18,000 teams from all over the world (and still growing!)
              </Text>
              <SimpleGrid
                columns={[1,1,3,6]}
                h="80%"
                m={"auto"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Box py="18px" px="40px" alignItems={"center"} justifyContent={"center"}>
                  <Image maxH={"19px"} mb={"8px"} src={"https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/stars.svg"} />
                  <Image src={"https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/capterra.svg"} />
                </Box>
                <Box alignItems={"center"} justifyContent={"center"} py="18px" px="40px"  >
                  <Image alignItems={"center"} justifyContent={"center"} maxH={"25px"} src={"https://cdn-m.timecamp.com/img/logos/dsv.png"} />
                </Box>
                <Box py="18px" px="40px" >
                  <Image maxH={"36px"} src={"https://cdn-m.timecamp.com/img/logos/usp.png "} />
                </Box>
                <Box py="18px" px="40px" >
                  <Image maxH={"39px"} src={"https://cdn-m.timecamp.com/img/logos/saatchi.png"} />
                </Box>
                <Box py="18px" px="40px" >
                  <Image maxH={"45px"} src={"https://cdn-m.timecamp.com/img/logos/blitzmetrics.png"} />
                </Box>
                <Box py="18px" px="40px" >
                  <Image maxH={"19px"} mb={"8px"} src={"https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/stars.svg"} />
                  <Image src={"https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/g2crowd.svg"} />
                </Box>
              </SimpleGrid>
            </Flex>
            <Box
              h="40%"
              pt="28px"
              pb="56px"
            >
              <Text
                textAlign={"center"}
                fontWeight={600}
                fontSize={"md"}
                pr={"16px"}
              >
                Want to track time in your team ?
                <Text
                  fontWeight={700}
                  fontSize={"md"}
                  as={"span"} 
                  color="#37c266"
                >
                  {"  "}
                  Book a Demo 
                </Text>
              </Text>
            </Box>
          </Box>
        </Container>
        <Container
          maxW={"100%"}
          backgroundColor={"#F3F3F3"}
          pt={"80px"}
          px={["2%", "6%", "12%"]}
        >
          <Container
            maxW={"100%"}
            h="100%"
            pt={"64px"}
            px={["2%", "6%", "12%"]}
          >
            <Stack
              maxW={"100%"}
              h={"100%"}
            >
              <Heading
                fontSize={"41px"}
                fontWeight={700}
                mb={"2rem"}
                textAlign={"center"}
                lineHeight={"1.0"}
              >
                How it works
              </Heading>
              <Text
                fontSize={"20px"}
                fontWeight={600}
                px={"10%"}
                textAlign={"center"}
                lineHeight={"1.5"}
              >
                Just follow our 4-step tutorial to enable time tracking with Asana thanks to the 
                integration with TimeCamp.
              </Text>
              <Box
                pt="32px"
                display={"flex"}
                justifyContent={"center"}
              >
                <Button
                  w={["100%","80%","34%"]}
                  backgroundColor= {"#3c91e6"}
                  borderRadius={"26px"}
                  px={["15px","20px","40px"]}
                  py={["9px","12px","15px"]}
                  h={"70px"}
                >
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={["left","left","left"]}
                    gap={["8px","12px","16px"]}
                  >
                    <Image maxW={"20%"} maxH={"80%"} src='https://cdn-m.timecamp.com/img/integrations/chrome.png'></Image>
                    <Text
                      fontSize={["1rem"]}
                      fontWeight={700} 
                      lineHeight={["0.8","1.1","1.5"]}
                      color={"white"}
                    >Track time in Chrome</Text> 
                  </Stack>
                </Button>
              </Box>
              <Box
                pt="32px"
                display={"flex"}
                justifyContent={"center"}
              >
                <Button
                 w={["100%","80%","34%"]}
                 backgroundColor= {"#3c91e6"}
                 borderRadius={"26px"}
                 px={["15px","20px","40px"]}
                 py={["9px","12px","15px"]}
                 h={"70px"}
                >
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={["left","left","left"]}
                    gap={["8px","12px","16px"]}
                  >
                    <Image maxW={"30%"} maxH={"80%px"} src='https://cdn-m.timecamp.com/img/integrations/edge.svg'></Image>
                    <Text
                      fontSize={["1rem"]}
                      fontWeight={700} 
                      lineHeight={["0.8","1.1","1.5"]}
                      color={"white"}
                    >Track time in Edge</Text>
                  </Stack> 
                </Button>
              </Box>
              <Box
                mb={"80px"}
              >
                <SimpleGrid
                  columns={[1,1,2]} 
                >
                  <Box px={"15px"} pt={"80px"}>
                    <Text
                      px={"22px"}
                      pb={"16px"}
                      textAlign={["center","center","left"]}
                      fontSize={"16px"}
                      fontWeight={700}
                      lineHeight={1.1}
                    >
                      Time tracking in Asana
                    </Text>
                    <Text
                      px={"28px"}
                      pb={"16px"}
                      textAlign={["center","center","left"]}
                      fontSize={"16px"}
                      fontWeight={600}
                      lineHeight={1.5}
                    >
                      Track time in Asana and get more insights into the projects and tasks 
                      assigned to your teams. Learn more about your projects and make better decisions 
                      based on time tracking data. Analyze time spent by your team, identify bottlenecks, 
                      and start improving your processes without a hassle.
                    </Text>
                  </Box>
                  <Box px={"15px"} pt={"80px"}>
                    <Text
                      px={"22px"}
                      pb={"16px"}
                      textAlign={["center","center","left"]}
                      fontSize={"16px"}
                      fontWeight={700}
                      lineHeight={1.1}
                    >
                     Google Chrome plugin
                    </Text>
                    <Text
                      px={"28px"}
                      pb={"16px"}
                      textAlign={["center","center","left"]}
                      fontSize={"16px"}
                      fontWeight={600}
                      lineHeight={1.5}
                    >
                      Now, by using our Google Chrome plugin, you can track time directly in Asana. 
                      No more jumping between apps while you work. Our browser extension adds a timer button to Asana.
                       Keep it simple and focus on your work as well as your team's productivity.
                    </Text>
                  </Box>
                </SimpleGrid>
              </Box>
              <div className={styles.image}>
                <img src='https://cdn-m.timecamp.com/img/landing-page/ppc_integrations/asana.png' />
              </div>
            </Stack>
          </Container>
        </Container>
        <Container
          py={"64px"}
          px={["2%", "6%", "12%"]}
          // border={"1px"}
          // borderColor={"black"}
          maxW={"100%"}
        >
          <Container
            // border={"1px"}
            // borderColor={"black"}
            maxW={"100%"}
            h={"100%"}
          >
            <Flex
              pb={"72px"}
              display={"flex"}
              justifyContent={"center"}
              direction={"column"}
            >
              <Heading
                py={"16px"}
                fontSize={"36px"}
                fontWeight={600}
                textAlign={"center"}
                lineHeight={1.1}
              >
                Easy Setup
              </Heading>
              <Text
                pt={"16px"}
                fontSize={"18px"}
                px={["2%", "6%", "12%"]}
                fontWeight={600}
                textAlign={"center"}
                lineHeight={1.5}
              >
                Note: If you don't have a TimeCamp account, click <Text as={"span"} color="#37c266" >here</Text>  to register for a free 14-day trial.
              </Text>
              <Text
                fontSize={"18px"}
                px={["2%", "6%", "12%"]}
                fontWeight={600}
                textAlign={"center"}
                lineHeight={1.5}
              >
                Below you can find how to enable the Asana time tracking integration:
              </Text>
            </Flex>
            <Stack
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              direction={["column","column","row"]}
              spacing={[10,12,14]}
              px={["2%", "6%", "12%"]}
              width={"100%"}
              // border={"1px"}
              // borderColor={"black"}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                w={["90%","60%","30%"]}
              >
                <Image src='https://cdn-m.timecamp.com/img/greenbranding/automaticMode.png' ></Image>
              </Box>
              <Stack
                w={["100%","90%","70%"]}
                px={["2%", "6%", "12%"]}
                // border={"1px"}
                // borderColor={"magenta"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                direction={["column"]}
                spacing={["64px","32px","28px"]}
              >
                <Stack
                  // border={"1px"}
                  // borderColor={"blue"}
                  w={"100%"}
                  direction={["column","column","row"]}
                  alignItems={["center","center","space-evenly"]}
                  justifyContent={["center","center","space-evenly"]}
                  spacing={[4,6,8]}
                >
                  <Box
                    w={"54px"}
                    h={"54px"}
                    borderRadius={"50%"}
                    backgroundColor="#F3F3F3"
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    color={"#00bf71"}
                    fontSize={"24px"}
                    fontWeight={900}
                  >
                    1
                  </Box>
                  <Text
                     w={"60%"}
                     textAlign={["center","center","left","left"]}
                     fontSize={["12px","14px","17px"]}
                     fontWeight={400}
                     lineHeight={1.5}
                     color={"#1b1b20"}
                  >
                    Enable Asana integration in TimeCamp.
                  </Text>
                </Stack>
                <Stack
                  // border={"1px"}
                  // borderColor={"blue"}
                  w={"100%"}
                  direction={["column","column","row"]}
                  alignItems={["center","center","space-evenly"]}
                  justifyContent={["center","center","space-evenly"]}
                  spacing={[4,6,8]}
                >
                  <Box
                    w={"54px"}
                    h={"54px"}
                    borderRadius={"50%"}
                    backgroundColor="#F3F3F3"
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    color={"#00bf71"}
                    fontSize={"24px"}
                    fontWeight={900}
                  >
                    2
                  </Box>
                  <Text
                    w={"60%"}
                    textAlign={["center","center","left","left"]}
                    fontSize={["12px","14px","17px"]}
                    fontWeight={400}
                    lineHeight={1.5}
                    color={"#1b1b20"}
                  >
                    If you’re not logged into an Asana account, you’ll be redirected to the login p
                    age and asked for a confirmation to enable the integration. Otherwise, your integration 
                    will proceed automatically.
                  </Text>
                </Stack>
                <Stack
                  // border={"1px"}
                  // borderColor={"blue"}
                  w={"100%"}
                  direction={["column","column","row"]}
                  alignItems={["center","center","space-evenly"]}
                  justifyContent={["center","center","space-evenly"]}
                  spacing={[4,6,8]}
                >
                  <Box
                    w={"54px"}
                    h={"54px"}
                    borderRadius={"50%"}
                    backgroundColor="#F3F3F3"
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    color={"#00bf71"}
                    fontSize={"24px"}
                    fontWeight={900}
                  >
                    3
                  </Box>
                  <Text
                   w={"60%"}
                   textAlign={["center","center","left","left"]}
                   fontSize={["12px","14px","17px"]}
                   fontWeight={400}
                   lineHeight={1.5}
                   color={"#1b1b20"}
                  >
                    Your next step will be choosing which of your workspaces should be 
                    synchronized to TimeCamp. Optionally, you can add people assigned to workspaces by 
                    sending them an invitation via e-mail.
                  </Text>
                </Stack>
                <Stack
                  // border={"1px"}
                  // borderColor={"blue"}
                  w={"100%"}
                  direction={["column","column","row"]}
                  alignItems={["center","center","space-evenly"]}
                  justifyContent={["center","center","space-evenly"]}
                  spacing={[4,6,8]}
                >
                  <Box
                    w={"54px"}
                    h={"54px"}
                    borderRadius={"50%"}
                    backgroundColor="#F3F3F3"
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    color={"#00bf71"}
                    fontSize={"24px"}
                    fontWeight={900}
                  >
                    4
                  </Box>
                  <Text
                    w={"60%"}
                    textAlign={["center","center","left","left"]}
                    fontSize={["12px","14px","17px"]}
                    fontWeight={400}
                    lineHeight={1.5}
                    color={"#1b1b20"}
                  >
                    Now it's time for some time tracking EXTRAS: Track time directly in Asana.
                    If you’re using Google Chrome, you can install our plugin to track time for tasks directly in 
                    Asana and fill timesheets without switching apps.
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Container>
        </Container>
        <Box margin={"auto"} maxW={"76%"} >
        <Text fontSize="4xl" fontWeight={700} textAlign={"center"} marginTop={"5%"} marginBottom="10">Benefits include</Text>
          <Accordion maxW={"6xl"} marginLeft="5%" allowMultiple>
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
                        Time tracking in just one app
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={3} textAlign="start">
                    You're not supposed to spend too much time setting up an Asana integration in TimeCamp. You probably have some work to do, right?<br /><br />

                    In case you have any questions or difficulties setting up the integration with Asana, just get in touch with our support team. 
                    These guys are naturals when it comes to offering some help. Our users can get help on chat or by email.<br /><br />

                    While our tough tech minds strived to create the integration process as simple as possible, we're well aware that things don't always go smoothly as planned.<br /><br />

                    If you want to track time directly in Asana, install our Chrome Plugin and start timer in Asana's tasks. When you're finished, just click stop. Start tracking today!
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
          <Accordion maxW={"6xl"} marginLeft="5%" allowMultiple>
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
                        Extra boost to your project management and billing
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={3} textAlign="start">
                  Use our Asana time tracking integration to measure the time spent on Asana tasks. 
                  Assign time or money budgets to your projects to measure their profitability. 
                  Assign billing rates to Asana projects and tasks and bill your clients accurately. 
                  You can test billing features in our 14-day free trial, make sure you'll try them out - 
                  they are the favorite features of our customers.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
          <Accordion maxW={"6xl"} marginLeft="5%" allowMultiple>
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
                        Capacity and productivity reporting
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={3} textAlign="start">
                  Your people can track time just with one click without leaving Asana. 
                  Thanks to that you can easily report their time spent on tasks, attendance or run payroll. 
                  Your team can use Asana as they used to, but with simple time tracking in the background.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
          <Accordion maxW={"6xl"} marginLeft="5%" allowMultiple>
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
                        Poweful free plan
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={3} textAlign="start">
                  With TimeCamp's Free Plan you can use the Asana integration and track time for unlimited 
                  projects and tasks! How cool is that? If you need more, you can always upgrade your account 
                  to manage billing or connect with more than one app. Invite your team and start tracking tasks 
                  to improve productivity and never miss a deadline again.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
          <Accordion maxW={"6xl"} marginLeft="5%" allowMultiple>
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
                        Team time tracking
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={3} textAlign="start">
                  TimeCamp is a great tool for teams. Use our budget tracking features and control 
                  deadlines with time budgeting. Try our productivity reports functionality, timesheets 
                  approvals, attendance, invoicing, and more. TimeCamp is free for teams (unlimited users), 
                  so you can test our tool without investing a dollar. Track time anywhere with our mobile apps.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
          <Accordion maxW={"6xl"} marginLeft="5%" allowMultiple>
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
                        Task management tools integration
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={3} textAlign="start">
                  TimeCamp integrates not only with Asana but also with other popular 
                  task and project management tools like Trello, ClickUp, or Todoist. With 
                  TimeCamp project time tracking is easier and almost unnoticeable. Our user-friendly 
                  interface and useful reports will improve your productivity.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Box>
        <Container maxW={"7xl"} my={8} p={[4,8,16]}>
            <Image
              src="https://cdn-m.timecamp.com/img/greenbranding/greenSmallSkewCircle.svg"
              mx={[0,20, 40, 60, 80]}
              mb={-8}
            />
            <Image
              src="https://cdn-m.timecamp.com/img/greenbranding/redSmallCircle.svg"
              mx={[100,200, 400, 600, 800]}
              mb={-2}
            />
            <Stack
              as={Box}
              textAlign={"center"}
              spacing={{ base: 8, md: 14 }}
              bg={"gray.100"}
              p={10}
              rounded={16}
            >
    
                <Stack spacing={4} textAlign={"center"} px={[2,4,8,16,32]}>
                  <Heading fontWeight={[400,600,700]} fontSize={['2xl','4xl']}>
                  One simple tool to measure everything your business needs.
                  </Heading>
                  <Text color={"gray.500"} fontSize={["sm", "md", "lg"]} >
                  Remember, you can't improve something if you're not measuring it! If you're tired of the constant guessing, give TimeCamp a go!
                  </Text>
                </Stack>
                <Flex justifyContent={"center"} direction={["column","row","row"]} my={2} gap={4}>
                  <Button
                    color={"black"}
                    bg={"#F7B801"}
                    rounded={"full"}
                    px={6}
                    height={[8, 12]}
                    w={[40, 80, 160, 200,400]}
                    fontSize={[10, 16]}
                    fontWeight={"semibold"}
                    _hover={"#ffbf00"}
                  >
                    Try Timecamp for free
                  </Button>
                  <Button
                    color={"black"}
                    borderColor={"#F7B801"}
                    rounded={"full"}
                    variant={'outline'}
                    px={6}
                    height={[8, 12]}
                    w={[40, 80, 160, 200,400]}
                    fontSize={[10, 16]}
                    fontWeight={"semibold"}
                    _hover={"#ffbf00"}
                  >
                    Contact Sales
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
          <Footer />
      </>
    )
  }
  
  export default Asana