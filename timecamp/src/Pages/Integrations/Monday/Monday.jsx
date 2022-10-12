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
  import styles from "../Monday/Monday.module.css"
  import Footer from '../../../Components/Footer';
  import Navbar from '../../../Components/Navbar';
  
  const Monday = () => {
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
                    src={"https://cdn-m.timecamp.com/img/greenbranding/integrations/mondaycom.png"} 
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
                      Monday.com time tracking
                    </Text>
                  </Heading>
                  <Text 
                    color={"blackAlpha.800"} 
                    fontWeight={600} 
                    align={["center","center","start"]} 
                    mt="0px">
                    Monday.com time tracking integration allows you to record time for specific 
                    projects and tasks. Use it to track hours you and your team work and improve your 
                    productivity like a pro.
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
                You can set up our integration within minutes and get an overview of how much time you 
                spend on different projects and clients in your company. The timer can be added to the Monday.com 
                task view thanks to our Chrome plugin.
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
                      Improved project management
                    </Text>
                    <Text
                      px={"28px"}
                      pb={"16px"}
                      textAlign={["center","center","left"]}
                      fontSize={"16px"}
                      fontWeight={600}
                      lineHeight={1.5}
                    >
                      Using our time tracking software improves visibility and awareness. 
                      You can quickly check if the project is falling behind and find solutions. 
                      Make more data-based decisions and get insight on how busy your team really is. 
                      Manage and estimate projects better with the help of time tracking information. 
                      Create a powerful team backed up with time tracking data.
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
                <img src='https://cdn-m.timecamp.com/img/landing-page/ppc_integrations/common.png' />
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
                    Log in to TimeCamp and go to the Integrations tab in Settings.
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
                    Open your Monday.com app and go to the Admin panel. Copy your v2 Personal API Token.
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
                    Go back to TimeCamp, paste the API Token on integration's page, and click the green "Enable integration" button.                  </Text>
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
                    Now you can select boards to synchronize and optionally invite people from Monday.com to TimeCamp. That’s all!                  </Text>
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
                    The integration will automatically import your projects and tasks to TimeCamp. You will find them in Projects in TimeCamp, under the main project simply called “Monday.com”.
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
                    If you’re using Google Chrome, you can install our plugin to track the time spent on all of your activities directly in Monday.com. Track time with a simple button added to Monday.com task.
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
                        Track time in Monday.com in various ways
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={3} textAlign="start">
                    Time tracking has never been so easy! You can switch on the timer in Moday.com task, 
                    or using our web, mobile and desktop apps. You can even track time automatically and
                     switching between tasks without a single click thanks to a keyword-based tracker. Check
                      also our other features like employees productivity tracking, attendance management or invoicing.
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
                        1-minute onboarding
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={3} textAlign="start">
                  You can introduce TimeCamp to your employees very easily. They just need to install 
                  the desktop app or Chrome plugin or simply log in to the web version. If you already 
                  imported projects, they can start tracking!
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
                        Flexible reporting 
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={3} textAlign="start">
                  Monday.com offers its own time tracking column, but with TimeCamp you can 
                  get more with advanced reports. Check time spent by users, tasks, projects, and teams.
                   Generate custom reports to make better business decisions and provide proof of work for your clients. Set up automatic email reports, export data to Excel and PDF, or share them by link.
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
                        More than time tracking
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={3} textAlign="start">
                  Tracking time is only the beginning of improving project profitability 
                  with TimeCamp software. Analyze time spent on different projects, tasks from your board,
                   clients, or apps with our productivity reports. Fill out your timesheets automatically, 
                   pay your hourly employees without a hassle, and issue invoices based on tracked time.
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
                    You can use our Monday.com time tracking integration in our free plan for unlimited users. 
                    Invite your entire company to boost the efficiency of complex projects. Analyze time tracked 
                    for different projects and get insights on employee performance. Use the data as you wish to
                     make your projects better.
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
                        How to use TimeCamp time tracking app
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={3} textAlign="start">
                    Track time for all your tasks with our Monday.com integration. 
                    Use also our other features like invoicing, reporting, attendance tracking, 
                    etc. One of the most popular use cases of our software is to log work hours 
                    and report time for customers, for example in marketing agencies. Use our tool to 
                    collect data and manage employees' attendance. Tracking time is easy and effective with 
                    TimeCamp and Monday.com.
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
  
  export default Monday