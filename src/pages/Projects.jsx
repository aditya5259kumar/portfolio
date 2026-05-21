import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

const Projects = () => {
  return (
    <section id="projects" className="pt-24 lg:pt-35">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 xl:px-0">
        <div className="flex flex-col items-center gap-2 mb-10 md:mb-16">
          <h2 className="text-gray-800 dark:text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center  mb-2">
            My{" "}
            <span className="tracking-tighter bg-linear-to-b from-black dark:from-neutral-50  via-(--purple-700) dark:via-(--purple-300) to-(--purple-400) dark:to-(--purple-600) bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="w-16 md:w-24 h-0.5 bg-linear-to-r from-(--purple-500) to-(--purple-700) dark:to-(--purple-300) rounded-full"></div>
          <p className="text-lg text-center font-medium text-gray-700 dark:text-gray-400 leading-relaxed pt-4">
            A showcase of my recent work, from concept to deployment
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
