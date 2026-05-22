"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, success: false, error: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    
    const { name, email, message } = formData;

    // 1. Professional Regex Patterns
    const nameRegex = /^[a-zA-Z\s]{2,50}$/; // Sirf letters aur spaces, 2 se 50 chars tak
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard Email format

    // 2. Frontend Validations
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ loading: false, success: false, error: "Please fill all fields." });
      return;
    }
    if (!nameRegex.test(name.trim())) {
      setStatus({ loading: false, success: false, error: "Name can only contain letters and must be at least 2 characters." });
      return;
    }
    if (!emailRegex.test(email.trim())) {
      setStatus({ loading: false, success: false, error: "Please enter a valid email address." });
      return;
    }
    if (message.trim().length < 10) {
      setStatus({ loading: false, success: false, error: "Message must be at least 10 characters long." });
      return;
    }

    setStatus({ loading: true, success: false, error: "" });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ loading: false, success: true, error: "" });
        setFormData({ name: "", email: "", message: "" });
        
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 4000);
      } else {
        const data = await response.json();
        setStatus({ loading: false, success: false, error: data.error || "Something went wrong." });
      }
    } catch (error) {
      setStatus({ loading: false, success: false, error: "Failed to connect to the server." });
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-16 bg-[#0a0a0a] relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="mb-12">
          <h3 className="text-cyan-400 font-bold text-xl uppercase tracking-widest mb-2">
            Contact With Me
          </h3>
          <p className="text-gray-400 max-w-2xl">
            If you have any questions, project inquiries, or just want to say hi, feel free to reach out. I am open to discussing AI projects, RAG integrations, and Full-Stack opportunities.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 bg-[#111111] border border-gray-800 rounded-2xl p-8 shadow-2xl relative"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label className="text-gray-300 text-sm mb-2 block">Your Name:</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              <div>
                <label className="text-gray-300 text-sm mb-2 block">Your Email:</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              <div>
                <label className="text-gray-300 text-sm mb-2 block">Your Message:</label>
                <textarea 
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Let's build something awesome..."
                  className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Status Messages */}
              {status.error && <p className="text-red-500 text-sm">{status.error}</p>}
              {status.success && <p className="text-green-500 text-sm">Message sent successfully! I will get back to you soon.</p>}

              <button 
                type="submit"
                disabled={status.loading}
                className={`w-full text-white font-semibold py-3 rounded-lg transition-all shadow-lg ${
                  status.loading 
                  ? "bg-gray-600 cursor-not-allowed" 
                  : "bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-90"
                }`}
              >
                {status.loading ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          </motion.div>

          {/* Contact Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex flex-col justify-center gap-10"
          >
            {/* ... (Yahan purana contact info wala code same rahay ga, main format short rakh raha hu) ... */}
            <div className="flex items-center gap-6">
              <div className="bg-[#1a1a1a] p-4 rounded-full text-cyan-400 border border-gray-800"><FaEnvelope size={20} /></div>
              <span className="text-gray-300 text-lg">amirjaved1925@gmail.com</span>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="bg-[#1a1a1a] p-4 rounded-full text-purple-400 border border-gray-800"><FaPhoneAlt size={20} /></div>
              <span className="text-gray-300 text-lg">+92 305 1925331</span>
            </div>

            <div className="flex items-center gap-6">
              <div className="bg-[#1a1a1a] p-4 rounded-full text-green-400 border border-gray-800"><FaMapMarkerAlt size={20} /></div>
              <span className="text-gray-300 text-lg">Islamabad, Pakistan</span>
            </div>

            {/* Social Icons inside Contact.tsx */}
            <div className="flex gap-6 mt-4">
            <a 
                href="https://github.com/iAmirJ" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#1a1a1a] p-4 rounded-full text-gray-400 hover:text-cyan-400 hover:bg-gray-800 transition-all cursor-pointer"
            >
                <FaGithub size={24} />
            </a>
            <a 
                href="https://linkedin.com/in/iamirj" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#1a1a1a] p-4 rounded-full text-gray-400 hover:text-purple-400 hover:bg-gray-800 transition-all cursor-pointer"
            >
                <FaLinkedin size={24} />
            </a>
            <a 
                href="mailto:amirjaved1925@gmail.com" 
                className="bg-[#1a1a1a] p-4 rounded-full text-gray-400 hover:text-cyan-400 hover:bg-gray-800 transition-all cursor-pointer"
            >
                <FaEnvelope size={24} />
            </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="hidden lg:flex absolute right-[-80px] top-1/2 -translate-y-1/2 rotate-90 origin-center z-0 opacity-10 pointer-events-none">
        <span className="text-gray-500 font-bold tracking-[0.5em] text-6xl uppercase whitespace-nowrap">Contact</span>
      </div>

      <div className="max-w-6xl mx-auto w-full mt-24 pt-6 border-t border-gray-800 flex justify-center items-center text-sm text-gray-500 relative z-10">
        <p>© {new Date().getFullYear()} Developer Portfolio by <span className="text-cyan-400 font-medium">Aamir Javed</span></p>
      </div>
    </section>
  );
}