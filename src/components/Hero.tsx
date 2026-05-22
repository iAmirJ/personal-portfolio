"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // Mail hata kar FaInstagram add kiya hai

export default function Hero() {
  return (
    <section id="home" className="min-h-[80vh] flex items-center justify-center pt-32 pb-10 px-6 md:px-16">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text & Intro */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Hello,<br /> This is <span className="text-cyan-400">Aamir Javed</span>,
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-300 mb-6 leading-tight">
            I'm a Professional <span className="text-purple-500">Full-Stack AI Engineer</span>.
          </h2>
          
          {/* Social Icons (Updated Links & Instagram) */}
          <div className="flex gap-4 mb-8 text-gray-400">
            <a href="https://github.com/iAmirJ" target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-700 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all cursor-pointer">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/iamirj" target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-700 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all cursor-pointer">
              <FaLinkedin size={20} />
            </a>
            <a href="https://www.instagram.com/iamirjaved/" target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-700 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all cursor-pointer">
              <FaInstagram size={20} />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <a 
                href="#contact" 
                className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition-all text-center min-w-[140px]"
            >
                CONTACT ME
            </a>
            <a 
                href="https://drive.google.com/file/d/1owE_wBg9OfkAsOotD_gq7RBULlszZVDK/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all shadow-lg text-center min-w-[140px]"
            >
                GET RESUME
            </a>
        </div>
        </motion.div>

        {/* Right Side: Python Code Block */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#111111] border border-gray-800 rounded-xl overflow-hidden shadow-2xl relative w-full max-w-lg lg:ml-auto"
        >
          {/* Mac style window controls */}
          <div className="bg-[#1a1a1a] px-4 py-3 border-b border-gray-800 flex gap-2 items-center">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-xs text-gray-500 font-mono">engineer.py</span>
          </div>
          
          {/* Code Content */}
          <div className="p-5 font-mono text-[11px] sm:text-xs md:text-sm text-gray-300 overflow-x-auto leading-relaxed">
            <p><span className="text-purple-400">class</span> <span className="text-yellow-300">AIEngineer</span>:</p>
            <p className="ml-4"><span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(<span className="text-orange-400">self</span>):</p>
            <p className="ml-8"><span className="text-orange-400">self</span>.name = <span className="text-green-400">"Aamir Javed"</span></p>
            <p className="ml-8"><span className="text-orange-400">self</span>.role = <span className="text-green-400">"Full-Stack AI Engineer"</span></p>
            <p className="ml-8"><span className="text-orange-400">self</span>.skills = [</p>
            <p className="ml-12"><span className="text-green-400">"Python"</span>, <span className="text-green-400">"FastAPI"</span>, <span className="text-green-400">"Next.js"</span>,</p>
            <p className="ml-12"><span className="text-green-400">"LLMs"</span>, <span className="text-green-400">"RAG"</span>, <span className="text-green-400">"Vector DBs"</span>,</p>
            <p className="ml-12"><span className="text-green-400">"Docker"</span>, <span className="text-green-400">"AWS"</span>, <span className="text-green-400">"PostgreSQL"</span>,</p>
            <p className="ml-12"><span className="text-green-400">"MongoDB"</span>, <span className="text-green-400">"TypeScript"</span>, <span className="text-green-400">"Git"</span></p>
            <p className="ml-8">]</p>
            <p className="ml-8"><span className="text-orange-400">self</span>.hard_worker = <span className="text-cyan-400">True</span></p>
            <p className="ml-8"><span className="text-orange-400">self</span>.quick_learner = <span className="text-cyan-400">True</span></p>
            <p className="ml-8"><span className="text-orange-400">self</span>.problem_solver = <span className="text-cyan-400">True</span></p>
            <br/>
            <p className="ml-4"><span className="text-purple-400">def</span> <span className="text-blue-400">is_hireable</span>(<span className="text-orange-400">self</span>):</p>
            <p className="ml-8"><span className="text-purple-400">return</span> (</p>
            <p className="ml-12"><span className="text-orange-400">self</span>.hard_worker <span className="text-purple-400">and</span></p>
            <p className="ml-12"><span className="text-orange-400">self</span>.problem_solver <span className="text-purple-400">and</span></p>
            <p className="ml-12"><span className="text-blue-400">len</span>(<span className="text-orange-400">self</span>.skills) {">="} <span className="text-orange-400">10</span></p>
            <p className="ml-8">)</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}