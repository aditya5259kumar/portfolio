import React from "react";

const About = () => {
  return (
    <section id="about" className="pt-34 lg:pt-45">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 xl:px-0">
        <div className="flex flex-col items-center gap-2 mb-10 md:mb-16">
          <h2 className="text-gray-800 dark:text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center  mb-2">
            About{" "}
            <span className="tracking-tighter bg-linear-to-b from-black dark:from-neutral-50  via-(--purple-800) dark:via-(--purple-200) to-(--purple-400) dark:to-(--purple-600) bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-16 md:w-24 h-0.5 bg-linear-to-r from-(--purple-500) to-(--purple-700) dark:to-(--purple-300) rounded-full"></div>{" "}
        </div>

        <div className="flex flex-col md:flex-row items-start gap-y-12 md:gap-x-8 gap-x-12">
          <div className="flex-1 border-l-2 border-purple-400 pl-4 py-2">
            <p className="text-lg text-black dark:text-white leading-relaxed">
              I'm Aditya Kumar, a full-stack developer focused on building
              scalable web applications with clean backend architecture.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
              After completing my BCA, I underwent industry training at
              AppTechies, Mohali, where I worked on real-world projects
              involving REST APIs, JWT authentication, and full frontend-backend
              integration.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
              I focus on writing clean, maintainable code and solving backend
              challenges like debugging API issues and optimizing performance.
            </p>
          </div>

          <div className="flex flex-1 flex-col gap-5 w-full text-center md:w-1/2">
            <div className="group hover:shadow-lg shadow-purple-300 dark:shadow-purple-900 hover:border-purple-400 dark:hover:border-purple-400 p-4 border border-neutral-300/80 dark:border-neutral-700/80 rounded-xl transition-all duration-300 ease-in-out">
              <p className="text-black dark:text-gray-300 group-hover:text-purple-700 dark:group-hover:text-purple-300 font-semibold transition-colors duration-300 ease-in-out">
                Frontend
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 ease-in-out">
                Responsive UI with React & API integration
              </p>
            </div>

            <div className="group hover:shadow-lg shadow-purple-300 dark:shadow-purple-900 hover:border-purple-400 dark:hover:border-purple-400 p-4 border border-neutral-300/80 dark:border-neutral-700/80 rounded-xl transition-all duration-300 ease-in-out">
              <p className="text-black dark:text-gray-300 group-hover:text-purple-700 dark:group-hover:text-purple-300 font-medium transition-colors duration-300 ease-in-out">
                Backend
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 ease-in-out">
                REST APIs, authentication, scalable systems
              </p>
            </div>

            <div className="group hover:shadow-lg shadow-purple-300 dark:shadow-purple-900 hover:border-purple-400 dark:hover:border-purple-400 p-4 border border-neutral-300/80 dark:border-neutral-700/80 rounded-xl transition-all duration-300 ease-in-out">
              <p className="text-black dark:text-gray-300 group-hover:text-purple-700 dark:group-hover:text-purple-300 font-medium transition-colors duration-300 ease-in-out">
                Problem Solving
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 ease-in-out">
                Debugging, edge cases, performance improvements
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
