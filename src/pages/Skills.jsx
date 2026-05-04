import React from "react";
import html5 from "../assets/html5.svg";
import css3 from "../assets/css3.svg";
import bootstrap from "../assets/bootstrap.svg";
import js from "../assets/js.svg";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwindcss.svg";
import framer from "../assets/framer.svg";
import node from "../assets/nodejs.svg";
import ex_light from "../assets/expressjs-light.svg";
import ex_dark from "../assets/expressjs-dark.svg";
import jwt from "../assets/jwt.svg";
import api_light from "../assets/api-light.svg";
import api_dark from "../assets/api-black.svg";
import sql from "../assets/mysql.svg";
import mongo from "../assets/mongo.svg";
import postman from "../assets/postman.svg";
import ghub from "../assets/github.svg";
import ghub_dark from "../assets/github-dark.svg";
import netlify from "../assets/netlify.svg";
import vercel_dark from "../assets/vercel-dark.svg";
import vercel_light from "../assets/vercel-light.svg";
import { useSelector } from "react-redux";

const Skills = () => {
  const theme = useSelector((store) => store.theme.theme);

  // console.log("theme======", theme);

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
          <div className="w-16 md:w-24 h-0.5 bg-linear-to-r from-(--purple-500) to-(--purple-700) dark:to-(--purple-300) rounded-full"></div>{" "}
        </div>

        <div className="px-0 lg:px-30 md:px-8">
          <div className="mb-10">
            <h4 className="font-semibold text-xl md:text-2xl dark:text-white mb-2 md:mb-4">
              Frontend
            </h4>

            <div className="flex flex-wrap gap-x-4 gap-y-2 items-center font-medium text-gray-700 dark:text-gray-300">
              <div className="dark:bg-(--purple-950)/60 bg-(--purple-50)/60 backdrop-blur-md flex gap-2 items-center border rounded-lg border-neutral-300/80 dark:border-neutral-700/80 py-1.5 md:py-2 px-2 md:px-3 text-sm md:text-base">
                <img src={html5} alt="" className="w-6 h-6" />
                <span>HTML5</span>
              </div>
              <div className="dark:bg-(--purple-950)/60 bg-(--purple-50)/60 backdrop-blur-md flex gap-2 items-center border rounded-lg border-neutral-300/80 dark:border-neutral-700/80 py-1.5 md:py-2 px-2 md:px-3 text-sm md:text-base">
                <img src={css3} alt="" className="w-6 h-6" />
                <span>CSS3</span>
              </div>
              <div className="dark:bg-(--purple-950)/60 bg-(--purple-50)/60 backdrop-blur-md flex gap-2 items-center border rounded-lg border-neutral-300/80 dark:border-neutral-700/80 py-1.5 md:py-2 px-2 md:px-3 text-sm md:text-base">
                <img src={bootstrap} alt="" className="w-6 h-6" />
                <span>Bootstrap</span>
              </div>
              <div className="dark:bg-(--purple-950)/60 bg-(--purple-50)/60 backdrop-blur-md flex gap-2 items-center border rounded-lg border-neutral-300/80 dark:border-neutral-700/80 py-1.5 md:py-2 px-2 md:px-3 text-sm md:text-base">
                <img src={js} alt="" className="w-6 h-6" />
                <span>JavaScript</span>
              </div>
              <div className="dark:bg-(--purple-950)/60 bg-(--purple-50)/60 backdrop-blur-md flex gap-2 items-center border rounded-lg border-neutral-300/80 dark:border-neutral-700/80 py-1.5 md:py-2 px-2 md:px-3 text-sm md:text-base">
                <img src={react} alt="" className="w-6 h-6" />
                <span>React</span>
              </div>
              <div className="dark:bg-(--purple-950)/60 bg-(--purple-50)/60 backdrop-blur-md flex gap-2 items-center border rounded-lg border-neutral-300/80 dark:border-neutral-700/80 py-1.5 md:py-2 px-2 md:px-3 text-sm md:text-base">
                <img src={tailwind} alt="" className="w-6 h-6" />
                <span>Tailwind</span>
              </div>
              <div className="dark:bg-(--purple-950)/60 bg-(--purple-50)/60 backdrop-blur-md flex gap-2 items-center border rounded-lg border-neutral-300/80 dark:border-neutral-700/80 py-1.5 md:py-2 px-2 md:px-3 text-sm md:text-base">
                <img src={framer} alt="" className="w-5 h-5" />
                <span>Framer Motion</span>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h4 className="font-semibold text-xl md:text-2xl dark:text-white mb-2 md:mb-4">
              Backend
            </h4>

            <div className="flex flex-wrap gap-x-4 gap-y-2 items-center font-medium text-gray-700 dark:text-gray-300">
              <div className="dark:bg-(--purple-950)/60 bg-(--purple-50)/60 backdrop-blur-md flex gap-2 items-center border rounded-lg border-neutral-300/80 dark:border-neutral-700/80 py-1.5 md:py-2 px-2 md:px-3 text-sm md:text-base">
                <img src={node} alt="" className="w-6 h-6" />
                <span>Node.js</span>
              </div>
              <div className="dark:bg-(--purple-950)/60 bg-(--purple-50)/60 backdrop-blur-md flex gap-2 items-center border rounded-lg border-neutral-300/80 dark:border-neutral-700/80 py-1.5 md:py-2 px-2 md:px-3 text-sm md:text-base">
                <img
                  src={theme === "light" ? ex_dark : ex_light}
                  alt=""
                  className="w-6 h-6"
                />
                <span>Express</span>
              </div>
              <div className="dark:bg-(--purple-950)/60 bg-(--purple-50)/60 backdrop-blur-md flex gap-2 items-center border rounded-lg border-neutral-300/80 dark:border-neutral-700/80 py-1.5 md:py-2 px-2 md:px-3 text-sm md:text-base">
                <img
                  src={theme === "light" ? api_dark : api_light}
                  alt=""
                  className="w-6 h-6"
                />
                <span>REST APIs</span>
              </div>
              <div className="dark:bg-(--purple-950)/60 bg-(--purple-50)/60 backdrop-blur-md flex gap-2 items-center border rounded-lg border-neutral-300/80 dark:border-neutral-700/80 py-1.5 md:py-2 px-2 md:px-3 text-sm md:text-base">
                <img src={jwt} alt="" className="w-5 h-5" />
                <span>JWT Auth</span>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h4 className="font-semibold text-xl md:text-2xl dark:text-white mb-2 md:mb-4">
              Databases
            </h4>

            <div className="flex flex-wrap gap-x-4 gap-y-2 items-center font-medium text-gray-700 dark:text-gray-300">
              <div className="dark:bg-(--purple-950)/60 bg-(--purple-50)/60 backdrop-blur-md flex gap-2 items-center border rounded-lg border-neutral-300/80 dark:border-neutral-700/80 py-1.5 md:py-2 px-2 md:px-3 text-sm md:text-base">
                <img src={sql} alt="" className="w-5 h-5" />
                <span>MySQL</span>
              </div>
              <div className="dark:bg-(--purple-950)/60 bg-(--purple-50)/60 backdrop-blur-md flex gap-2 items-center border rounded-lg border-neutral-300/80 dark:border-neutral-700/80 py-1.5 md:py-2 px-2 md:px-3 text-sm md:text-base">
                <img src={mongo} alt="" className="w-6 h-6" />
                <span>MongoDB</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-xl md:text-2xl dark:text-white mb-2 md:mb-4">
              Tools & Deployment
            </h4>

            <div className="flex flex-wrap gap-x-4 gap-y-2 items-center font-medium text-gray-700 dark:text-gray-300">
              <div className="dark:bg-(--purple-950)/60 bg-(--purple-50)/60 backdrop-blur-md flex gap-2 items-center border rounded-lg border-neutral-300/80 dark:border-neutral-700/80 py-1.5 md:py-2 px-2 md:px-3 text-sm md:text-base">
                <img
                  src={theme === "light" ? ghub : ghub_dark}
                  alt=""
                  className="w-5 h-5"
                />
                <span>GitHub</span>
              </div>
              <div className="dark:bg-(--purple-950)/60 bg-(--purple-50)/60 backdrop-blur-md flex gap-2 items-center border rounded-lg border-neutral-300/80 dark:border-neutral-700/80 py-1.5 md:py-2 px-2 md:px-3 text-sm md:text-base">
                <img src={postman} alt="" className="w-6 h-6" />
                <span>Postman</span>
              </div>
              <div className="dark:bg-(--purple-950)/60 bg-(--purple-50)/60 backdrop-blur-md flex gap-2 items-center border rounded-lg border-neutral-300/80 dark:border-neutral-700/80 py-1.5 md:py-2 px-2 md:px-3 text-sm md:text-base">
                <img src={netlify} alt="" className="w-6 h-6" />
                <span>Netlify</span>
              </div>
              <div className="dark:bg-(--purple-950)/60 bg-(--purple-50)/60 backdrop-blur-md flex gap-2 items-center border rounded-lg border-neutral-300/80 dark:border-neutral-700/80 py-1.5 md:py-2 px-2 md:px-3 text-sm md:text-base">
                <img
                  src={theme === "light" ? vercel_dark : vercel_light}
                  alt=""
                  className="w-5 h-5"
                />
                <span>Vercel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
