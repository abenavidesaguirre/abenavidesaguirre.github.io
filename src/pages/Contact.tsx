import { Grid, Flex, Text, Input, Textarea, Button } from "@chakra-ui/react";
import PageStatus from "../components/PageStatus";
import { Pages } from "../constants/constants";
import { useForm } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("mgerpzez");

  return (
    <Grid id="contact" h={"100vh"} position={"relative"} pt={"8vh"}>
      <Flex h={"92vh"} alignItems={"center"} flexDir={"column"}>
        <Flex
          flexDir={"column"}
          textAlign={"center"}
          alignItems={"center"}
          justifyContent={"center"}
          h="30%"
        >
          <Text
            color={"brand.100"}
            fontSize={{ base: "25px", mob: "45px" }}
            fontWeight={"bold"}
          >
            Get In Touch
          </Text>
          <Text
            fontSize={{ base: "16px", mob: "20px" }}
            fontWeight={"bold"}
            pb="8px"
          >
            I'd love to hear from you!
          </Text>
          <Text fontSize={{ base: "14px", mob: "18px" }}>
            You can also email me directly at {""}
            <Text display={"inline-block"} textDecor={"underline"}>
              <a href="mailto:andrea.benavidesagu@gmail.com">
                andrea.benavidesagu@gmail.com
              </a>
            </Text>
          </Text>
        </Flex>

        <Flex h="70%">
          <form onSubmit={handleSubmit}>
            <Flex w="100vw" flexDir={"column"} alignItems={"center"}>
              <Flex
                w="80%"
                h="30%"
                justifyContent={"space-between"}
                alignItems={{ base: "center", tab: "auto" }}
                pb={{ base: "30px", tab: "50px" }}
                flexDir={{ base: "column", tab: "row" }}
              >
                <Input
                  id="name"
                  type="text"
                  name="name"
                  fontSize={{ base: "14px", mob: "16px" }}
                  placeholder={"Enter your name..."}
                  w={{ base: "100%", tab: "40%" }}
                  mb={{ base: "12px", tab: "0px" }}
                  required
                ></Input>

                <Input
                  id="email"
                  type="email"
                  name="email"
                  fontSize={{ base: "14px", mob: "16px" }}
                  placeholder="Enter your email address..."
                  w={{ base: "100%", tab: "40%" }}
                  required
                ></Input>
              </Flex>

              <Flex w="80%" justifyContent={"center"} h="50%">
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Please enter your message..."
                  fontSize={{ base: "14px", mob: "16px" }}
                  h={{ base: "10vh", mob: "20vh" }}
                  maxH={{ base: "25vh", mob: "40vh" }}
                  required
                ></Textarea>
              </Flex>
              <Flex
                w="80%"
                h="20%"
                justifyContent={"center"}
                pt="20px"
                textAlign={"center"}
                flexDir={"column"}
              >
                <Button
                  type="submit"
                  disabled={state.submitting}
                  w="100%"
                  colorScheme="brand"
                  mb={"12px"}
                >
                  Send
                </Button>
                {state.succeeded ? (
                  <Text>Thank you! Your message has been sent!</Text>
                ) : null}
              </Flex>
            </Flex>
          </form>
        </Flex>

        <PageStatus currentPage={Pages.CONTACT} />
      </Flex>
    </Grid>
  );
}

export default Contact;
