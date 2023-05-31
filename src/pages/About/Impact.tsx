import {
  Flex,
  Card,
  Img,
  Button,
  Grid,
  Divider,
  Text,
  Link,
} from "@chakra-ui/react";
import { ImpactInfo, ImpactInfoProps } from "./AboutConstants";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function ImpactContent({
  isSmallerScreen,
}: {
  isSmallerScreen: boolean;
}) {
  return (
    <Flex
      w="100%"
      h={{ base: "190px", tab: "250px" }}
      p={{ base: "0px 0px", tab: "0px 80px" }}
      justifyContent={"center"}
      mt={{ base: "0px", tab: "50px" }}
    >
      <Swiper
        slidesPerView={1}
        autoHeight={true}
        loop={true}
        pagination={{ clickable: true }}
        navigation={!isSmallerScreen}
        modules={[Pagination, Navigation]}
      >
        {ImpactInfo.map((item: any) => {
          return (
            <SwiperSlide>
              <ImpactCard
                cardContent={item}
                isSmallerScreen={isSmallerScreen}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Flex>
  );
}

interface ImpactCardProps {
  cardContent: ImpactInfoProps;
  isSmallerScreen: boolean;
}

function ImpactCard({ cardContent, isSmallerScreen }: ImpactCardProps) {
  return (
    <Flex w="100%" justifyContent={"center"}>
      <Card
        borderColor={"brand.100"}
        borderWidth="2px"
        variant={"outline"}
        w={{ base: "200px", tab: "525px" }}
        h={{ base: "140px", tab: "175px" }}
        boxShadow={"10px 10px 10px #5257C8"}
      >
        <Flex h="100%">
          <Flex flexDir={"column"} w={{ base: "100%", tab: "55%" }}>
            <Flex h="60%" justifyContent={"center"} alignItems="center">
              <Img src={cardContent.logo} h={{ base: "55%", tab: "60%" }} />
            </Flex>
            <Grid h="40%" justifyContent={"center"} alignItems="center">
              <Link href={cardContent.link} target="_blank">
                <Button
                  variant={"outline"}
                  colorScheme={"brand"}
                  borderColor="brand.100"
                >
                  <Text color={"brand.100"}>Learn More</Text>
                </Button>
              </Link>
            </Grid>
          </Flex>
          {!isSmallerScreen && (
            <Flex w="45%">
              <Grid alignItems={"center"}>
                <Divider
                  backgroundColor={"brand.100"}
                  orientation="vertical"
                  w="2px"
                  h="80%"
                />
              </Grid>
              <Flex alignItems={"center"}>
                <Text color={"brand.100"} textAlign="right" p="15px">
                  {cardContent.role}
                </Text>
              </Flex>
            </Flex>
          )}
        </Flex>
      </Card>
    </Flex>
  );
}
