import React from "react";
import Img1 from "assets/images/nutrition.png";
import Img2 from "assets/images/trepp.png";
import Img3 from "assets/images/farms.png";
import Img4 from "assets/images/affinidi.png";
import Img5 from "assets/images/bcg.png";
import Img6 from "assets/images/earn.png";
import Img7 from "assets/images/hermes.png";
import Img8 from "assets/images/designwork.png";
import Img9 from "assets/images/moonverse.png";
import Img10 from "assets/images/payu.png";
import {
  Maindiv,
  Firstdiv,
  Seconddiv,
  Wrapper,
  Thirddiv,
  Fourthdiv,
  Fifthdiv,
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Sixthdiv,
} from "styles/views/homepage/ourclients/index";

const OurClients = () => (
  <>
    <Maindiv>
      <Firstdiv>See who's winning with us</Firstdiv>
      <Wrapper>
        <Seconddiv>Our Clients</Seconddiv>
      </Wrapper>
      <Thirddiv>
        These powerhouses are already winning business with us.
      </Thirddiv>
      <Fourthdiv>
        We love what we do, and we hope you'll let us help you too.
      </Fourthdiv>
      <Fifthdiv>
        <Image1 src={Img1} alt="Image" />
        <Image2 src={Img2} alt="Image" />
        <Image3 src={Img3} alt="Image" />
        <Image4 src={Img4} alt="Image" />
        <Image5 src={Img5} alt="Image" />
      </Fifthdiv>
      <Sixthdiv>
        <Image6 src={Img6} alt="Image" />
        <Image7 src={Img7} alt="Image" />
        <Image8 src={Img8} alt="Image" />
        <Image9 src={Img9} alt="Image" />
        <Image10 src={Img10} alt="Image" />
      </Sixthdiv>
    </Maindiv>
  </>
);

export default OurClients;
