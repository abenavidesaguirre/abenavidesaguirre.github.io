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
import { ImpactInfo, ImpactInfoKeys } from "./AboutConstants";

export function ImpactContent() {
  return (
    <Flex justify="center" align={"end"}>
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
            <Grid h="60%" justifyContent={"center"} alignItems="center">
              <Img src={ImpactInfo[ImpactInfoKeys.AARCS].logo} h="80%" />
            </Grid>
            <Grid h="40%" justifyContent={"center"} alignItems="center">
              <Link>
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
              {ImpactInfo[ImpactInfoKeys.AARCS].role}
            </Text>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
}
