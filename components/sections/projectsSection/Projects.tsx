import Project from "@/types/project";

import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects: Project[] = [
    {
      name: "Project 1",
      skills: ["React", "NextJS", "TailwindCSS", "TypeScript", "Vercel"],
      description:
        "This is a project description that is pretty long and should wrap to the next line.",
      link: "https://github.com",
    },
    {
      name: "Project 2",
      skills: ["React", "NextJS", "TailwindCSS", "TypeScript", "Vercel"],
      description: "This is a project description",
      link: "https://github.com",
    },
    {
      name: "Project 3",
      skills: ["React", "NextJS", "TailwindCSS", "TypeScript", "Vercel"],
      description: "This is a project description",
      link: "https://github.com",
    },
    // {
    //   name: "Project 4",
    //   skills: ["React", "NextJS", "TailwindCSS", "TypeScript", "Vercel"],
    //   description: "This is a project description",
    //   link: "https://github.com",
    // },
    // {
    //   name: "Project 5",
    //   skills: ["React", "NextJS", "TailwindCSS", "TypeScript", "Vercel"],
    //   description: "This is a project description",
    //   link: "https://github.com",
    // },
    // {
    //   name: "Project 6",
    //   skills: ["React", "NextJS", "TailwindCSS", "TypeScript", "Vercel"],
    //   description: "This is a project description",
    //   link: "https://github.com",
    // },
  ];

  return (
    <div className="w-full px-4 text-center h-fit sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl lg:text-center">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
