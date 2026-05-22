"use client";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      name: "VidioMind AI - VideoRAG Pro",
      pythonDict: `{
    "name": "VidioMind AI (VideoRAG Pro)",
    "type": "Retrieval-Augmented Generation (RAG)",
    "tools": ["Python", "FastAPI", "Next.js", "Gemini Pro", "Pinecone"],
    "features": "Multi-modal video analysis with real-time semantic chat capabilities",
    "status": "Deployed Successfully 🚀"
}`
    },
    {
      name: "Eco-CSR AI Consultant",
      pythonDict: `{
    "name": "Eco-CSR AI Consultant",
    "embeddings": "Gemini Embeddings",
    "vector_db": "Pinecone",
    "description": "Autonomous AI agent built to streamline corporate social responsibility analysis",
    "architecture": "Semantic Search Pipeline"
}`
    },
    {
      name: "Enterprise RAG Agent",
      pythonDict: `{
    "name": "Enterprise RAG Agent",
    "vector_db": "FAISS",
    "database": "SQLite",
    "llm_framework": "LangChain",
    "security": "Role-based access control for secure document retrieval"
}`
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-16 bg-[#0a0a0a] relative">
      <div className="max-w-4xl mx-auto w-full">
        
        {/* Section Heading */}
        <div className="flex justify-start mb-12 border-b border-gray-800 pb-4">
          <h3 className="bg-[#111111] border border-gray-800 text-white px-6 py-2 rounded-lg font-mono text-sm tracking-widest uppercase shadow-[0_0_15px_rgba(168,85,247,0.1)]">
            root@aamir:~# ./show_projects.sh
          </h3>
        </div>

        {/* Projects Stack */}
        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#111111] border border-gray-800 rounded-xl overflow-hidden shadow-2xl relative group hover:border-purple-500/40 transition-all duration-300"
            >
              {/* Terminal Title Bar */}
              <div className="bg-[#1a1a1a] px-5 py-3 border-b border-gray-800 flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="ml-3 text-xs font-mono text-cyan-400 font-semibold">
                    {project.name.toLowerCase().replace(/\s+/g, "_")}.py
                  </span>
                </div>
                
                {/* Project Links (Icon triggers) */}
                <div className="flex gap-4 text-gray-500 group-hover:text-gray-300 transition-colors">
                  <a href="#" className="hover:text-purple-400 transition-colors cursor-pointer">
                    <FaGithub size={16} />
                  </a>
                  <a href="#" className="hover:text-cyan-400 transition-colors cursor-pointer">
                    <FaExternalLinkAlt size={14} />
                  </a>
                </div>
              </div>

              {/* Code/Dict Area */}
              <div className="p-6 font-mono text-xs md:text-sm text-gray-300 overflow-x-auto leading-relaxed bg-[#0d0d0d]">
                <p className="text-purple-400 mb-2">
                  project_details <span className="text-white">=</span>
                </p>
                <pre className="text-green-400 whitespace-pre-wrap md:whitespace-pre font-mono">
                  {project.pythonDict}
                </pre>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}