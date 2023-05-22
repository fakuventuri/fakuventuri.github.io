import React from "react";
import SkillProgressBar from "../SkillProgressBar";

export default function Skills() {
  const skills = [
    { name: "React", level: 95, animationDelay: "[animation-delay:3400ms]" },
    {
      name: "React Native",
      level: 80,
      animationDelay: "[animation-delay:3500ms]",
    },
    { name: "NextJS", level: 90, animationDelay: "[animation-delay:3600ms]" },
    { name: "Node.js", level: 85, animationDelay: "[animation-delay:3700ms]" },
    {
      name: "JavaScript",
      level: 90,
      animationDelay: "[animation-delay:3800ms]",
    },
    { name: "HTML/CSS", level: 80, animationDelay: "[animation-delay:3900ms]" },
    { name: "Java", level: 80, animationDelay: "[animation-delay:3100ms]" },
    { name: "Unity", level: 75, animationDelay: "[animation-delay:3200ms]" },
    { name: "C#", level: 50, animationDelay: "[animation-delay:3300ms]" },
    { name: "Angular", level: 45, animationDelay: "[animation-delay:3400ms]" },
    { name: "NoSQL", level: 60, animationDelay: "[animation-delay:3500ms]" },
    { name: "SQL", level: 60, animationDelay: "[animation-delay:3600ms]" },
    {
      name: "ExpressJS",
      level: 60,
      animationDelay: "[animation-delay:3700ms]",
    },
    { name: "Firebase", level: 50, animationDelay: "[animation-delay:3800ms]" },
    { name: "Python", level: 70, animationDelay: "[animation-delay:3900ms]" },
    { name: "Redux", level: 15, animationDelay: "[animation-delay:3100ms]" },
  ];

  function compareSkillsToOrderByLevel(a: any, b: any) {
    if (a.level < b.level) {
      return 1;
    }
    if (a.level > b.level) {
      return -1;
    }
    return 0;
  }

  return (
    <div className="w-full h-fit px-4 text-center sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl lg:text-center">
        <div className="flex flex-col">
          {skills.sort(compareSkillsToOrderByLevel).map((skill) => (
            <div key={skill.name} className="">
              <SkillProgressBar
                name={skill.name}
                level={skill.level}
                bgColor="bg-violet-800"
                animationDelay={skill.animationDelay}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
