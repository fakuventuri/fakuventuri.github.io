import Project from "@/types/project";

const projects: Project[] = [
  {
    id: 1,
    name: "El Abrazo",
    skills: [
      "TypeScript",
      "React",
      "NextJS",
      "TailwindCSS",
      "Strapi CMS",
      "Nginx",
      "PM2",
    ],
    description:
      "Frontend & Backend design, develop and deploy for blog type website.\n SEO applied. SSG and CSR.\n The backend is a headless CMS with Strapi using SQLite.\n\n The website and headless CMS are hosted on the same VPS with Nginx and PM2.",
    link: "https://elabrazo.ar",
  },
  {
    id: 2,
    name: "La Gran Estafa",
    skills: [
      "TypeScript",
      "React",
      "NextJS",
      "TailwindCSS",
      "YT Data API",
      "Cron Job",
      "Nginx",
      "PM2",
    ],
    description:
      "Frontend design, develop and deploy for animated website.\n Use of YouTube Data API and Cron Job to update the data of the page when needed.\n\n The website is hosted on a VPS with Nginx and PM2.\n (Temporal domain and non SSL certificate.)",
    link: "/project/2",
  },
  {
    id: 3,
    name: "Sigma Transporte",
    skills: [
      "JavaScript",
      "React Native",
      "ElectronJS",
      "React",
      "NoSQL",
      "Firebase",
    ],
    description:
      "Mobile app and desktop app for a transport company storage, access, modification, deletion, ordering and filtering of data.\n Implemented user authentication, permissions, application unlock with biometric data and passcode, real time data synchronization, lazy loading and offline usage.\n The mobile app is developed with React Native and the desktop app with ElectronJS.\n The database is NoSQL with Firebase Firestore.",
    link: "/project/3",
  },
  {
    id: 4,
    name: "Awaken",
    skills: ["React Native", "TypeScript", "Native Modules"],
    description:
      "Android alarm clock app with different options to turn off like shake and multiple level math problems.\nFunctionalities for set up in specific dates, notifications before and after the ring and customization.",
    link: "/project/4",
  },
  {
    id: 5,
    name: "NotJS",
    skills: ["Rust", "EBNF"],
    description:
      "NotJS is an interpreted language written from scratch in Rust that seeks to improve upon JavaScript aspects such as execution speed, bug fixing, and type safety.\n\n Grammar described with EBNF and modules divided in lexer(tokenizer), parser and interpreter with custom error handlers and data scructures.",
    link: "https://github.com/IvanB101/NotJS",
  },
  {
    id: 6,
    name: "LanParty",
    skills: ["NodeJS", "ExpressJS", "Bootstrap"],
    description:
      "Locally hosted server using ExoressJS with a CLI tool.\n\n Easy to start and use, with a web UI to transfer files and notes between devices connected via LAN without using internet connection.",
    link: "/project/6",
  },
];

export default projects;
