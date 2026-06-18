import React from "react";
import { motion } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

const Projects = () => {
  return (
    <section id="projects" className="pt-24 lg:pt-35">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-2 mb-10 md:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-800 dark:text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-2"
          >
            My{" "}
            <span className="tracking-tighter bg-linear-to-b from-black dark:from-neutral-50 via-(--purple-700) dark:via-(--purple-300) to-(--purple-400) dark:to-(--purple-600) bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "6rem", opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="w-16 md:w-24 h-0.5 bg-linear-to-r from-(--purple-500) to-(--purple-700) dark:to-(--purple-300) rounded-full"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-center font-medium text-gray-700 dark:text-gray-400 leading-relaxed pt-4"
          >
            A showcase of my recent work, from concept to deployment
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          target="_blank"
          href="https://github.com/aditya5259kumar?tab=repositories"
          className="hover:text-(--purple-500) ease-in-out transition-all flex group items-center underline underline-offset-6 justify-center mt-8 md:mt-12 mx-auto dark:text-white"
        >
          View all projects on GitHub{" "}
          <div>
            <IoArrowForward className="font-bold -rotate-45 transition-all ease-in-out md:text-lg text-base" />
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default Projects;
