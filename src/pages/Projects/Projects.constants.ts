import bulletinImg from "../../imgs/projects/bulletin.png";
import backyardTravelsImg from "../../imgs/projects/backyard-travels.png";
import recyclingImg from "../../imgs/projects/recycling.png";
import firstPortfolio from "../../imgs/projects/first-portfolio.png";
import travelIteneraryImg from "../../imgs/projects/travel-itenerary.jpg";

export interface ProjectInfoProps {
  title: string;
  description?: string;
  image?: string;
  tools?: string[];
  repoLink?: string;
  colour: string;
  courses?: string[];
}

export const ProjectInfo: ProjectInfoProps[] = [
  {
    title: "Backyard Travels",
    description:
      "A web application project designed to find and book unique local travel excursions while maintaining COVID-19 protocols. This system is also used for staff scheduling purposes with calendar integrations. ",
    image: backyardTravelsImg,
    tools: ["React", "JavaScript", "Bootstrap", "mySQL"],
    repoLink: "https://github.com/abenavidesaguirre/CPSC471_FinalProject",
    colour: "brand.100",
  },
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
    title: "Office Inventory Recycling Management",
    description:
      "An inventory management system designed to upcycle office furniture instead of adding to landfills by reusing office furniture parts to create new ones. It tracks inventory, categorizes parts, and allows for users to place orders for upcycled furniture, promoting sustainability and reducing waste.  ",
    image: recyclingImg,
    tools: ["Java", "MySQL", "JUnit"],
    repoLink:
      "https://github.com/abenavidesaguirre/Inventory-Management-ENSF-409-Final-Project",
    colour: "brand.100",
  },
  {
    title: "My First Portfolio",
    description:
      "My first attempt at making a functional web application. I've come a long way since this project written almost solely in HTML, but it was what opened my eyes to the beautiful world of web development.",
    image: firstPortfolio,
    tools: ["HTML", "CSS", "JavaScript"],
    repoLink: "https://github.com/abenavidesaguirre/portfolio-v1",
    colour: "brand.400",
  },
  {
    title: "Travel Itinerary Maker",
    description:
      "An itinerary for travel lovers that allows users to organize their flights, accomodations, and travel details in an organized fashion. Users can create custom itineraries for their destinations and activities and share them with their travel companions for a simple travelling experience.",
    image: travelIteneraryImg,
    tools: ["TypeScript", "React", "Firebase"],
    colour: "brand.100",
  },
  {
    title: "Course Work",
    courses: [
      "INTE 513 - Internship in Engineering",
      "ENGG 513 - Role and Responsibilities of Professional Engineers in Society",
      "SENG 471 - Software Requirements",
      "SENG 438 - Software Testing, Reliability, and Quality",
      "SENG 401 - Software Architecture",
      "CPSC 441 - Computer Networks",
      "ENSF 480 - Principles of Software Design",
      "ENCM 511 - Embedded System Interfacing",
      "CPSC 471 - Data Base Management Systems",
      "CPSC 457 - Principles of Operating Systems",
      "COMS 363 - Professional and Technical Communication",
      "ENGG 481 - Technology and Society",
      "ENGG 209 - Engineering Economics",
      "MATH 271 - Discrete Mathematics",
      "ENSF 409 - Principles of Software Development",
      "ENEL 327 - Signals and Transforms",
      "ENCM 369 - Computer Organization",
      "CPSC 319 - Data Structures, Algorithms and Applications",
      "PHYS 369 - Acoustics, Optics and Radiation",
      "MATH 375 - Differential Equations for Engineers and Scientists",
      "ENSF 337 - Programming Fundamentals for Software and Computer",
      "ENGG 319 - Probability and Statistics for Engineering",
      "ENEL 353 - Digital Circuits",
      "PHYS 259 - Electricity and Magnetism",
      "MATH 277 - Multivariable Calculus for Engineers and Scientists",
      "ENGG 225 - Fundamentals of Electrical Circuits and Machines",
      "ENGG 202 - Engineering Statics",
      "CHEM 209 - General Chemistry for Engineers",
      "MATH 275 - Calculus For Engineers and Scientists",
      "MATH 211 - Linear Methods I",
      "ENGG 233 - Computing for Engineers",
      "ENGG 201 - Behaviour Of Liquids, Gasses, and Solids",
      "ENGG 200 - Engineering Design and Communication",
    ],
    colour: "brand.400",
  },
];
