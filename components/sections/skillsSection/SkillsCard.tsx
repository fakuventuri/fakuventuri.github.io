import Skill from "@/types/skill";

import Image from "next/image";

export default function SkillsCard({
  skill,
  index,
}: {
  skill: Skill;
  index: number;
}) {
  return (
    <div className="group">
      <div
        className="flex flex-col items-center justify-center h-40 p-6 text-center transition-all duration-1000 ease-out rounded-lg shadow-lg group-hover:-translate-y-4 group-hover:shadow-violet-700 group-hover:duration-100"
        // background color change with index
        style={{
          backgroundColor: `rgba(${90 - index * 5}, ${80 - index * 5}, ${
            110 - index * 5
          })`,
        }}
      >
        <h3 className="mb-4 text-lg font-semibold text-gray-100 whitespace-nowrap">
          {skill.name}
        </h3>
        <Image
          src={`/stack/${skill.icon}`}
          alt={skill.name}
          width={50}
          height={50}
        />
      </div>
    </div>
  );
}
