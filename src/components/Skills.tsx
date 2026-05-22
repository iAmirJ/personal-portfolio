"use client";
import { motion } from "framer-motion";
import { FaPython, FaReact, FaDatabase, FaBrain, FaServer, FaCode, FaDocker, FaRobot, FaAws } from "react-icons/fa";
// Hum 'si' (Simple Icons) se kuch brand logos import kar rahe hain (ye react-icons mein pehle se majood hain)
import { SiPostgresql, SiMongodb, SiTypescript } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "Python", icon: <FaPython size={32} />, color: "text-yellow-400", border: "hover:border-yellow-400/50", shadow: "hover:shadow-yellow-400/20" },
    { name: "TypeScript & JS", icon: <SiTypescript size={32} />, color: "text-blue-500", border: "hover:border-blue-500/50", shadow: "hover:shadow-blue-500/20" },
    { name: "Next.js & React", icon: <FaReact size={32} />, color: "text-cyan-400", border: "hover:border-cyan-400/50", shadow: "hover:shadow-cyan-400/20" },
    { name: "FastAPI & Node.js", icon: <FaServer size={32} />, color: "text-teal-400", border: "hover:border-teal-400/50", shadow: "hover:shadow-teal-400/20" },
    { name: "PostgreSQL", icon: <SiPostgresql size={32} />, color: "text-blue-400", border: "hover:border-blue-400/50", shadow: "hover:shadow-blue-400/20" },
    { name: "MongoDB", icon: <SiMongodb size={32} />, color: "text-green-500", border: "hover:border-green-500/50", shadow: "hover:shadow-green-500/20" },
    { name: "RAG & LLMs", icon: <FaBrain size={32} />, color: "text-purple-400", border: "hover:border-purple-400/50", shadow: "hover:shadow-purple-400/20" },
    { name: "Vector DBs (FAISS/Pinecone)", icon: <FaDatabase size={32} />, color: "text-indigo-400", border: "hover:border-indigo-400/50", shadow: "hover:shadow-indigo-400/20" },
    { name: "Autonomous Agents", icon: <FaRobot size={32} />, color: "text-green-400", border: "hover:border-green-400/50", shadow: "hover:shadow-green-400/20" },
    { name: "Tailwind CSS", icon: <FaCode size={32} />, color: "text-cyan-500", border: "hover:border-cyan-500/50", shadow: "hover:shadow-cyan-500/20" },
    { name: "Git & Docker", icon: <FaDocker size={32} />, color: "text-blue-600", border: "hover:border-blue-600/50", shadow: "hover:shadow-blue-600/20" },
    { name: "Cloud & AWS", icon: <FaAws size={32} />, color: "text-orange-400", border: "hover:border-orange-400/50", shadow: "hover:shadow-orange-400/20" },
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-16 bg-[#0a0a0a] relative">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Heading */}
        <div className="flex justify-center mb-16">
          <h3 className="bg-[#111111] border border-gray-800 text-white px-8 py-2 rounded-full font-semibold tracking-widest uppercase shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            Technical Skills
          </h3>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`bg-[#111111] border border-gray-800 rounded-xl p-6 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all duration-300 ${skill.border} hover:shadow-[0_0_20px_var(--tw-shadow-color)] ${skill.shadow}`}
            >
              <div className={`${skill.color} drop-shadow-md`}>
                {skill.icon}
              </div>
              <h4 className="text-gray-300 font-medium text-sm text-center">
                {skill.name}
              </h4>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}