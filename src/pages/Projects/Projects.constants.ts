import bulletinImg from "../../imgs/projects/bulletin.png";
import travelImg from "../../imgs/projects/travel.png";

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
      "A collaborative organizational management software web application inspired by the concept of bulletin boards to facilitate co-existance in households. Bulletin provides a shared space for groups to use tools that aid in assigning tasks/chores, to-do lists, reminders and event planning.  ",
    image: bulletinImg,
    tools: ["React", "TypeScript", "Firebase"],
    repoLink: "https://github.com/arpithindukuri/bulletin",
    colour: "brand.400",
  },
  {
    title: "Backyard Travels",
    description:
      "A web application project designed to find and book unique local travel excursions while maintaining COVID-19 protocols. This system is also used for staff scheduling purposes with calendar integrations. ",
    image: travelImg,
    tools: ["React", "JavaScript", "Bootstrap", "mySQL"],
    repoLink: "https://github.com/arpithindukuri/bulletin",
    colour: "brand.100",
  },
];
