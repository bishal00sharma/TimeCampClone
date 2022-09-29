import React from 'react'
import style from "../Routes/home.module.css"
import {Button, Heading} from "@chakra-ui/react"

const HomePage = () => {
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
      {/* <Heading marginLeft="28%" margin="20%">Time tracking for everyone in your organization</Heading> */}
    </>
  );
}

export default HomePage
