import { motion } from "framer-motion";

import {
  House,
  User,
  Code2,
  FolderKanban,
  GraduationCap,
  Mail,
} from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#050816]/80 backdrop-blur-md border-b border-[#1b2340]"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-5">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          <span className="text-blue-500">&lt;/&gt;</span> DevPortfolio
        </h1>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300">

          <li>
            <a
              href="#home"
              className="flex items-center gap-2 hover:text-blue-500 transition"
            >
              <House size={18} />
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="flex items-center gap-2 hover:text-blue-500 transition"
            >
              <User size={18} />
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="flex items-center gap-2 hover:text-blue-500 transition"
            >
              <Code2 size={18} />
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="flex items-center gap-2 hover:text-blue-500 transition"
            >
              <FolderKanban size={18} />
              Projects
            </a>
          </li>

          <li>
            <a
              href="#education"
              className="flex items-center gap-2 hover:text-blue-500 transition"
            >
              <GraduationCap size={18} />
              Education
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="flex items-center gap-2 hover:text-blue-500 transition"
            >
              <Mail size={18} />
              Contact
            </a>
          </li>

        </ul>
      </div>
    </motion.nav>
  );
}