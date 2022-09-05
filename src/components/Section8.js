import React from "react";
import Topimg from "../images/top.png";
import Bottomimg from "../images/bottom.png";
import Ballimg from "../images/ball.png";
import Sideimg from "../images/section8image.png";
import Pinimg from "../images/pin.png";
import Whatsappimg from "../images/whatsapp.png";
import Calendlyimg from "../images/calendly.png";
import {
  Maindiv,
  Idea,
  Contact,
  Ques,
  Form,
  Left,
  Top,
  Bottom,
  Ball,
  Project,
  Image,
  Squarediv,
  Right,
  Interested,
  Select,
  Name,
  Namediv,
  Emaildiv,
  Email,
  Aboutdiv,
  About,
  Pin,
  Attachment,
  Attachmentp,
  Optional,
  Request,
  Or,
  Firstline,
  Secondline,
  Orp,
  If,
  Buttondiv,
  Button1,
  Button2,
  Whatsapp,
  Calendly,
} from "./Section8style";

const Section8 = () => {
  return (
    <>
      <Maindiv>
        <Squarediv>
          <Idea>Got an idea?</Idea>
          <Contact>Contact Us</Contact>
          <Ques>You have questions. We have answers.</Ques>
          <Form>
            <Left>
              <Top src={Topimg} alt="Image" />
              <Project>Have a Project? We would love to help</Project>
              <Bottom src={Bottomimg} alt="Image" />
              <Ball src={Ballimg} alt="Image" />
            </Left>
            <Right>
              <Interested>I'm interested in....</Interested>
              <Select>
                <option value="All Services">All Services</option>
              </Select>
              <Namediv>
                <Name placeholder="Your name"></Name>
              </Namediv>
              <Emaildiv>
                <Email placeholder="Your email"></Email>
              </Emaildiv>
              <Aboutdiv>
                <About placeholder="Tell us about your project"></About>
              </Aboutdiv>
              <Attachment>
                <Pin src={Pinimg} alt="Image" />
                <Attachmentp>Add Attachment</Attachmentp>
                <Optional>(Optional)</Optional>
              </Attachment>
              <Request>Send Request</Request>
              <Or>
                <Firstline></Firstline>
                <Orp>or</Orp>
                <Secondline></Secondline>
              </Or>
              <If>
                If you're ready to make a change, we're ready to help. Just
                connect with us today!
              </If>
              <Buttondiv>
                <Button1>
                  <Whatsapp src={Whatsappimg} alt="Image" />
                  Whatsapp
                </Button1>
                <Button2>
                  <Calendly src={Calendlyimg} alt="Image" />
                  Calendly
                </Button2>
              </Buttondiv>
            </Right>
          </Form>
          <Image src={Sideimg} alt="Image" />
        </Squarediv>
      </Maindiv>
    </>
  );
};

export default Section8;
