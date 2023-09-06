import { Grid, Flex, Img, Text, Button, Icon, Link } from "@chakra-ui/react";
import React from "react";
import { Pages } from "../../constants/constants";
import PageStatus from "../../components/PageStatus";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import { ProjectInfo, ProjectInfoProps } from "./Projects.constants";
import { BsCaretRight } from "react-icons/bs";
import { BREAKPOINTS } from "../../chakra/breakpoints";

function Projects() {
  return (
    <Flex
      id="projects"
      h={"100vh"}
      bgColor="brand.200"
      position={"relative"}
      pt={"8vh"}
      justifyContent={"center"}
    >
      <Flex
        width={"100%"}
        height={"92vh"}
        alignItems={"center"}
        flexDir={"column"}
      >
        <Text
          color={"brand.00"}
          fontSize={{ base: "25px", mob: "45px" }}
          fontWeight={"bold"}
          pb={"30px"}
        >
          PROJECTS
        </Text>
        <Flex w="90%" h="85%" zIndex={0}>
          <Swiper
            slidesPerView={1}
            loop={true}
            pagination={{ dynamicBullets: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            {ProjectInfo.map((project, key) => {
              return (
                <SwiperSlide key={key}>
                  <ProjectCard cardContent={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Flex>
        <PageStatus currentPage={Pages.PROJECTS} />
      </Flex>
    </Flex>
  );
}

interface ProjectCardProps {
  cardContent: ProjectInfoProps;
}

function ProjectCard({ cardContent }: ProjectCardProps) {
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

  const isMobScreen = width <= BREAKPOINTS.mob;
  const isTabScreen = width <= BREAKPOINTS.tab && !isMobScreen;

  const { colour, image, title, description, tools, repoLink, courses } =
    cardContent;

  const TitleHeader = () => {
    return (
      <Text
        fontSize={{ base: "20px", mob: "25px", tab: "30px" }}
        pb="20px"
        fontWeight={"bold"}
      >
        {title}
      </Text>
    );
  };

  interface ListItemsProps {
    list: string[];
    justify: "left" | "center" | "right";
  }

  const ListItems = ({ list, justify }: ListItemsProps) => {
    return (
      <>
        {list?.map((listItem, key) => {
          return (
            <Flex justifyContent={justify} m="12px 0px" key={key}>
              <Grid pt="6px">
                <Icon as={BsCaretRight} />
              </Grid>
              <Text ml="8px" fontSize={{ base: "16px", tab: "18px" }}>
                {listItem}
              </Text>
            </Flex>
          );
        })}
      </>
    );
  };

  const ToolsUsed = () => {
    return (
      <Flex
        flexDir={"column"}
        borderLeft={{ base: "0px", mob: "4px" }}
        borderTop={{ base: "4px", mob: "0px" }}
        flexGrow={1}
        mt={{ base: "20px", mob: "0px" }}
        pt={{ base: "20px", tab: "30px" }}
        pr={{ tab: "50px" }}
        textAlign={{ base: "center", mob: "right" }}
      >
        <Text
          fontSize={{ base: "18px", tab: "22px" }}
          fontWeight={"bold"}
          color={"white"}
          pb={{ base: "8px", mob: "0px" }}
        >
          Tools Used
        </Text>
        <Flex justifyContent={"space-evenly"} flexDir={"column"} h="100%">
          <ListItems
            list={tools ?? []}
            justify={isMobScreen ? "center" : "right"}
          />
        </Flex>
      </Flex>
    );
  };

  const InfoButton = () => {
    return (
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        h={{ base: "20%", tab: "10%" }}
        pt={{ base: "20px", mob: "0px" }}
      >
        <Link href={repoLink} target="_blank" w={{ base: "90%", mob: "50%" }}>
          <Button
            variant={"solid"}
            color="white"
            bgColor={colour === "brand.100" ? "brand.400" : "brand.100"}
            w="100%"
            fontSize={"18px"}
            isDisabled={!repoLink}
          >
            {repoLink ? "Let's Go!" : "Coming Soon!"}
          </Button>
        </Link>
      </Flex>
    );
  };

  const DividedCard = () => {
    return (
      <>
        {!isTabScreen && !isMobScreen ? (
          <Flex h="50%" borderBottom={"4px"}>
            <Grid w="75%" h="100%" overflow={"hidden"}>
              <Img objectFit={"contain"} src={image} />
            </Grid>
            <ToolsUsed />
          </Flex>
        ) : null}
        <Flex
          p={{ base: "16px", mob: "30px", tab: "30px 80px" }}
          flexDir={{ base: "row", tab: "column" }}
          h={{ base: "100%", mob: "80%", tab: "50%" }}
          overflowY={{ base: "scroll", mob: "hidden" }}
        >
          <Flex
            p={{ mob: "20px", tab: "0px" }}
            h={{ base: "100%", mob: "80%" }}
            flexDir={"column"}
            w={{ base: "100%", mob: "65%", tab: "auto" }}
            textAlign={{ base: "center", mob: "left" }}
          >
            <TitleHeader />
            <Text fontSize={"16px"}>{description}</Text>
            {isMobScreen ? (
              <>
                <ToolsUsed />
                <InfoButton />
              </>
            ) : null}
          </Flex>
          {isTabScreen ? <ToolsUsed /> : null}
        </Flex>
        {!isMobScreen ? <InfoButton /> : null}
      </>
    );
  };

  const CourseWork = () => {
    return (
      <Flex flexDir={"column"} overflowY={"scroll"}>
        <Grid h="10%" p={{ base: "20px", mob: "40px" }}>
          <TitleHeader />
        </Grid>
        <Grid h="60%" p={{ base: "20px", mob: "40px" }}>
          <ListItems list={courses ?? []} justify="left" />
        </Grid>
      </Flex>
    );
  };

  return (
    <Flex h="100%" justifyContent={"center"} color={"white"}>
      <Flex
        bgColor={colour}
        h={{ base: "90%", mob: "70%", tab: "90%" }}
        w="100%"
        borderRadius={"10px"}
        maxW={{ base: "250px", mob: "85%", tab: "90%", lap: "1100px" }}
        flexDir={"column"}
        border={"5px solid white"}
      >
        {image ? <DividedCard /> : <CourseWork />}
      </Flex>
    </Flex>
  );
}

export default Projects;
