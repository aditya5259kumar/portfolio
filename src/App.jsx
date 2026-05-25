import React, { useState, useEffect, Suspense, lazy } from "react";

const ScrollBar = lazy(() => import("./components/ScrollBar"));
const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const Bg = lazy(() => import("./components/bg"));

import logo from "./assets/logo.png";
import { useSelector } from "react-redux";
import resonance from "./assets/resonance.m4a";

const App = () => {
  const theme = useSelector((store) => store.theme.theme);
  const isPlaying = useSelector((store) => store.theme.isPlaying);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const [audio] = useState(() => {
    const a = new Audio(resonance);
    a.loop = true;
    a.volume = 0.2;
    return a;
  });

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, audio]);

  return (
    <div className="relative">
      <div className="fixed inset-0 z-0 bg-(--purple-50) dark:bg-(--purple-950)">
        <Bg />
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-size-[50px_50px]"></div>
      </div>

      <div className="relative z-10">
        <Suspense
          fallback={
            <div className="fixed inset-0 z-999 flex items-center justify-center bg-(--purple-50) dark:bg-(--purple-950)">
              <img
                src={logo}
                alt="Logo"
                className=" w-20 lg:w-30 h-fit object-contain animate-bounce"
                draggable="false"
              />
            </div>
          }
        >
          <ScrollBar />
          <Navbar />
          <Home />
          <Skills />
          <Projects />
          <About />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
