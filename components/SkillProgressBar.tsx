"use client";

export default function SkillProgressBar({
  name,
  level,
  bgColor,
  animationDelay,
}: {
  name: string;
  level: number;
  bgColor: string;
  animationDelay: string;
}) {
  return (
    <div className="w-full p-1 mb-0">
      <div className="flex justify-between">
        <div className="flex items-center justify-center h-10 mb-2 mr-10 text-xl font-semibold text-left text-gray-100 rounded-full bg-neutral-900 w-52">
          <h3>{name}</h3>
        </div>
        <div className="flex items-center justify-center w-full h-10">
          <div className="w-full h-4 rounded-full bg-neutral-900">
            <div className="w-0 h-full" style={{ width: `${level}%` }}>
              <div
                className={
                  "w-full h-full animate-progress-bar-idle " + animationDelay
                }
              >
                <span
                  className={
                    "block w-0 h-full rounded-full animate-progress-bar " +
                    bgColor
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
