import Project from "@/types/project";

const projects: Project[] = [
  {
    id: 1,
    name: "Project 1",
    skills: ["React", "NextJS", "TailwindCSS", "TypeScript", "Vercel"],
    description:
      "This is a project description that is pretty long and should wrap to the next line.",
    link: "https://github.com",
  },
  {
    id: 2,
    name: "Project 2",
    skills: ["React", "NextJS", "TailwindCSS", "TypeScript", "Vercel"],
    description: "This is a project description",
    link: "https://github.com",
  },
  {
    id: 3,
    name: "Project 3",
    skills: ["React", "NextJS", "TailwindCSS", "TypeScript", "Vercel"],
    description: "This is a project description",
    link: "/project/3",
  },
];

export default projects;
