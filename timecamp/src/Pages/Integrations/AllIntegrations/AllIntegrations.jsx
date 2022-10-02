import React from 'react'
import styles from "../AllIntegrations/AllIntegrations.module.css"
import { Box, Button, Container, Flex, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import Navbar from '../../../Components/Navbar';
import Footer from '../../../Components/Footer';

const data = [
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/airtable.png",
        head:"Airtable",
        desc:"Measure time for projects and tasks in Airtable using TimeCamp Chrome extension"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/asana.png",
        head:"Asana",
        desc:"Import all your Opportunities, Projects, Tasks, Contacts, Organizations and Leads to TimeCamp"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/azuredevops.png",
        head:"Azure DevOps",
        desc:"Track time directly from your projects thanks to Azure DevOps integration"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/clickup.png",
        head:"ClickUp",
        desc:"Increase team productivity measuring how much time they spend on singular activities from ClickUp thanks to TimeCamp integration"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/gitlab.png",
        head:"GitLab",
        desc:"Track time spent in your GitLab repositories by using TimeCamp tracking tools"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/googlecalendar.png",
        head:"Google Calender",
        desc:"Measure the time spent on your Google Calendar events"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/googledocs.png",
        head:"Google Docs",
        desc:"TimeCamp Chrome extension for measuring time in Google Docs"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/gmail.svg",
        head:"Google Mail",
        desc:"Measure time for your emails with TimeCamp Chrome plugin that works in GMail"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/ical.png",
        head:"iCal",
        desc:"Track the time spent on all of your iCalendar appointments"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/insightly.png",
        head:"Insightly",
        desc:"Track time for all your Opportunities, Projects, Tasks, Contacts, Organizations and Leads"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/jira.png",
        head:"Jira",
        desc:"Track the time spent on any issue defined in Jira"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/microsoftteams.png",
        head:"Microsoft Teams",
        desc:"Track time directly from your projects and tasks thanks to Microsoft Teams integration"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/mondaycom.png",
        head:"Monday.com",
        desc:"Track time directly from your projects and tasks thanks to Monday.com integration"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/notion.svg",
        head:"Notion",
        desc:"The easiest way to track time for Notion tasks - TimeCamp Chrome plugin"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/outlookcalendar.png",
        head:"Outlook Calender",
        desc:"Track time for all of your Outlook calendar events"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/pipedrive.png",
        head:"Pipedrive",
        desc:"Track time for deals in Pipedrive with TimeCamp Chrome extension"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/podio.png",
        head:"Podio",
        desc:"Use TimeCamp to track time spent on all of your tasks and projects in Podio"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/quickbooks.png",
        head:"Quickbooks Online",
        desc:"Import all of your clients and accounts and track the time you spend on them"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/salesforce.png",
        head:"Salesforce",
        desc:"Track time directly from your projects thanks to Salesforce integration"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/slack.png",
        head:"Slack",
        desc:"Track time for all of your Slack channels and chats"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/smartsheet.png",
        head:"Smartsheet",
        desc:"Track time to all of your tasks in Smartheet"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/todoist.png",
        head:"Todoist",
        desc:"Measure the time spent on all your Todoist lists and tasks"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/trello.png",
        head:"Trello",
        desc:"Track time for all of your Trello boards, projects and tasks"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/wrike.png",
        head:"Wrike",
        desc:"Import all of you tasks and projects to TimeCamp to enable time tracking"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/xero.png",
        head:"Xero",
        desc:"Import all of your clients and accounts in Xero and track the time you spend on them"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/zendesk.png",
        head:"Zendesk",
        desc:"Track time to all of your Zendesk tickets"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/zoho.png",
        head:"ZOHO CRM",
        desc:"Track time for all your Zoho CRM activities"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/activecollab.png",
        head:"ActiveCollab",
        desc:"Track time directly from your projects and tasks thanks to ActiveCollab integration"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/axosoft.png",
        head:"AxoSoft",
        desc:"Measure time for Axosoft projects and tickets with TimeCamp Chrome extension"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/bitbucket.svg",
        head:"BitBucket",
        desc:"Track time for your issues from BitBucket with an easy-to-use tracking plugin"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/breeze.png",
        head:"Breeze",
        desc:"Track time directly from your projects thanks to Breeze integration"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/clubhouse.png",
        head:"Clubhouse",
        desc:"Time tracking plugin for Clubhouse tasks and stories"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/dokuwiki.png",
        head:"DokuWiki",
        desc:"Add time tracking button to your DokuWiki app with this Chrome plugin"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/draftin.png",
        head:"Draftin",
        desc:"Track time for your drafts directly in Draftin app"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/dropboxpaper.png",
        head:"Dropbox Paper",
        desc:"Track time directly from your docs and tasks thanks to Dropbox Paper integration"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/easyredmine.png",
        head:"Easy Redmine",
        desc:"Measure the time-consumption of each task and invoice your customers accurately thanks to Easy Redmine integration"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/esa.png",
        head:"Esa.io",
        desc:"Our Chrome plugin adds times button to your tasks in Esa.io"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/evernote.png",
        head:"Evernote",
        desc:"Import your notebooks and particular notes from Evernote to TimeCamp and track their time"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/feedly.png",
        head:"Feedly",
        desc:"Add simple and useful time tracker to your articles in Feedly"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/fibery.png",
        head:"Fibery",
        desc:"Manage your projects easier with TimeCamp time tracking Chrome plugin that works with Fibery"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/focuster.png",
        head:"Focuster",
        desc:"Add time tracking to your to-do lists in Focuster, use our Chrome plugin"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/freshdesk.png",
        head:"Freshdesk",
        desc:"Let your team track time against tickets it has to solve in thanks to Freshdesk integration"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/freshservice.png",
        head:"FreshService",
        desc:"With TimeCamp Chrome extension you can easily track time for tickets in FreshService"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/ginkoapp.png",
        head:"Ginkoapp",
        desc:"Track time directly in Ginkoapp with TimeCamp Chrome extension"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/github.png",
        head:"GitHub",
        desc:"Track time spent in your GitHub repositories by using TimeCamp tracking tools"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/googlekeep.svg",
        head:"Google Keep",
        desc:"Add timer to your notes in Google Keep with our Chrome plugin"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/gqueues.png",
        head:"GQueues",
        desc:"Track time for your tasks in GQueues thanks to TimeCamp Chrome extension"
    },
    {
        logo:"https://cdn-m.timecamp.com/img/greenbranding/integrations/habitica.svg",
        head:"Habitica",
        desc:"Add time tracker for Habitica cards and measure time spent on tasks"
    },
];

const AllIntegrations = () => {

  return (
    <>
        <Navbar />
        <Container
            pt={"96px"}
            pb={["0px","56px","96px"]}
            px={["0%","8%","12%"]}
            maxW={"100%"}
        >
            <Container
                maxW="100%"
                h={"100%"}
            >
                <Stack
                    direction={["column", "column", "row"]}
                    alignItems={["center","center","left"]}
                    justifyContent={["center","center","left"]}
                    w={"100%"}
                    h={"100%"}
                    spacing={[16,16,16]}
                >
                    <Stack
                        w={["100%","100%","50%"]}
                        h={"100%"}
                    >
                        <Heading
                            fontSize={["28px","36px","42px"]}
                            fontWeight={700}
                            lineHeight={1.25}
                            mt={"28px"}
                            mb={"32px"}
                            mr={["0px","0px","42px"]}
                            textAlign={["center","center","left"]}
                        >
                            Integrate TimeCamp with your favorite apps
                        </Heading>
                        <Text
                            fontSize={["12px","16px","20px"]}
                            fontWeight={400}
                            lineHeight={1.38}
                            mb={"16px"}
                            textAlign={["center","center","left"]}
                        >
                            No need to change your current workflow. Use TimeCamp alongside your other trusted tools.
                        </Text>
                        <Box
                            pt="24px"
                            display={"flex"}
                            alignItems={["center","center","left"]}
                            justifyContent={["center","center","left"]}
                        >
                            <Button
                                w={["100%","80%","70%"]}
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
                                    <Image maxW={"15%"} maxH={"80%"} src='https://cdn-m.timecamp.com/img/integrations/chrome.png'></Image>
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
                            pt="24px"
                            display={"flex"}
                            alignItems={["center","center","left"]}
                            justifyContent={["center","center","left"]}
                        >
                            <Button
                                 w={["100%","80%","70%"]}
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
                                    <Image maxW={"30%"}  src='https://cdn-m.timecamp.com/img/integrations/edge.svg'></Image>
                                    <Text
                                       fontSize={["1rem"]}
                                       fontWeight={700} 
                                       lineHeight={["0.8","1.1","1.5"]}
                                       color={"white"}
                                    >Track time in Edge</Text>
                                </Stack> 
                            </Button>
                        </Box>
                    </Stack>
                    <Box
                        w={["100%","100%","50%"]}
                    >
                        <Image w={"100%"} src='https://cdn-m.timecamp.com/img/greenbranding/rightHero.png' ></Image>
                    </Box>
                </Stack>
            </Container>
        </Container>
        <Container
            pt={"64px"}
            px={["0%","8%","12%"]}
            maxW={"100%"}
        >
            <Container
                maxW={"100%"}
            >
                <SimpleGrid
                    columns={[1,2,3,7]}
                    alignItems={["center"]}
                    justifyContent={["space-between"]}
                    h={"100%"}
                    spacing="70px"
                    mb={"96px"}
                >
                    <div className={styles.button} >
                        <button>
                            <img src='https://cdn-m.timecamp.com/img/greenbranding/all.svg' />
                        </button>
                        <span>All</span>
                    </div>
                    <div className={styles.button} >
                        <button>
                            <img src='https://cdn-m.timecamp.com/img/greenbranding/pm.svg' />
                        </button>
                        <span>Project management</span>
                    </div>
                    <div className={styles.button} >
                        <button>
                            <img src='https://cdn-m.timecamp.com/img/greenbranding/hd.svg' />
                        </button>
                        <span>Helpdesk</span>
                    </div>
                    <div className={styles.button} >
                        <button>
                            <img src='https://cdn-m.timecamp.com/img/greenbranding/collab.svg' />
                        </button>
                        <span>Collaboration</span>
                    </div>
                    <div className={styles.button} >
                        <button>
                            <img src='https://cdn-m.timecamp.com/img/greenbranding/dev.svg' />
                        </button>
                        <span>Development</span>
                    </div>
                    <div className={styles.button} >
                        <button>
                            <img src='https://cdn-m.timecamp.com/img/greenbranding/acc.svg' />
                        </button>
                        <span>Accounting & Invoicing</span>
                    </div>
                    <div className={styles.button} >
                        <button>
                            <img src='https://cdn-m.timecamp.com/img/greenbranding/crm.svg' />
                        </button>
                        <span>CRM & Sales</span>
                    </div>
                </SimpleGrid>
            </Container>
        </Container>
        <Container
            pt={"96px"}
            px={["0%","8%","12%"]}
            maxW={"100%"}
            backgroundColor={"#fcfcfc"}
        >
            <Container
                 maxW="100%"
                 h={"100%"}
                //  border={"1px"}
                //  borderColor={"black"}
            >
                <SimpleGrid
                    columns={[1,2,3]}
                >
                        {data.map((el)=> ( 
                        <div className={styles.integrations}> 
                            <div className={styles.logo} >
                                <img src={el.logo} alt="" />
                            </div>
                            <div className={styles.desc}>
                                <h2>{el.head}</h2>
                                <p>{el.desc}</p>
                            </div>
                        </div>
                        ))}
                </SimpleGrid>
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
          <Footer />
    </>
  )
}

export default AllIntegrations