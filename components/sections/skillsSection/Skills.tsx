import Skill from "@/types/skill";

import SkillsCard from "./SkillsCard";

export default function Skills() {
  const skills: Skill[] = [
    { name: "NextJS", icon: "nextjs.svg" },
    { name: "React", icon: "react.svg" },
    { name: "JavaScript", icon: "js.svg" },
    { name: "TypeScript", icon: "typescript.svg" },
    { name: "TailwindCSS", icon: "tailwindcss.svg" },
    { name: "Node.js", icon: "nodejs.svg" },
    { name: "ExpressJS", icon: "expressjs.png" },
    { name: "React Native", icon: "react-native.svg" },
    { name: "Python", icon: "python.svg" },
    { name: "Firebase", icon: "firebase.svg" },
    // { name: "DataBase", icon: "database.svg" },

    { name: "C#", icon: "csharp.svg" },
    { name: "Unity", icon: "unity.svg" },
    { name: "Java", icon: "java.svg" },
    { name: "Redux", icon: "redux.svg" },
  ];

  return (
    <div className="w-full px-4 text-center h-fit sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl lg:text-center">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <SkillsCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
