import React from "react";
import {
  ShieldCheck,
  Globe,
  Code2,
  Atom,
} from "lucide-react";

const certificates = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2025",
    icon: <ShieldCheck size={40} />,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    year: "2025",
    icon: <Globe size={40} />,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Java Certification",
    issuer: "Softpro India",
    year: "2024",
    icon: <Code2 size={40} />,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "React JS Certification",
    issuer: "Frontend Development",
    year: "2025",
    icon: <Atom size={40} />,
    color: "from-cyan-400 to-sky-500",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-black text-white py-24 px-6"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold">
          Certificates
        </h2>

        <p className="text-gray-400 mt-4 text-lg">
          Certifications & achievements earned during my
          development journey.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="relative group bg-[#111] border border-white/10 rounded-3xl p-8 overflow-hidden hover:-translate-y-2 transition duration-500"
          >
            {/* Glow */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-500 bg-gradient-to-br ${cert.color}`}
            />

            {/* Icon */}
            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${cert.color} flex items-center justify-center mb-6`}
            >
              {cert.icon}
            </div>

            {/* Content */}
            <h3 className="text-2xl font-semibold mb-3">
              {cert.title}
            </h3>

            <p className="text-gray-400 mb-2">
              {cert.issuer}
            </p>

            <p className="text-sm text-gray-500">
              Issued • {cert.year}
            </p>

            {/* Bottom Line */}
            <div
              className={`mt-6 h-1 w-full rounded-full bg-gradient-to-r ${cert.color}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}