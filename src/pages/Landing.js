import React from "react";
import { Text, Flex, Image } from "@chakra-ui/react";
import LandingBkg from "../imgs/bkgs/landing-bkg.png";
import "@animated-burgers/burger-squeeze/dist/styles.css";
import headshot from "../imgs/landing/headshot.png";
import Header from "../components/Header";
import PageStatus from "../components/PageStatus";
import { Pages } from "../constants/constants";

function Landing() {
  return (
    <Flex
      id={Pages.LANDING}
      h={"100vh"}
      w={"100vw"}
      bgImg={{ base: "none", bp: `url(${LandingBkg})` }}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgColor={"brand.100"}
      bgPos={"right"}
      direction={"column"}
      position={"relative"}
    >
      <Header />
      <Flex flexGrow={1} direction={{ base: "column", bp: "row" }}>
        <LandingContent />
        <LandingImage />
      </Flex>
      <PageStatus currentPage={Pages.LANDING} />
    </Flex>
  );
}

function LandingContent() {
  return (
    <Flex
      direction={"column"}
      alignItems={"flex-start"}
      h={{ base: "46vh", md: "40vh", bp: "100%" }}
    >
      <Flex
        w={{ base: "90%", bp: "60%" }}
        pt={{ base: "5px", md: "20px", bp: "50px" }}
        pl={"12%"}
        direction={"column"}
        h={"100%"}
        pb={"20px"}
      >
        <Flex h={"50%"} direction={"column"}>
          <Text
            fontSize={{ base: "28px", md: "40px", bp: "60px" }}
            color={"brand.300"}
            as={"b"}
          >
            Software Engineering Student.
          </Text>

          <Text fontSize={{ base: "18px", md: "25px" }} color={"brand.300"}>
            University of Calgary
          </Text>
          <Text fontSize={{ base: "18px", md: "25px" }} color={"brand.300"}>
            Fourth Year
          </Text>
        </Flex>
        <Flex flexGrow={1} alignItems={{ base: "end", bp: "normal" }}>
          <Text
            fontSize={{ base: "15px", md: "22px", bp: "30px" }}
            color={"brand.300"}
            as={"b"}
            textAlign={{ base: "right", bp: "left" }}
            pt={"20px"}
            pl={{ base: "0px", md: "50px", bp: "0px" }}
          >
            Passionate about creating digital experiences and all things code.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

function LandingImage() {
  return (
    <Flex
      bgColor={{ base: "brand.200", bp: "transparent" }}
      justifyContent={{ base: "center", bp: "normal" }}
      alignItems={{ base: "center", bp: "normal" }}
      h={{ base: "46vh", md: "52vh", bp: "100vh" }}
    >
      <Image
        src={headshot}
        boxSize={{ base: "80%", bp: "80%" }}
        objectFit={"contain"}
      ></Image>
    </Flex>
  );
}

export default Landing;
