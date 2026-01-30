import oksyG from "../assets/projects/oksyG.webp";
import hotel from "../assets/projects/hotel.webp";
import charismo from "../assets/projects/charisma.webp";
import las from "../assets/projects/las.webp";
import hydroAdmin from "../assets/projects/hydroAdmin.webp";
import MService from "../assets/projects/MService.webp";
import youthCenter from "../assets/projects/YouthCenter.webp";
import aliExpress from "../assets/projects/aliExpress.webp";
import build from "../assets/projects/build.webp";
import buildAdmin from "../assets/projects/buildAdmin.webp";
import doctor from "../assets/projects/doctor.webp";
import nura from "../assets/projects/nuraElite.webp";
import cyber_sport from "../assets/projects/cyber_sport.png";
import and_sport from "../assets/projects/andijan_sport.png";
import bemorUz from "../assets/projects/image.png";
import InsertDriveFileRounded from "@mui/icons-material/InsertDriveFileRounded";
import LocalOfferRounded from "@mui/icons-material/LocalOfferRounded";
import AssignmentInd from "@mui/icons-material/AssignmentInd";
import HomeRounded from "@mui/icons-material/HomeRounded";
import ChatIcon from "@mui/icons-material/Chat";
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import style from "./utilities.module.css";
import { lazy } from "react";

const Header = lazy(() => import("../components/header/Header"));
const Resume = lazy(() => import("../components/resume/Resume"));
const Skills = lazy(() => import("../components/skills/Skills"));
const Project = lazy(() => import("../components/project/Project"));
const Contact = lazy(() => import("../components/contact/Contact"));

export const routeData = [
  { id: 0, path: "/", file: <Header /> },
  { id: 1, path: "/resume", file: <Resume /> },
  { id: 2, path: "/skills", file: <Skills /> },
  { id: 3, path: "/project", file: <Project /> },
  { id: 4, path: "/contact", file: <Contact /> },
];

export const projectData = [
  {
    id: 23,
    image: bemorUz,
    title: `Bemor Uz `,
    technologies: ` React, Typescript`,
    time: 4,
    link: "https://bemoruz.netlify.app/en",
  },
  {
    id: 0,
    image: nura,
    title: `Nura Elite `,
    technologies: `React, Yandex Map, NodeJs, Express, Mongodb`,
    time: 1,
    link: "https://nuraelite.netlify.app/",
  },
  {
    id: 12,
    image: cyber_sport,
    title: `Cyber Sport`,
    technologies: `React, Ant design`,
    time: 1,
    link: "https://cyber-sport.netlify.app/",
  },
  {
    id: 13,
    image: and_sport,
    title: `Andijan Sport`,
    technologies: `React, Ant design, React-router-dom, `,
    time: 3,
    link: "https://andijan-football.netlify.app/",
  },
  {
    id: 4,
    image: aliExpress,
    title: `AliExpress Clone`,
    technologies: `React, Redux, React-Redux, React-Router,
      Redux-form, Material Ui, Ant Design`,
    time: 5,
    link: "https://robiyaxon.github.io/programmer-girls-React/",
  },
  {
    id: 5,
    image: las,
    title: `LAS`,
    technologies: `React, React-Router, NextJs, Ant Design`,
    time: 5,
    link: "https://papaya-puffpuff-1aa409.netlify.app/",
  },
  {
    id: 6,
    image: doctor,
    title: `Doctor`,
    technologies: `React, Redux, React-Redux, React-Router, Ant
      design`,
    time: " 1,5",
    link: "https://diplomishi.netlify.app/",
  },
  {
    id: 7,
    image: charismo,
    title: `Charismo`,
    technologies: `React, Redux, React-Redux, React-Router,
      Redux-form, TypeScript, Aos, Ant design, Material Ui`,
    time: " 5",
    link: "https://tukhtayevaroziya.github.io/charismo/",
  },
  {
    id: 1,
    image: oksyG,
    title: `Oksy-G Milk`,
    technologies: ` HTML5, Css3, Bootsrap4, JavaScript, jQuery`,
    time: 20,
    link: "https://tukhtayevaroziya.github.io/Oksy-G-Milk-Project/",
  },
  {
    id: 2,
    image: hotel,
    title: `Hotel`,
    technologies: `React, Redux, React-Redux, React-Router,
      Redux-form`,
    time: 14,
    link: "https://tukhtayevaroziya.github.io/hotel-project-/",
  },
  {
    id: 3,
    image: youthCenter,
    title: `Raven`,
    technologies: ` HTML5, Css3, Bootsrap4, JavaScript, jQuery`,
    time: 7,
    link: "https://robiyaxon.github.io/Robiya-coder-Markaz/",
  },

  {
    id: 8,
    image: MService,
    title: `Mers Shop`,
    technologies: `React, Redux, React-Router,
      React-query, Swiper, axios, react-i18next,
      Prop-types, Redux-thunk`,
    time: " 5",
    link: "http://178.128.85.100:6002/",
    //   condition: `(${t('real') + ' ' + t('project')})`,
  },
  {
    id: 9,
    image: build,
    title: `Build`,
    technologies: `React, React-Redux,
      React-Router, Ant design,
      react-yandex-maps, react-i18next, react-bootstrap`,
    time: " 7",
    link: "http://buildmegaservice.com",
    //   condition: `(${t('real') + ' ' + t('project')})`,
  },
  {
    id: 10,
    image: hydroAdmin,
    title: `Hydro Admin`,
    technologies: `React, Redux, React-Redux,
      React-Router, Redux-form, Reactsrap, styled-component, react-i18next`,
    time: " 7",
    //   condition: `(${t('real') + ' ' + t('project')})`,
    close: true,
  },
  {
    id: 11,
    image: buildAdmin,
    title: `Build Admin`,
    technologies: `React, Redux, React-Redux, React-Router,
      Redux-thunk, Ant design, axios, node-sass`,
    time: " 7",
    //   condition: `(${t('real') + ' ' + t('project')})`,
    close: true,
  },
];

// Footer

export const footerItems = [
  { icon: <HomeRounded />, value: "home" },
  { icon: <AssignmentInd />, value: "resume" },
  { icon: <InsertDriveFileRounded />, value: "project" },
  { icon: <LocalOfferRounded />, value: "skills" },
  { icon: <ChatIcon />, value: "contact" },
];

export const resumeData = [
  {
    id: 0,
    class: style.telegram_icon,
    href: "https://t.me/TukhtayevaRoziya",
    icon: <FaTelegramPlane />,
  },
  {
    id: 1,
    class: style.linkedin_icon,
    href: "https://www.linkedin.com/in/roziya-tukhtayeva-07b447241/",
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    class: style.github_icon,
    href: "https://github.com/tukhtayevaroziya",
    icon: <FaGithub />,
  },
  {
    id: 3,
    class: style.leetcode_icon,
    href: "https://leetcode.com/Roziya/",
    icon: <SiLeetcode />,
  },
];

export const skillsData = [
  { id: 0, skill: "HTML", percentage: 90 },
  { id: 1, skill: "CSS", percentage: 85 },
  { id: 2, skill: "Bootstrap/SASS", percentage: 85 },
  { id: 3, skill: "Javascript", percentage: 80 },
  { id: 4, skill: "Jquery", percentage: 80 },
  { id: 5, skill: "React", percentage: 70 },
  { id: 6, skill: "Redux/React-redux", percentage: 70 },
  { id: 7, skill: "React-router-dom", percentage: 70 },
  { id: 8, skill: "Axios/Ajax", percentage: 70 },
  { id: 9, skill: "Ant/Material UI", percentage: 85 },
  { id: 10, skill: "Typescript", percentage: 70 },
  { id: 11, skill: "Next Js", percentage: 75 },
  { id: 12, skill: "Figma", percentage: 90 },
  { id: 13, skill: "i18Next", percentage: 95 },
];
