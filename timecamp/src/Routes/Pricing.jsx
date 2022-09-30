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
  ListItem,
  Accordion,
  AccordionIcon,
  MinusIcon,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  UnorderedList,
} from "@chakra-ui/react";
import style from "../Routes/home.module.css";

const Pricing = () => {
  return (
    <div>
      <div style={{backgroundColor:"gray", paddingTop:"6%", p}}>
        <Text fontSize={"24"} marginTop="24" textAlign="center" fontWeight="500">
          TimeCamp fits perfectly for companies big and small.
          <br /> Regardless of your budget.
        </Text>
        <Text fontSize={"20"} textAlign="center" fontWeight="300">
          Choose the most accurate pricing for you and start gaining crucial
          insights for your business.
        </Text>
        <Text fontSize={"18"} textAlign="center" fontWeight="500">
          You can also start with a free 14-day trial.
        </Text>
      </div>
    </div>
  );
}

export default Pricing
