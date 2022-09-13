import React from "react";
import Img from "assets/images/section5image.png";
import Arrowleft from "assets/images/leftarrow.png";
import Arrowright from "assets/images/rightarrow.png";
import Cardimage from "assets/images/profile.png";
import Yelstar from "assets/images/yellowstar.png";
import Greystar from "assets/images/greystar.png";
import Comma from "assets/images/comma.png";

import {
  Maindiv,
  Leftdiv,
  Image,
  Rightmaindiv,
  Rightupperdiv,
  See,
  Testimonials,
  We,
  Buttonmain,
  Para,
  Button,
  Leftarrow,
  Rightarrow,
  Rightlowerdiv,
  Card,
  Cardinnerdiv,
  Cardupperdiv,
  Cardupperleftdiv,
  Profile,
  CardupperRightdiv,
  Jane,
  Manager,
  Stardiv,
  Yellow,
  Grey,
  Cardlowerdiv,
  Commas,
} from "styles/views/homepage/testimonialsection/index";

const TestimonialSection = () => (
  <>
    <Maindiv>
      <Leftdiv>
        <Image src={Img} alt="Image" />
      </Leftdiv>
      <Rightmaindiv>
        <Rightupperdiv>
          <See>See our success in</See>
          <Testimonials>Testimonials</Testimonials>
          <We>We are the best, and our customers say it.</We>
          <Buttonmain>
            <Para>
              We've never been ones to brag, but we can't help but share some of
              the feedback we've gotten from our clients. Take a look at what
              they have to say about us:
            </Para>
            <Button>
              <Leftarrow src={Arrowleft} alt="Image" />
              <Rightarrow src={Arrowright} alt="Image" />
            </Button>
          </Buttonmain>
        </Rightupperdiv>
        <Rightlowerdiv>
          <Card>
            <Commas src={Comma} alt="Image" />
            <Cardinnerdiv>
              <Cardupperdiv>
                <Cardupperleftdiv>
                  <Profile src={Cardimage} alt="Image" />
                </Cardupperleftdiv>
                <CardupperRightdiv>
                  <Jane>Jane Cooper</Jane>
                  <Manager>Manager at Google</Manager>
                  <Stardiv>
                    <Yellow src={Yelstar} alt="Image" />
                    <Yellow src={Yelstar} alt="Image" />
                    <Yellow src={Yelstar} alt="Image" />
                    <Yellow src={Yelstar} alt="Image" />
                    <Grey src={Greystar} alt="Image" />
                  </Stardiv>
                </CardupperRightdiv>
              </Cardupperdiv>
              <Cardlowerdiv>
                "Thanks guys, keep up the good work! I wish I would have thought
                of it first. It's incredible. I don't always clop, but when I
                do, it's because of Wits Innovation Lab."
              </Cardlowerdiv>
            </Cardinnerdiv>
          </Card>
        </Rightlowerdiv>
      </Rightmaindiv>
    </Maindiv>
  </>
);

export default TestimonialSection;
