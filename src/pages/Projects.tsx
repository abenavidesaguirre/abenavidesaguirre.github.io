import { Grid } from "@chakra-ui/react";
import { Pages } from "../constants/constants";
import PageStatus from "../components/PageStatus";

function Projects() {
  return (
    <Grid
      id="projects"
      h={"100vh"}
      bgColor="brand.200"
      position={"relative"}
      pt={"8vh"}
    >
      <Grid height={"92vh"}>
        <Grid height={"50vh"}></Grid>
        <PageStatus currentPage={Pages.PROJECTS} />
      </Grid>
    </Grid>
  );
}

export default Projects;
