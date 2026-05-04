import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Bg from "./components/bg";
import { useSelector } from "react-redux";
import resonance from "./assets/resonance.m4a";
import About from "./pages/About";
import Skills from "./pages/Skills";

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
        {/* --------------------------------------------------------- */}
        <Bg />

        {/* {theme === "light" ? (
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
        radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
      `,
              backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
            }}
          />
        ) : (
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: `
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 19px,
        rgba(255, 255, 255, 0.06) 19px,
        rgba(255, 255, 255, 0.06) 20px,
        transparent 20px,
        transparent 39px,
        rgba(255, 255, 255, 0.06) 39px,
        rgba(255, 255, 255, 0.06) 40px
      ),
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 19px,
        rgba(255, 255, 255, 0.06) 19px,
        rgba(255, 255, 255, 0.06) 20px,
        transparent 20px,
        transparent 39px,
        rgba(255, 255, 255, 0.06) 39px,
        rgba(255, 255, 255, 0.06) 40px
      ),
      radial-gradient(circle at 20px 20px, rgba(255, 255, 255, 0.08) 2px, transparent 2px),
      radial-gradient(circle at 40px 40px, rgba(255, 255, 255, 0.08) 2px, transparent 2px)
    `,
              backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
            }}
          />
        )} */}

        {/* --------------------------------------------------------- */}
      </div>

      <div className="relative z-10">
        <Navbar />
        <Home />
        <About />
        <Skills />
      </div>
    </div>
  );
};

export default App;
