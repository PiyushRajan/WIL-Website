import React from "react";
import Logo from "assets/images/witslogo.png";
import {
  Nav,
  List,
  UL,
  Img,
  Btndiv,
  Btn,
  Logodiv,
  Listdiv,
} from "styles/components/Navbar/index";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => (
  <>
    <Nav>
      {/* 1st logo part  */}

      <Logodiv>
        <Img src={Logo} alt="logo" />
      </Logodiv>

      {/* 2nd menu part  */}

      <Listdiv>
        <UL>
          <List>
            About Us
            <FaAngleDown />
          </List>
          <List>Industry</List>
          <List>
            Services
            <FaAngleDown />
          </List>
          <List>Career</List>
        </UL>
      </Listdiv>

      {/* 3rd connect button */}

      <Btndiv>
        <Btn>Let's Connect</Btn>
      </Btndiv>
    </Nav>
  </>
);

export default Navbar;
