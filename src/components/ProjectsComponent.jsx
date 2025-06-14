import React from "react";
import SelectableInfoPanel from "./SelectableInfoPanel";
import "./ProjectsComponent.scss";

const skillDescriptions = {
  "A* Pathfinding Visualizer": {
    date: "2025",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    description:
      "A visualizer for the A* pathfinding algorithm, complete with: Drawing/Erasing walls, setting start and end location, changing grid size and more!",
    link: "https://thomassmidt.github.io/a-star/",
    linkText: "Try it!",
  },
  Blackjack: {
    date: "2022",
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "A simple blackjack game I made, when I was first learning web development.",
    link: `${process.env.PUBLIC_URL}/blackjack/`,
    linkText: "Try it!",
  },
  "Fast Food Ordering UI": {
    date: "2024",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    description:
      "A simple fast food ordering UI, which was made as part of a school project.",
    link: "https://github.com/ThomasSmidt/Simple-Fast-Food-Ordering-UI",
    linkText: "Github Link",
  },
  "Portfolio Website": {
    date: "2025",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    description: "This portfolio website, showcasing my skills and projects.",
    link: "https://github.com/ThomasSmidt/thomas-smidt-website",
    linkText: "Github Link",
  },
};

const Projects = () => (
  <SelectableInfoPanel
    title="My Projects"
    itemsMap={skillDescriptions}
    infoClass={"projects"}
  />
);

export default Projects;
