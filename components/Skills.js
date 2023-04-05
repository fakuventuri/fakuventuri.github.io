import React from "react";
import { RevealList } from "next-reveal";

const Skills = () => {
  const skills = [
    { name: "React", level: "Advanced", bg: "bg-neutral-700" },
    { name: "React Native", level: "Advanced", bg: "bg-neutral-700" },
    { name: "NextJS", level: "Advanced", bg: "bg-neutral-700" },
    { name: "Node.js", level: "Advanced", bg: "bg-neutral-700" },
    { name: "JavaScript", level: "Advanced", bg: "bg-neutral-700" },
    { name: "HTML/CSS", level: "Advanced", bg: "bg-neutral-700" },
    { name: "Java", level: "Advanced", bg: "bg-neutral-700" },
    { name: "Unity", level: "Advanced", bg: "bg-neutral-700" },
    { name: "C#", level: "Intermediate", bg: "bg-neutral-800" },
    { name: "Angular", level: "Intermediate", bg: "bg-neutral-800" },
    { name: "NoSQL", level: "Intermediate", bg: "bg-neutral-800" },
    { name: "SQL", level: "Intermediate", bg: "bg-neutral-800" },
    { name: "ExpressJS", level: "Intermediate", bg: "bg-neutral-800" },
    { name: "Firebase", level: "Intermediate", bg: "bg-neutral-800" },
    { name: "Python", level: "Intermediate", bg: "bg-neutral-800" },
    { name: "Git", level: "Intermediate", bg: "bg-neutral-800" },
    { name: "TailwindCSS", level: "Intermediate", bg: "bg-neutral-800" },
    { name: "Redux", level: "Beginner", bg: "bg-neutral-900" },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto lg:text-center">
        <h2 className="text-3xl font-bold text-gray-100 mb-4">Skills</h2>
        <RevealList
          interval={25}
          delay={25}
          reset={false}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {skills.map((skill) => (
            <div key={skill.name} className="group">
              <div
                className={`p-6 rounded-lg text-center border-solid border-2 border-black group-hover:animate-bounce group-hover:shadow-violet-700 shadow-lg ${skill.bg}`}
              >
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  {skill.name}
                </h3>
                <p className="text-gray-400">{skill.level}</p>
              </div>
            </div>
          ))}
        </RevealList>
      </div>
    </div>
  );
};

export default Skills;
