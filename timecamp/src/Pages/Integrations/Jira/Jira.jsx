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
  import styles from "../Jira/Jira.module.css"
  import Navbar from '../../../Components/Navbar';
  import Footer from '../../../Components/Footer';
  
  const Jira = () => {
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
                    src={"https://cdn-m.timecamp.com/img/greenbranding/integrations/jira.png"} 
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
                      Jira time tracking
                    </Text>
                  </Heading>
                  <Text 
                    color={"blackAlpha.800"} 
                    fontWeight={600} 
                    align={["center","center","start"]} 
                    mt="0px">
                    Did you know you don’t have to leave your favorite dev tool to track time spent using it? Now you can start a timer right from a Jira issue view and enjoy all your time usage stats at a glance!
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
                The Jira time tracking integration allows you to track time for all of your projects and tasks, commonly known as a Jira issue. Get to know more about time tracking in Jira to get the stay on top of your work!
              </Text>
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
                      Start on the go
                    </Text>
                    <Text
                      px={"28px"}
                      pb={"16px"}
                      textAlign={["center","center","left"]}
                      fontSize={"16px"}
                      fontWeight={600}
                      lineHeight={1.5}
                    >
                      Stop wasting time on reporting time spent in Jira manually! Click the start/stop button and start tracking working hours right in your favorite dev tool. You can also assign the entries to the particular tasks, choose tags, mark the entry as billable or add the original estimate and remaining time.
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
                      See the time stats at a glance
                    </Text>
                    <Text
                      px={"28px"}
                      pb={"16px"}
                      textAlign={["center","center","left"]}
                      fontSize={"16px"}
                      fontWeight={600}
                      lineHeight={1.5}
                    >
                      Check the essentials for an ongoing analysis of time spent on a particular task, like estimated, logged, and remaining time to make sure you’re on the right track with deliverables.
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
                     Smart data usage
                    </Text>
                    <Text
                      px={"28px"}
                      pb={"16px"}
                      textAlign={["center","center","left"]}
                      fontSize={"16px"}
                      fontWeight={600}
                      lineHeight={1.5}
                    >
                     Our Jira time tracking integration with TimeCamp will let you get even more insights into how your team performs across projects or any other issue defined in Jira. What’s more, the integration works two-way - no matter if you prefer TimeCamp reports or Jira burndown charts, you can use the data logged using the plugin for time reporting in both tools.
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
                      Automatic time tracking
                    </Text>
                    <Text
                      px={"28px"}
                      pb={"16px"}
                      textAlign={["center","center","left"]}
                      fontSize={"16px"}
                      fontWeight={600}
                      lineHeight={1.5}
                    >
                      Except for a smart Jura Plugin, TimeCamp also lets you define unique keywords for any Jira issue to allow the desktop app to automatically switch between the issues you're currently working on in Jira.
                    </Text>
                  </Box>
                </SimpleGrid>
              </Box>
              <Box
                pt={["40px","60px","80px"]}
              >
                <Text
                  textAlign={"center"}
                  fontSize={["16px","20px","24px"]}
                  fontWeight={600}
                  lineHeight={1.5}
                >
                    More to your Jira experience <br /><br />
                    Now you can start using TimeCamp’s timesheets, mobile or desktop applications to benefit from time tracking in Jira. Are you ready to start your Jira time tracking adventure? By using TimeCamp's integration, you can create the ultimate time-tracking Jira experience.                </Text>
              </Box>
              <div className={styles.image}>
                <img src='https://cdn-m.timecamp.com/img/landing-page/ppc_integrations/jira.png' />
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
                Note: If you don't have a TimeCamp account, click <Text as={"span"} color="#37c266" >here</Text>  
                to register for a free 14-day trial.
              </Text>
              <Text
                fontSize={"18px"}
                px={["2%", "6%", "12%"]}
                fontWeight={600}
                textAlign={"center"}
                lineHeight={1.5}
              >
                Below you can find how to enable the time tracking integration:
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
                    Find Jira on the list of available addons in settings and click on the “Enable” button.
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
                    Enter your Jira URL address, including the "https://" prefix as well. If you have trouble remembering it, simply login to your Jira account (preferably in another bookmark in your web browser) and copy the Jira URL.
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
                    Enter the credentials you use to login to your Jira account and click the green “Enable the integration” button.
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
                    You can also decide if you'd like to have your timesheets be automatically exported to Jira.
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
                    5
                  </Box>
                  <Text
                     w={"60%"}
                     textAlign={["center","center","left","left"]}
                     fontSize={["12px","14px","17px"]}
                     fontWeight={400}
                     lineHeight={1.5}
                     color={"#1b1b20"}
                  >
                    After that, TimeCamp will automatically import all your projects and tasks from Jira. From now on you will be able to track the time spent on each Jira issue.
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
                    6
                  </Box>
                  <Text
                     w={"60%"}
                     textAlign={["center","center","left","left"]}
                     fontSize={["12px","14px","17px"]}
                     fontWeight={400}
                     lineHeight={1.5}
                     color={"#1b1b20"}
                  >
                    Once you go to the Project Management page you'll see that all of the imported items are already there under a project simply called Jira.
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
                    7
                  </Box>
                  <Text
                     w={"60%"}
                     textAlign={["center","center","left","left"]}
                     fontSize={["12px","14px","17px"]}
                     fontWeight={400}
                     lineHeight={1.5}
                     color={"#1b1b20"}
                  >
                    You can also find our time tracking integration app on Atlassian marketplace for Jira Cloud.
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
                        Time log and productivity insights
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={3} textAlign="start">
                  Thanks to applying time tracking for Jira you can not only distribute, assign and manage tasks and projects to your team, but also, you can precisely track time spent on all of your team's activities. All this can be done on the go as your team works on issues assigned in Jira. Log work time and use this data to better estimate future costs and performance. Our app will track time for users and create timesheets. You can add notes for every time entry Enable the integration for effortless time tracking without leaving the Jira service.
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
                        Clear budgeting outlook
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={3} textAlign="start">
                  Tracking time is not only about employee productivity, but also project planning and workflow optimization. Making sure that your project is profitable is one of the most crucial challenges when managing a software project. When you work with estimates you need to convert them into time and money to plan resources and manage workflow. Now, thanks to precise time tracking data you can also add hourly rates in TimeCamp that will translate into realistic and real-time profitability reports. Try out our project budgeting and billing rates features to track profitability, adjust your prices, and reduce costs.
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
                        Easy onboarding 
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={3} textAlign="start">
                  With Jira time tracking integration you don’t need to onboard your employees to the new tool. TimeCamp is already in Jira and all you need to do is to start the timer to track time. Our seamless integration will allow you to log work hours for specific tasks. Forget about manual work logs in spreadsheets. Save time and money with TimeCamp. If you have any issues, just contact our support for quick assistance.
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
                        Time tracking reports
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={3} textAlign="start">
                  Our time tracking app offers user-friendly and helpful reports to visualize your data and get insights. You can analyze time entries by user, day, project, etc. Use default reports or create your own pivot table in few clicks. Export time reports to PDF, Excel, or Google Spreadsheet. Centralize all your data with integrations with other work apps. Log work hours and turn them into a productivity boost! Time tracking is a key to resolve productivity issues.
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
                        Free plan for unlimited users
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={3} textAlign="start">
                  TimeCamp offers a feature-rich Free Plan for unlimited users and projects, with one integration with an external app (you can use it for Jira!)Our premium plans start from $7 and include features like invoicing, billing rates, permission management, CSV export, and more. For more details about features in every plan check our pricing page. For enterprise users we offer a self-hosting option on a private cloud or your own server.
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
                        More helpful features in timecamp app
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={3} textAlign="start">
                  TimeCamp is not only a simple timer for your Jira issues to log work hours. The app offers many helpful features and other integrations. First of all, there are few different ways to track work hours with TimeCamp. You can use a timer in Jira, a simple start and stop button in the TimeCamp app, add time manually, or use our desktop app for tracking time in the background, and switch tasks effortlessly. Turn logged time into reports and use invoicing feature to bill your clients and contractors hourly. Analyze users productivity to identify bottlenecks and track down any issues that are interfering with work.                  </AccordionPanel>
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
  
  export default Jira