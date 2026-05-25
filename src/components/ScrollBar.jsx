// import React from 'react'
// import { motion, useScroll } from "motion/react"

// const ScrollBar = () => {

//   const scrollXProgress = useScroll().scrollYProgress;

//   return (
//     <motion.span style={{
//         scaleX:scrollXProgress
//     }} className="w-full h-[2px] bg-(--purple-500) z-999 fixed top-0 left-0 origin-left"></motion.span>
//   )
// }

// export default ScrollBar

// ===================================================================
import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useSelector } from "react-redux";

const ScrollBar = () => {
  const theme = useSelector((store) => store.theme.theme);
  const constraintsRef = useRef(null);

  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <div
      ref={constraintsRef}
      className="fixed inset-0 pointer-events-none m-2 z-999"
    >
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.08}
        dragMomentum={false}
        whileDrag={{ scale: 1.08 }}
        className="pointer-events-auto cursor-grab active:cursor-grabbing absolute bottom-6 right-6"
      >
        <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-300/40 dark:bg-white/10 border border-gray-400/20 dark:border-white/10">
          <svg viewBox="0 0 40 40" className="w-10 h-10 -rotate-90">
            <circle
              cx="20"
              cy="20"
              r="18"
              stroke={
                theme === "light"
                  ? "rgba(156, 163, 175, 0.2)"
                  : "rgba(255,255,255,0.1)"
              }
              strokeWidth="2"
              fill="transparent"
            />

            <motion.circle
              cx="20"
              cy="20"
              r="18"
              stroke="#8b5cf6"
              strokeWidth="2"
              fill="transparent"
              strokeLinecap="round"
              pathLength={smoothProgress}
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollBar;
