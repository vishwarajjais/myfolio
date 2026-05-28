import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#050816] text-white flex items-center relative overflow-hidden pt-24"
    >
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[80px] rounded-full"></div>

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 blur-[80px] rounded-full"></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:45px_45px]"></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-14 grid md:grid-cols-2 gap-10 items-center relative z-10">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#101828] border border-purple-500/20 px-4 py-2 rounded-full text-purple-400 text-sm mb-6">
            
            <div className="w-2 h-2 rounded-full bg-purple-400"></div>

            Frontend Developer
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.1]">
            Hi, I’m
            <br />

            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
              Vishwaraj Jaiswal
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-100 mt-5 leading-tight max-w-xl">
            Crafting modern and responsive web experiences
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-base leading-7 mt-5 max-w-lg">
            I help businesses and individuals build beautiful,
            high-performance websites and applications.
          </p>

       
{/* Social Icons */}
{/* Social Icons */}
<div className="flex items-center gap-5 mt-10">

  {/* GitHub */}
  <a
    href="https://github.com/vishwarajjais"
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 rounded-2xl border border-cyan-500/10 bg-[#101828] flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400/40 transition duration-300 hover:-translate-y-2"
  >
    <FaGithub size={20} />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/vishwaraj-jaiswal-b3120628a/"
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 rounded-2xl border border-cyan-500/10 bg-[#101828] flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400/40 transition duration-300 hover:-translate-y-2"
  >
    <FaLinkedin size={20} />
  </a>

  {/* Instagram */}
  <a
    href="https://instagram.com/"
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 rounded-2xl border border-cyan-500/10 bg-[#101828] flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400/40 transition duration-300 hover:-translate-y-2"
  >
    <FaInstagram size={20} />
  </a>

  {/* Twitter/X */}
  <a
    href="https://twitter.com/"
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 rounded-2xl border border-cyan-500/10 bg-[#101828] flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400/40 transition duration-300 hover:-translate-y-2"
  >
    <FaTwitter size={20} />
  </a>

</div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
         className="flex justify-end items-center ml-[120px]"
        >
          
          <div className="relative w-[420px] h-[420px] flex items-center justify-center ml-[120px]">
            
            {/* Glow */}
            <div className="absolute w-[350px] h-[350px] bg-blue-500/20 rounded-full blur-[100px]"></div>

            {/* Main Center Box */}
            <div className="w-[280px] h-[280px] rounded-[40px] border border-cyan-500/30 bg-[#0f172a]/90 backdrop-blur-xl shadow-2xl flex items-center justify-center relative overflow-hidden">
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>

              {/* Main Text */}
              <div className="relative z-10 text-center">
                
                <h2 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                  &lt;/&gt;
                </h2>

                <p className="text-gray-300 text-xl mt-4">
                  Frontend Developer
                </p>
              </div>
            </div>
{/* React Card */}
<div className="absolute top-10 -right-6 w-[140px] h-[70px] bg-[#111827]/95 border border-cyan-500/20 rounded-[22px] backdrop-blur-xl shadow-2xl flex items-center justify-center gap-3">
  
  {/* Icon */}
  <div className="text-cyan-400 text-3xl">
    ⚛
  </div>

  {/* Text */}
  <p className="text-white text-lg font-medium">
    React
  </p>
</div>

            {/* Tailwind Card */}
            <div className="absolute bottom-16 -left-20 w-[140px] h-[120px] bg-[#111827]/95 border border-cyan-500/20 rounded-[28px] backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center">
              
              <div className="text-cyan-400 text-5xl mb-3">
                ~
              </div>

              <p className="text-white text-xl font-medium">
                Tailwind CSS
              </p>
            </div>

            {/* Code Card */}
            <div className="absolute bottom-2 right-0 bg-[#111827]/95 border border-purple-500/20 px-6 py-5 rounded-[28px] backdrop-blur-xl shadow-2xl">
              
              <div className="space-y-3">
                
                <div className="w-24 h-2 rounded bg-cyan-400"></div>

                <div className="w-20 h-2 rounded bg-purple-400"></div>

                <div className="w-28 h-2 rounded bg-pink-400"></div>

                <div className="w-16 h-2 rounded bg-yellow-400"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}