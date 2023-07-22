import aarcsLogo from "../../imgs/about/impact/AARCS_logo.png";
import aaseeLogo from "../../imgs/about/impact/AASEE_logo.png";
import cfbLogo from "../../imgs/about/impact/CFB_logo.png";
import cplLogo from "../../imgs/about/impact/CPL_logo.png";
import ltbLogo from "../../imgs/about/impact/LTB_logo.png";

import * as am5 from "@amcharts/amcharts5";

export const AboutContentKeys = {
  ABOUT: "About Me",
  TOOLS: "Tools",
  IMPACT: "Impact",
  TRAVEL: "Travel",
  PETS: "Pets",
};

export const AboutContent: {
  [key: string]: { title: string; text: (string | JSX.Element)[] };
} = {
  [AboutContentKeys.ABOUT]: {
    title: AboutContentKeys.ABOUT,
    text: [
      "Hi, it's nice to meet you! I'm Andrea!",
      <br />,
      <br />,
      "I'm a fourth year software engineering student at the University of Calgary!",
      <br />,
      <br />,
      "My mission is to craft impactful technology that can make a positive difference. I'm a huge advocate for continuous learning, constantly stepping out of my comfort zone to be a creative and effective innovator.",
      <br />,
      <br />,
      "In addition to a love for coding, I'm a voracious reader, enjoy drawing, and play a couple instruments.",
    ],
  },
  [AboutContentKeys.TOOLS]: {
    title: AboutContentKeys.TOOLS,
    text: [
      "These are some of the tools I've been working with lately: ",
      <br />,
      <br />,
    ],
  },
  [AboutContentKeys.IMPACT]: {
    title: AboutContentKeys.IMPACT,
    text: [
      "Outside of software development, I love spending my free time working towards causes that I believe in.",
      <br />,
      <br />,
      "I'm particularly passionate about animal welfare and education advancement.",
      <br />,
      <br />,
      "Check out these really cool organizations that are making big impacts!",
      <br />,
      <br />,
    ],
  },
  [AboutContentKeys.TRAVEL]: {
    title: AboutContentKeys.TRAVEL,
    text: [
      "Travel is one of my greatest joys. I've had the priviledge to visit the beautiful countries below!",
      <br />,
      <br />,
      "I hope to backpack through South America shortly after grauation!",
    ],
  },
  [AboutContentKeys.PETS]: {
    title: AboutContentKeys.PETS,
    text: [
      "Meet Guppy and Luigi! These two rascals can often be found hanging out on my monitors helping me code!",
    ],
  },
};

export const toolInfo = [
  "TypeScript",
  "React",
  "Redux",
  "Java",
  "C/C++",
  "Python",
  "MUI/Chakra UI",
  "MySQL",
  "Git",
];

export interface ImpactInfoProps {
  logo: string;
  role: string;
  link: string;
}

export const ImpactInfo: ImpactInfoProps[] = [
  {
    logo: aarcsLogo,
    role: "Dog Caregiver Shift Lead & Behaviour Volunteer",
    link: "https://aarcs.ca/volunteer/",
  },
  {
    logo: cfbLogo,
    role: "Hamper & Distribution Volunteer",
    link: "https://www.calgaryfoodbank.com/volunteer/",
  },
  {
    logo: ltbLogo,
    role: "Application Coordinator & Tutor Volunteer",
    link: "https://www.learntobe.org/apply",
  },
  {
    logo: cplLogo,
    role: "Math & Reading Tutor ",
    link: "https://calgarylibrary.ca/your-library/volunteer/",
  },
  {
    logo: aaseeLogo,
    role: "Program Prep Lead & Office Manager",
    link: "https://aasee.ca/cms/get-involved/be-a-volunteer/",
  },
];

const visitedColour = "#C75151";
export const visitedCountries = [
  {
    id: "BR",
    polygonSettings: {
      fill: am5.color(visitedColour),
    },
  },
  {
    id: "CA",
    polygonSettings: {
      fill: am5.color(visitedColour),
    },
  },
  {
    id: "CO",
    polygonSettings: {
      fill: am5.color(visitedColour),
    },
  },
  {
    id: "CR",
    polygonSettings: {
      fill: am5.color(visitedColour),
    },
  },
  {
    id: "DO",
    polygonSettings: {
      fill: am5.color(visitedColour),
    },
  },
  {
    id: "FR",
    polygonSettings: {
      fill: am5.color(visitedColour),
    },
  },
  {
    id: "GT",
    polygonSettings: {
      fill: am5.color(visitedColour),
    },
  },
  {
    id: "GR",
    polygonSettings: {
      fill: am5.color(visitedColour),
    },
  },
  {
    id: "VA",
    polygonSettings: {
      fill: am5.color(visitedColour),
    },
  },
  {
    id: "IT",
    polygonSettings: {
      fill: am5.color(visitedColour),
    },
  },
  {
    id: "MX",
    polygonSettings: {
      fill: am5.color(visitedColour),
    },
  },
  {
    id: "PA",
    polygonSettings: {
      fill: am5.color(visitedColour),
    },
  },
  {
    id: "PT",
    polygonSettings: {
      fill: am5.color(visitedColour),
    },
  },
  {
    id: "ES",
    polygonSettings: {
      fill: am5.color(visitedColour),
    },
  },
  {
    id: "CH",
    polygonSettings: {
      fill: am5.color(visitedColour),
    },
  },
  {
    id: "GB",
    polygonSettings: {
      fill: am5.color(visitedColour),
    },
  },
  {
    id: "US",
    polygonSettings: {
      fill: am5.color(visitedColour),
    },
  },
];
