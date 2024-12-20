import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import yachting from "@/public/yachting.png";
import crypto from "@/public/crypto.png";
import mobile from "@/public/mobile.png";
import kita from "@/public/kita.png";
import {
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGit,
  FaReacteurope,
  FaNpm,
  FaBootstrap,
  FaDatabase,
  FaAws,
  FaDotCircle,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiAntdesign,
  SiFramer,
  SiMongodb,
  SiPrisma,
  SiGraphql,
  SiI18Next,
  SiAmazonaws,
  SiAzuredevops,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";
import { SiMicrosoftazure } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { SiRsocket } from "react-icons/si";
import { MdStyle } from "react-icons/md";
import { SiStyledcomponents } from "react-icons/si";

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
    title: "Graduated Titu Maiorescu University - Informatics",
    location: "Bucharest, Romania",
    description:
      "I graduated after 3 years of studying. Before finishing my 3rd year I found a job as a Frontend Developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2021",
  },
  {
    title: "Frontend Developer",
    location: "Bucharest, Romania",
    description:
      "I worked as a frontend developer for a small company with Angular and React where I learned Unit Testing with Jest.",
    icon: React.createElement(FaHtml5),
    date: "2021 - 2021",
  },
  {
    title: "Backend Developer",
    location: "Bucharest, Romania",
    description:
      "I worked as a backend developer for a big company where I was using AWS and Node for micro-services development that helped international carriers (DHL, DPD, Yusen etc) to use the tracking and labeling functionality on the returned packages.",
    icon: React.createElement(FaNode),
    date: "2021 - 2022",
  },
  {
    title: "Frontend Developer",
    location: "Bucharest, Romania",
    description:
      "Back as a frontend developer I was pursuing my dream job working with React for a middle size company where we developed a telemedicine PWA and helped people to ask for advices and consult through the internet. Besides React I learned how to implement and use websockets for a real-time experience between users and customers.",
    icon: React.createElement(FaReact),
    date: "2022 - 2022",
  },
  {
    title: "Fullstack Developer",
    location: "Bucharest, Romania",
    description:
      "Another challenge as a developer was going into the fullstack where I joined a team that developed a kindergarden management platform. For backend I was using DOTNET Core and for frontend razor, also on the mobile app with React Native. It was a bit of a struggle at the beginning because all of the differences between iOS and Android but sometimes google it's your best friend!",
    icon: React.createElement(FaReact),
    date: "2022 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Meer Kindergarten",
    description:
      "A kindergarden management platform where parents can check-in their children, attend events or appointments and many others features.",
    tags: ["React", ".NET", "Vue", "Razor", "Bootstrap", "Styled Components"],
    imageUrl: kita,
  },
  {
    title: "Meer Kindergarten Mobile",
    description:
      "A big part of the previous kindergarden project was the mobile app made with React Native.",
    tags: ["React", "React Native", "Styled Components", "Tailwind"],
    imageUrl: mobile,
  },
  {
    title: "Crypto",
    description:
      "This is a personal app I developed back in the days regarding the crypto market with real time updates.",
    tags: ["React", "TypeScript", "Next.js"],
    imageUrl: crypto,
  },
  {
    title: "Global Yachting Croatia",
    description:
      "The possibility of booking a personal yacht with a 'captain' for friends and families that wanna go on an adventure on the sea!",
    tags: ["React", "MongoDB", "Tailwind", "Email.js"],
    imageUrl: yachting,
  },
] as const;

export const skillsData = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: FaReact },
  { name: "React Native", icon: FaReacteurope },
  { name: "Next.js", icon: TbBrandNextjs },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Git", icon: FaGit },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "AntDesign", icon: SiAntdesign },
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "MaterialUI", icon: MdStyle },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Prisma", icon: SiPrisma },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Redux", icon: TbBrandRedux },
  { name: "GraphQL", icon: GrGraphQl },
  { name: "Apollo", icon: FaNpm }, // Assuming Apollo icon is similar to NPM, you can replace it with the correct one
  { name: "Express", icon: FaNodeJs }, // Using Node.js icon for Express, you can replace it if there's a more appropriate icon
  { name: "i18n", icon: SiI18Next },
  { name: "Websockets", icon: SiRsocket }, // Using .NET icon for Websockets, replace it if needed
  { name: "AWS", icon: SiAmazonaws },
  { name: "Azure", icon: SiMicrosoftazure },
  { name: ".NET", icon: SiDotnet },
  { name: "Styled Components", icon: SiStyledcomponents },
] as const;
