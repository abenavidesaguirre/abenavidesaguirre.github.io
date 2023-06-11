import bulletinImg from "../../imgs/projects/bulletin.png";

export interface ProjectInfoProps {
  title: string;
  description: string;
  image: string;
  tools: string[];
  repoLink: string;
  colour: string;
}

export const ProjectInfo: ProjectInfoProps[] = [
  {
    title: "Bulletin",
    description:
      "Lorem ipsum dolor sit amet, Vivamus posuere scelerisque ante in sollicitudin. Morb orghpehgopawhgopawhjg wgoahpgha estibulum dignissim diam porttitor tincidunt ornare. Aenean volutpat, ipsum auctor efficitur pretium.",
    image: bulletinImg,
    tools: ["React", "TypeScript", "Firebase"],
    repoLink: "https://github.com/arpithindukuri/bulletin",
    colour: "brand.400",
  },
  {
    title: "Bulletin",
    description: "description",
    image: bulletinImg,
    tools: ["React", "TypeScript", "Firebase"],
    repoLink: "https://github.com/arpithindukuri/bulletin",
    colour: "brand.100",
  },
];
