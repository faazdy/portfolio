import { projects } from './data'
import { CATEGORY } from './site'

// Category of each project, keyed by nameProject in data.js
const PROJECT_CATEGORY = {
    'PinGym - Gym Saas & Fitness App': CATEGORY.APP,
    'QRMe - QR Generator App': CATEGORY.APP,
    'UInspired': CATEGORY.LIBRARY,
    'KapleCSS - CSS Minimal Framework': CATEGORY.LIBRARY,
    'GenMax Academy': CATEGORY.WEBSITE,
    'UI Komponents': CATEGORY.LIBRARY,
}

// Optional extra info for the project detail page, keyed by nameProject.
// Every field is optional: anything left out is simply not shown.
// Texts can be a plain string or { en, es }.
//
// 'PinGym - Gym Saas & Fitness App': {
//     year: 2025,
//     client: { en: 'Personal project', es: 'Proyecto personal' },
//     role: 'Full-stack',
//     objective: { en: '...', es: '...' },
//     challenge: { en: '...', es: '...' },
//     solution: { en: '...', es: '...' },
//     gallery: ['/assets/content/projects/pingym-2.png', '/assets/content/projects/pingym-3.png'],
// },
const PROJECT_DETAILS = {
    'GenMax Academy': { client: 'GenMax Academy' },
}

// Certifications (from the HV), shown on the Info page
export const CERTIFICATIONS = [
    { name: 'IA Sin Límites', issuer: 'AWS', year: 2026 },
    { name: 'Estrategias para la Innovación en el sector público', issuer: 'MinTIC', year: 2026 },
    { name: 'Visualización de Datos con Power BI', issuer: 'SENA', year: 2025 },
    { name: 'The Web Developer Bootcamp', issuer: 'Udemy', year: 2024 },
    { name: 'NDG Linux Essentials', issuer: 'Cisco Networking Academy', year: 2023 },
]

// Translate content (en - es)
export const TRANSLATIONS = {
    en: {
        lang: 'en',
        nav: { home: 'Home', info: 'Info', work: 'My Work', contact: 'Contact' },
        cta: 'Contact Me',
        hello1: 'Hello!', hello2: "I'm",
        skills: ['Systems Engineering', 'Full-stack development', 'Frontend & UI', 'Applied AI & automation'],
        stmtA: 'A systems engineer & full-stack developer —',
        stmtB: 'building software that feels fast, reliable and simple, from the database to the last pixel.',
        selected: 'Selected work',
        available: 'Available for work',
        role: 'Systems Engineer & Dev', based: 'Freelancing since 2023', since: '“Everything is possible.”',
        aboutTitle: 'About Me.',
        bio: "I'm Leonardo, a final-year Systems Engineering student at UNIMINUTO and a full-stack developer.",
        bio2: 'Since May 2026 I intern at Capital Salud EPS-S, building automation, data and AI solutions for the Strategy & Planning-Quality team: SABIA, an internal RAG and Power BI dashboards on SQL Server. I work with React, Vue 3 and Node.js, focused on clean code, UI/UX and performance.',
        resume: 'Download resume ↓',
        stackLabel: 'STACK',
        stats: [
            { value: '3+', label: 'Years freelancing' },
            { value: '8+', label: 'Websites delivered' },
            { value: '+35', label: 'Lighthouse points gained' },
            { value: '224', label: 'Procedures diagrammed with AI' },
        ],
        timelineLabel: 'Experience & education',
        timeline: [
            { period: "2026–now", title: 'Systems Engineering Intern', org: 'Capital Salud EPS-S' },
            { period: "2023–now", title: 'Freelance Web Developer', org: 'Independent' },
            { period: "2022–2027", title: 'Systems Engineering', org: 'UNIMINUTO' },
        ],
        experienceLabel: 'WHAT I ACHIEVED',
        experience: [
            {
                role: 'Systems Engineering Intern',
                company: 'Capital Salud EPS-S',
                period: 'May 2026 – Nov 2026',
                achievements: [
                    'Built SABIA (Automation, Information Base and Artificial Intelligence System) to cut information-search time and repetitive tasks in the Quality team.',
                    'Built an internal RAG (Retrieval-Augmented Generation) AI solution: a corporate second brain to centralize, query and retrieve the Quality team knowledge.',
                    'Built an automatic management-report module from the Almera SGI Master Document List that shows the entity document status and flags gaps.',
                    'Optimized the Authorizations dashboard in Power BI on SQL Server: with an aggregated table and ETL, cut the source from 12.8 million records to about 300K rows.',
                    'Built two AI skills: one that generates standardized flowcharts (Mermaid) from the 224 procedures of the entity, and one that creates institutional presentations for specific audiences.',
                    'Administer and configure Almera SGI across Document Management, Indicators, Improvement Plans, Integration Mechanisms, Projects and Audits.',
                    'Analyzed the process map (75 nodes: 19 processes, 56 subprocesses) and the Master Document List (1,470 records) under ISO 9001:2015; found coding misalignment and proposed a five-stage core architecture with a phased roadmap.',
                ],
            },
            {
                role: 'Freelance Web Developer',
                company: 'Independent · Remote',
                period: 'Since Dec 2023',
                achievements: [
                    'Designed and built 8+ responsive websites for small businesses and content creators with React, Vue 3 and Node.js, delivered on time and within scope.',
                    'Raised the average Lighthouse Performance score by 35+ points across 3 projects with image optimization, lazy loading and code splitting.',
                    'Implemented on-page SEO (semantic HTML, meta tags, structured data) with measurable organic ranking gains for 2 clients.',
                    'Built and deployed full-stack apps with Supabase (PostgreSQL): authentication, real-time subscriptions and file storage.',
                    'Managed versions with Git/GitHub and automated CI/CD deploys on Vercel and Netlify, with deploy times under 3 minutes.',
                    'Turned business requirements into technical specs, working directly with clients through the whole project cycle.',
                ],
            },
        ],
        certsLabel: 'CERTIFICATIONS',
        workTitle: 'My Work.',
        filters: ['All', 'Apps', 'Libraries', 'Websites'],
        categories: { 1: 'App', 2: 'Library', 3: 'Website' },
        visit: 'Visit ↗',
        project: {
            year: 'Year', type: 'Type', client: 'Client', role: 'Role',
            objective: 'Objective', challenge: 'Challenge', solution: 'Solution',
            live: 'Live project', demoBtn: 'View live demo',
            prev: 'Previous project', next: 'Next project',
        },
        contactTitle: 'Reach out.',
        contactIntro: 'Available for freelance projects and collaborations. Tell me what you have in mind.',
        form: { name: 'Name', namePh: 'John', phone: 'Phone', msg: 'Message', msgPh: 'Tell me about your project', send: 'Submit', sending: 'Sending…', thanks: 'Thanks — message received. I will reply soon.', error: 'Something went wrong. Please try again or email me.' },
        descs: {},
    },
    es: {
        lang: 'es',
        nav: { home: 'Inicio', info: 'Info', work: 'Mi trabajo', contact: 'Contacto' },
        cta: 'Contáctame',
        hello1: '¡Hola!', hello2: 'Soy',
        skills: ['Ingeniería de sistemas', 'Desarrollo full-stack', 'Frontend y UI', 'IA aplicada y automatización'],
        stmtA: 'Ingeniero de sistemas y desarrollador full-stack —',
        stmtB: 'construyo software rápido, confiable y simple, desde la base de datos hasta el último píxel.',
        selected: 'Proyectos destacados',
        available: 'Disponible para trabajar',
        role: 'Ing. de Sistemas y Dev', based: 'Freelance desde 2023', since: '“Todo es posible.”',
        aboutTitle: 'Sobre mí.',
        bio: 'Soy Leonardo, estudiante de último año de Ingeniería de Sistemas en UNIMINUTO y desarrollador full-stack.',
        bio2: 'Desde mayo de 2026 hago mi práctica en Capital Salud EPS-S, construyendo soluciones de automatización, datos e IA para la dirección de Estrategia y Planeacion-Calidad: SABIA, un RAG interno y tableros en Power BI sobre SQL Server. Trabajo con React, Vue 3 y Node.js, con foco en código limpio, UI/UX y rendimiento.',
        resume: 'Descargar CV ↓',
        stackLabel: 'STACK',
        stats: [
            { value: '3+', label: 'Años como freelance' },
            { value: '8+', label: 'Sitios web entregados' },
            { value: '+35', label: 'Puntos de Lighthouse ganados' },
            { value: '224', label: 'Procedimientos diagramados con IA' },
        ],
        timelineLabel: 'Experiencia y formación',
        timeline: [
            { period: "2026–hoy", title: 'Practicante Ing. de Sistemas', org: 'Capital Salud EPS-S' },
            { period: "2023–hoy", title: 'Desarrollador Web Freelance', org: 'Independiente' },
            { period: "2022–2027", title: 'Ingeniería de Sistemas', org: 'UNIMINUTO' },
        ],
        experienceLabel: 'LO QUE LOGRÉ',
        experience: [
            {
                role: 'Practicante Ingeniero de Sistemas',
                company: 'Capital Salud EPS-S',
                period: 'May 2026 – Nov 2026',
                achievements: [
                    'Desarrollé SABIA (Sistema de Automatización, Base de Información e Inteligencia Artificial) para reducir el tiempo de búsqueda de información y las tareas repetitivas del área de Calidad.',
                    'Construí una solución interna de IA basada en RAG (Retrieval-Augmented Generation), un segundo cerebro corporativo para centralizar, consultar y recuperar la información del área de Calidad.',
                    'Desarrollé un módulo de informes gerenciales automáticos a partir del Listado Maestro de Documentos de Almera SGI, que muestra el estado documental de la entidad y genera alertas de brechas.',
                    'Optimicé el Tablero de Autorizaciones en Power BI sobre SQL Server: con una tabla agregada y procesos ETL reduje la fuente de 12,8 millones de registros a cerca de 300 mil filas.',
                    'Desarrollé dos skills de IA: una que genera diagramas de flujo estandarizados (Mermaid) a partir de los 224 procedimientos de la entidad y otra que crea presentaciones institucionales para audiencias específicas.',
                    'Administro y parametrizo Almera SGI en Gestión Documental, Indicadores, Planes de Mejora, Mecanismos de Integración, Proyectos y Auditorías.',
                    'Analicé el mapa de procesos (75 nodos: 19 procesos y 56 subprocesos) y el Listado Maestro de Documentos (1.470 registros) bajo ISO 9001:2015; detecté desalineación de codificación y propuse una arquitectura misional de cinco etapas con hoja de ruta por fases.',
                ],
            },
            {
                role: 'Desarrollador Web Freelance',
                company: 'Independiente · Remoto',
                period: 'Desde Dic 2023',
                achievements: [
                    'Diseñé y desarrollé más de 8 sitios web responsivos para pequeños negocios y creadores de contenido con React, Vue 3 y Node.js, entregando a tiempo y dentro del alcance acordado.',
                    'Mejoré el puntaje promedio de Lighthouse Performance en más de 35 puntos en 3 proyectos con optimización de imágenes, lazy loading y code splitting.',
                    'Implementé SEO on-page (HTML semántico, meta etiquetas, datos estructurados), con mejoras medibles en el posicionamiento orgánico de 2 clientes.',
                    'Construí y desplegué aplicaciones full-stack con Supabase (PostgreSQL): autenticación, suscripciones en tiempo real y almacenamiento de archivos.',
                    'Gestioné versiones con Git/GitHub y automaticé despliegues CI/CD con Vercel y Netlify, con tiempos de deploy menores a 3 minutos.',
                    'Traduje requerimientos de negocio en especificaciones técnicas, con comunicación directa con los clientes durante todo el proyecto.',
                ],
            },
        ],
        certsLabel: 'CERTIFICACIONES',
        workTitle: 'Proyectos.',
        filters: ['Todos', 'Apps', 'Librerías', 'Sitios web'],
        categories: { 1: 'App', 2: 'Librería', 3: 'Sitio web' },
        visit: 'Ver ↗',
        project: {
            year: 'Año', type: 'Tipo', client: 'Cliente', role: 'Rol',
            objective: 'Objetivo', challenge: 'Reto', solution: 'Solución',
            live: 'Proyecto en vivo', demoBtn: 'Ver demo en vivo',
            prev: 'Proyecto anterior', next: 'Siguiente proyecto',
        },
        contactTitle: 'Escríbeme.',
        contactIntro: 'Disponible para proyectos freelance y colaboraciones. Cuéntame qué tienes en mente.',
        form: { name: 'Nombre', namePh: 'Juan', phone: 'Teléfono', msg: 'Mensaje', msgPh: 'Cuéntame de tu proyecto', send: 'Enviar', sending: 'Enviando…', thanks: 'Gracias, recibí tu mensaje. Te respondo pronto.', error: 'Algo salió mal. Intenta de nuevo o escríbeme por correo.' },
        descs: {
            'PinGym - Gym Saas & Fitness App': 'App de gestión para gimnasios (Gym as a Service): sedes, clientes, planes, rutinas, asistencia, lockers y comunicaciones. Los clientes se registran (incluso por QR) y ven sus rutinas, progreso y asistencia.',
            'QRMe - QR Generator App': 'Generador de códigos QR ligero y rápido hecho con Vue y Sass. Crea QR personalizados en segundos, previsualízalos y descárgalos en PNG de alta calidad.',
            'UInspired': 'Colección curada de componentes UI modulares, interfaces interactivas y exploraciones de diseño inspiradas en landing pages modernas.',
            'KapleCSS - CSS Minimal Framework': 'Framework CSS minimalista basado en design tokens: una única fuente de verdad para colores, tipografía y espaciado que mantiene cada proyecto coherente desde el primer día.',
            'GenMax Academy': 'Landing page para GenMax Academy, academia de estética facial e imagen personal fundada por creadores conocidos de TikTok. Diseño moderno y dinámico con fuerte impacto visual.',
            'UI Komponents': 'Plataforma con una colección de botones, sombras y tarjetas para interfaces. Permite previsualizar y copiar el código de cada componente.',
        },
    },
}

// "{ en, es }" -> the text for the current language; plain strings pass through
const inLanguage = (value, lang) => (value && typeof value === 'object' ? value[lang] : value)

// Projects with short name, category, description and detail info in the current language
export const localizeProjects = (t) => projects.map(project => {
    const category = PROJECT_CATEGORY[project.nameProject] ?? CATEGORY.APP
    const details = PROJECT_DETAILS[project.nameProject] ?? {}
    const shortName = project.nameProject.split(' - ')[0]

    return {
        ...project,
        category,
        shortName,
        slug: shortName.toLowerCase().replace(/\s+/g, '-'), // used in the URL: #work/pingym
        categoryLabel: t.categories[category],
        description: t.descs[project.nameProject] ?? project.description,
        year: details.year,
        client: inLanguage(details.client, t.lang),
        role: inLanguage(details.role, t.lang),
        objective: inLanguage(details.objective, t.lang),
        challenge: inLanguage(details.challenge, t.lang),
        solution: inLanguage(details.solution, t.lang),
        gallery: details.gallery ?? [],
    }
})
