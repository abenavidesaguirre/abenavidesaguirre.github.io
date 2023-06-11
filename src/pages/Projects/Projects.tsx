import {
  Card,
  Grid,
  Flex,
  Img,
  CardHeader,
  Box,
  Text,
  Button,
  Icon,
} from "@chakra-ui/react";
import { Pages } from "../../constants/constants";
import PageStatus from "../../components/PageStatus";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import { ProjectInfo, ProjectInfoProps } from "./Projects.constants";
import { BsCaretRight } from "react-icons/bs";

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
          color={"brand.300"}
          fontSize={{ base: "25px", mob: "45px" }}
          pb={"30px"}
        >
          PROJECTS
        </Text>
        <Flex w="90%" h="80%">
          <Swiper
            slidesPerView={1}
            loop={true}
            pagination={{ dynamicBullets: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            {ProjectInfo.map((project) => {
              return (
                <SwiperSlide>
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
  const { colour, image, title, description, tools } = cardContent;
  return (
    <Flex w="100%" h="100%" justifyContent={"center"}>
      <Card bgColor={colour} w="80%" h="90%" borderRadius={"10px "}>
        <Box h="40%">
          <Img
            boxSize="100% "
            objectFit={"cover"}
            objectPosition={"top"}
            src={image}
            borderRadius={"10px 10px 0px 0px"}
          />
        </Box>
        <Flex p="30px 80px" flexDir={"column"}>
          <Grid pb={"20px"}>
            <Text fontSize={"3xl"}>{title}</Text>
          </Grid>
          <Flex minHeight={"90%"} pb="20px">
            <Grid w="80%" pr="30px">
              <Text>{description}</Text>
            </Grid>
            <Box w="2px" h="80%" bgColor={"black"} />
            <Flex flexDir={"column"}>
              {tools.map((tool) => {
                return (
                  <Flex alignItems={"center"} h="40px" pl={"30px"}>
                    <Icon as={BsCaretRight} />
                    <Text ml="8px">{tool}</Text>
                  </Flex>
                );
              })}
            </Flex>
          </Flex>
          <Flex justifyContent={"center"}>
            <Button
              variant={"solid"}
              color="white"
              bgColor={colour === "brand.100" ? "brand.400" : "brand.100"}
              w="50%"
            >
              Let's Go!
            </Button>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
}

export default Projects;
