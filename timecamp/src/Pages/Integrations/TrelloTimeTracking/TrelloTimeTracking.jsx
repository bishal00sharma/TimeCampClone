import {
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
import styles from "../TrelloTimeTracking/TrelloTimeTracking.module.css"

const TrelloTimeTracking = () => {
  return (
    <>
      <Container
        maxW="100%"   
        pt="96px" 
        pb="128px" 
        px="12%"
        >
          <Container 
            maxW="100%"  
            h="100%" 
            px="10%"
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
                  src={"https://cdn-m.timecamp.com/img/greenbranding/integrations/trello.png"} 
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
                    Trello time tracking
                  </Text>
                </Heading>
                <Text 
                  color={"blackAlpha.800"} 
                  fontWeight={600} 
                  align={["center","center","start"]} 
                  mt="0px">
                  Tracking time on all of your chosen Trello cards and boards without switching apps? Yes!
                </Text>
                <Stack 
                  spacing={{ base: -8, sm: -10 }} 
                  direction={["column", "column", "row"]}
                >
                  <Flex 
                    gap={["10px","10px","0px"]} 
                    direction={["column", "column", "row"]}
                    w="100%" 
                    mt="30px" 
                    display="flex" 
                    pr="30px"
                    alignItems={["center"]} 
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
        px={"12%"}
      >
        <Box
          h={"100%"}
          maxW="100%"
        >
          <Box
            h={"60%"}
            pt={"32px"}
            pb="16px"
            borderBottom={"1px"}
            borderColor="lightgray"
          >
            <Text
              textAlign={"center"}
              fontWeight={600}
              fontSize={"md"}
            >
              Trusted by 18,000 teams from all over the world (and still growing!)
            </Text>
            <SimpleGrid
              columns={[1,1,3,6]}
              h="80%"
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
          </Box>
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
        px="12%"
      >
        <Container
          maxW={"100%"}
          h="100%"
          pt={"64px"}
          pl={"72px"}
          pr={"120px"}
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
              The TimeCamp Trello Power-Up allows you to track time without the need to leave Trello. Plan, work and track time in just one app. Ideal for Trello users.
            </Text>
            <Box
              pt="32px"
              display={"flex"}
              justifyContent={"center"}
            >
              <Button
                w={"34%"}
                backgroundColor= {"#3c91e6"}
                borderRadius={"26px"}
                px={["15px","20px","40px"]}
                py={["9px","12px","15px"]}
                h={"70px"}
                
              >
                <Stack
                  direction={["column", "column","row","row"]}
                  alignItems={"center"}
                  justifyContent={["center","left","left"]}
                  gap={["8px","12px","16px"]}
                >
                  <Image maxW={"20%"} maxH={"80%"} src='https://cdn-m.timecamp.com/img/integrations/chrome.png'></Image>
                  <Text
                    fontSize={["0.2rem","0.5rem","0.5rem","1rem"]}
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
               w={"34%"}
               backgroundColor= {"#3c91e6"}
               borderRadius={"26px"}
               px={["15px","20px","40px"]}
               py={["9px","12px","15px"]}
               h={"70px"}
              >
                <Stack
                  direction={["column", "column","row","row"]}
                  alignItems={"center"}
                  justifyContent={["center","left","left"]}
                  gap={["8px","12px","16px"]}
                >
                  <Image maxW={"30%"} maxH={"80%px"} src='https://cdn-m.timecamp.com/img/integrations/edge.svg'></Image>
                  <Text
                    fontSize={["0.2rem","0.5rem","0.5rem","1rem"]}
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
                    textAlign={"left"}
                    fontSize={"16px"}
                    fontWeight={700}
                    lineHeight={1.1}
                  >
                    Plan, work and track in one app
                  </Text>
                  <Text
                    px={"28px"}
                    pb={"16px"}
                    textAlign={"left"}
                    fontSize={"16px"}
                    fontWeight={600}
                    lineHeight={1.5}
                  >
                    No need to switch between two or more apps. Now, with our TimeCamp Trello Power-Up you're able to take your Trello experience to the next level. Add a time tracking button to your Trello cards and analyze time reports for every task. If you forget to start the timer, don't worry. Just add time manually or edit time reports.
                  </Text>
                </Box>
                <Box px={"15px"} pt={"80px"}>
                  <Text
                    px={"22px"}
                    pb={"16px"}
                    textAlign={"left"}
                    fontSize={"16px"}
                    fontWeight={700}
                    lineHeight={1.1}
                  >
                    Measure time spent on your chosen Trello boards
                  </Text>
                  <Text
                    px={"28px"}
                    pb={"16px"}
                    textAlign={"left"}
                    fontSize={"16px"}
                    fontWeight={600}
                    lineHeight={1.5}
                  >
                    Select the boards that you want to integrate with TimeCamp. You're in charge! Your project management and productivity will improve with the time tracker that helps identify bottlenecks and redundant activities.                  </Text>
                </Box>
                <Box px={"15px"} pt={"80px"}>
                  <Text
                    px={"22px"}
                    pb={"16px"}
                    textAlign={"left"}
                    fontSize={"16px"}
                    fontWeight={700}
                    lineHeight={1.1}
                  >
                   Automatic time tracking
                  </Text>
                  <Text
                    px={"28px"}
                    pb={"16px"}
                    textAlign={"left"}
                    fontSize={"16px"}
                    fontWeight={600}
                    lineHeight={1.5}
                  >
                    Whatever you're working on in Trello, TimeCamp will automatically assign the right projects, categories and track time to them. TimeCamp integrates with Trello seamlessly, so you can focus on your work.</Text>
                </Box>
                <Box px={"15px"} pt={"80px"}>
                  <Text
                    px={"22px"}
                    pb={"16px"}
                    textAlign={"left"}
                    fontSize={"16px"}
                    fontWeight={700}
                    lineHeight={1.1}
                  >
                    Easy and fast
                  </Text>
                  <Text
                    px={"28px"}
                    pb={"16px"}
                    textAlign={"left"}
                    fontSize={"16px"}
                    fontWeight={600}
                    lineHeight={1.5}
                  >
                    Discover how the Trello extension will take your task management experience to the next level. A time tracking integration that takes minimum time to set up in Trello. See for yourself!</Text>
                </Box>
              </SimpleGrid>
            </Box>
            <div className={styles.image}>
              <img src='https://cdn-m.timecamp.com/img/landing-page/ppc_integrations/trello.png' />
            </div>
          </Stack>
        </Container>
      </Container>
      <Container
        py={"64px"}
        px={"12%"}
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
              px={"20%"}
              fontWeight={600}
              textAlign={"center"}
              lineHeight={1.5}
            >
              Note: If you don't have a TimeCamp account, click <Text as={"span"} color="#37c266" >here</Text>  to register for a free 14-day trial.
            </Text>
            <Text
              fontSize={"18px"}
              px={"20%"}
              fontWeight={600}
              textAlign={"center"}
              lineHeight={1.5}
            >
              Below you can find how to enable the integration:
            </Text>
          </Flex>
          <Stack
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            direction={["column","column","row"]}
            spacing={[10,12,14]}
            px={"10%"}
            width={"100%"}
            // border={"1px"}
            // borderColor={"black"}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              w={"30%"}
            >
              <Image src='https://cdn-m.timecamp.com/img/greenbranding/automaticMode.png' ></Image>
            </Box>
            <Stack
              w={"70%"}
              px={"15px"}
              // border={"1px"}
              // borderColor={"magenta"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              direction={["column"]}
              spacing={["100","80px","64px"]}
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
                  Go to the Integrations section in TimeCamp and enable the Trello integrations.
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
                  Authorize the integration via Trello.
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
                  Select the boards you'd like to allow for Tracking.
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Container>
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
    </>
  )
}

export default TrelloTimeTracking