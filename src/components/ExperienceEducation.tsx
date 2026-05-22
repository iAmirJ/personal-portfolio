"use client";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

export default function ExperienceEducation() {
  const experiences = [
    {
      title: "AI & Full-Stack Engineer",
      company: "Kodelix (Remote)",
      date: "Jan 2026 – April 2026",
      desc: [
        "Developed and integrated production-ready AI tools, including RAG systems.",
        "Built scalable backend APIs using FastAPI and Python.",
        "Designed responsive, modern frontend interfaces utilizing Next.js, React.js."
      ]
    },
    {
      title: "Intern, .NET Development Team",
      company: "Ourum Solutions",
      date: "Aug 2024 – Oct 2024",
      desc: [
        "Worked on real projects involving .NET and desktop development.",
        "Gained hands-on experience with ASP.NET tools and web applications."
      ]
    },
    {
      title: "Full-Stack AI Engineer",
      company: "Freelance (Upwork & Fiverr)",
      date: "2025 – Present",
      desc: [
        "Delivering production-grade AI solutions and autonomous agents.",
        "Building scalable LLM applications and modern web interfaces."
      ]
    }
  ];

  const educations = [
    {
      title: "BS in Software Engineering",
      company: "PMAS-Arid Agriculture University, Rawalpindi",
      date: "2022 – May 2026",
      desc: [
        "Relevant Coursework: Object-Oriented Programming, Data Structures & Algorithms, Artificial Intelligence, Database Management."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-16 bg-[#0a0a0a] relative">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Experience Section */}
        <div className="mb-20">
          <div className="flex justify-center mb-10">
            <h3 className="bg-[#111111] border border-gray-800 text-white px-8 py-2 rounded-full font-semibold tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              Experiences
            </h3>
          </div>
          
          <div className="flex flex-col gap-6 items-center">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="w-full md:w-[85%] bg-[#111111] border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300 relative group"
              >
                {/* Glowing Side Bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-cyan-400 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 border-b border-gray-800 pb-4 gap-4">
                  <div className="flex items-center gap-5">
                    <div className="bg-[#1a1a1a] p-4 rounded-lg text-cyan-400">
                      <FaBriefcase size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                      <p className="text-gray-400 font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="text-cyan-400 font-medium text-sm bg-cyan-400/10 px-4 py-1.5 rounded-full border border-cyan-400/20 whitespace-nowrap">
                    {exp.date}
                  </div>
                </div>

                {/* Bullets */}
                <ul className="text-gray-300 text-sm space-y-2 pl-4 ml-14 list-disc marker:text-purple-500">
                  {exp.desc.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>

              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section (Yahan id="education" aur scroll-mt-32 lagaya hai) */}
        <div id="education" className="scroll-mt-32">
          <div className="flex justify-center mb-10">
            <h3 className="bg-[#111111] border border-gray-800 text-white px-8 py-2 rounded-full font-semibold tracking-widest uppercase shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              Education
            </h3>
          </div>

          <div className="flex flex-col gap-6 items-center">
            {educations.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="w-full md:w-[85%] bg-[#111111] border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 relative group"
              >
                {/* Glowing Side Bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 border-b border-gray-800 pb-4 gap-4">
                  <div className="flex items-center gap-5">
                    <div className="bg-[#1a1a1a] p-4 rounded-lg text-purple-500">
                      <FaGraduationCap size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{edu.title}</h4>
                      <p className="text-gray-400 font-medium">{edu.company}</p>
                    </div>
                  </div>
                  <div className="text-purple-400 font-medium text-sm bg-purple-500/10 px-4 py-1.5 rounded-full border border-purple-500/20 whitespace-nowrap">
                    {edu.date}
                  </div>
                </div>
                
                <ul className="text-gray-300 text-sm space-y-2 pl-4 ml-14 list-disc marker:text-cyan-400">
                  {edu.desc.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}