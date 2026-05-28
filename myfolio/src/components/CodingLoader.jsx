import React, { useEffect, useState } from "react";

export default function CodingLoader() {
  const [text, setText] = useState("");
  const fullText = "Initializing Portfolio...";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden z-50">

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[linear-gradient(to_right,#00ffcc22_1px,transparent_1px),linear-gradient(to_bottom,#00ffcc22_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Center Loader */}
      <div className="relative flex items-center justify-center">

        {/* Outer Ring */}
        <div className="absolute w-40 h-40 border-4 border-cyan-400 rounded-full animate-spin border-t-transparent shadow-[0_0_40px_#00ffff]" />

        {/* Inner Ring
        <div className="absolute w-28 h-28 border-4 border-purple-500 rounded-full border-b-transparent animate-[spin_3s_linear_reverse_infinite]" /> */}

        {/* Code Icon */}
        <div className="text-cyan-400 text-5xl font-bold animate-pulse">
          {"</>"}
        </div>
      </div>

      {/* Bottom Text + Progress */}
      <div className="absolute bottom-20 flex flex-col items-center">

        {/* Typing Text */}
        <div className="text-green-400 text-lg md:text-2xl font-mono tracking-widest mb-5">
          {text}
          <span className="animate-pulse">|</span>
        </div>

        {/* Loading Bar */}
        <div className="w-72 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-loader rounded-full" />
        </div>

      </div>

      {/* Custom Animation */}
      <style>
        {`
          @keyframes loader {
            0% {
              width: 0%;
            }
            50% {
              width: 70%;
            }
            100% {
              width: 100%;
            }
          }

          .animate-loader {
            animation: loader 2.5s ease-in-out infinite;
          }
        `}
      </style>

    </div>
  );
}