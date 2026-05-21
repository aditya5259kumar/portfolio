import React from "react";

const Footer = () => {
  return (
    <div className="dark:bg-(--purple-950)/60 bg-(--purple-50)/60">
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 xl:px-0 border-t border-neutral-300/80 dark:border-neutral-700/80">
      <div className="py-6 md:py-8 flex md:flex-row flex-col items-center text-center gap-y-2 justify-between  text-gray-500 dark:text-gray-400 text-sm">
        <p>© 2026 Aditya Kumar. All rights reserved.</p>
        <p className="text-xs">Made with 💜 using React.js & Tailwind</p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
