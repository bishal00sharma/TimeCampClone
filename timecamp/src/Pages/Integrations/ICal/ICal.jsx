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
  import styles from "../ICal/ICal.module.css"
  import Footer from '../../../Components/Footer';
  import Navbar from '../../../Components/Navbar';
  
  const ICal = () => {
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
                    src={"https://cdn-m.timecamp.com/img/greenbranding/integrations/ical.png"} 
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
                      Ical time tracking
                    </Text>
                  </Heading>
                  <Text 
                    color={"blackAlpha.800"} 
                    fontWeight={600} 
                    align={["center","center","start"]} 
                    mt="0px">
                    No more trying to guess how many hours you've spent working on projects at work! 
                    Integrate your calendar with TimeCamp and use time tracking to your advantage.
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
                Track time spent on all of your scheduled iCal appointments and have a clear 
                outlook on your productivity. Just complete a simple integration process to activate
                TimeCamp's time tracker on all of your iCal activities. Get the most out of your week.
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
                      More productivity and self-management
                    </Text>
                    <Text
                      px={"28px"}
                      pb={"16px"}
                      textAlign={["center","center","left"]}
                      fontSize={"16px"}
                      fontWeight={600}
                      lineHeight={1.5}
                    >
                      Stay on top of your work thanks to being able to track time spent on all of 
                      your iCal calendar appointments. Whether you're working on a project or you're 
                      attending a meeting with your team, TimeCamp will track your time spent on every task 
                      scheduled in your iCal app
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
                      Simple integration
                    </Text>
                    <Text
                      px={"28px"}
                      pb={"16px"}
                      textAlign={["center","center","left"]}
                      fontSize={"16px"}
                      fontWeight={600}
                      lineHeight={1.5}
                    >
                      You don't need to go through a long and complicated integration process to be 
                      able to track your progress on all of your calendar activities and projects. 
                      You can use your favorite calendar app: MS Outlook Calendar, Apple Calendar, 
                      Yahoo! Calendar, and more. If you are using Google calendar check this page. 
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
                     Better work time reporting
                    </Text>
                    <Text
                      px={"28px"}
                      pb={"16px"}
                      textAlign={["center","center","left"]}
                      fontSize={"16px"}
                      fontWeight={600}
                      lineHeight={1.5}
                    >
                     Do you need to submit timesheets? Now, you can avoid the guesswork and 
                     easily report it to your manager with precise data. Your manager will have 
                     a clear understanding of what project you've been working on and how much time 
                     you've spent on it.
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
                      Easy setup
                    </Text>
                    <Text
                      px={"28px"}
                      pb={"16px"}
                      textAlign={["center","center","left"]}
                      fontSize={"16px"}
                      fontWeight={600}
                      lineHeight={1.5}
                    >
                      This will allow importing the items from the calendar as time-entries in TimeCamp. 
                      All you need is a link with extension .ics or .ical. Those entries can be later edited.
                        The name of the calendar item is always shown in the notes field of the time-entry.
                    </Text>
                  </Box>
                </SimpleGrid>
              </Box>
              <div className={styles.image}>
                <img src='https://cdn-m.timecamp.com/img/landing-page/ppc_integrations/calendar.png' />
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
                Here's what you need to do to enable the time tracking integration for your iCal calendar:
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
                    Copy the shareable link of your iCal calendar. We recommend creating a public link from your iCal app as shown above.
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
                   Then, in TimeCamp, go to settings, select the integrations tab, and locate the calendar 
                   integration. Click the settings button.
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
                    Paste the iCal link that you've copied earlier. You can also set what time-frame 
                    would be imported from your calendar every time it synchronizes.
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
                        Rich in data, but easy to integrate
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={3} textAlign="start">
                  And that's it! Now you can easily focus on your work without the need 
                  to switch between apps to keep track of your work and projects. TimeCamp 
                  will do the rest. Work in iCal as always and import time data to TimeCamp 
                  to create timesheets automatically. Once imported events are shown as time 
                  entries so you can easily assign them to specific projects and tasks in your timesheet. 
                  Keep an eye on projects and tasks without tedious manual reporting.
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
                        Keep track of your private time 
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={3} textAlign="start">
                  If you think that you don't have to track your personal time, 
                  just try to estimate how much time you spend on social media and then 
                  compare it with data from your smartphone. I'm sure you'll be surprised and you'll 
                  want to start managing your time better. TimeCamp desktop app will help you gather 
                  data about your app usage and improve your productivity. Time tracking will help you 
                  manage your tasks better and you will have more hours to spend for pleasure.
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
                        Improved productivity
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={3} textAlign="start">
                  Measure working time using TimeCamp features like simple manual timer, 
                  desktop app (available for Mac), calendar integration or browser plugin 
                  that adds time tracking button to 70+ work tools. Import your tasks and projects 
                  structure from project management software like Asana or Todoist.
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
                        More features for better project management
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={3} textAlign="start">
                  As a TimeCamp user you can test all our features and decide if you want to 
                  stick with your standard calendar tracking or improve your workflow with our app. 
                  With our free version you can manage attendance, integrate with one app and export 
                  our detailed reports to PDF. With a paid plan you get access to custom reports, team 
                  productivity tracking, billing rates, invoicing, and much more. So remember that TimeCamp 
                  is not only the iCal time tracking app.
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
                        Collaborate with your team
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={3} textAlign="start">
                  If you work in a team you can easily synchronize your personal calendars in TimeCamp. 
                  Every team member can create a timesheet based on calendar tasks and turn time entries 
                  into billable hours, invoices, etc. Add time from different calendars to projects in TimeCamp 
                  to calculate project profitability. It's more useful than personal time tracking.u
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
                        Automatic Calender time tracking
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={3} textAlign="start">
                  TimeCamp can automatically assign all your calendar events to your clients, 
                  projects and tasks in timesheet. If TimeCamp will detect project-related keyword in calendar event, 
                  it will automatically assign it to a proper project. We make time tracking a piece of cake!
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
  
  export default ICal