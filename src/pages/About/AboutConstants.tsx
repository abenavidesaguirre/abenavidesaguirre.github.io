import aarcsLogo from "../../imgs/logos/AARCS_logo.png";

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
      "Meet Guppy and Luigi! These tow rascals can often be found hanging out on my monitors helping me code!",
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
  "MySQL",
  "Figma",
  "Git",
];

export const ImpactInfoKeys = {
  AARCS: "AARCS",
  CFB: "CFB",
  LTB: "LTB",
  CPL: "CPL",
  AASEE: "AASEE",
};

export const ImpactInfo: {
  [key: string]: { logo: any; role: string };
} = {
  [ImpactInfoKeys.AARCS]: {
    logo: aarcsLogo,
    role: "Dog Caregiver Shift Lead & Behaviour Volunteer",
  },
  [ImpactInfoKeys.CFB]: {
    logo: aarcsLogo,
    role: "Hamper & Distribution Volunteer",
  },
  [ImpactInfoKeys.LTB]: {
    logo: aarcsLogo,
    role: "Application Coordinator & Tutor Volunteer",
  },
  [ImpactInfoKeys.CPL]: {
    logo: aarcsLogo,
    role: "Math & Reading Tutor ",
  },
  [ImpactInfoKeys.AASEE]: {
    logo: aarcsLogo,
    role: "Program Prep Lead & Office Manager",
  },
};
