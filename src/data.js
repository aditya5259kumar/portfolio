import html5 from "./assets/html5.svg";
import css3 from "./assets/css3.svg";
import bootstrap from "./assets/bootstrap.svg";
import js from "./assets/js.svg";
import react from "./assets/react.svg";
import tailwind from "./assets/tailwindcss.svg";
import motion from "./assets/motion.svg";
import white_motion from "./assets/white_motion.png";
import render from "./assets/render.svg";
import render_dark from "./assets/render-dark.png";
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
    name: "Skills",
    link: "#skills",
    icon: BiCode,
  },
  {
    id: 3,
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
    id: 4,
    name: "About",
    link: "#about",
    icon: BiUser,
  },
  {
    id: 5,
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
    url: "https://github.com/aditya5259kumar",
  },
  {
    id: 2,
    title: "LinkedIn",
    value: "linkedin.com/in/aditya5259kumar/",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/aditya5259kumar/",
  },
  {
    id: 3,
    title: "Email",
    value: "aditya5259kumar@gmail.com",
    icon: BiEnvelope,
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=aditya5259kumar@gmail.com",
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
      { name: "Render", lightIcon: render, darkIcon: render_dark },
    ],
  },
];

// ==========================================================================================

import notely from "./assets/notely.jpg";
import taskMelt from "./assets/taskMelt.jpg";
import beog from "./assets/beog.jpg";
import linkup from "./assets/linkup.jpg";

export const projects = [
  {
    id: 1,

    title: "LinkUp — Real-Time Chat Application",

    description:
      "A real-time messaging platform with private chats, presence tracking, read receipts, typing indicators, file sharing, and conversation management.",
    features: [
      "Real-time private messaging with Socket.IO",
      "Typing indicators, presence tracking, and read receipts",
      "Image and file sharing with unread message counters",
      "User discovery, chat search, and conversation management",
    ],

    image: linkup,

    techStack: [
      "React",
      "Tailwind CSS",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MySQL",
      "Socket.IO",
      "JWT",
      "Multer",
      "Nodemailer",
    ],

    liveDemo: "Currently in development",

    sourceCode: "https://github.com/aditya5259kumar/fullstack-chat-app",
  },
  {
    id: 3,

    title: "BEOG — MERN Blogging Platform",

    description:
      "A feature-rich MERN blogging platform with dynamic author systems, multi-image content publishing, Redux state management, and scalable backend architecture.",
    features: [
      "JWT authentication with protected API routes",
      "Rich text blog publishing with multi-image uploads using Multer",
      "Dynamic author system with profile-based content discovery",
      "Category filtering, blog engagement tracking, and Redux-powered state management",
    ],

    image: beog,

    techStack: [
      "React",
      "Redux Toolkit",
      "PrimeReact",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Multer",
    ],

    liveDemo: "https://mern-blog-app-mu-ecru.vercel.app/",

    sourceCode: "https://github.com/aditya5259kumar/mern-blog-app",
  },

  {
    id: 4,

    title: "Notely — MERN Notes App",

    description:
      "A full-stack MERN note-taking application featuring JWT authentication, protected API routes, note pinning, and real-time search with an MVC backend architecture.",

    features: [
      "Secure JWT authentication and authorization",
      "RESTful API with MVC architecture",
      "Create, manage, pin, and search personal notes",
      "Responsive frontend with protected user dashboards",
    ],

    techStack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],

    image: notely,

    liveDemo: "https://note-app-five-lilac.vercel.app/",

    sourceCode: "https://github.com/aditya5259kumar/fullstack-Note-app",
  },
  {
    id: 5,

    title: "TaskMelt — Full Stack Todo App",

    description:
      "A task management application built with React, Express, and MySQL featuring JWT authentication, protected routes, Context API state management, and MVC architecture.",

    features: [
      "Secure JWT authentication and user-specific task access",
      "MySQL relational database integration with RESTful APIs",
      "Global state management using React Context API",
      "Task completion tracking with responsive dashboard UI",
    ],

    image: taskMelt,

    techStack: [
      "React",
      "Tailwind CSS",
      "Context API",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT",
    ],

    liveDemo: "https://fullstack-todo-app-nu.vercel.app/",

    sourceCode: "https://github.com/aditya5259kumar/fullstack-Todo-app",
  },
];
