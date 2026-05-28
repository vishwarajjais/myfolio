const projects = [
  {
    title: "Admin Dashboard",
    tech: "React • Bootstrap • JavaScript",
    desc:
      "Developed a responsive admin dashboard featuring analytics cards, sidebar navigation, reusable UI components, charts, and mobile-friendly layouts for better data management.",
  },

  {
    title: "LuxeDrive",
    tech: "React • Tailwind • Swiper",
    desc:
      "Built a luxury car showroom website with animated sliders, dark/light mode, brand-wise pages, premium UI sections, responsive layouts, and modern frontend design.",
  },

  {
    title: "Quiz Application",
    tech: "HTML • CSS • JavaScript",
    desc:
      "Created an interactive quiz platform with timer functionality, score calculation, dynamic multiple-choice questions, responsive UI, and smooth user interaction.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#050816] text-white py-20 px-6"
    >

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">
          Projects
        </h2>

        <p className="text-gray-400 mt-3 text-sm">
          Some featured projects showcasing frontend
          development and UI skills.
        </p>
      </div>

      {/* Project Cards */}
      <div className="max-w-5xl mx-auto flex flex-col gap-6">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#111827] border border-gray-800 rounded-2xl p-6 hover:border-cyan-400 transition duration-300"
          >

            {/* Top Section */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

              <div>
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-cyan-400 text-sm mt-1">
                  {project.tech}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">

                <button className="px-4 py-2 text-sm rounded-xl bg-blue-600 hover:bg-blue-700 transition">
                  Live Demo
                </button>

                <button className="px-4 py-2 text-sm rounded-xl border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition">
                  GitHub
                </button>

              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 mt-5 text-sm leading-7">
              {project.desc}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}