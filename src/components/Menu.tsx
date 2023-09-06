import { Image, Text, Flex, Link } from "@chakra-ui/react";
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
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/1tAtzBACse-YDMxEe5MBJwi4duTDCW8ho/view?usp=sharing",
    },
  ];
  const menuFonts = { base: "lg", lap: "xl" };

  return (
    <Flex
      backgroundColor={"brand.100"}
      position={"fixed"}
      margin={"0"}
      padding={{ base: "50px 0px 50px", lap: "100px 0px 100px" }}
      w={{ base: "200px", lap: "275px" }}
      h={"100vh"}
      right="0"
      top="0"
      direction={"column"}
      alignItems="center"
      justifyContent={"space-between"}
      borderLeft={"4px solid white"}
    >
      <Link
        href={`#${Pages.LANDING}`}
        display={"contents"}
        onClick={handleClick() as any}
      >
        <Image src={logo} w="45%"></Image>
      </Link>
      {menuItems.map((item, key) => {
        return (
          <Link
            key={key}
            href={item.link}
            target={item.title === "Resume" ? "_blank" : "_self"}
            onClick={handleClick() as any}
          >
            <Text fontSize={menuFonts} fontWeight={"bold"} color={"brand.300"}>
              {item.title}
            </Text>
          </Link>
        );
      })}

      <Flex w="50%" justifyContent={"space-between"}>
        <Link href="https://github.com/abenavidesaguirre" target="_blank">
          <FaGithubSquare size={"40px"} color={"#FAB038"} />
        </Link>
        <Link
          href="https://ca.linkedin.com/in/andreabenavidesaguirre"
          target="_blank"
        >
          <FaLinkedin size="40px" color="#FAB038" />
        </Link>
      </Flex>
    </Flex>
  );
}

export default Menu;
