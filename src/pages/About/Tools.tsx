import React from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { BsCaretRight } from "react-icons/bs";
import { toolInfo } from "./AboutConstants";
import { motion } from "framer-motion";

interface ToolsContentProps {
  isSmallerScreen: boolean;
}

export function ToolsContent({ isSmallerScreen }: ToolsContentProps) {
  return (
    <Flex justify={"space-evenly"}>
      {!isSmallerScreen ? (
        <>
          <Flex justify={"space-evenly"} flexDir={"column"}>
            {toolInfo.slice(0, 3).map((tool) => (
              <ToolItem toolName={tool} />
            ))}
          </Flex>
          <Flex justify={"space-evenly"} flexDir={"column"}>
            {toolInfo.slice(3, 6).map((tool) => (
              <ToolItem toolName={tool} />
            ))}
          </Flex>
          <Flex justify={"space-evenly"} flexDir={"column"}>
            {toolInfo.slice(6, 9).map((tool) => (
              <ToolItem toolName={tool} />
            ))}
          </Flex>
        </>
      ) : (
        <>
          <Flex
            justify={"space-evenly"}
            flexDir={"column"}
            alignItems={"center"}
          >
            {toolInfo.slice(0, 4).map((tool) => (
              <ToolItem toolName={tool} />
            ))}
          </Flex>
          <Flex
            justify={"space-evenly"}
            flexDir={"column"}
            alignItems={"center"}
          >
            {toolInfo.slice(4, 9).map((tool) => (
              <ToolItem toolName={tool} />
            ))}
          </Flex>
        </>
      )}
    </Flex>
  );

  interface ToolItemProps {
    toolName: string;
  }

  function ToolItem({ toolName }: ToolItemProps) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{
          scale: 2.5,
          rotate: [0, 360],
          transition: { repeat: Infinity, repeatType: "mirror", duration: 1.5 },
        }}
        transition={{ ease: "easeIn", duration: 0.75 }}
      >
        <Flex align={"center"} p={{ base: "15px", mob: "30px", lap: "0px" }}>
          <Icon as={BsCaretRight} color={"brand.100"} />
          <Text
            pl="10px"
            color={"brand.100"}
            fontSize={{ base: "sm", mob: "md", tab: "xl" }}
            fontWeight="bold"
          >
            {toolName}
          </Text>
        </Flex>
      </motion.div>
    );
  }
}
