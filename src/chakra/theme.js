// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/roboto-mono";

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    bp: "1320px",
  },
  colors: {
    brand: {
      100: "#5257C8", //blue
      200: "#FAB038", //yellow
      300: "#FFFFFF", //white
      400: "#C75151", //red
    },
  },
  fonts: {
    body: "Roboto Mono",
  },
});
