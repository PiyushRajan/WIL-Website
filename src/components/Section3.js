import React from "react";
import Img from "../images/section3image.png";
import {
  Maindiv,
  We,
  Solutions,
  Square,
  Squarediv,
  Image,
  Looking,
  Line,
  Ques,
  White,
  Grid,
  Gridside,
} from "./Section3style";
import { BiChevronLeft } from "react-icons/bi";

const Section3 = () => {
  return (
    <>
      <Maindiv>
        <We>We have got</We>
        <Solutions>Solutions to Your Problems</Solutions>
        <Squarediv>
          <Square>
            <Looking>What are you looking for?</Looking>
            <Line></Line>
            <Ques>Question 1 of 2</Ques>
            <White>
              <Grid>
                I'd like to build a revolutionary website/app for my business.
                <Gridside>
                  <BiChevronLeft />
                </Gridside>
              </Grid>
              <Grid>
                I need to validate and transform an idea to a product.
                <Gridside>
                  <BiChevronLeft />
                </Gridside>
              </Grid>
              <Grid>
                I'd like to create an immersive, interactive UI/UX.
                <Gridside>
                  <BiChevronLeft />
                </Gridside>
              </Grid>
              <Grid>
                I'd like to create an immersive, interactive UI/UX.
                <Gridside>
                  <BiChevronLeft />
                </Gridside>
              </Grid>
              <Grid>
                I'd like to build a revolutionary website/app for my business.
                <Gridside>
                  <BiChevronLeft />
                </Gridside>
              </Grid>
              <Grid>
                I want to harness the latest tech to improve my operations.
                <Gridside>
                  <BiChevronLeft />
                </Gridside>
              </Grid>
            </White>
          </Square>

          <Image src={Img} alt="image" />
        </Squarediv>
      </Maindiv>
    </>
  );
};

export default Section3;
