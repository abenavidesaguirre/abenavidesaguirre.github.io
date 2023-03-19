import { Image, Text, Flex, Link } from "@chakra-ui/react";
import React from "react";
import logo from "../imgs/logos/logo-white.png";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Pages } from "../constants/constants";

interface MenuProps {
  handleClick: () => void;
}

function Menu({ handleClick }: MenuProps) {
  const menuItems = [
    { title: "Who Am I?", link: Pages.ABOUT },
    { title: "Projects", link: Pages.PROJECTS },
    { title: "Get In Touch", link: Pages.CONTACT },
    { title: "Resume ", link: "" },
  ];
  const menuFonts = { base: "lg", bp: "xl" };

  return (
    <Flex
      backgroundColor={"brand.100"}
      position={"fixed"}
      margin={"0"}
      padding={{ base: "50px 0px 50px", bp: "100px 0px 100px" }}
      w={{ base: "200px", bp: "275px" }}
      h={"100vh"}
      right="0"
      top="0"
      direction={"column"}
      alignItems="center"
      justifyContent={"space-between"}
    >
      <Link
        href={`#${Pages.LANDING}`}
        display={"contents"}
        onClick={handleClick} //this was handleClick()
      >
        <Image src={logo} w="45%"></Image>
      </Link>
      {menuItems.map((item, key) => {
        return (
          <Link key={key} href={`#${item.link}`} onClick={handleClick}>
            <Text fontSize={menuFonts} fontWeight={"bold"} color={"brand.300"}>
              {item.title}
            </Text>
          </Link>
        );
      })}

      <Flex w="50%" justifyContent={"space-between"}>
        <Link href="https://github.com/abenavidesaguirre">
          <FaGithubSquare size={"40px"} color={"#FAB038"} />
        </Link>
        <Link href="https://ca.linkedin.com/in/andreabenavidesaguirre">
          <FaLinkedin size="40px" color="#FAB038" />
        </Link>
      </Flex>
    </Flex>
  );
}

export default Menu;
