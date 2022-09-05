import React from "react";
import Img from "../images/rightdivimg.png";
import { FiChevronRight } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import {
  Maindiv,
  Leftdiv,
  Rightdiv,
  Headdiv,
  Paradiv,
  Btndiv,
  Icondiv,
  Heading,
  Span,
  Image,
  Btn1,
  Btn2,
  Line,
} from "./Section1style";

const Section1 = () => {
  return (
    <>
      <Maindiv>
        <Leftdiv>
          <Headdiv>
            <Heading>
              We're not just IT. We're a
              <Span> Business Transformation Company.</Span>
            </Heading>
          </Headdiv>
          <Paradiv>
            We are more than just a business. We're a community of like-minded
            individuals who share our love for connecting people with the best
            in their area.
          </Paradiv>
          <Btndiv>
            <Btn1>Tell Us About your Project</Btn1>
            <Btn2>
              <FiChevronRight />
            </Btn2>
          </Btndiv>
          <Icondiv>
            Follow US
            <Line></Line>
            <FaLinkedinIn />
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
          </Icondiv>
        </Leftdiv>
        <Rightdiv>
          <Image src={Img} alt="Image" />
        </Rightdiv>
      </Maindiv>
    </>
  );
};

export default Section1;
