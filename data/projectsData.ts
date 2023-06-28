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
    link: "http://la-gran-estafa.zerodev.us.to/",
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
];

export default projects;
