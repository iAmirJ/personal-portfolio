"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-16 bg-[#0a0a0a] relative flex items-center overflow-hidden">
      
      {/* 1. Centered Main Content (Text and Image) */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10 relative">
        
        {/* Left Text Column */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 z-10"
        >
          <h3 className="text-cyan-400 font-bold text-xl mb-6 uppercase tracking-widest">
            Who I Am?
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Full-Stack AI Engineer specializing in building scalable backend systems and autonomous AI agents. Experienced in integrating Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) pipelines using Python, FastAPI, and Next.js. 
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Strong foundation in modern web development and AI-driven solutions, focused on automating complex workflows, creating intelligent applications, and delivering seamless user experiences from design to deployment.
          </p>
        </motion.div>

        {/* Right Image Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex justify-center lg:justify-end z-10"
        >
          <div className="relative w-72 h-96 rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/10 border border-gray-800">
            <Image 
              src="/me-profile.jpg" 
              alt="Aamir Javed"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"
            />
          </div>
        </motion.div>

      </div>
      {/* -- Centered Content ends here -- */}


      {/* 2. Vertical Text (Moved OUTSIDE the centered container) */}
      <div className="hidden lg:flex absolute left-[-110px] top-1/2 -translate-y-1/2 -rotate-90 origin-center z-0 opacity-20 pointer-events-none">
        <span className="text-gray-500 font-bold tracking-[0.5em] text-3xl uppercase whitespace-nowrap">
          About Me
        </span>
      </div>

    </section>
  );
}