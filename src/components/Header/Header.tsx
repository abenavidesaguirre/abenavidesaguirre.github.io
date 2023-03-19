import React from "react";
import { Flex, Grid, Text, Link, Image } from "@chakra-ui/react";
import Burger from "@animated-burgers/burger-squeeze";
import { useState } from "react";
import Menu from "../Menu";
import { Logos, Pages } from "../../constants/constants";
import LogoBlue from "../../imgs/logos/logo-blue.png";
import LogoRed from "../../imgs/logos/logo-red.png";
import LogoYellow from "../../imgs/logos/logo-yellow.png";
import LogoWhite from "../../imgs/logos/logo-white.png";
import "./Header.css";

interface HeaderProps {
  showLogo?: boolean;
  colour?: string;
}

function Header({ showLogo = false, colour = "" }: HeaderProps) {
  const logos = {
    [Logos.BLUE]: { type: LogoBlue },
    [Logos.RED]: { type: LogoRed },
    [Logos.YELLOW]: { type: LogoYellow },
    [Logos.WHITE]: { type: LogoWhite },
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <Flex
      pt={"10px"}
      pb={"10px"}
      pl={"30px"}
      justify={"space-between"}
      alignItems="center"
      h={"8vh"}
      w={"100vw"}
    >
      <Grid>
        {showLogo ? (
          <Link href={`#${Pages.LANDING}`}>
            <Image
              src={logos[colour].type}
              w={{ base: "75px", md: "100px" }}
            ></Image>
          </Link>
        ) : (
          <Text fontSize={{ base: "16px", md: "25px" }} color={"brand.300"}>
            Andrea Benavides Aguirre
          </Text>
        )}
      </Grid>
      <Grid pr={{ base: "20px", sm: "30px" }}>
        {isMenuOpen && <Menu handleClick={() => handleClick} />}

        <Burger
          style={{ fontSize: "12px" }}
          onClick={handleClick}
          isOpen={isMenuOpen}
        />
      </Grid>
    </Flex>
  );
}

export default Header;
