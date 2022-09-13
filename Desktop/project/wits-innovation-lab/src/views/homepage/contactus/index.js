import React from "react";
import Topimg from "assets/images/top.png";
import Bottomimg from "assets/images/bottom.png";
import Ballimg from "assets/images/ball.png";
import Sideimg from "assets/images/section8image.png";
import Pinimg from "assets/images/pin.png";
import Whatsappimg from "assets/images/whatsapp.png";
import Calendlyimg from "assets/images/calendly.png";
import {
  Maindiv,
  Idea,
  Contact,
  Ques,
  FormWrapper,
  FormLeftWrapper,
  TopCornerImage,
  BottomCornerImage,
  BallImage,
  Projectpara,
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
} from "styles/views/homepage/contactus/index";

const ContactUs = () => (
  <>
    <Maindiv>
      <Squarediv>
        <Idea>Got an idea?</Idea>
        <Contact>Contact Us</Contact>
        <Ques>You have questions. We have answers.</Ques>
        <FormWrapper>
          <FormLeftWrapper>
            <TopCornerImage src={Topimg} alt="Image" />
            <Projectpara>Have a Project? We would love to help</Projectpara>
            <BottomCornerImage src={Bottomimg} alt="Image" />
            <BallImage src={Ballimg} alt="Image" />
          </FormLeftWrapper>
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
        </FormWrapper>
        <Image src={Sideimg} alt="Image" />
      </Squarediv>
    </Maindiv>
  </>
);

export default ContactUs;
