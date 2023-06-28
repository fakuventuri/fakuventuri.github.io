import SkillsCard from "./SkillsCard";

import skills from "@/data/skillsData";

export default function Skills() {
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
