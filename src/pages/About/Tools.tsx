import { Flex, Icon, Text } from "@chakra-ui/react";
import { BsCaretRight } from "react-icons/bs";
import { toolInfo } from "./AboutConstants";

export function ToolsContent() {
  return (
    <Flex justify={"space-evenly"}>
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
    </Flex>
  );

  interface ToolItemProps {
    toolName: string;
  }

  function ToolItem({ toolName }: ToolItemProps) {
    return (
      <Flex align={"center"}>
        <Icon as={BsCaretRight} color={"brand.100"} />
        <Text pl="10px" color={"brand.100"} fontSize="xl" fontWeight="bold">
          {toolName}
        </Text>
      </Flex>
    );
  }
}
