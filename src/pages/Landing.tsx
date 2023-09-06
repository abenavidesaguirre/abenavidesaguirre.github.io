import React from "react";
import { Text, Flex, Image } from "@chakra-ui/react";
import LandingBkg from "../imgs/bkgs/landing-bkg.png";
import "@animated-burgers/burger-squeeze/dist/styles.css";
import headshot from "../imgs/landing/headshot.png";
import PageStatus from "../components/PageStatus";
import { Pages } from "../constants/constants";

function Landing() {
  return (
    <Flex
      id={Pages.LANDING}
      h={"100vh"}
      w={"100vw"}
      bgImg={{ base: "none", lap: `url(${LandingBkg})` }}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgColor={"brand.100"}
      bgPos={"right"}
      direction={"column"}
      position={"relative"}
      pt={"8vh"}
    >
      <Flex h="92vh" direction={{ base: "column", lap: "row" }}>
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
      h={{ base: "46vh", mob: "40vh", lap: "100%" }}
    >
      <Flex
        w={{ base: "90%", lap: "60%" }}
        pt={{ base: "5px", mob: "20px", lap: "50px" }}
        pl={"12%"}
        direction={"column"}
        h={"100%"}
        pb={"20px"}
      >
        <Flex h={"50%"} direction={"column"}>
          <Text
            fontSize={{ base: "28px", mob: "40px", lap: "60px" }}
            color={"brand.300"}
            as={"b"}
          >
            Software Engineering Student.
          </Text>

          <Text fontSize={{ base: "18px", mob: "25px" }} color={"brand.300"}>
            University of Calgary
          </Text>
          <Text fontSize={{ base: "18px", mob: "25px" }} color={"brand.300"}>
            Final Year
          </Text>
        </Flex>
        <Flex flexGrow={1} alignItems={{ base: "end", lap: "normal" }}>
          <Text
            fontSize={{ base: "15px", mob: "22px", lap: "30px" }}
            color={"brand.300"}
            as={"b"}
            textAlign={{ base: "right", lap: "left" }}
            pt={"20px"}
            pl={{ base: "0px", mob: "50px", lap: "0px" }}
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
      bgColor={{ base: "brand.200", lap: "transparent" }}
      justifyContent={{ base: "center", lap: "normal" }}
      alignItems={{ base: "center", lap: "normal" }}
      h={{ base: "46vh", mob: "52vh", lap: "100vh" }}
    >
      <Image
        src={headshot}
        boxSize={{ base: "80%", lap: "80%" }}
        objectFit={"contain"}
      ></Image>
    </Flex>
  );
}

export default Landing;
