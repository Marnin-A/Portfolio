"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/sections/ProjectCard";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-8 md:py-16">
       <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-widest uppercase mb-2">
          PROJECTS - MARNIN AUDU
        </h1>
        <div className="h-[1px] w-48 bg-blue-500/50 mx-auto"></div>
      </motion.div>

      {/* Main Grid Container */}
      <div className="relative max-w-7xl mx-auto px-4">
        
        {/* Central Hub Visual (Desktop Only) */}
        <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none z-0">
           <div className="relative w-40 h-full flex flex-col items-center justify-center">
              <div className="w-[1px] h-full bg-blue-500/20 dashed"></div>
              {/* Central Label */}
              <div className="absolute bg-[#1e40af] border border-blue-400/50 px-4 py-2 text-xs font-mono text-center text-blue-200 z-10 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                 SYSTEM<br/>INTEGRATION
              </div>
              
              {/* Horizontal Connectors */}
              <div className="absolute top-1/4 w-[300%] h-[1px] bg-blue-500/20 border-t border-dashed border-blue-500/30"></div>
              <div className="absolute bottom-1/4 w-[300%] h-[1px] bg-blue-500/20 border-t border-dashed border-blue-500/30"></div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-12 relative z-10">
          {projects.map((project, index) => (
            <div key={project.id} className="relative">
               {/* Decorative Connector for Desktop */}
               <div className={`hidden lg:block absolute top-1/2 w-12 h-[1px] bg-blue-500/40
                 ${index % 2 === 0 ? "right-[-48px]" : "left-[-48px]"}
               `}></div>
               
               <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
