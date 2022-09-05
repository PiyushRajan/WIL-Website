import React from "react";
import Img from "../images/section2image.png";
import {
  Maindiv,
  Firstdiv,
  Seconddiv,
  Thirddiv,
  Image,
  Letdiv,
  Numberdiv,
  Thirdtopdiv,
  Thirdmiddlediv,
  Thirdbottomdiv,
  Firstp,
  Secondp,
  Code,
  Firstline,
  Members,
  Fourthline,
  Projects,
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
} from "./Section2style";

const Section2 = () => {
  return (
    <>
      <Maindiv>
        <Firstdiv>
          <Image src={Img} alt="image" />
        </Firstdiv>
        <Seconddiv>
          <Letdiv>Let us tell a story of</Letdiv>
          <Numberdiv>Our Numbers</Numberdiv>
        </Seconddiv>
        <Thirddiv>
          <Thirdtopdiv>
            <Firstp>
              When you see our numbers, you'll know why we're the best.
            </Firstp>
            <Secondp>
              We're a fastest growing community working hard to make things
              happen. We've got a lot of hands-on cumulative experience and a
              good amount of fire under our tails, though we are young.
            </Secondp>
          </Thirdtopdiv>
          <Thirdmiddlediv></Thirdmiddlediv>
          <Thirdbottomdiv>
            <Code>
              <One>500k+</One>
              <Two>Lines Of Code</Two>
            </Code>
            <Firstline></Firstline>
            <Members>
              <Three>140+</Three>
              <Four>Team Members</Four>
            </Members>
            <Fourthline></Fourthline>
            <Projects>
              <Five>65+</Five>
              <Six>Completed Projects</Six>
            </Projects>
          </Thirdbottomdiv>
        </Thirddiv>
      </Maindiv>
    </>
  );
};

export default Section2;
