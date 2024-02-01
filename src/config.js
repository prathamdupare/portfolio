// Profile

export const profileInfo = {
  name: "Pratham Dupare",
  description:
    "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  img: "https://github.com/shadcn.png",
};

// Sidebar
import {
  FileTextIcon,
  GitHubLogoIcon,
  GlobeIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

export const sidebarButtons = [
  { icon: <GitHubLogoIcon />, label: "Github", link: "#" },
  { icon: <GlobeIcon />, label: "Blog", link: "#" },
  { icon: <TwitterLogoIcon />, label: "Twitter", link: "#" },
  {
    icon: <FileTextIcon />,
    label: "Resume",
    link: "https://resume.com",
  },
];

//Projects
export const projectData = [
  {
    image: "images/showcase.jpg",
    title: "MERN Blog Site",
    tools: [
      "JavaScript",
      "TailwindCSS",
      "NodeJS",
      "ReactJS",
      "MongoDB",
      "ExpressJS",
    ],
  },
  {
    image: "images/rest.jpg",
    title: "Rest API",
    tools: ["TypeScript", "NodeJS", "MongoDB", "ExpressJS"],
  },
  {
    image: "images/rest.jpg",
    title: "Rest API",
    tools: ["TypeScript", "NodeJS", "MongoDB", "ExpressJS"],
  },
];

// Tech Stack
import React from "react";
import { IoLogoCss3, IoLogoHtml5, IoLogoNodejs } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaLinux, FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { SiGnubash } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const techStack = [
  { icon: IoLogoHtml5, color: "skyblue" },
  { icon: IoLogoCss3, color: "orange" },
  { icon: IoLogoJavascript, color: "yellow" },
  { icon: FaReact, color: "skyblue" },
  { icon: IoLogoNodejs, color: "green" },
  { icon: SiTailwindcss, color: "deepskyblue" },
  { icon: SiGnubash, color: "gray" },
  { icon: FaLinux, color: "yellow" },
  { icon: TbBrandNextjs, color: "orange" },
  { icon: SiTypescript, color: "deepskyblue" },
  { icon: FaGitAlt, color: "darkorange" },
  { icon: FaGithub, color: "white" },
];
