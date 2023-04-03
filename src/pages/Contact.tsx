import { Grid } from "@chakra-ui/react";
import React from "react";
import PageStatus from "../components/PageStatus";
import { Pages } from "../constants/constants";

function Contact() {
  return (
    <Grid id="contact" h={"100vh"} position={"relative"} pt={"8vh"}>
      Contact
      <PageStatus currentPage={Pages.CONTACT} />
    </Grid>
  );
}

export default Contact;
