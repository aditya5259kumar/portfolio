import html5 from "./assets/html5.svg";
import css3 from "./assets/css3.svg";
import bootstrap from "./assets/bootstrap.svg";
import js from "./assets/js.svg";
import react from "./assets/react.svg";
import tailwind from "./assets/tailwindcss.svg";
import motion from "./assets/motion.svg";
import white_motion from "./assets/white_motion.png";
import render from "./assets/render.svg";
import node from "./assets/nodejs.svg";
import ex_light from "./assets/expressjs-light.svg";
import ex_dark from "./assets/expressjs-dark.svg";
import jwt from "./assets/jwt.svg";
import api_light from "./assets/api-light.svg";
import api_dark from "./assets/api-black.svg";
import sql from "./assets/mysql.svg";
import mongo from "./assets/mongo.svg";
import postman from "./assets/postman.svg";
import ghub from "./assets/github.svg";
import ghub_dark from "./assets/github-dark.svg";
import netlify from "./assets/netlify.svg";
import vercel_dark from "./assets/vercel-dark.svg";
import vercel_light from "./assets/vercel-light.svg";
import {
  BiHomeAlt,
  BiUser,
  BiCode,
  BiBriefcaseAlt,
  BiAward,
  BiEnvelope,
  BiPhone,
  BiCurrentLocation,
} from "react-icons/bi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

// ==========================================================================================

export const navItems = [
  {
    id: 1,
    name: "Home",
    link: "#home",
    icon: BiHomeAlt,
  },
  {
    id: 2,
    name: "About",
    link: "#about",
    icon: BiUser,
  },
  {
    id: 3,
    name: "Skills",
    link: "#skills",
    icon: BiCode,
  },
  {
    id: 4,
    name: "Projects",
    link: "#projects",
    icon: BiBriefcaseAlt,
  },
  //   {
  //     id: 5,
  //     name: "Experience",
  //     link: "#experience",
  //     icon: BiAward,
  //   },
  {
    id: 6,
    name: "Contact",
    link: "#contact",
    icon: BiEnvelope,
  },
];

// ==========================================================================================

export const contactItems = [
  {
    id: 1,
    title: "Github",
    value: "github.com/aditya5259kumar",
    icon: FaGithub,
  },
  {
    id: 2,
    title: "LinkedIn",
    value: "www.linkedin.com/in/aditya5259kumar/",
    icon: FaLinkedinIn,
  },
  {
    id: 3,
    title: "Email",
    value: "aditya5259kumar@gmail.com",
    icon: BiEnvelope,
  },
  {
    id: 4,
    title: "Phone",
    value: "9729347658",
    icon: BiPhone,
  },
  // {
  //   id: 5,
  //   title: "Location",
  //   value: "Ambala, Haryana",
  //   icon: BiCurrentLocation,
  // },
];

// ==========================================================================================

export const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: html5 },
      { name: "CSS3", icon: css3 },
      { name: "Bootstrap", icon: bootstrap },
      { name: "JavaScript", icon: js },
      { name: "React", icon: react },
      { name: "Tailwind", icon: tailwind },
      { name: "Motion", lightIcon: motion, darkIcon: white_motion },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: node },

      {
        name: "Express",
        lightIcon: ex_dark,
        darkIcon: ex_light,
      },

      {
        name: "REST APIs",
        lightIcon: api_dark,
        darkIcon: api_light,
      },

      { name: "JWT Auth", icon: jwt },
    ],
  },

  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: sql },
      { name: "MongoDB", icon: mongo },
    ],
  },

  {
    title: "Tools & Deployment",
    skills: [
      {
        name: "GitHub",
        lightIcon: ghub,
        darkIcon: ghub_dark,
      },

      { name: "Postman", icon: postman },

      { name: "Netlify", icon: netlify },

      {
        name: "Vercel",
        lightIcon: vercel_dark,
        darkIcon: vercel_light,
      },
      { name: "Render", icon: render },
    ],
  },
];

// ==========================================================================================

import project_image from "./assets/photo-1502920917128-1aa500764cbd.jpg";

export const projects = [
  {
    id: 1,
    title: "Knest — AI Second Brain",
    description:
      "AI-powered tool that connects notes, remembers context, and helps plan workflows.",

    features: [
      "Context-aware AI memory system",
      "Workflow planning and task linking",
    ],

    image: project_image,

    techStack: [
      "React",
      "Next.js",
      "Tailwind",
      "Node.js",
      "Express.js",
      "MySQL",
      "Framer Motion",
      "GSAP",
      "Docker",
      "Redis",
      "Nest.js",
      "Chakra UI",
    ],

    liveDemo: "https://your-live-demo-link.com",

    sourceCode: "https://github.com/yourusername/project",
  },
];
