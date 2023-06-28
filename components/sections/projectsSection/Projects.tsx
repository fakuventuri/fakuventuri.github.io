import ProjectCard from "./ProjectCard";

import projects from "@/data/projectsData";

export default function Projects() {
  return (
    <div className="w-full px-4 text-center h-fit sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl lg:text-center">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
