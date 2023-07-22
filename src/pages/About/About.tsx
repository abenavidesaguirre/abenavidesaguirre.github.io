import { Flex, Text, Grid, Button, Box, Image } from "@chakra-ui/react";
import React from "react";
import PageStatus from "../../components/PageStatus";
import { Pages } from "../../constants/constants";
import { AboutContent, AboutContentKeys } from "./About.constants";
import { ImpactContent } from "./Impact";
import { ToolsContent } from "./Tools";
import { TravelContent } from "./Travel";
import birbs from "../../imgs/about/pets/birbs.png";
import { BREAKPOINTS } from "../../chakra/breakpoints";

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
  const isSmallerScreen = width <= BREAKPOINTS.tab;
  const [currentlyClicked, setCurrentlyClicked] = React.useState(
    AboutContentKeys.ABOUT
  );

  function handleButtonClick(buttonTitle: string) {
    setCurrentlyClicked(buttonTitle);
  }

  return (
    <Grid
      id="about"
      w={"100vw"}
      h={"100vh"}
      bgSize={"cover"}
      position={"relative"}
      pt={"8vh"}
    >
      <Flex h={"92vh"} flexDir={"column"}>
        <Grid textAlign={"center"}>
          <Text
            color={"brand.100"}
            fontSize={{ base: "25px", mob: "45px" }}
            fontWeight={"bold"}
          >
            Who Am I?
          </Text>
        </Grid>
        {!isSmallerScreen ? (
          <Flex h="75%" p="50px">
            <AboutContentText
              isSmallerScreen={isSmallerScreen}
              contentArray={AboutContent[currentlyClicked].text}
              currentContent={currentlyClicked}
            />
            <Box w="5px" bgColor={"brand.100"} mt="10px" />
            <AboutOptions
              isSmallerScreen={isSmallerScreen}
              handleClick={handleButtonClick}
              currentlyClicked={currentlyClicked}
            />
          </Flex>
        ) : (
          <Flex direction={"column"} h="90%">
            <AboutOptions
              isSmallerScreen={isSmallerScreen}
              handleClick={handleButtonClick}
              currentlyClicked={currentlyClicked}
            />
            <Flex justifyContent={"center"} p={{ base: "10px", mob: "20px" }}>
              <Box h="2px" w="80%" bgColor={"brand.100"} />
            </Flex>
            <AboutContentText
              isSmallerScreen={isSmallerScreen}
              contentArray={AboutContent[currentlyClicked].text}
              currentContent={currentlyClicked}
            />
          </Flex>
        )}
      </Flex>
      <PageStatus currentPage={Pages.ABOUT} />
    </Grid>
  );
}

interface AboutContentTextProps {
  isSmallerScreen: boolean;
  contentArray: (string | JSX.Element)[];
  currentContent: string;
}

function AboutContentText({
  isSmallerScreen,
  contentArray,
  currentContent,
}: AboutContentTextProps) {
  return (
    <Flex
      textAlign={isSmallerScreen ? "center" : "left"}
      w={isSmallerScreen ? "100vw" : "80vw"}
      p={{ base: "0px 40px", tab: "20px 50px 0px" }}
      flexDir="column"
      flexGrow={1}
    >
      <Grid>
        <Text color={"brand.100"} fontSize={{ base: "sm", tab: "xl" }}>
          {contentArray}
        </Text>
      </Grid>
      {currentContent !== AboutContentKeys.IMPACT ? (
        <Grid flexGrow={1}>
          {currentContent === AboutContentKeys.TOOLS && (
            <ToolsContent isSmallerScreen={isSmallerScreen} />
          )}
          {currentContent === AboutContentKeys.TRAVEL && <TravelContent />}{" "}
          {currentContent === AboutContentKeys.PETS && (
            <Flex justifyContent={"center"} alignItems={"center"} pt="10px">
              <Image src={birbs} />
            </Flex>
          )}
        </Grid>
      ) : (
        <Flex flexGrow={1}>
          <ImpactContent isSmallerScreen={isSmallerScreen} />
        </Flex>
      )}
    </Flex>
  );
}
interface AboutOptionsProps {
  isSmallerScreen: boolean;
  handleClick: (buttonTitle: string) => void;
  currentlyClicked: string;
}

function AboutOptions({
  isSmallerScreen,
  handleClick,
  currentlyClicked,
}: AboutOptionsProps) {
  return (
    <Flex
      flexDir={{ base: "row", tab: "column" }}
      justify={{ base: "center", tab: "space-between" }}
      alignItems={"center"}
      p={{ base: "10px", tab: "80px 10px" }}
      w={{ base: "100vw", tab: "15vw" }}
    >
      {!isSmallerScreen && (
        <>
          {Object.keys(AboutContent).map((item) => (
            <AboutButton
              buttonKey={item}
              buttonInfo={AboutContent}
              isCurrentlyClicked={AboutContent[item].title === currentlyClicked}
              handleClick={handleClick}
            />
          ))}
        </>
      )}
      {isSmallerScreen && (
        <Grid justifyContent={"center"}>
          <Flex justify={"space-evenly"}>
            {Object.keys(AboutContent)
              .slice(0, 3)
              .map((item) => (
                <AboutButton
                  buttonKey={item}
                  buttonInfo={AboutContent}
                  isCurrentlyClicked={
                    AboutContent[item].title === currentlyClicked
                  }
                  handleClick={handleClick}
                />
              ))}
          </Flex>
          <Flex justify={"center"}>
            {Object.keys(AboutContent)
              .slice(3)
              .map((item) => (
                <AboutButton
                  buttonKey={item}
                  buttonInfo={AboutContent}
                  isCurrentlyClicked={
                    AboutContent[item].title === currentlyClicked
                  }
                  handleClick={handleClick}
                />
              ))}
          </Flex>
        </Grid>
      )}
    </Flex>
  );

  interface AboutButtonProps {
    buttonKey: string;
    buttonInfo: any;
    isCurrentlyClicked: boolean;
    handleClick: (buttonTitle: string) => void;
  }

  function AboutButton({
    buttonKey,
    buttonInfo,
    isCurrentlyClicked,
  }: AboutButtonProps) {
    return (
      <Button
        w={{ base: "90px", tab: "100px", lap: "150px" }}
        h={{ base: "30px", tab: "40px" }}
        color={isCurrentlyClicked ? "brand.300" : "brand.100"}
        colorScheme="brand"
        borderColor="brand.100"
        variant={isCurrentlyClicked ? "solid" : "outline"}
        onClick={() => handleClick(buttonInfo[buttonKey].title)}
        m="5px"
      >
        {buttonInfo[buttonKey].title}
      </Button>
    );
  }
}

export default About;
