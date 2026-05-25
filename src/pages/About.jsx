import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="pt-34 lg:pt-45">
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
            About{" "}
            <span className="tracking-tighter bg-linear-to-b from-black dark:from-neutral-50 via-(--purple-700) dark:via-(--purple-300) to-(--purple-400) dark:to-(--purple-600) bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "6rem", opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="w-16 md:w-24 h-0.5 bg-linear-to-r from-(--purple-500) to-(--purple-700) dark:to-(--purple-300) rounded-full"
          ></motion.div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-start gap-y-12 md:gap-x-8 gap-x-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex-1 border-l-2 border-(--purple-400) pl-4 py-2"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-black dark:text-white leading-relaxed"
            >
              I'm Aditya Kumar, a full-stack developer focused on building
              scalable web applications with clean backend architecture.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed"
            >
              After completing my BCA, I underwent industry training at
              AppTechies, Mohali, where I worked on real-world projects
              involving REST APIs, JWT authentication, and full frontend-backend
              integration.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed"
            >
              I focus on writing clean, maintainable code and solving backend
              challenges like debugging API issues and optimizing performance.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-1 flex-col gap-5 w-full text-center md:w-1/2"
          >
            <motion.div
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="p-4 border border-neutral-300/80 dark:border-neutral-700/80 rounded-xl dark:bg-(--purple-950)/70 bg-(--purple-50)/70 "
            >
              <p className="text-black dark:text-gray-300 font-medium">
                Frontend
              </p>

              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Responsive UI with React & API integration
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="p-4 border border-neutral-300/80 dark:border-neutral-700/80 rounded-xl dark:bg-(--purple-950)/70 bg-(--purple-50)/70"
            >
              <p className="text-black font-medium dark:text-gray-300">
                Backend
              </p>

              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                REST APIs, authentication, scalable systems
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="p-4 border border-neutral-300/80 dark:border-neutral-700/80 rounded-xl dark:bg-(--purple-950)/70 bg-(--purple-50)/70"
            >
              <p className="text-black dark:text-gray-300 font-medium">
                Problem Solving
              </p>

              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Debugging, edge cases, performance improvements
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
