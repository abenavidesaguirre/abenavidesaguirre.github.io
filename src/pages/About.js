import { Flex } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import PageStatus from "../components/PageStatus";
import { Logos, Pages } from "../constants/constants";
import AboutBkg from "../imgs/bkgs/about-bkg.png";

function About() {
  return (
    <Flex
      id="about"
      w={"100vw"}
      h={"100vh"}
      bgImg={`url(${AboutBkg})`}
      bgSize={"cover"}
      position={"relative"}
    >
      <Header showLogo={true} colour={Logos.RED} />
      <PageStatus currentPage={Pages.ABOUT} />
    </Flex>
  );
}

export default About;
