//PROJECT STACK ICONS
import HTML from "/assets/icons/htmlCARD.svg"
import CSS from "/assets/icons/cssCARD.svg"
import JS from "/assets/icons/jsCARD.svg"
import React from "/assets/icons/reactCARD.svg"
import Sass from "/assets/icons/sassCARD.svg"

//STACK ICONS LOGOS
import HTMLICON from "/assets/icons/html-5-logo-svgrepo-com.svg"
import CSSICON from "/assets/icons/css-3-svgrepo-com.svg"
import JSICON from "/assets/icons/js-svgrepo-com.svg"
import SASSICON from "/assets/icons/sass-svgrepo-com.svg"
import bootstrapICON from "/assets/icons/bootstrap-svgrepo-com.svg"
import REACTICON from "/assets/icons/react-svgrepo-com.svg"
import SQLICON from "/assets/icons/SQLICON.svg"


export const projects = [
    {
        id: 88,
        nameProject: 'UI Komponents',
        description: 'UI Komponents is a platform that showcases a collection of buttons, shadows, and cards for user interfaces. The website allows users to preview and copy the code for each component, making it easy to integrate them into any web development project.',
        stack:[React, Sass],
        cardImg: '/assets/content/projects/uikomponents.png',
        url: "https://uikomponents.netlify.app/"
    },
    {
        id: 1,
        nameProject: 'THERAPIST SARAH HOLIDAYS',
        description: 'This is the website of a psychologist named Sarah. On this page, you can find and schedule monthly plans and sessions. Additionally, you can read reviews and her bio.',
        stack:[HTML, CSS, JS],
        cardImg: '/assets/content/projects/sarah.png',
        url: 'https://sarah-therapist.netlify.app/'
    },
    {
        id: 2,
        nameProject: 'SHOPPING LIST',
        description: "The application helps users manage a shopping list by allowing them to add items, mark them as purchased, and delete individual items or the entire list. The list is saved in the browser's local storage to persist data between sessions.",
        stack:[HTML, CSS, JS],
        cardImg: '/assets/content/projects/shopping.png',
        url: "https://mercado-list-fzdy.netlify.app/"
    },
    {
        id: 3,
        nameProject: 'TESLA LANDING PAGE CLONE',
        description: "This project is a detailed replica of Tesla's official landing page. It captures the design and layout of the original site, offering an immersive visual experience that mirrors the aesthetic and branding of Tesla.",
        stack:[HTML, CSS, Sass, JS],
        cardImg: '/assets/content/projects/tesla.png',
        url: "https://tesla-laning-clone.netlify.app"
    },
    {
        id: 4,
        nameProject: 'ZENIFY LANDING',
        description: "This is a landing page for Zenify, a meditation app designed to help users achieve inner peace and well-being through guided meditations and wellness exercises. The landing page showcases the app's key features, benefits, user testimonials, and pricing plans.",
        stack:[HTML, CSS, Sass],
        cardImg: '/assets/content/projects/zenify.jpeg',
        url: "https://zenify-meditapp.netlify.app/"
    }
];

export const stackLanguages = [
    {
        id: 55,
        nameTechnology: "HTML",
        icon: HTMLICON
    },
    {
        id: 1,
        nameTechnology: "CSS",
        icon: CSSICON
    },
    {
        id: 2,
        nameTechnology: "JavaScript",
        icon: JSICON
    },
    {
        id: 3,
        nameTechnology: "Sass",
        icon: SASSICON
    },
    {
        id: 4,
        nameTechnology: "Bootstrap",
        icon: bootstrapICON
    },
    {
        id: 5,
        nameTechnology: "React",
        icon: REACTICON
    },
    {
        id: 6,
        nameTechnology: "SQL",
        icon: SQLICON
    }
];
