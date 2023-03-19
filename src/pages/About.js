import { Flex, Text, Grid, Button, Stack } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import PageStatus from "../components/PageStatus";
import { Logos, Pages } from "../constants/constants";
import AboutBkg from "../imgs/bkgs/about-bkg.png";

function About() {
  const [width, setWidth] = React.useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  });

  const isSmallerScreen = width <= 1200;
  return (
    <Grid
      id="about"
      w={"100vw"}
      h={"100vh"}
      bgImg={`url(${AboutBkg})`}
      bgSize={"cover"}
      position={"relative"}
    >
      <Header showLogo={true} colour={Logos.RED} />
      <Flex h={"92vh"} flexDir={"column"}>
        <Grid textAlign={"center"}>
          <Text
            color={"brand.100"}
            fontSize={{ base: "2xl", md: "45px" }}
            fontWeight={"bold"}
          ></Text>
        </Grid>
        <AboutOptions isSmallerScreen={isSmallerScreen} />
      </Flex>
      <PageStatus currentPage={Pages.ABOUT} />
    </Grid>
  );
}

function AboutOptions({ isSmallerScreen }) {
  const [currentlyClicked, setCurrentlyClicked] = React.useState("");
  const aboutButtons = {
    About_Me: { title: "About Me" },
    Tools: { title: "Tools" },
    Impact: { title: "Impact" },
    Travel: { title: "Travel" },
    Pets: { title: "Pets" },
  };

  function handleClick(buttonTitle) {
    setCurrentlyClicked(buttonTitle);
  }

  return (
    <Grid>
      Hello
      {isSmallerScreen && (
        <>
          {Object.keys(aboutButtons).map((item) => (
            <AboutButton buttonKey={item} buttonInfo={aboutButtons} />
          ))}
        </>
      )}
      {!isSmallerScreen && (
        <>
          <Grid>
            {Object.keys(aboutButtons)
              .slice(0, 3)
              .map((item) => (
                <AboutButton buttonKey={item} buttonInfo={aboutButtons} />
              ))}
          </Grid>
          <Grid>
            {Object.keys(aboutButtons)
              .slice(3)
              .forEach((item) => (
                <AboutButton buttonKey={item} buttonInfo={aboutButtons} />
              ))}
          </Grid>
        </>
      )}
    </Grid>
  );

  function AboutButton({ buttonKey, buttonInfo }) {
    return (
      <Button
        w={"150px"}
        color={
          buttonInfo[buttonKey].title === currentlyClicked
            ? "brand.300"
            : "brand.100"
        }
        colorScheme="brand"
        borderColor="brand.100"
        bgColour={"red"}
        variant={
          buttonInfo[buttonKey].title === currentlyClicked ? "solid" : "outline"
        }
        onClick={() => handleClick(buttonInfo[buttonKey].title)}
      >
        {buttonInfo[buttonKey].title}
      </Button>
    );
  }
}

export default About;
