import React from "react";
import Navbar from "components/Navbar";
import Transformation from "views/homepage/transformation/index";
import OurNumbers from "views/homepage/ournumbers/index";
import YourProblems from "views/homepage/yourproblems/index";
import OurClients from "views/homepage/ourclients/index";
import TestimonialSection from "views/homepage/testimonialsection/index";
import OurBlog from "views/homepage/ourblog/index";
import OurTeam from "views/homepage/ourteam/index";
import ContactUs from "views/homepage/contactus/index";
import Footer from "components/Footer/index";

const Index = () => (
  <>
    <Navbar />
    <Transformation />
    <OurNumbers />
    <YourProblems />
    <OurClients />
    <TestimonialSection />
    <OurBlog />
    <OurTeam />
    <ContactUs />
    <Footer />
  </>
);

export default Index;
