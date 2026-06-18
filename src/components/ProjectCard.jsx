import { motion } from "framer-motion";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { BiCode } from "react-icons/bi";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden border border-neutral-300/80 dark:border-neutral-700/80 rounded-2xl dark:bg-(--purple-950)/70 bg-(--purple-50)/70"
    >
      <div className="relative h-50 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold dark:text-white">
          {project.title}
        </h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-2 text-sm text-gray-500 dark:text-gray-400"
        >
          {project.description}
        </motion.p>

        <ul className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {project.features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="list-inside list-disc"
            >
              {feature}
            </motion.li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.techStack.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="text-xs px-3 py-1 rounded-md
              bg-(--purple-100) text-(--purple-600)
              dark:bg-(--purple-900) dark:text-(--purple-300)"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <div className="flex justify-end gap-4 items-center mt-6">
          {project.liveDemo === "Currently in development" ? (
            <span className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-300 text-gray-600 dark:bg-gray-700 dark:text-gray-300 select-none opacity-80">
              Available Soon
            </span>
          ) : (
            <motion.a
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-4 py-2 bg-linear-to-r from-(--purple-800) dark:from-(--purple-700) to-(--purple-500) text-sm font-medium rounded-lg text-white"
            >
              <span>Live Demo</span>

              <span>
                <HiMiniArrowTopRightOnSquare className="text-[18px]" />
              </span>
            </motion.a>
          )}

          <motion.a
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg border border-(--purple-300) text-(--purple-700) bg-(--purple-100) dark:border-(--purple-700) dark:text-white dark:bg-(--purple-900)"
          >
            <span>Source</span>

            <div>
              <BiCode className="text-[18px]" />
            </div>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
