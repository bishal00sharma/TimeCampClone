import React from 'react'
import { AspectRatio, Box, Button, Container,Flex,Heading,Image,SimpleGrid,Stack, Text } from '@chakra-ui/react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';


const BookADemo = () => {
  return (
    <>
        <Navbar />
        <Container
            py={"64px"}
            px={"12%"}
            maxW={"100%"}
            // border={"1px"}
            // borderColor={"black"}
        >
            <Container
                // border={"1px"}
                // borderColor="red"
                direction={["column", "column", "row"]}
                maxW={"100%"}
                h={"100%"}
            >
                <Stack
                    direction={["column", "column", "row"]}
                    spacing={[12,10,8]}
                    // justifyContent={["center","left","left"]}
                    // alignItems={["center","left","left"]}
                    // border={"1px"}
                    // borderColor="blue"
                >
                    <Stack
                        w={["100%","100%","60%"]}
                        // border={"1px"}
                        // borderColor="blue"
                        pl={["0px","0px","80px"]}
                        pt={"60px"}
                        // alignItems={["center","left","left"]}
                        justifyContent={["center","left","left"]}
                    >
                        <Heading
                            mb={"32px"}
                            textAlign={["center","center","left"]}
                            direction={"row"}
                            fontSize={["24px","32px","48px"]}
                            fontWeight={"700"}
                            lineHeight={1.1}
                        >
                            Book a 1:1 TimeCamp presentation
                        </Heading>
                        <Text
                            mb={"8px"}
                            textAlign={["center","center","left"]}
                            justifyContent={["center","center","left"]}
                            fontSize={["16px","20px","24px"]}
                            fontWeight={600}
                            lineHeight={1.1}
                            spacing={[6,8,10]}
                        >
                            Demo Agenda
                        </Text>
                        <Flex
                            direction={"row"}
                            gap={[2,4,6]}
                        >
                            <Image 
                                src='https://cdn-m.timecamp.com/img/landing-page/product-presentation-icon.svg'></Image>
                            <Text
                                mb={"10px"}
                                fontSize={["12px","16px","19px"]}
                                fontWeight={500}
                                lineHeight={1.5}
                            >Product presentation</Text>
                        </Flex>
                        <Flex
                            direction={"row"}
                            gap={[2,4,6]}
                        >
                            <Image 
                                src='https://cdn-m.timecamp.com/img/landing-page/free-training-icon.svg'></Image>
                            <Text
                                mb={"10px"}
                                fontSize={["12px","16px","19px"]}
                                fontWeight={500}
                                lineHeight={1.5}
                            >Free training</Text>
                        </Flex>
                        <Flex
                            direction={"row"}
                            gap={[2,4,6]}
                        >
                            <Image  
                                src='https://cdn-m.timecamp.com/img/landing-page/set-up-icon.svg'></Image>
                            <Text
                                mb={"10px"}
                                fontSize={["12px","16px","19px"]}
                                fontWeight={500}
                                lineHeight={1.5}
                            >Help with set-up</Text>
                        </Flex>
                        <Flex
                            direction={"row"}
                            gap={[2,4,6]}
                        >
                            <Image 
                                src='https://cdn-m.timecamp.com/img/landing-page/pricing-icon.svg'></Image>
                            <Text
                                mb={"10px"}
                                fontSize={["12px","16px","19px"]}
                                fontWeight={500}
                                lineHeight={1.5}
                            >Pricing/plans comparison</Text>
                        </Flex>
                        <Flex
                            direction={"row"}
                            gap={[2,4,6]}
                        >
                            <Image 
                                src='https://cdn-m.timecamp.com/img/landing-page/chat-icon.svg'></Image>
                            <Text
                                mb={"10px"}
                                fontSize={["12px","16px","19px"]}
                                fontWeight={500}
                                lineHeight={1.5}
                            >Q&A</Text>
                        </Flex>
                        <Flex
                            direction={"column"}
                            // alignItems={["center","left","left"]}
                            justifyContent={["center","center","left"]}
                        >
                            <Text
                                py={"16px"}
                                textAlign={["center","center","left"]}
                                fontSize={"14px"}
                                fontWeight={400}
                                lineHeight={1.5}
                            >
                                Schedule a demo on the Calender or
                            </Text>
                            <Button
                                rounded={"full"}
                                size={"lg"}
                                fontSize={["xs","xs","sm"]}
                                px={10}
                                py={5}
                                w={["55%","55%","35%"]}
                                color={"white"}
                                bg={"#37c266"}
                                _hover={"#42f87f"}
                                cursor={"pointer"}
                        >
                            Schedule here
                        </Button>
                        </Flex>
                    </Stack>
                    {/* <Box
                        w={["100%","100%","40%"]}
                        // border={"1px"}
                        // borderColor="magenta"
                        // maxH={"100%"}
                        boxShadow="2xl"
                        borderRadius={"30px"}
                    > */}
                        <iframe 
                            src='https://calendly.com/timecamp-sales-team/timecamp-consultation?embed_domain=www.timecamp.com&embed_type=Inline&hide_event_type_details=1&hide_gdpr_banner=1' 
                            width={"100%"} 
                            h={"100%"}
                            // maxH={"600px"} 
                            border={"1px"}
                            borderColor={"black"}
                        >
                        </iframe>
                    {/* </Box> */}
                </Stack>
            </Container>
        </Container>
        <Stack bg={"#37c266"} mb={10} p={4} spacing={8}>
          <Text
            fontWeight={"semibold"}
            fontSize={"lg"}
            color={"white"}
            textAlign={"center"}
          >
            Trusted by 18,000 teams from all over the world (and still growing!)
          </Text>
          <SimpleGrid
            px={[10, 20, 40]}
            justifyContent={"center"}
            alignItems={"center"}
            columns={[1, 3, 6]}
            spacing={6}
          >
            <Image display={"flex"} alignItems={"center"} justifyContent={"center"} src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/usp-logo-white.png" />
            <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/dsv-logo-white.png" />
            <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/raindrop-logo-white.png" />
            <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/saatchi-logo-white.png" />
            <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/blitz-logo-white.png" />
            <Image src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/havas-logo-white.png" />
          </SimpleGrid>
        </Stack>
        <Container
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            maxW={"76%"}
        >
            <SimpleGrid
                columns={[1,1,2,4]}
                spacing={"20px"}
            >
                <Box
                    boxShadow='2xl' 
                    maxW={"100%"}
                    // border={"1px"}
                    // borderColor={"red"}
                    p={"25px"}
                    borderRadius={"25px"}
                    backgroundColor={"white"}
                    position={"relative"}
                    // boxShadow={"Dark lg"}
                >
                    <Image
                        position={"absolute"}
                        top={-7}
                        src='https://cdn-m.timecamp.com/img/landing-page/time-tracking-biz/reviews-icon.png'></Image>
                    <Text
                        textAlign={"left"}
                        fontSize={"15px"}
                        fontWeight={400}
                        lineHeight={1.5}
                        mb={"16px"}
                    >
                        Great asset to managing our marketing agency. 
                        We love the ease it takes to input times. 
                        We never have to worry about time record keeping because TimeCamp does it so accurately. 
                        It makes creating our invoices at the end of each month so much easier.
                    </Text>
                    <Text
                        textAlign={"left"}
                        fontSize={"16px"}
                        fontWeight={300}
                        lineHeight={1.5}
                        mb={"16px"}
                        py={"22px"}
                        color={"gray.400"}
                    >
                        Review from <Text as={"span"} fontWeight={500} color={"gray.500"} fontSize={"16px"} >GetApp.com</Text>
                    </Text>
                    <Box
                        // border={"1px"}
                        // borderColor={"red"}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                    >
                        <Image src='https://cdn-m.timecamp.com/img/landing-page/time-tracking-biz/stars-2.png' ></Image>
                    </Box>
                </Box>
                <Box
                    maxW={"100%"}
                    // border={"1px"}
                    // borderColor={"red"}
                    p={"25px"}
                    borderRadius={"25px"}
                    backgroundColor={"white"}
                    boxShadow='2xl' 
                >
                    <Text
                        textAlign={"left"}
                        fontSize={"15px"}
                        fontWeight={400}
                        lineHeight={1.5}
                        mb={"16px"}
                    >
                        Our business problem was simple - at any given time we have 20 or so 
                        contractors working on a handful of different projects and we 
                        needed to be scientific about knowing how many of whose hours were being spent on which project.
                        TimeCamp solved this problem well and simply.</Text>
                    <Text
                        textAlign={"left"}
                        fontSize={"16px"}
                        fontWeight={300}
                        lineHeight={1.5}
                        mb={"16px"}
                        py={"22px"}
                        color={"gray.400"}
                    >
                        <Text as={"span"} fontWeight={500} color={"gray.500"} fontSize={"16px"} >Noah</Text>
                    </Text>
                    <Box
                        h={"25px"}
                        // border={"1px"}
                        // borderColor={"red"}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                    >
                        <Image src='https://cdn-m.timecamp.com/img/landing-page/time-tracking-biz/stars-2.png' ></Image>
                    </Box>
                </Box>
                <Box
                    maxW={"100%"}
                    // border={"1px"}
                    // borderColor={"red"}
                    p={"25px"}
                    borderRadius={"25px"}
                    backgroundColor={"white"}
                    boxShadow='2xl' 
                >
                    <Text
                        textAlign={"left"}
                        fontSize={"15px"}
                        fontWeight={400}
                        lineHeight={1.5}
                        mb={"16px"}
                    >
                        We've tried a lot of tools and the integration, 
                        flexibility and fast array of features that come with TimeCamp have 
                        really made this tool stand out and pay for itself. It connects to a number of 
                        tools we use like our in house project management tools, our client's project 
                        management tools and our accounting software.
                    </Text>
                    <Text
                        textAlign={"left"}
                        fontSize={"16px"}
                        fontWeight={300}
                        lineHeight={1.5}
                        mb={"16px"}
                        py={"22px"}
                        color={"gray.400"}
                    >
                        <Text as={"span"} fontWeight={500} color={"gray.500"} fontSize={"16px"} >Jakes</Text>
                    </Text>
                    <Box
                        h={"25px"}
                        // border={"1px"}
                        // borderColor={"red"}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                    >
                        <Image src='https://cdn-m.timecamp.com/img/landing-page/time-tracking-biz/stars-2.png' ></Image>
                    </Box>
                </Box>
                <Box
                    maxW={"100%"}
                    // border={"1px"}
                    // borderColor={"red"}
                    p={"25px"}
                    borderRadius={"25px"}
                    backgroundColor={"white"}
                    boxShadow='2xl' 
                >
                    <Text
                        textAlign={"left"}
                        fontSize={"15px"}
                        fontWeight={400}
                        lineHeight={1.5}
                        mb={"16px"}
                    >
                        The primary reason I chose TimeCamp was the direct timekeeping-to-invoicing function, 
                        which has been a tremendous timesaver. I love the way it shows me what 
                        I'm spending my time on even when I'm not logging billable hours.
                    </Text>
                    <Text
                        textAlign={"left"}
                        fontSize={"16px"}
                        fontWeight={300}
                        lineHeight={1.5}
                        mb={"16px"}
                        py={"22px"}
                        color={"gray.400"}
                    >
                        <Text as={"span"} fontWeight={500} color={"gray.500"} fontSize={"16px"} >Kathryn</Text>
                    </Text>
                    <Box
                        h={"25px"}
                        // border={"1px"}
                        // borderColor={"red"}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                    >
                        <Image src='https://cdn-m.timecamp.com/img/landing-page/time-tracking-biz/stars-2.png' ></Image>
                    </Box>
                </Box>
            </SimpleGrid>
        </Container>
        <Container
            mb={"80px"}
            mt={"140px"}
            maxW={["100%","100%","76%"]}
            // border={"1px"}
            // borderColor={"black"}
        >
            <Box
                maxW={"100%"}
            >
                <Text
                    textAlign={"center"}
                    mb={"8px"}
                    fontSize={"16px"}
                    color={"#25CF60"}
                    fontWeight={700}
                    lineHeight={1.1}
                >
                    DEMO
                </Text>
                <Heading
                    mb={"8px"}
                    py={"32px"}
                    px={["8%","10%","12%"]}
                    fontWeight={600}
                    textAlign={"center"}
                >
                    Want a quick overview of TimeCamp?
                    Just watch our product walkthrough
                </Heading>
                <Box
                >
                    <AspectRatio maxW='100%' ratio={2}>
                        <iframe
                            title='Timecamp Overview'
                            src='https://www.youtube.com/embed/ctlEnvcy6CY'
                            allowFullScreen
                        />
                    </AspectRatio>
                </Box>
            </Box>
        </Container>
        <Container
            py={"48px"}
            mt={"48px"}
            maxW={"100%"}
            display={"flex"}
            alignItems={"center"}
            bgGradient='linear(to-t, gray.200, white)'
        >
            <SimpleGrid
                columns={[1,2,4]}
                spacing={'24px'}
                maxW={"76%"}
                m={'auto'}
                justifyContent={"center"}
            >
                <Flex
                    display={"flex"}
                    direction={"column"}
                    padding={"30px"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    boxShadow="xl"
                    borderRadius={"30px"}
                >
                    <Image src='https://cdn-m.timecamp.com/img/landing-page/emplyee-monitoring/automatic-time-tracking.svg' ></Image>
                    <Text
                        textAlign={"center"}
                        my={"20px"}
                        fontSize={"20px"}
                        fontWeight={600}
                    >
                        Automatic time tracking
                    </Text>
                </Flex>
                <Flex
                    display={"flex"}
                    direction={"column"}
                    padding={"30px"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    boxShadow="xl"
                    borderRadius={"30px"}
                >
                    <Image src='https://cdn-m.timecamp.com/img/landing-page/integration-02.png' ></Image>
                    <Text
                        textAlign={"center"}
                        my={"20px"}
                        fontSize={"20px"}
                        fontWeight={600}
                    >
                        Integrations with your favorite work tools
                    </Text>
                </Flex>
                <Flex
                    display={"flex"}
                    direction={"column"}
                    padding={"30px"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    boxShadow="xl"
                    borderRadius={"30px"}
                >
                    <Image src='https://cdn-m.timecamp.com/img/landing-page/emplyee-monitoring/Computer-monitoring.svg' ></Image>
                    <Text
                        textAlign={"center"}
                        my={"20px"}
                        fontSize={"20px"}
                        fontWeight={600}
                    >
                        Useful reports with export opinions
                    </Text>
                </Flex>
                <Flex
                    display={"flex"}
                    direction={"column"}
                    padding={"30px"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    boxShadow="xl"
                    borderRadius={"30px"}
                >
                    <Image src='https://cdn-m.timecamp.com/img/landing-page/attendance-check.svg' ></Image>
                    <Text
                        textAlign={"center"}
                        my={"20px"}
                        fontSize={"20px"}
                        fontWeight={600}
                    >
                        Attendance, invoicing, budgeting and more
                    </Text>
                </Flex>
            </SimpleGrid>
        </Container>
        <Footer />
    </>
  )
}

export default BookADemo