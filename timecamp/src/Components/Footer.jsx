import style from "../Components/nav.module.css";
import React from "react";
import { Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <div className={style.pfooter}>
      <div className={style.footer}>
        <div className={style.fchild1}>
          <Text
            fontSize="14.5px"
            fontWeight={"600"}
            color="blackAlpha.800"
            marginBottom="8%"
          >
            Product
          </Text>
          <p>Features</p>
          <p>Integrations</p>
          <p>Applications</p>
          <p>Product updates</p>
          <p>Customer Stories</p>
          <p>Self-hosting</p>
        </div>
        <div>
          <Text
            fontSize="14.5px"
            fontWeight={"600"}
            color="blackAlpha.800"
            marginBottom="8%"
          >
            Support
          </Text>
          <p>support</p>
          <p>Knowledge base</p>
          <p>Developers API</p>
          <p>Server Status</p>
        </div>
        <div>
          <Text
            fontSize="14.5px"
            fontWeight={"600"}
            color="blackAlpha.800"
            marginBottom="8%"
          >
            Integrations
          </Text>
          <p>Trello</p>
          <p>Monday.com</p>
          <p>Google Calendar</p>
          <p>Asana</p>
          <p>Jira</p>
          <p>All integrations</p>
        </div>
        <div>
          <Text
            fontSize="14.5px"
            fontWeight={"600"}
            color="blackAlpha.800"
            marginBottom="8%"
          >
            Resources
          </Text>
          <p>Contact</p>
          <p>HeySpace</p>
          <p>About Us</p>
          <p>Press</p>
          <p>Become a Partner</p>
        </div>
        <div>
          <Text
            fontSize="14.5px"
            fontWeight={"600"}
            color="blackAlpha.800"
            marginBottom="8%"
          >
            Calculators
          </Text>
          <p>Profit Margin Calculator</p>
          <p>Online Timer</p>
          <p>Overtime Calculator</p>
          <p>ROI Calculator</p>
          <p>Time Crd Calculator</p>
        </div>
        <div>
          <Text
            fontSize="14.5px"
            fontWeight={"600"}
            color="blackAlpha.800"
            marginBottom="8%"
          >
            Legal
          </Text>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Seecurity</p>
        </div>
      </div>
      <div className={style.footerLogo}>
        <a
          href="https://twitter.com/timecamp/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a
          href="https://twitter.com/timecamp/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a
          href="https://twitter.com/timecamp/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-twitter"></i>
        </a>
      </div>
      <div style={{ marginTop: "1%", fontSize: "13px", color: "gray" }}>
        Copyright © 2022 TimeCamp. Inc.
      </div>
      <div style={{ fontSize: "10px", color: "gray", opacity: "50%", marginBottom:"3%" }}>
        We use cookies. Click here to learn more
      </div>
    </div>
  );
};

export default Footer;

// https://cdn-m.timecamp.com/img/backgroundTop.webp
// 2888 1386
