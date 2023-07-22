// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/roboto-mono";
import { BREAKPOINTS } from "./breakpoints";

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  breakpoints: {
    mob: BREAKPOINTS.mob,
    tab: BREAKPOINTS.tab,
    lap: BREAKPOINTS.lap,
  },
  colors: {
    brand: {
      100: "#5257C8", //blue
      200: "#FAB038", //yellow
      300: "#FFFFFF", //white
      400: "#C75151", //red
      500: "#5257C8", //blue - for button colorScheme
    },
  },
  fonts: {
    body: "Roboto Mono",
  },
});
