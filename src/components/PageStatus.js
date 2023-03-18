import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { Pages } from "../constants/constants";

function PageStatus({ currentPage }) {
  const pageIds = {
    [Pages.LANDING]: {
      current: "brand.400",
      others: "brand.300",
    },
    [Pages.ABOUT]: {
      current: "brand.200",
      others: "brand.100",
    },
    [Pages.PROJECTS]: {
      current: "brand.100",
      others: "brand.300",
    },
    [Pages.CONTACT]: { current: "brand.200", others: "brand.100" },
  };

  console.log("currentPage:", currentPage);

  return (
    <Flex
      h={"90px"}
      direction={"column"}
      justifyContent={"space-between"}
      pl={"20px"}
      pb={"10px"}
      mb={"20px"}
      position={"absolute"}
      left={"0"}
      bottom={"0"}
    >
      {Object.keys(pageIds).map((page) => (
        <IndicatorBox
          pageId={page}
          colour={
            page === currentPage
              ? pageIds[currentPage].current
              : pageIds[currentPage].others
          }
        />
      ))}
    </Flex>
  );
}

function IndicatorBox({ pageId, colour }) {
  console.log("pageId: ", pageId);
  return (
    <Link href={`#${pageId}`}>
      <Box w={{ base: "45px", bp: "60px" }} h={"10px"} bgColor={colour} />
    </Link>
  );
}

export default PageStatus;
