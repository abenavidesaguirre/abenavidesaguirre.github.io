import React from "react";
import { Grid } from "@chakra-ui/react";
import Header from "../components/Header";
import { Logos, Pages } from "../constants/constants";
import PageStatus from "../components/PageStatus";

function Projects() {
  return (
    <Grid id="projects" h={"100vh"} bgColor="brand.200" position={"relative"}>
      <Header showLogo={true} colour={Logos.BLUE} />
      <Grid height={"92vh"}>
        <Grid height={"50vh"}></Grid>
        <Grid height={"42vh"} bgColor={"brand.400"}></Grid>
        <PageStatus currentPage={Pages.PROJECTS} />
      </Grid>
    </Grid>
  );
}

export default Projects;
