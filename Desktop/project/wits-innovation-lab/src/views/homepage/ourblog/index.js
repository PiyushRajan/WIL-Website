import React from "react";
import Arrowleft from "assets/images/leftarrow.png";
import Arrowright from "assets/images/rightarrow.png";
import Wilimg from "assets/images/wil.png";
import Blockimg from "assets/images/block.png";
import Commercialimg from "assets/images/commercial.png";
import Img from "assets/images/section6image.png";
import {
  Maindiv,
  Upperdiv,
  Thoughts,
  Blog,
  Para,
  Leftarrow,
  Rightarrow,
  Paradiv,
  Grid,
  Wildiv,
  Blockdiv,
  Commercialdiv,
  Wil,
  Block,
  Commercial,
  Wilpdiv,
  Blockpdiv,
  Commercialpdiv,
  Wilblog,
  Amet,
  Image,
} from "styles/views/homepage/ourblog/index";
const OurBlog = () => (
  <>
    <Maindiv>
      <Upperdiv>
        <Thoughts>Our Thoughts in</Thoughts>
        <Blog>Our Blog</Blog>
        <Paradiv>
          <Para>
            We're here to make your thoughts on tech a little more… thought-ful.
          </Para>
          <Leftarrow src={Arrowleft} alt="Image" />
          <Rightarrow src={Arrowright} alt="Image" />
        </Paradiv>
      </Upperdiv>
      <Image src={Img} alt="Image" />
      <Grid>
        <Wildiv>
          <Wil src={Wilimg} alt="Image" />
          <Wilpdiv>
            <Wilblog>Wil Blog</Wilblog>
            <Amet>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat
            </Amet>
          </Wilpdiv>
        </Wildiv>
        <Blockdiv>
          <Block src={Blockimg} alt="Image" />
          <Blockpdiv>Block Chain</Blockpdiv>
        </Blockdiv>
        <Commercialdiv>
          <Commercial src={Commercialimg} alt="Image" />
          <Commercialpdiv>Commercial</Commercialpdiv>
        </Commercialdiv>
      </Grid>
    </Maindiv>
  </>
);

export default OurBlog;
