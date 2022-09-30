import React from "react";
import style from "../Routes/home.module.css";
import {
  Button,
  Heading,
  Container,
  Box,
  Flex,
  Stack,
  Text,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import Carousels from "../Components/Carousel";

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
  return (
    <>
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
          <img src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/usp-logo-white.png" />
          <img src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/dsv-logo-white.png" />
          <img src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/raindrop-logo-white.png" />
          <img src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/saatchi-logo-white.png" />
          <img src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/havas-logo-white.png" />
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
          <SimpleGrid
            columns={[3, null, 1]}
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
        </Stack>
      </Container>
      {/* f********************** */}
    </>
  );
};

export default HomePage;
