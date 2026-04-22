import React from "react";
import { LuMusic, LuMoon, LuSun } from "react-icons/lu";
import {
  BiHomeAlt,
  BiUser,
  BiAward,
  BiCode,
  BiBriefcaseAlt,
  BiEnvelope,
} from "react-icons/bi";

const Navbar = () => {
  const logo = "</aditya>";

  return (
    <header className="fixed top-4 left-3 right-3 z-50">
      <div className="max-w-7xl mx-auto py-3 px-4 rounded-2xl bg-black/50 backdrop-blur-md flex items-center justify-between border border-neutral-700/80">
        <div className="text-xl font-medium text-white font-code">{logo}</div>
        <div className="flex space-x-7.5 text-gray-500 text-sm">
          <span className="flex items-center gap-1">
            <BiHomeAlt className="text-[16px]" />
            <a href="#home">Home</a>
          </span>
          <span className="flex items-center gap-1">
            <BiUser className="text-[16px]" />
            <a href="#about">About</a>
          </span>
          <span className="flex items-center gap-1">
            <BiCode className="text-[16px]" />
            <a href="#skills">Skills</a>
          </span>
          <span className="flex items-center gap-1">
            <BiBriefcaseAlt className="text-[16px]" />
            <a href="#projects">Projects</a>
          </span>
          <span className="flex items-center gap-1">
            <BiAward className="text-[16px]" />
            <a href="#experience">Experience</a>
          </span>
          <span className="flex items-center gap-1">
            <BiEnvelope className="text-[16px]" />
            <a href="#contact">Contact</a>
          </span>
        </div>
        <div className="flex space-x-4">
          <span className="text-gray-300 text-xl hover:bg-gray-800 p-2 rounded-lg">
            <LuMusic />
          </span>
          <span className="text-gray-300 text-xl hover:bg-gray-800 p-2 rounded-lg">
            <LuMoon />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
