import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Apple Developer Academy Foundation Program",
    location: "Apple Developer Academy @UC",
    description:
      "I graduated after 1 month of studying and collaborating. I immediately got the experience to create an impactful iOS mobile app.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Graduated Apple Developer Academy Foundation Program",
    location: "Apple Developer Academy @UC",
    description:
      "I graduated after 1 month of studying and collaborating. I immediately got the experience to create an impactful iOS mobile app.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
] as const;

export const projectsData = [
  {
    title: "NeuTrack",
    description:
      "I worked as a web developer and raspberry pi programmer on this project for 1.5 months.",
    tags: ["Javascript", "Google Map API", "Firebase", "HTML", "CSS", "Flask", "Bootstrap", "Raspberry Pi", "GPS Module"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Playourette",
    description:
      "I worked as a web developer and raspberry pi programmer on this project for 1.5 months.",
    tags: ["Javascript", "Google Map API", "Firebase", "HTML", "CSS", "Flask", "Bootstrap", "Raspberry Pi", "GPS Module"],
    imageUrl: corpcommentImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Flask",
  "Python",
  "Git",
  "Bootstrap",
  "Firebase",
  "Google Map API",
  "Python",
] as const;
