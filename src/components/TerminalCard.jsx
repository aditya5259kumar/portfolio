import React from "react";

const TerminalCard = () => {
  return (
    <div className="w-full max-w-2xl rounded-xl border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-black text-sm text-neutral-800 dark:text-green-400 font-mono shadow-md dark:shadow-lg">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 rounded-t-xl">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500" />
        </div>
        <span className="text-neutral-500 dark:text-neutral-400 text-xs">
          terminal
        </span>
      </div>

      {/* Body */}
      <div className="p-4 space-y-2">
        
        <p className="text-green-600 dark:text-green-500">
          <span className="text-blue-600 dark:text-blue-400">$</span> whoami
        </p>
        <p className="text-neutral-900 dark:text-white">Aditya Kumar</p>

        <p className="text-green-600 dark:text-green-500">
          <span className="text-blue-600 dark:text-blue-400">$</span> focus
        </p>
        <p className="text-neutral-900 dark:text-white">Fullstack Mastery</p>

        <p className="text-green-600 dark:text-green-500">
          <span className="text-blue-600 dark:text-blue-400">$</span> skills
        </p>
        <p className="text-neutral-900 dark:text-white">
          React, Node.js, Express, MongoDB, MySQL
        </p>

        <p className="text-green-600 dark:text-green-500">
          <span className="text-blue-600 dark:text-blue-400">$</span> passionate
        </p>
        <p className="text-neutral-900 dark:text-white">true</p>

        <p className="text-green-600 dark:text-green-500">
          <span className="text-blue-600 dark:text-blue-400">$</span> motto
        </p>
        <p className="text-neutral-900 dark:text-white">
          "Build with Purpose"
        </p>

        <p className="text-green-600 dark:text-green-500">
          <span className="text-blue-600 dark:text-blue-400">$</span> _
        </p>

      </div>
    </div>
  );
};

export default TerminalCard;