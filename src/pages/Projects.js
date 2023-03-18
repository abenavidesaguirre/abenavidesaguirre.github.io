import React from "react";
import { Grid } from "@chakra-ui/react";
import Header from "../components/Header";
import { Logos } from "../constants/constants";

function Projects() {
  return (
    <Grid id="projects" h={"100vh"} bgColor="brand.200">
      {/* Leave space for header: 8vh */}
      <Header showLogo={true} colour={Logos.RED} />
      <Grid height={{ base: "50vh" }}></Grid>
      <Grid height={{ base: "42vh" }} bgColor={"brand.400"}></Grid>
    </Grid>
  );
}

export default Projects;
