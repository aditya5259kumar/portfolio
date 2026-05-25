import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="dark:bg-(--purple-950)/70 bg-(--purple-50)/70"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 xl:px-0 border-t border-neutral-300/80 dark:border-neutral-700/80">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="py-6 md:py-8 flex md:flex-row flex-col items-center text-center gap-y-2 justify-between text-gray-500 dark:text-gray-400 text-sm"
        >
          <p>© 2026 Aditya Kumar. All rights reserved.</p>

          <p className="text-xs">
            Made with 💜 using React.js & Tailwind
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;
