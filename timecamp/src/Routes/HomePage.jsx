import React from "react";
import "./price.css";
import style from "../Routes/home.module.css";
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
import Carousels from "../Components/Carousel";
import Navbar from "../Components/Navbar";

const HomePage = () => {
  const reviewsImgapi = [
    {
      img: "https://cdn-m.timecamp.com/img/greenbranding/features/crozdesk.png",
    },
    {
      img: "https://cdn-m.timecamp.com/img/greenbranding/features/capterra.png",
    },
    {
      img: "https://cdn-m.timecamp.com/img/greenbranding/features/crowd.png",
    },
    {
      img: "https://cdn-m.timecamp.com/img/greenbranding/features/get-app.png",
    },
  ];

  const trackingApi = [
    {
      img: "https://cdn-m.timecamp.com/img/greenbranding/integrations/slack.png",
    },
    {
      img: "https://cdn-m.timecamp.com/img/greenbranding/integrations/asana.png",
    },
    {
      img: "https://cdn-m.timecamp.com/img/greenbranding/integrations/trello.png",
    },
    {
      img: "https://cdn-m.timecamp.com/img/greenbranding/integrations/ical.png",
    },
    {
      img: "https://cdn-m.timecamp.com/img/greenbranding/integrations/podio.png",
    },
    {
      img: "https://cdn-m.timecamp.com/img/greenbranding/integrations/quickbooks.png",
    },
    {
      img: "https://cdn-m.timecamp.com/img/greenbranding/integrations/jira.png",
    },
    {
      img: "https://cdn-m.timecamp.com/img/greenbranding/integrations/todoist.png",
    },
    {
      img: "https://cdn-m.timecamp.com/img/greenbranding/integrations/outlookcalendar.png",
    },
    {
      img: "https://cdn-m.timecamp.com/img/greenbranding/integrations/googlecalendar.png",
    },
    {
      img: "https://cdn-m.timecamp.com/img/greenbranding/integrations/smartsheet.png",
    },
    {
      img: "https://cdn-m.timecamp.com/img/greenbranding/integrations/xero.png",
    },
  ];

  const timeApi = [
    {
      desc: "The primary reason I chose TimeCamp was the direct timekeeping-to-invoicing function, which has been a tremendoustimesaver. I love the way it shows me what I'm spending my time on even when I'm not logging billable hours.",
      name: "Kathryn",
    },
    {
      desc: "Great asset to managing our marketing agency. We love the ease it takes to input times. We never have to worry about time record keeping because TimeCamp does it so accurately. It makes creating our invoices at the end of each month so much easier.",
      name: "Revierw from getApp.com",
    },
    {
      desc: "Our business problem was simple - at any given time we have 20 or so contractors working on a handful of differentprojects and we needed to be scientific about knowing how many of whose hours were being spent on which project.TimeCamp solved this problem well and simply.",
      name: "Noah",
    },
    // {
    //   desc: "We've tried a lot of tools and the integration, flexibility and fast array of features that come with TimeCamp have really made this tool stand out and pay for itself. It connects to a number of tools we use like our in house project management tools, our client's project management tools and our accounting software.",
    //   name: "Jakes",
    // },
  ];

  const blogApi = [
    {
      img: "https://www.timecamp.com/blog/wp-content/uploads/2019/08/time-tracking-for-architects-400x219.jpg",
      title: "13 Best Time Tracking",
      desc:"Software for Architects",
      read: "Read more",
    },
    {
      img: "https://www.timecamp.com/blog/wp-content/uploads/2022/09/remote-work-automation-header-400x219.jpg",
      title: "What is automatipon for",
      desc:"Remote Workers",
      read: "Read more",
    },
    {
      img: "https://www.timecamp.com/blog/wp-content/uploads/2018/05/project-time-tracking-min-300x164.jpg",
      title: "13 Best Tools for Project",
      desc:"Time Tracking",
      read: "Read more",
    },
  ];
  return (
    <>
    <Navbar />
      <div className={style.herodiv}>
        <div className={style.div1}>
          <p style={{ color: "black", fontWeight: "bold" }}>
            Free time tracking software
          </p>
          <h1>Happy to see you again!</h1>
          <h1>Book TimeCamp set-up call</h1>
          <p>✓ Showing how TimeCamp works in 15 minutes</p>
          <p>✓ Best practices from 5000+ implementations</p>
          <p>✓ Help with dedicated setup</p>
          <div style={{ display: "flex" }}>
            <Button
              backgroundColor="#25CF60"
              size="lg"
              marginRight="9%"
              borderRadius="22px"
              marginLeft="12%"
            >
              Book a demo
            </Button>
            <p>or</p>
            <Button
              backgroundColor="#25CF60"
              size="lg"
              borderRadius="22px"
              marginLeft="10%"
            >
              Go to App
            </Button>
          </div>
        </div>
        <div className={style.div2}>
          <img
            className={style.img1}
            src="https://cdn-m.timecamp.com/img/person.jpg"
            alt="heroimg"
          />
          <h4>Adam Wagner, Co-owner and Chief Strategy Officer</h4>
          <p>
            „TimeCamp proved to be an essential management tool that gives us
            clear insight into a project’s efficiency and helps to avoid an
            overblown workload for our team.”
          </p>
          <img
            className={style.img2}
            src="https://cdn-m.timecamp.com/img/raindrop_logo.svg"
            alt=""
          />
        </div>
      </div>
      <div className={style.herodiv2}>
        <h3>
          Trusted by 18,000 teams from all over the world (and still growing!)
        </h3>
        <div className={style.subpart}>
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/usp-logo-white.png"
            alt="usp"
          />
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/dsv-logo-white.png"
            alt="dsv"
          />
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/raindrop-logo-white.png"
            alt="raindrop"
          />
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/saatchi-logo-white.png"
            alt="saatchi"
          />
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/havas-logo-white.png"
            alt="havalogo"
          />
        </div>
      </div>
      <div className={style.profatibility}>
        <div className={style.profatibility_subpart1}>
          <h1>Stay on top of your teams’ productivity and profitability!</h1>
          <Button
            backgroundColor="#f7b801"
            size="lg"
            marginTop="10%"
            marginLeft="-7%"
            borderRadius="22px"
          >
            Book a Demo
          </Button>
        </div>
        <div className={style.profatibility_subpart2}>
          <img
            src="https://cdn-m.timecamp.com/img/landing-page/banner-icon.svg"
            alt=""
          />
        </div>
      </div>
      <Heading marginLeft="28%" marginTop="3%" marginRight="28%">
        Time tracking for everyone in your organization
      </Heading>
      {/* container 1 */}
      <Container maxW={"6xl"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Stack spacing={"3"}>
              <Text textAlign="start" fontWeight="bold" color="#25CF60">
                FOR EMPLOYEES
              </Text>
              <Heading
                textAlign="start"
                fontWeight="500"
                fontSize="5xl"
                color="black"
              >
                Track your <br /> employees <br /> working time
              </Heading>
              <Text fontWeight="bold" textAlign="start" color="gray.500">
                Log working hours of your employees automatically or <br />
                manually and make sure they are billed fairly.
              </Text>
              <Stack alignItems="start">
                <Button
                  backgroundColor="white"
                  size="lg"
                  marginLeft="-3%"
                  borderBottom="1.5px solid #25CF60"
                  _hover={{ backgroundColor: "white" }}
                >
                  Check logged time on the handy timesheet
                </Button>
              </Stack>
              <Text textAlign="start">
                Enjoy the transparency - check your employees time records{" "}
                <br />
                with more detailed information on the handy timesheet or a{" "}
                <br /> graphical, calendar-like view.
              </Text>
              <Text
                textAlign="start"
                fontSize="18px"
                fontWeight="400"
                color="gray.500"
              >
                Try our easy-to-use desktop app
              </Text>
              <Text
                textAlign="start"
                fontSize="18px"
                fontWeight="400"
                color="gray.500"
              >
                Track your activities normally
              </Text>
            </Stack>

            <Stack spacing={{ base: -8, sm: -10 }} direction={{ sm: "row" }}>
              <Button
                backgroundColor="#25CF60"
                size="lg"
                marginRight="9%"
                borderRadius="22px"
                marginLeft="2%"
                _hover={{ backgroundColor: "#25CF60" }}
                color="white"
              >
                Track employees time
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              position={"relative"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
            >
              <Image
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={
                  "https://cdn-m.timecamp.com/img/greenbranding/features/img-home-features.svg"
                }
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
      {/* container 2 */}
      <Container maxW={"6xl"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          marginTop="-28"
          direction={{ base: "column", md: "row" }}
        >
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              position={"relative"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
            >
              <Image
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={
                  "https://cdn-m.timecamp.com/img/greenbranding/features/reporting-features.svg"
                }
              />
            </Box>
          </Flex>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Stack marginLeft={"16"} marginRight={"14"} spacing={"3"}>
              <Text textAlign="start" fontWeight="bold" color="#25CF60">
                FOR MANAGERS
              </Text>
              <Heading
                textAlign="start"
                fontWeight="500"
                fontSize="5xl"
                color="black"
              >
                Track project time and budget easier than ever before
              </Heading>
              <Text fontWeight="bold" textAlign="start" color="gray.500">
                Stay on top of your team’s performance and create accurate
                <br />
                resource estimates for all the projects.
              </Text>
              <Stack alignItems="start">
                <Button
                  backgroundColor="white"
                  size="lg"
                  marginLeft="-3%"
                  borderBottom="1.5px solid #25CF60"
                  _hover={{ backgroundColor: "white" }}
                >
                  Ensure project profitability by analyzing reports
                </Button>
              </Stack>
              <Text textAlign="start">
                TimeCamp provides you with all the data you need to analyze the
                projects’ performance to ensure your team always stays on track.
                Look at the clear graphics and get a better view of the time
                tracked!
              </Text>
              <Text
                textAlign="start"
                fontSize="18px"
                fontWeight="400"
                color="gray.500"
              >
                Integrate with other tools for better performance
              </Text>
              <Text
                textAlign="start"
                fontSize="18px"
                fontWeight="400"
                color="gray.500"
              >
                Take advantage of a simple, accurate budgeting
              </Text>
            </Stack>

            <Stack spacing={{ base: -8, sm: -10 }} direction={{ sm: "row" }}>
              <Button
                backgroundColor="#25CF60"
                size="lg"
                marginRight="9%"
                borderRadius="22px"
                marginLeft="12%"
                _hover={{ backgroundColor: "#25CF60" }}
                color="white"
              >
                Increase time productivity
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      {/* container 3 */}
      <Container maxW={"6xl"} marginTop="-20">
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          marginLeft="6"
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Stack spacing={"3"}>
              <Text textAlign="start" fontWeight="bold" color="#25CF60">
                ENTERPRISE
              </Text>
              <Heading
                textAlign="start"
                fontWeight="500"
                fontSize="5xl"
                color="black"
              >
                Try enterprise <br /> time tracking at <br />
                at highest level
              </Heading>
              <Text fontWeight="bold" textAlign="start" color="gray.500">
                Custom needs? No problem! Contact us, and we will <br />
                definitely find a perfect solution for your enterprise.
              </Text>
              <Stack alignItems="start">
                <Button
                  backgroundColor="white"
                  size="lg"
                  marginLeft="-3%"
                  borderBottom="1.5px solid #25CF60"
                  _hover={{ backgroundColor: "white" }}
                >
                  Transfer multilevel project structures
                </Button>
              </Stack>
              <Text textAlign="start">
                No matter how many projects your team is currently
                <br /> working on, with TimeCamp you'll be able to organize{" "}
                <br /> work time without any problem.
              </Text>
              <Text
                textAlign="start"
                fontSize="18px"
                fontWeight="400"
                color="gray.500"
              >
                Achieve full compliance with data regulations
              </Text>
              <Text
                textAlign="start"
                fontSize="18px"
                fontWeight="400"
                color="gray.500"
              >
                Get help from our Customer Success Manager
              </Text>
            </Stack>

            <Stack spacing={{ base: -8, sm: -10 }} direction={{ sm: "row" }}>
              <Button
                backgroundColor="#25CF60"
                size="lg"
                marginRight="9%"
                borderRadius="22px"
                marginLeft="2%"
                _hover={{ backgroundColor: "#25CF60" }}
                color="white"
                marginTop={"2%"}
              >
                Contact for customized solution
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              position={"relative"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              marginLeft="-20"
            >
              <Image
                align={"center"}
                w={"100%"}
                h={"90%"}
                src={
                  "https://cdn-m.timecamp.com/img/greenbranding/features/project-structure.svg"
                }
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
      {/* container 4 */}
      <Container maxW={"6xl"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          marginTop="-28"
          direction={{ base: "column", md: "row" }}
        >
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              position={"relative"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
            >
              <Image
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={
                  "https://cdn-m.timecamp.com/img/greenbranding/features/attendance-features.svg"
                }
              />
            </Box>
          </Flex>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Stack marginLeft={"16"} marginRight={"14"} spacing={"3"}>
              <Text textAlign="start" fontWeight="bold" color="#25CF60">
                FOR HR
              </Text>
              <Heading
                textAlign="start"
                fontWeight="500"
                fontSize="5xl"
                color="black"
              >
                Check Timesheets and control attendance in one place
              </Heading>
              <Text fontWeight="bold" textAlign="start" color="gray.500">
                With TimeCamp you can forget about endless stacks of papers!
                Take advantage of convenient and easy to use tools to support
                your daily HR and payroll work.
              </Text>
              <Stack alignItems="start">
                <Button
                  backgroundColor="white"
                  size="lg"
                  marginLeft="-3%"
                  borderBottom="1.5px solid #25CF60"
                  _hover={{ backgroundColor: "white" }}
                >
                  Track attention automatically
                </Button>
              </Stack>
              <Text textAlign="start">
                TimeCamp allows both you and your employees to keep an eye on
                their absence, sick days, or vacation leaves. Track attendance
                and working hours easily as never before.
              </Text>
              <Text
                textAlign="start"
                fontSize="18px"
                fontWeight="400"
                color="gray.500"
              >
                Check and approve employees Timesheets
              </Text>
              <Text
                textAlign="start"
                fontSize="18px"
                fontWeight="400"
                color="gray.500"
              >
                Integrate with payroll tools to work faster
              </Text>
            </Stack>

            <Stack spacing={{ base: -8, sm: -10 }} direction={{ sm: "row" }}>
              <Button
                backgroundColor="#25CF60"
                size="lg"
                marginRight="9%"
                borderRadius="22px"
                marginLeft="12%"
                _hover={{ backgroundColor: "#25CF60" }}
                color="white"
              >
                Make HR'S work easier
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      {/* product tour */}
      <div className={style.prod_tour}>
        <div className={style.prod_tour_subpart1}>
          <h1>
            Want a product tour?
            <br /> Here you can book a call demo with our expert.
          </h1>
          <p>
            Learn all of the time tracking basics of TimeCamp and track time{" "}
            <br />
            like a true pro.
          </p>
          <Button
            marginBottom="15%"
            backgroundColor="#f7b801"
            size="lg"
            marginTop="7%"
            marginLeft="-7%"
            borderRadius="22px"
          >
            Book a Demo
          </Button>
        </div>
        <div className={style.prod_tour_subpart2}>
          <img
            src="https://cdn-m.timecamp.com/img/greenbranding/features/black_cta_img-platform.png"
            alt=""
          />
        </div>
      </div>
      <Text marginTop="7%" textAlign="center" fontWeight="bold" color="#25CF60">
        REVIEWS
      </Text>
      <Heading
        marginLeft="24%"
        marginTop="2%"
        fontWeight="500"
        marginRight="24%"
        color="blackAlpha.800"
      >
        Time tracking software for businesses across all industries and sizes
      </Heading>
      {/* carousel */}
      <SimpleGrid marginTop={"4%"} columns={[1, null, 4]} spacing="40px">
        <Box height="80px">
          <Text>Marketing agencies</Text>
        </Box>
        <Box height="80px">
          <Text>IT & Software houses</Text>
        </Box>
        <Box height="80px">
          <Text>Designers</Text>
        </Box>
        <Box height="80px">
          <Text>Accounting</Text>
        </Box>
      </SimpleGrid>
      <SimpleGrid
        columns={[1, null, 3]}
        marginTop="2"
        spacing="40px"
        marginLeft={"50px"}
        overflowWrap="anywhere"
      >
        {timeApi.map((el) => {
          return (
            <>
              <Box
                backgroundColor={"white"}
                width="auto"
                height="300px"
                borderRadius={"10px"}
                boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              >
                <Text
                  fontSize="15px"
                  marginLeft={"5%"}
                  marginRight="8%"
                  marginTop={"15%"}
                  textAlign={"start"}
                >
                  {el.desc}
                </Text>
                <Text
                  fontSize={"14px"}
                  marginLeft={"5%"}
                  marginRight="5%"
                  marginTop={"5%"}
                  textAlign={"start"}
                  fontWeight="bold"
                >
                  {el.name}
                </Text>
              </Box>
            </>
          );
        })}
      </SimpleGrid>
      {/* reiews images */}
      <SimpleGrid
        columns={[1, null, 4]}
        marginTop="5%"
        marginLeft="7%"
        spacing="40px"
      >
        {reviewsImgapi.map((el) => {
          return (
            <>
              <Box height="80px">
                <Image width="55%" src={el.img} alt="Dan Abramov" />
              </Box>
            </>
          );
        })}
      </SimpleGrid>
      {/* quick integrations */}
      <div className={style.integration}>
        <div className={style.integration_subpart1}>
          <h4 style={{ marginTop: "14%" }}>TIME TRACKING INTEGRATIONS</h4>
          <h1>
            Easy and quick integration with more than 100 apps and work tools
          </h1>
          <p>
            TimeCamp works great alongside with all of the most popular work
            management tools.
          </p>
          <p>
            Now, you can also track time directly from your go-to apps such as
            Trello or Asana thanks to our Chrome extension.
          </p>
          <Button
            backgroundColor="#25CF60"
            height="20"
            marginTop="4%"
            marginLeft="-7%"
            _hover="#25CF60;"
            color="white"
            borderRadius="22px"
            fontSize="20"
          >
            <img
              height="20px"
              marginRight="8px"
              src="https://cdn-m.timecamp.com/img/greenbranding/features/chrome-white.png"
              alt=""
            />
            Track time in Chrome
          </Button>
          <p>
            Maintain your current workflow and connect TimeCamp, the best time
            tracking software, with your currently used apps.
          </p>
          <h4>
            Check integrations<i class="fa-solid fa-arrow-right"></i>
          </h4>
        </div>
        {/* <div className={style.integration_subpart2}> */}
        <SimpleGrid
          columns={[3, null, 3]}
          marginTop="24"
          spacing="40px"
          marginLeft={"50px"}
        >
          {trackingApi.map((el) => {
            return (
              <>
                <Box
                  height="120px"
                  backgroundColor={"white"}
                  width="120px"
                  borderRadius={"35px"}
                >
                  <Image
                    height="50%"
                    margin={"auto"}
                    marginTop="6"
                    justifyContent={"center"}
                    src={el.img}
                  />
                </Box>
              </>
            );
          })}
        </SimpleGrid>
      </div>
      {/******** ********* price *****************/}
      <div className={style.pricee}>
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
      {/* *************************************************** */}
      {/* <div className={style.timecamp}>
        <div className={style.timecamp_subpart1}>
          <h1>Use TimeCamp to your advantage</h1>
          <p>
            If you’re struggling to keep track of your work across different
            projects, you need a radical change. You need TimeCamp.
          </p>
          <div className={style.divcamp}></div>
        </div>
      </div> */}
      {/*  *************faq*************/}
      <Text fontSize="5xl" marginTop={"3%"} marginBottom="10">
        FAQ
      </Text>
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
                    What is time tracker?
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={3} textAlign="start">
                A time tracker is computer software or a web app that allows
                teams, managers, and freelancers to measure time spent on tasks
                and projects. It is used in many industries (law firms,
                accounting, creative agencies, IT teams) for settling up with
                hourly workers and billing clients for work. You can integrate a
                time tracker with third-party tools for project management,
                accounting, customer service, to-do lists, and many more.
                Speaking shortly, a time tracker helps you understand which
                practices in your business lead to time waste. With this
                knowledge, you can reduce bad practices and optimize workflow.
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
                    Why use time tracker?
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={3} textAlign="start">
                There are many reasons to use time tracking software. Here are
                the main use cases for a time tracker: <br />
                1.Tracking billable hours: helps freelancers and employees who
                are paid on an hourly basis measure time spent on work with
                accuracy up to every second.
                <br />
                2.Improving productivity: employees who struggle with poor time
                management and distractions can work on their efficiency,
                understand how they work, and what takes most of their time.
                <br />
                3.Timesheet management: one of the most common features of time
                tracker is a timesheet – a digital version of a paper timesheet.
                With a time tracker, your team can have it filled out
                automatically.
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
                    What are the benefits of time tracker?
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={3} textAlign="start">
                Here are all the benefits of using time tracking software in a
                nutshell.
                <br />
                <ul>
                  <li>Increased productivity</li>
                  <li>Accurate timesheets</li>
                  <li>Real-time updates on projects status</li>
                  <li>Easy attendance management, Workflow automation</li>
                </ul>
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
                    How to bill client on hourly work?
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={3} textAlign="start">
                With TimeCamp, you can set up billing rates for your team
                members, projects, and clients.
                <br /> Have the time tracker record billable time and easily
                turn timesheet data into invoices, adjust the tax rates for your
                country and profession. And then, simply export the document or
                send it straight to your clients.
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
                    How to save time on timesheet?
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={3} textAlign="start">
                There is nothing better than having your timesheet filled out
                automatically!
                <br /> TimeCamp’s non-intrusive desktop app works in the
                background so you and your team can focus on what really
                matters, while the time tracker collects all the data for
                timesheets.
                <br /> Edit your time logs any time or add time manually for
                even more accuracy. Approve your team’s daily or weekly
                timesheets with one click without effort.
                <br /> Quick, easy, and painless timesheet management!
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>

      {/* *************************** blog **************/}
      <div
        style={{
          width: "100%",
          height: "auto",
          marginTop: "12%",
          // border: "1px solid red",
          backgroundColor:"#F3F3F3"
        }}
      >
        <div
          style={{
            width: "88.5%",
            height: "auto",
            margin: "auto",
            marginTop:"7%",
            // border: "1px solid red",
          }}
        >
          <Text color={"#25cf60;"} fontSize="20px" textAlign="start">
            Blogs
          </Text>
          <Flex>
            <Box p="1">
              <Text marginTop="4%" fontSize={"43px"} fontWeight="600" textAlign="start">
                Check the latest blog updates
              </Text>
            </Box>
            <Spacer />
            <Box p="4">
              {" "}
              <Button
                backgroundColor="#25CF60"
                height="12"
                marginLeft={"2"}
                marginTop={"2"}
                _hover="#25CF60;"
                color="white"
                borderRadius="22px"
              >
                Check all articles
              </Button>
            </Box>
          </Flex>
          <SimpleGrid
            columns={[1, null, 3]}
            marginTop="10"
            spacing="30px"
            overflowWrap="anywhere"
          >
            {blogApi.map((el) => {
              return (
                <>
                  <Box
                    backgroundColor={"white"}
                    width="auto"
                    height="auto"
                    borderRadius={"10px"}
                    boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                  >
                    <Image
                      width={"100%"}
                      height="180px"
                      objectFit="cover"
                      src={el.img}
                      alt="Dan Abramov"
                    />
                    <Text
                      fontSize={"20px"}
                      marginLeft={"5%"}
                      marginRight="5%"
                      marginTop={"5%"}
                      textAlign={"start"}
                      fontWeight="bold"
                    >
                      {el.title}
                    </Text>
                    <Text
                      fontSize={"20px"}
                      marginLeft={"5%"}
                      marginRight="5%"
                      marginTop={"0%"}
                      textAlign={"start"}
                      fontWeight="bold"
                    >
                      {el.desc}
                    </Text>
                    <Text
                      fontSize="15px"
                      marginLeft={"5%"}
                      marginRight="8%"
                      marginTop={"4%"}
                      textAlign={"start"}
                      marginBottom="3%"
                      color={"#25cf60;"}
                    >
                      {el.read}
                    </Text>
                  </Box>
                </>
              );
            })}
          </SimpleGrid>
        </div>
      </div>
      {/* *************************************** */}
    </>
  );
};

export default HomePage;
