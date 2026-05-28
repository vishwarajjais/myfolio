import { motion } from "framer-motion";
import model from "../assets/model.png";
export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 bg-[#050816] text-white overflow-hidden"
    >
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-purple-500/10 blur-[120px] rounded-full"></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:45px_45px]"></div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 items-center relative z-10">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          
          {/* Glow */}
          <div className="absolute w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]"></div>

          {/* Main Card */}
          <div className="relative bg-[#101828]/90 border border-cyan-500/10 backdrop-blur-xl rounded-[35px] p-6 shadow-2xl">
            
            {/* Image */}
            <img
              src={model}
              alt="about"
              className="w-[280px] md:w-[340px] h-[400px] object-cover rounded-[30px]"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-[#0f172a]/95 border border-purple-500/20 backdrop-blur-xl px-6 py-4 rounded-3xl shadow-2xl">
              
              <h3 className="text-3xl font-bold text-cyan-400">
                10+
              </h3>

              <p className="text-gray-300 mt-1 text-sm">
                Projects Built
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-[#101828] border border-purple-500/20 px-4 py-2 rounded-full text-purple-400 text-sm mb-7">
            
            <div className="w-2 h-2 rounded-full bg-purple-400"></div>

            About Me
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-lg">
            Passionate{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
              Frontend Developer
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-base leading-8 mt-7 max-w-xl">
            I'm Vishwaraj Jaiswal, a frontend developer focused on
            creating modern, responsive and visually appealing
            web applications with clean UI and smooth animations.
          </p>

          <p className="text-gray-400 text-base leading-8 mt-5 max-w-xl">
            Skilled in React, Tailwind CSS, JavaScript and UI
            animations, I enjoy building interactive digital
            experiences and modern frontend projects.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-5 mt-10">
            
            {/* Card */}
            <div className="bg-[#101828]/90 border border-cyan-500/10 rounded-3xl p-5 backdrop-blur-xl hover:border-cyan-400/30 transition duration-300">
              
              <h3 className="text-3xl font-bold text-cyan-400">
                350+
              </h3>

              <p className="text-gray-300 mt-2 text-sm">
                Coding Problems Solved
              </p>
            </div>

            {/* Card */}
            <div className="bg-[#101828]/90 border border-purple-500/10 rounded-3xl p-5 backdrop-blur-xl hover:border-purple-400/30 transition duration-300">
              
              <h3 className="text-3xl font-bold text-purple-400">
                React
              </h3>

              <p className="text-gray-300 mt-2 text-sm">
                Main Development Stack
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-10 flex-wrap">
            
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-600 to-purple-500 px-7 py-3 rounded-2xl font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-purple-500/20"
            >
              View Projects
            </a>

          <a
  href="/resume.pdf"
  download
  className="border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 px-7 py-3 rounded-2xl transition duration-300"
>
  Resume
</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}