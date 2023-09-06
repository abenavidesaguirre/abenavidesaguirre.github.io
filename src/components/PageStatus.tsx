import { Box, Flex, Link } from "@chakra-ui/react";
import { Pages } from "../constants/constants";

function PageStatus({ currentPage }: any) {
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
      {Object.keys(pageIds).map((page, key) => (
        <IndicatorBox
          key={key}
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

function IndicatorBox({ pageId, colour }: any) {
  return (
    <Link href={`#${pageId}`}>
      <Box w={{ base: "10px", mob: "60px" }} h={"10px"} bgColor={colour} />
    </Link>
  );
}

export default PageStatus;
