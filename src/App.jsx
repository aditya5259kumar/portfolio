import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Bg from "./components/bg";
import { useSelector } from "react-redux";
import pixies from "./assets/pixies.m4a";

const App = () => {
  const theme = useSelector((store) => store.theme.theme);
  const isPlaying = useSelector((store) => store.theme.isPlaying);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const [audio] = useState(() => {
    const a = new Audio(pixies);
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
      <div className="fixed inset-0 z-0 dark:bg-(--purple-950) bg-(--purple-50)">
        {/* --------------------------------------------------------- */}
        <Bg />
        {/* --------------------------------------------------------- */}
      </div>

      <div className="relative z-10">
        <Navbar />
        <Home />
      </div>
    </div>
  );
};

export default App;
