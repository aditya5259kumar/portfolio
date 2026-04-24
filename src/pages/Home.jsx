import React from "react";
import { TypeAnimation } from "react-type-animation";
import TerminalCard from "../components/TerminalCard";
import { BiDownArrowAlt } from "react-icons/bi";

const Home = () => {
  return (
    <div className="relative max-w-7xl mx-auto min-h-screen md:flex-row flex-col flex items-center gap-x-20 justify-center">
      <div className="flex-1 flex flex-col">
        <span className="text-sm text-(--purple-300) border w-fit border-(--purple-300) px-4 py-2 rounded-3xl">
          Available for Opportunities
        </span>
        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl my-6 font-semibold">
          Full Stack Developer
        </h1>
        <div className="my-4">
          <TypeAnimation
            sequence={[
              "Frontend with React",
              2000,
              "Backend with Node & Express",
              2000,
              "MongoDB & MySQL",
              2000,
              "End-to-End Web Applications",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-(--purple-500) text-3xl md:text-4xl font-semibold"
          />
        </div>
        <p className="text-2xl text-gray-300 my-8">
          I'm Aditya Kumar, I focus on building fast, scalable, and
          user-friendly web applications.
        </p>

        <div className="flex items-center space-x-4">
          <button className="px-6 py-3 font-medium bg-(--purple-700) rounded-xl text-white text- ">
            View Projects
          </button>
          <button className="px-6 py-3 font-medium border border-(--purple-400) rounded-xl text-(--purple-300) text-">
            Get Resume
          </button>
        </div>
      </div>

      <div className="flex-1">
        <TerminalCard />
      </div>

      <div className="md:flex hidden items-center absolute bottom-16 text-gray-400 text-sm mt-8">
        <p>scroll to explore</p>
        <span className="text-[18px] ml-2">
          <BiDownArrowAlt />
        </span>
      </div>
    </div>
  );
};

export default Home;
