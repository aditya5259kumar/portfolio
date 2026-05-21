import React, { useState } from "react";
import { LuMusic, LuMoon, LuSun } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { HiMiniBars2 } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, toggleMusic } from "../redux/slices/themeSlice";
import { navItems } from "../data";
import lg from "../assets/logo.png"

const Navbar = () => {
  // const logo = `$ aditya`;
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
        <a
          href="#home"
          className="cursor-pointer md:text-xl text-lg font-semibold text-(--purple-500) dark:text-(--purple-400) font-code"
        >
          <img className="h-7" src={lg} alt="logo"/>
        </a>

        <div className="md:flex hidden space-x-7.5 text-gray-500 dark:text-gray-400 text-sm">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.id}
                href={item.link}
                className="flex items-center gap-1 hover:text-(--purple-500) dark:hover:text-(--purple-400) transition-all"
              >
                <Icon className="text-[16px]" />
                <span>{item.name}</span>
              </a>
            );
          })}
        </div>

        <div className="flex items-center space-x-4">
          <span
            onClick={() => dispatch(toggleMusic())}
            className={`hover:bg-(--purple-200)/50 dark:hover:bg-(--purple-700)/50 cursor-pointer p-2 rounded-full transition-all ease-in-out ${
              isPlaying
                ? "dark:text-(--purple-400) text-(--purple-400) bg-(--purple-200)/50 dark:bg-(--purple-700)/50"
                : "text-gray-500"
            }`}
          >
            <LuMusic />
          </span>
          <span
            onClick={() => dispatch(toggleTheme())}
            className={`hover:bg-(--purple-200)/50 dark:hover:bg-(--purple-700)/50 cursor-pointer transition-all ease-in-out ${theme === "light" ? "text-gray-500" : "text-yellow-600"} text-lg p-2 rounded-full`}
          >
            {theme === "light" ? <LuMoon /> : <LuSun />}
          </span>

          <span
            onClick={toggleMobileView}
            className=" hover:bg-(--purple-200)/50 dark:hover:bg-(--purple-700)/50 block md:hidden transition-all ease-in-out text-gray-500 dark:text-gray-400/80 text-xl cursor-pointer p-2 rounded-full"
          >
            {mobileView ? <RxCross2 /> : <HiMiniBars2 />}
          </span>
        </div>
      </div>

      {mobileView && (
        <div className="mt-4 max-w-7xl mx-auto py-3 px-4 rounded-xl dark:bg-(--purple-950)/60 bg-(--purple-50)/60 backdrop-blur-md md:flex lg:hidden items-center justify-between border border-neutral-300/80 dark:border-neutral-700/80">
          <div className="flex flex-col py-3 px-4 rounded-xl space-y-6 text-gray-500 dark:text-gray-400 text-sm">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.id}
                  href={item.link}
                  className="cursor-pointer flex items-center gap-1 hover:text-(--purple-500) dark:hover:text-(--purple-400) transition-all"
                >
                  <Icon className="text-[16px]" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
