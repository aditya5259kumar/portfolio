import React from "react";
import { useSelector } from "react-redux";
import { skillsData } from "../data";

const Skills = () => {
  const theme = useSelector((store) => store.theme.theme);

  return (
    <section id="skills" className="pt-34 lg:pt-45">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 xl:px-0">
        <div className="flex flex-col items-center gap-2 mb-10 md:mb-16">
          <h2 className="text-gray-800 dark:text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center  mb-2">
            Skills &{" "}
            <span className="tracking-tighter bg-linear-to-b from-black dark:from-neutral-50  via-(--purple-700) dark:via-(--purple-300) to-(--purple-400) dark:to-(--purple-600) bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <div className="w-16 md:w-24 h-0.5 bg-linear-to-r from-(--purple-500) to-(--purple-700) dark:to-(--purple-300) rounded-full"></div>
          <p className="text-lg font-medium text-gray-700 dark:text-gray-400 leading-relaxed pt-4">
            Technologies and tools I work with.
          </p>
        </div>

        <div className="px-0 lg:px-30 md:px-8">
          {skillsData.map((section, index) => (
            <div key={index} className="mb-10">
              <h4 className="font-semibold text-xl md:text-2xl dark:text-white mb-2 md:mb-4">
                {section.title}
              </h4>

              <div className="flex flex-wrap gap-x-4 gap-y-2 items-center font-medium text-gray-700 dark:text-gray-300">
                {section.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="dark:bg-(--purple-950)/60 bg-(--purple-50)/60 backdrop-blur-md flex gap-2 items-center border rounded-lg border-neutral-300/80 dark:border-neutral-700/80 py-1.5 md:py-2 px-2 md:px-3 text-sm md:text-base"
                  >
                    <img
                      src={
                        skill.lightIcon
                          ? theme === "light"
                            ? skill.lightIcon
                            : skill.darkIcon
                          : skill.icon
                      }
                      alt=""
                      className={`${
                        skill.name === "Framer Motion" ||
                        skill.name === "JWT Auth" ||
                        skill.name === "GitHub" ||
                        skill.name === "Vercel" ||
                        skill.name === "MySQL"
                          ? "w-5 h-5"
                          : "w-6 h-6"
                      }`}
                    />

                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
