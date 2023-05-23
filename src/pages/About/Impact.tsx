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

export function ImpactContent() {
  return (
    <Flex w="100%" h="250px" p="0px 80px" justifyContent={"center"} mt="50px">
      <Swiper
        slidesPerView={1}
        autoHeight={true}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {ImpactInfo.map((item: any) => {
          return (
            <SwiperSlide>
              <ImpactCard cardContent={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Flex>
  );
}

function ImpactCard({ cardContent }: { cardContent: ImpactInfoProps }) {
  return (
    <Flex w="100%" justifyContent={"center"}>
      <Card
        borderColor={"brand.100"}
        borderWidth="2px"
        variant={"outline"}
        w="525px"
        h="175px"
        boxShadow={"10px 10px 10px #5257C8"}
      >
        <Flex h="100%">
          <Flex flexDir={"column"} w="55%">
            <Flex h="60%" justifyContent={"center"} alignItems="center">
              <Img src={cardContent.logo} h="60%" />
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
          <Grid alignItems={"center"}>
            <Divider
              backgroundColor={"brand.100"}
              orientation="vertical"
              w="2px"
              h="80%"
            />
          </Grid>
          <Flex alignItems={"center"} w="45%">
            <Text color={"brand.100"} textAlign="right" p="15px">
              {cardContent.role}
            </Text>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
}
