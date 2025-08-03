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
    title: "Trainer | SmartTech",
    location: "Tunisia",
    description:
      "Delivered full-stack training in JavaScript, React.js, Node.js, Express.js, and MongoDB. Mentored students through real projects and Git version control.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2020 – August 2020",
  },
  {
    title: "Web Developer | Pixelium",
    location: "Remote",
    description:
      "Worked on multiple projects including PayDay (payroll system), Kids Protect (child safety app), and Unetp (school admin platform).",
    icon: React.createElement(CgWorkAlt),
    date: "Sept 2021 – Nov 2022",
  },
  {
    title: "Web Developer | Nehos Group",
    location: "Remote",
    description:
      "Built platforms like JFS (recruitment), ViviTools (business planning), and GRON (energy renovation tracker). Used Next.js, Sequelize, MySQL, REST APIs.",
    icon: React.createElement(FaReact),
    date: "Feb 2023 – Dec 2024",
  },
  {
    title: "Mission | Sole Digital Media",
    location: "Remote",
    description:
      "Developed SEO-optimized showcase websites using Next.js. Managed hosting, performance, and visibility via Google Search Console.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2025 – June 2025",
  },
] as const;


export const projectsData = [
  {
    title: "PayDay",
    description:
      "An all-in-one platform for employee management and secure salary payments, including payslips and transfers with Stripe integration.",
    tags: [" React", "NodeJS", "Stripe", "Tabler", "JavaScript", "NoSQL", "mongoDB", "ExpressJS"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Kids Protect",
    description:
      "A mobile and web application designed to help parents protect their children's visual and mental health.",
    tags: [" React.js", "Meteor", "MongoDB", "Javascript", "Redux"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Unetp",
    description:
      "A web app for managing private institutions, with advanced security and traceability features.",
    tags: ["Next.js", "JavaScript", "Redux", "Material UI"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Educational Platform",
    description:
      "Platform for managing students, teachers, and timetables. Includes backend and UI for school admin.",
    tags: ["Laravel", "PHP", "HTML", "CSS", "SQL", "Eloquent", "mySQL"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Localira",
    description:
      "A showcase website for vehicle tracking and geolocation via GPS/GPRS.",
    tags: ["WordPress", "PHP", "MySQL"],
    imageUrl: corpcommentImg,
  },
  {
    title: "JFS Recruitment Platform",
    description:
      "Connects recruiters and candidates with a matching algorithm based on job offers and profiles.",
    tags: ["Next.js", "Storybook", "TypeScript", "Sequelize", "MySQL", "Redux Toolkit"],
    imageUrl: corpcommentImg,
  },
  {
    title: "ViviTools",
    description:
      "Business management platform using the Business Model Canvas and Plan. Includes team and finance coordination.",
    tags: ["React", "NodeJS", "Tailwind", "JavaScript", "SQL", "storybook", "React hook form", "mySQL", "sequelize", "REST", "ExpressJS"],
    imageUrl: corpcommentImg,
  },
  {
    title: "GRON",
    description:
      "A platform uniting stakeholders in energy renovation to track projects using a standardized process.",
    tags: ["Next.js", "TypeScript", "Redux Toolkit", "Tailwind", "Storybook"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Sole Digital Media Websites",
    description:
      "Showcase sites optimized for SEO and speed using Next.js and Google Search Console.",
    tags: ["Next.js", "Tailwind", "TypeScript", "SEO", "Seoptimer"],
    imageUrl: corpcommentImg,
  },
  {
    title: "E-Commerce App (Internship)",
    description:
      "Built during my internship. Includes invoice management and integrated chat system.",
    tags: ["Angular", "Node.js", "MongoDB", "Express.js", "Bootstrap"],
    imageUrl: corpcommentImg,
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "Saas",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Angular",
  "Next.js",
  "Node.js",
  "Nest.js",
"Meteor.js",
"React hook form",
  "Git",
  "Tailwind",
  "Laravel",
  "PHP",
  "MongoDB",
  "Mysql",
  "SQLite",
  "Express",
  "PostgreSQL",
  "Redux",
  "Redux Toolkit",
  "GraphQL",
  "Sequilize",
  "Elequent",
  "Framer Motion",
  "Storybook",

] as const;
