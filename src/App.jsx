import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Bg from "./components/bg";

const App = () => {
  return (
    <div className="relative">
      <div className="fixed inset-0 z-0 bg-black">
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
