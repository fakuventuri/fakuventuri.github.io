"use client";

import Link from "next/link";

import Project from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      className="group cursor-pointer"
      href={project.link}
      target={project.link.includes(".") ? "_blank" : "_self"}
    >
      <div className="flex flex-col items-center justify-between h-full p-6 text-center transition-all duration-1000 ease-out rounded-lg shadow-lg group-hover:-translate-y-4 group-hover:shadow-violet-700 group-hover:duration-100 bg-[rgb(25,15,45)] hover:bg-violet-950 hover:duration-100">
        <div>
          <h3
            className="mb-2 text-2xl text-gray-100 whitespace-nowrap font-mono
            "
          >
            {project.name}
          </h3>
          <p className="mb-4 text-sm text-gray-300 whitespace-pre-line group-hover:text-gray-200">
            {project.description}
          </p>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-1">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 mb-2 text-xs font-medium tracking-widest text-white uppercase bg-black rounded-full 
                      hover:bg-neutral-900
                      "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
