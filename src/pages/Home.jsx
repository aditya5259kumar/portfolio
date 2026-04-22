import React from "react";
import TerminalCard from "../components/TerminalCard";
import { BiDownArrowAlt } from "react-icons/bi";

const Home = () => {
  return (
    <div className="relative max-w-7xl mx-auto min-h-screen flex items-center gap-x-20 justify-center">
      <div className="flex-1 flex flex-col">
        <span className="text-sm text-(--purple-300) border w-fit border-(--purple-300) px-4 py-2 rounded-3xl">
          Welcome to my universe
        </span>
        <h1 className="text-white text-7xl my-6 font-semibold">
          Crafting Digital Masterpieces
        </h1>
        <p className="text-2xl text-gray-300 mb-8">
          I'm Aditya Kumar, a professionalDesigner. dedicated to building
          high-performance, user-centric web applications.
        </p>

        <div className="flex items-center space-x-4">
          <button className="px-6 py-3 font-medium bg-(--purple-700) rounded-xl text-white text- ">
            Lets Collaborate
          </button>
          <button className="px-6 py-3 font-medium border border-(--purple-400) rounded-xl text-(--purple-300) text-">
            Get Resume
          </button>
        </div>
      </div>

      <div className="flex-1">
        {/* <CodeCard/> */}
        <TerminalCard />
      </div>

      <p className="absolute bottom-16 flex items-center text-gray-400 text-sm mt-8">
        scroll to explore
        <span className="text-[18px] ml-2">
          <BiDownArrowAlt />
        </span>
      </p>
    </div>
  );
};

export default Home;
