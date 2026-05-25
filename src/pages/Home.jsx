import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import TerminalCard from "../components/TerminalCard";
import {
  BiDownArrowAlt,
  BiArrowFromLeft,
  BiSolidDownload,
} from "react-icons/bi";
import { IoArrowForward } from "react-icons/io5";
import resume from "../assets/resume.pdf";

const Home = () => {
  return (
    <section id="home" className="pt-34 lg:pt-38 ">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 xl:px-0 md:flex-row flex-col flex md:items-center justify-between gap-y-12 md:gap-x-8 gap-x-12">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex flex-col items-center md:items-start"
        >
          <motion.span
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-2 text-xs w-fit px-4 py-1.5 md:py-2 rounded-full bg-(--purple-100) text-(--purple-700) border border-(--purple-300) dark:bg-(--purple-900) dark:text-(--purple-300) dark:border-(--purple-700)"
          >
            Available for Opportunities
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-gray-800 dark:text-white text-6xl md:text-6xl lg:text-7xl md:my-6 my-4 font-extrabold"
          >
            Full Stack{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center md:text-start font-playball block tracking-tighter bg-linear-to-b from-black dark:from-neutral-50  via-(--purple-800) dark:via-(--purple-200) to-(--purple-400) dark:to-(--purple-600) bg-clip-text text-transparent"
            >
              Developer
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
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
              speed={60}
              repeat={Infinity}
              className="text-(--purple-500) text-[22px] my-2 md:text-3xl font-bold"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="md:text-lg px-4 md:pl-0 md:pr-4 text-base text-gray-600 dark:text-gray-300 leading-relaxed md:mt-6 mt-4 mb-8 text-center md:text-start"
          >
            I'm{" "}
            <span className="font-bold text-gray-700 dark:text-white">
              Aditya Kumar
            </span>
            , I focus on building fast, scalable, and user-friendly web
            applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="flex items-center space-x-4"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="flex items-center gap-2 px-4 py-3 md:px-6 md:py-3 bg-linear-to-r from-(--purple-800) dark:from-(--purple-700) to-(--purple-500) text-sm md:text-base font-medium rounded-lg text-white cursor-pointer"
            >
              <span>View Projects</span>
              <div>
                <IoArrowForward className="font-bold -rotate-45 md:text-lg text-base" />
              </div>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={resume}
              download
              className="flex items-center gap-2 px-4 py-3 md:px-6 md:py-3 text-sm md:text-base font-medium rounded-lg border border-(--purple-300) text-(--purple-700) bg-(--purple-100) dark:border-(--purple-700) dark:text-(--purple-300) dark:bg-(--purple-900) hover:bg-(--purple-200) dark:hover:bg-(--purple-800) cursor-pointer"
            >
              <span>Get Resume</span>

              <div>
                <BiSolidDownload className="md:text-lg text-base" />
              </div>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1"
        >
          <TerminalCard />
        </motion.div>
      </div>

      <motion.a
        animate={{ y: [0, 8, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        href="#skills"
        className="mt-15 md:flex hidden justify-center items-center text-(--purple-500) dark:text-gray-500 text-sm"
      >
        <p>scroll to explore</p>
        <span className="text-[18px] ml-1 ">
          <BiDownArrowAlt />
        </span>
      </motion.a>
    </section>
  );
};

export default Home;
