import Image from "next/image";

export default function Skills() {
  const skills = [
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
            <div key={skill.name} className="group">
              <div
                className="flex flex-col items-center justify-center p-6 text-center transition-all duration-1000 ease-out border-2 border-black border-solid rounded-lg shadow-lg group-hover:-translate-y-4 group-hover:shadow-violet-700 group-hover:duration-100 h-40"
                // background color change with index
                style={{
                  backgroundColor: `rgba(${100 - index * 5}, ${
                    100 - index * 5
                  }, ${100 - index * 5})`,
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
          ))}
        </div>
      </div>
    </div>
  );
}
