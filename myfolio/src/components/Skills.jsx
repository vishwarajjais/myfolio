import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiFirebase,
  SiFramer,
  SiCplusplus,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: <FaReact />,
    color: "text-cyan-400",
  },

  {
    name: "JavaScript",
    icon: <FaJs />,
    color: "text-yellow-400",
  },

  {
    name: "HTML",
    icon: <FaHtml5 />,
    color: "text-orange-500",
  },

  {
    name: "CSS",
    icon: <FaCss3Alt />,
    color: "text-blue-400",
  },

  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-cyan-300",
  },

  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
    color: "text-purple-400",
  },

  {
    name: "Framer Motion",
    icon: <SiFramer />,
    color: "text-pink-400",
  },

  {
    name: "Firebase",
    icon: <SiFirebase />,
    color: "text-yellow-500",
  },

  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "text-orange-400",
  },

  {
    name: "C++",
    icon: <SiCplusplus />,
    color: "text-blue-500",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-[#050816] text-white overflow-hidden"
    >
      
      {/* Heading */}
      <div className="text-center mb-14">
        
        <h2 className="text-4xl md:text-5xl font-bold">
          My Skills
        </h2>

        <p className="text-gray-400 mt-4">
          Technologies I work with
        </p>
      </div>

      {/* Swiper */}
      <div className="max-w-7xl mx-auto px-6">
        
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={4000}
          loop={true}
          spaceBetween={25}
          slidesPerView={2}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },

            768: {
              slidesPerView: 4,
            },

            1024: {
              slidesPerView: 5,
            },
          }}
        >
          
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              
              {/* Skill Card */}
              <div className="bg-[#101828] border border-cyan-500/10 hover:border-cyan-400/40 transition duration-300 rounded-3xl h-[220px] flex flex-col items-center justify-center shadow-2xl backdrop-blur-xl">
                
                {/* Rotating Dice Icon */}
                <div className="w-[90px] h-[90px] rounded-3xl bg-[#0f172a] border border-cyan-500/20 shadow-2xl flex items-center justify-center mb-6 animate-spin-slow">
                  
                  <div
                    className={`text-5xl ${skill.color}`}
                  >
                    {skill.icon}
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="text-lg font-semibold text-center px-2">
                  {skill.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}