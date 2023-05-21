import { Flex, Grid, Link, Image, Text } from "@chakra-ui/react";
import Burger from "@animated-burgers/burger-squeeze";
import { useState, useEffect } from "react";
import Menu from "../Menu";
import { Pages } from "../../constants/constants";
import LogoRed from "../../imgs/logos/logo-red.png";
import LogoBlue from "../../imgs/logos/logo-blue.png";

import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showName, setShowName] = useState(true);
  const [logoColour, setLogoColour] = useState(LogoRed);

  useEffect(() => {
    const handleScroll = () => {
      const innerHeight = window.innerHeight;
      const scrollPos = window.scrollY;
      if (scrollPos >= innerHeight && scrollPos < 2 * innerHeight) {
        setShowName(false);
        setLogoColour(LogoRed);
      } else if (scrollPos >= 2 * innerHeight) {
        setShowName(false);
        setLogoColour(LogoBlue);
      } else {
        setShowName(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleClick() {
    setIsMenuOpen(!isMenuOpen);
  }
  function handleScroll() {
    setIsMenuOpen(false);
  }

  return (
    <Flex
      pt={"10px"}
      pb={"10px"}
      pl={"30px"}
      justify={"space-between"}
      alignItems="center"
      position={"fixed"}
      h={"8vh"}
      w={"100vw"}
      zIndex={1}
    >
      <Grid>
        {!showName ? (
          <Link href={`#${Pages.LANDING}`} textDecoration={"none"}>
            <Image src={logoColour} w={{ base: "75px", mob: "115px" }}></Image>
          </Link>
        ) : (
          <Text fontSize={{ base: "lg", mob: "2xl" }} color={"brand.300"}>
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
          onScroll={handleScroll}
        />
      </Grid>
    </Flex>
  );
}

export default Header;
