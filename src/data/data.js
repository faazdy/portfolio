//UUID
import {v4 as uuid} from "uuid";

//PROJECT STACK ICONS
import PsSQL from "/assets/icons/postgresqlCARD.svg"
import CSS from "/assets/icons/cssCARD.png"
import Express from "/assets/icons/expressCARD.svg"
import React from "/assets/icons/reactCARD.svg"
import Sass from "/assets/icons/sassCARD.svg"
import Bootstrap from "/assets/icons/boostrapCARD.png"
import Vue from "/assets/icons/vueCARD.svg"
import JavaScript from "/assets/icons/jsCARD.svg"
import HTML from "/assets/icons/htmlCARD.svg"

//STACK ICONS LOGOS
import HTMLICON from "/assets/icons/html-5-logo-svgrepo-com.svg"
import CSSICON from "/assets/icons/css.svg"
import JSICON from "/assets/icons/js-svgrepo-com.svg"
import NODEICON from "/assets/icons/nodejs.svg"
import SASSICON from "/assets/icons/sass-svgrepo-com.svg"
import bootstrapICON from "/assets/icons/boostrap-svg.svg"
import REACTICON from "/assets/icons/react-svgrepo-com.svg"
import SQLICON from "/assets/icons/SQLICON.svg"
import DOCKERICON from "/assets/icons/docker.svg"
import EXPRESSICON from "/assets/icons/express.svg"
import POSTGRESQLICON from "/assets/icons/postgresql.svg"
import MOTION from "/assets/icons/motion.png"
import WORDPRESS from "/assets/icons/wp.png"
import TSICON from "/assets/icons/ts.png"
import VUEICON from "/assets/icons/vue.svg"



export const projects = [
    {
       id: uuid(),
        nameProject: 'PinGym - Gym Saas & Fitness App',
        description: 'PinGym is a management application for gyms (Gym as a Service). It allows a gym to manage its facilities, clients, membership plans, workout routines, attendance, lockers, and communications, and it allows clients to register (including via QR), view their routines, progress, and attendance.',
        stack:[Vue, CSS, Express, PsSQL],
        techStack: ["Vue", "CSS", "Express", "PostgreSQL"],
        cardImg: "/assets/content/projects/pingym.png",
        url: 'https://pingym.vercel.app/' 
    },
    {
        id: uuid(),
        nameProject: 'QRMe - QR Generator App',
        description: 'A lightweight and fast QR code generator built with Vue and Sass. Users can create custom QR codes in seconds, preview them instantly, and download them in high-quality PNG format through a clean and responsive UI.',
        stack:[Vue, Sass],
        techStack: ["Vue", "Sass"],
        cardImg: "/assets/content/projects/qrme.png",
        url: 'https://qrmeapp.vercel.app/'
    },
    {
        id: uuid(),
        nameProject: 'UInspired',
        description: "Inspired UI projects ",
        stack:[Vue, JavaScript],
        techStack: ["Vue", "JavaScript"],
        cardImg: '/assets/content/projects/uinspired.png',
        url: "https://uinspirate.vercel.app/"
    },
    {
        id: uuid(),
        nameProject: 'KapleCSS - CSS Minimal Framework',
        description: 'KapleCSS is a minimal premium CSS framework designed to help developers create beautiful, consistent websites with ease. Built on a foundation of design tokens, it provides a single source of truth for colors, typography, and spacing, keeping every project cohesive from day one.',
        stack:[Sass, JavaScript, HTML],
        techStack: ["Sass", "JavaScript"],
        cardImg: '/assets/content/projects/kaplecss.png',
        url: "https://kaplecss.vercel.app/"
    },
    {
        id: uuid(),
        nameProject: 'GenMax Academy',
        description: 'Landing page developed for GenMax Academy, an academy focused on enhancing facial aesthetics and boosting personal image, founded by well-known TikTok creators. The website presents the brand with a modern, dynamic design aimed at delivering strong visual impact and real results.',
        stack:[React, CSS, Bootstrap],
        techStack: ["React", "CSS", "Framer Motion", "Bootstrap"],
        cardImg: '/assets/content/projects/genmax.png',
        url: "https://www.genmaxacademy.com/"
    },
    {
        id: uuid(),
        nameProject: 'UI Komponents',
        description: 'UI Komponents is a platform that showcases a collection of buttons, shadows, and cards for user interfaces. The website allows users to preview and copy the code for each component, making it easy to integrate them into any web development project.',
        stack:[React, Sass],
        techStack: ["React", "Sass"],
        cardImg: '/assets/content/projects/uikomponents.png',
        url: "https://uikomponents.vercel.app/"
    },
];

export const stackLanguages = [
    {
        id: uuid(),
        nameTechnology: "HTML",
        icon: HTMLICON
    },
    {
        id: uuid(),
        nameTechnology: "CSS",
        icon: CSSICON
    },
    {
        id: uuid(),
        nameTechnology: "JavaScript",
        icon: JSICON
    },
    {
        id: uuid(),
        nameTechnology: "TypeScript",
        icon: TSICON
    },
    {
        id: uuid(),
        nameTechnology: "Sass",
        icon: SASSICON
    },
    {
        id: uuid(),
        nameTechnology: "Bootstrap",
        icon: bootstrapICON
    },
    {
        id: uuid(),
        nameTechnology: "React",
        icon: REACTICON
    },
    {
        id: uuid(),
        nameTechnology: "Vue",
        icon: VUEICON
    },
    {
        id: uuid(),
        nameTechnology: "Motion",
        icon: MOTION
    },
    {
        id: uuid(),
        nameTechnology: "Node.js",
        icon: NODEICON
    },
    {
        id: uuid(),
        nameTechnology: "Express",
        icon: EXPRESSICON
    },
    {
        id: uuid(),
        nameTechnology: "MySQL",
        icon: SQLICON
    },
    {
        id: uuid(),
        nameTechnology: 'Docker',
        icon: DOCKERICON
    },
    {
        id: uuid(),
        nameTechnology: 'PostgreSQL',
        icon: POSTGRESQLICON
    },
];
