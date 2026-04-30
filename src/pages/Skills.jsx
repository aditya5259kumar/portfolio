import React from "react";
import html_icon from "../assets/html5.svg"

const Skills = () => {
  return (
    <section id="skills" className="py-34 lg:pt-45">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 xl:px-0">
        <div className="flex flex-col items-center gap-2 mb-10 md:mb-16">
          <h2 className="text-gray-800 dark:text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center  mb-2">
            Skills &{" "}
            <span className="tracking-tighter bg-linear-to-b from-black dark:from-neutral-50  via-(--purple-700) dark:via-(--purple-300) to-(--purple-400) dark:to-(--purple-600) bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <div className="w-16 md:w-24 h-0.5 bg-linear-to-r from-(--purple-500) to-(--purple-700) dark:to-(--purple-300) rounded-full"></div>{" "}
        </div>

        <div>
          <div>
            <h4 className="font-bold text-2xl dark:text-white md:text-3xl border-b pb-2 md:pb-3 border-neutral-300/80 dark:border-neutral-700/80">
              Frontend
            </h4>
            <div>
              <span>
                <img src={html_icon} alt="" /> HTML
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
