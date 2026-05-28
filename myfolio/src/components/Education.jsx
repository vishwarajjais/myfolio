import { motion } from "framer-motion";

const education = [
  {
    year: "2024 - Present",
    title: "B.Tech in Information Technology",
    college: "ABES Engineering College",
    desc:
      "Currently pursuing B.Tech with focus on frontend development, DSA and modern web technologies.",
    percentage: "Pursuing",
    progress: "85%",
    color: "from-cyan-500 to-blue-500",
  },

  // {
  //   year: "2022 - 2024",
  //   title: "Diploma In Information Technology",
  //   college: "BTEUP",
  //   desc:
  //     "Completed diploma with strong understanding of programming, web development and computer fundamentals.",
  //   percentage: "70.8%",
  //   progress: "70.8%",
  //   color: "from-purple-500 to-pink-500",
  // },

  {
    year: "2021 - 2022",
    title: "Intermediate (12th)",
    college: "CBSE Board",
    desc:
      "Completed higher secondary education with science stream.",
    percentage: "80.16%",
    progress: "80.16%",
    color: "from-orange-500 to-yellow-500",
  },

  {
    year: "2019 - 2020",
    title: "High School (10th)",
    college: "CBSE Board",
    desc:
      "Completed high school education with strong interest in technology and computers.",
    percentage: "88.4%",
    progress: "88.4%",
    color: "from-green-500 to-emerald-500",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-28 bg-[#050816] text-white overflow-hidden"
    >
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full"></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:45px_45px]"></div>

      {/* Heading */}
      <div className="text-center mb-20 relative z-10">
        
        <h2 className="text-4xl md:text-5xl font-bold">
          Education
        </h2>

        <p className="text-gray-400 mt-4">
          My academic journey and achievements
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Timeline Line */}
        <div className="absolute left-6 md:left-1/2 top-0 h-full w-[4px] bg-[#111827] rounded-full transform md:-translate-x-1/2"></div>

        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row items-start md:items-center mb-20 ${
              index % 2 === 0
                ? "md:justify-start"
                : "md:justify-end"
            }`}
          >
            
            {/* Dot */}
            <div
              className={`absolute left-3 md:left-1/2 w-8 h-8 rounded-full bg-gradient-to-r ${item.color} border-4 border-[#050816] transform md:-translate-x-1/2 shadow-2xl`}
            ></div>

            {/* Card */}
            <div
              className={`ml-16 md:ml-0 w-full md:w-[45%] bg-[#101828]/90 border border-cyan-500/10 backdrop-blur-xl rounded-[30px] p-8 shadow-2xl hover:border-cyan-400/30 transition duration-500`}
            >
              
              {/* Year */}
              <div
                className={`inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${item.color}`}
              >
                {item.year}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mt-6">
                {item.title}
              </h3>

              {/* College */}
              <p className="text-cyan-400 mt-2">
                {item.college}
              </p>

              {/* Description */}
              <p className="text-gray-400 leading-7 mt-5">
                {item.desc}
              </p>

              {/* Percentage */}
              <div className="mt-6 flex justify-between items-center">
                
                <span className="text-gray-400">
                  Percentage
                </span>

                <span className="text-white font-semibold">
                  {item.percentage}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mt-5">
                
                <div className="w-full h-3 rounded-full bg-[#1e293b] overflow-hidden">
                  
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                    style={{
                      width: item.progress,
                    }}
                  ></div>
                </div>

                <div className="flex justify-between text-sm text-gray-400 mt-3">
                  
                  <span>Academic Score</span>

                  <span>{item.progress}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}