import React, { useState } from "react";
import { LuMusic, LuMoon, LuSun } from "react-icons/lu";
import {
  BiHomeAlt,
  BiUser,
  BiAward,
  BiCode,
  BiBriefcaseAlt,
  BiEnvelope,
} from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { HiMiniBars2 } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, toggleMusic } from "../redux/slices/themeSlice";

const Navbar = () => {
  const logo = "<aditya/>";
  const [mobileView, setMobileView] = useState(false);

  const theme = useSelector((store) => store.theme.theme);
  const isPlaying = useSelector((store) => store.theme.isPlaying);
  const dispatch = useDispatch();

  function toggleMobileView() {
    setMobileView((prev) => !prev);
  }

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="max-w-7xl xl:mx-auto mx-0 md:mx-4 lg:mx-8 md:py-3 py-2 px-4 rounded-xl dark:bg-(--purple-950)/60 bg-(--purple-50)/60 backdrop-blur-md flex items-center justify-between border border-neutral-300/80 dark:border-neutral-700/80">
        <div className="cursor-pointer md:text-xl text-lg font-semibold text-(--purple-500) dark:text-(--purple-400) font-code">
          {logo}
        </div>

        <div className="lg:flex hidden space-x-7.5 text-gray-500 dark:text-gray-400   text-sm">
          <span className="flex items-center gap-1 hover:text-(--purple-700) dark:hover:text-(--purple-400) transition-all">
            <BiHomeAlt className="text-[16px]" />
            <a href="#home">Home</a>
          </span>
          <span className="flex items-center gap-1 hover:text-(--purple-700) dark:hover:text-(--purple-400) transition-all">
            <BiUser className="text-[16px]" />
            <a href="#about">About</a>
          </span>
          <span className="flex items-center gap-1 hover:text-(--purple-700) dark:hover:text-(--purple-400) transition-all">
            <BiCode className="text-[16px]" />
            <a href="#skills">Skills</a>
          </span>
          <span className="flex items-center gap-1 hover:text-(--purple-700) dark:hover:text-(--purple-400) transition-all">
            <BiBriefcaseAlt className="text-[16px]" />
            <a href="#projects">Projects</a>
          </span>
          <span className="flex items-center gap-1 hover:text-(--purple-700) dark:hover:text-(--purple-400) transition-all">
            <BiAward className="text-[16px]" />
            <a href="#experience">Experience</a>
          </span>
          <span className="flex items-center gap-1 hover:text-(--purple-700) dark:hover:text-(--purple-400) transition-all">
            <BiEnvelope className="text-[16px]" />
            <a href="#contact">Contact</a>
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <span
            onClick={() => dispatch(toggleMusic())}
            className={`hover:bg-(--purple-200)/50 dark:hover:bg-(--purple-700)/50 cursor-pointer p-2 rounded-full  ${
              isPlaying
                ? "dark:text-purple-400 text-purple-600 bg-(--purple-200)/50 dark:bg-(--purple-700)/50"
                : "text-gray-500"
            }`}
          >
            <LuMusic />
          </span>
          <span
            onClick={() => dispatch(toggleTheme())}
            className={`hover:bg-(--purple-200)/50 dark:hover:bg-(--purple-700)/50 cursor-pointer ${theme === "light" ? "text-gray-500" : "text-yellow-600"} text-lg p-2 rounded-full`}
          >
            {theme === "light" ? <LuMoon /> : <LuSun />}
          </span>

          <span
            onClick={toggleMobileView}
            className=" hover:bg-(--purple-200)/50 dark:hover:bg-(--purple-700)/50 block lg:hidden text-gray-500 dark:text-gray-400/80 text-xl cursor-pointer p-2 rounded-full"
          >
            {mobileView ? <RxCross2 /> : <HiMiniBars2 />}
          </span>
        </div>
      </div>

      {mobileView && (
        <div className="mt-4 max-w-7xl mx-auto py-3 px-4 rounded-xl dark:bg-(--purple-950)/60 bg-(--purple-50)/60 backdrop-blur-md md:flex lg:hidden items-center justify-between border border-neutral-300/80 dark:border-neutral-700/80">
          <div className="flex flex-col py-3 px-4 rounded-xl space-y-6 text-gray-500 dark:text-gray-400 text-sm">
            <span className="cursor-pointer flex items-center gap-1 hover:text-(--purple-700) dark:hover:text-(--purple-400) transition-all">
              <BiHomeAlt className="text-[16px]" />
              <a href="#home">Home</a>
            </span>
            <span className="cursor-pointer flex items-center gap-1 hover:text-(--purple-700) dark:hover:text-(--purple-400) transition-all">
              <BiUser className="text-[16px]" />
              <a href="#about">About</a>
            </span>
            <span className="cursor-pointer flex items-center gap-1 hover:text-(--purple-700) dark:hover:text-(--purple-400) transition-all">
              <BiCode className="text-[16px]" />
              <a href="#skills">Skills</a>
            </span>
            <span className="cursor-pointer flex items-center gap-1 hover:text-(--purple-700) dark:hover:text-(--purple-400) transition-all">
              <BiBriefcaseAlt className="text-[16px]" />
              <a href="#projects">Projects</a>
            </span>
            <span className="cursor-pointer flex items-center gap-1 hover:text-(--purple-700) dark:hover:text-(--purple-400) transition-all">
              <BiAward className="text-[16px]" />
              <a href="#experience">Experience</a>
            </span>
            <span className="cursor-pointer flex items-center gap-1 hover:text-(--purple-700) dark:hover:text-(--purple-400) transition-all">
              <BiEnvelope className="text-[16px]" />
              <a href="#contact">Contact</a>
            </span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
