import React from "react";

const TerminalCard = () => {
  return (
    <div className="w-full max-w-2xl rounded-xl border border-neutral-800 bg-black text-sm text-green-400 font-mono shadow-lg">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-800 bg-neutral-900 rounded-t-xl">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-neutral-400 text-xs">terminal</span>
      </div>

      {/* Body */}
      <div className="p-4 space-y-2">
        
        <p>
          <span className="text-blue-400">$</span> whoami
        </p>
        <p className="text-white">Aditya Kumar</p>

        <p>
          <span className="text-blue-400">$</span> focus
        </p>
        <p className="text-white">Fullstack Mastery</p>

        <p>
          <span className="text-blue-400">$</span> skills
        </p>
        <p className="text-white">React, Node.js, Express, MongoDB, MySQL</p>

        <p>
          <span className="text-blue-400">$</span> passionate
        </p>
        <p className="text-white">true</p>

        <p>
          <span className="text-blue-400">$</span> motto
        </p>
        <p className="text-white">"Build with Purpose"</p>

        <p>
          <span className="text-blue-400">$</span> _
        </p>

      </div>
    </div>
  );
};

export default TerminalCard;



// import React from "react";

// const TerminalCardLight = () => {
//   return (
//     <div className="w-full max-w-2xl rounded-xl border border-neutral-300 bg-white text-sm text-neutral-800 font-mono shadow-md">
      
//       {/* Header */}
//       <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-200 bg-neutral-100 rounded-t-xl">
//         <div className="flex gap-2">
//           <span className="w-3 h-3 rounded-full bg-red-400" />
//           <span className="w-3 h-3 rounded-full bg-yellow-400" />
//           <span className="w-3 h-3 rounded-full bg-green-400" />
//         </div>
//         <span className="text-neutral-500 text-xs">terminal</span>
//       </div>

//       {/* Body */}
//       <div className="p-4 space-y-2">
        
//         <p>
//           <span className="text-blue-600">$</span> whoami
//         </p>
//         <p className="text-neutral-900">Aditya Kumar</p>

//         <p>
//           <span className="text-blue-600">$</span> focus
//         </p>
//         <p className="text-neutral-900">Fullstack Mastery</p>

//         <p>
//           <span className="text-blue-600">$</span> skills
//         </p>
//         <p className="text-neutral-900">React, Node.js, Express, MongoDB, MySQL</p>

//         <p>
//           <span className="text-blue-600">$</span> passionate
//         </p>
//         <p className="text-neutral-900">true</p>

//         <p>
//           <span className="text-blue-600">$</span> motto
//         </p>
//         <p className="text-neutral-900">"Build with Purpose"</p>

//         <p>
//           <span className="text-blue-600">$</span> _
//         </p>

//       </div>
//     </div>
//   );
// };

// export default TerminalCardLight;