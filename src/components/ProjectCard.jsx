import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { BiCode } from "react-icons/bi";

export default function ProjectCard({ project }) {
  return (
    <div className="group relative overflow-hidden border border-neutral-300/80 dark:border-neutral-700/80 rounded-2xl dark:bg-(--purple-950)/60 bg-(--purple-50)/60 backdrop-blur-md">
      
      <div className="relative h-50 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold dark:text-white">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {project.description}
        </p>

        <ul className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {project.features.map((feature, index) => (
            <li key={index} className="list-inside list-disc">
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.techStack.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-md
              bg-(--purple-100) text-(--purple-600)
              dark:bg-(--purple-900) dark:text-(--purple-300)"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-end gap-4 items-center mt-6">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-4 py-2 bg-linear-to-r from-(--purple-800) dark:from-(--purple-700) to-(--purple-500) text-sm font-medium rounded-lg text-white"
          >
            <span>Live Demo</span>
            <HiMiniArrowTopRightOnSquare className="text-[18px]" />
          </a>

          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg border border-(--purple-300) text-(--purple-700) bg-(--purple-100) dark:border-(--purple-700) dark:text-white dark:bg-(--purple-900)"
          >
            <span>Source</span>
            <BiCode className="text-[18px]" />
          </a>
        </div>
      </div>
    </div>
  );
}