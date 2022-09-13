import React from "react";
import Logoimg from "assets/images/footerlogo.png";
import Linkdinimg from "assets/images/in.png";
import Facebookimg from "assets/images/facebook.png";
import Twitterimg from "assets/images/twitter.png";
import Youtubeimg from "assets/images/youtube.png";
import Messageimg from "assets/images/message.png";
import Rightimg from "assets/images/footerrightimg.png";
import Leftimg from "assets/images/footerleftimg.png";
import {
  Footerwrapper,
  Innerwrapper,
  Leftwrapper,
  Logo,
  Wits,
  Leftupperdiv,
  Leftlowerdiv,
  Lower1div,
  Lower2div,
  Lower3div,
  About,
  Services,
  Case,
  Our,
  Industries,
  General,
  Company,
  Career,
  Blogs,
  Contact,
  Yellowline1,
  Vertical1,
  Vertical2,
  Contactus,
  Yellowline2,
  Sco,
  Unit,
  Vertical3,
  Rightdiv,
  Followus,
  Icons,
  Linkdin,
  Facebook,
  Twitter,
  Youtube,
  Subscribe,
  Email,
  Inputdiv,
  Subscribebtn,
  Message,
  Copyrightmaindiv,
  Copyrightinnerdiv,
  Copyrightfirstdiv,
  Conditionp,
  Privacyp,
  Legalp,
  Copyrightseconddiv,
  Leftimage,
  Image,
} from "styles/components/Footer/index";

const Footer = () => (
  <>
    <Footerwrapper>
      <Leftimage src={Leftimg} alt="Image" />
      <Innerwrapper>
        <Leftwrapper>
          <Leftupperdiv>
            <Logo src={Logoimg} alt="Image" />
            <Wits>
              Wits Innovation Lab is where creativity and innovation flourish.
              We provide the tools you need to come up with innovative solutions
              for today's businesses, big or small.
            </Wits>
          </Leftupperdiv>
          <Leftlowerdiv>
            <Lower1div>
              <About>About Us</About>
              <Services>Services</Services>
              <Case>Case Studies</Case>
              <Our>Our Process</Our>
              <Industries>Industries</Industries>
            </Lower1div>
            <Vertical1></Vertical1>
            <Lower2div>
              <General>General</General>
              <Yellowline1></Yellowline1>
              <Company>Company</Company>
              <Career>Career</Career>
              <Blogs>Blogs</Blogs>
              <Contact>Contact</Contact>
              <Vertical2></Vertical2>
            </Lower2div>
            <Lower3div>
              <Contactus>Contact Us</Contactus>
              <Yellowline2></Yellowline2>
              <Sco>
                SCO 40-41 D, 3rd floor, City Heart, Kharar, Punjab-140301
              </Sco>
              <Unit>
                Unit 37 Tileyard Road, N7 9AH California, United States
              </Unit>
            </Lower3div>
          </Leftlowerdiv>
        </Leftwrapper>
        <Vertical3></Vertical3>
        <Rightdiv>
          <Followus>Follow Us</Followus>
          <Icons>
            <Linkdin src={Linkdinimg} alt="Image" />
            <Facebook src={Facebookimg} alt="Image" />
            <Twitter src={Twitterimg} alt="Image" />
            <Youtube src={Youtubeimg} alt="Image" />
          </Icons>
          <Subscribe>Subscribe to Our Newsletter</Subscribe>
          <Inputdiv>
            <Message src={Messageimg} alt="Image" />
            <Email placeholder="Enter Your Email"></Email>
            <Subscribebtn>Subscribe</Subscribebtn>
          </Inputdiv>
        </Rightdiv>
      </Innerwrapper>
      <Copyrightmaindiv>
        <Copyrightinnerdiv>
          <Copyrightfirstdiv>
            <Conditionp>Terms & Conditions</Conditionp>
            <Privacyp>Privacy Policy</Privacyp>
            <Legalp>Legal</Legalp>
          </Copyrightfirstdiv>
          <Copyrightseconddiv>
            Copyright © 2020. witsinnovationlab. All rights reserved.
          </Copyrightseconddiv>
        </Copyrightinnerdiv>
      </Copyrightmaindiv>
      <Image src={Rightimg} alt="Image" />
    </Footerwrapper>
  </>
);

export default Footer;
