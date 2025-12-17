"use client";

import { motion } from "framer-motion";
import BlueprintCard from "@/components/ui/BlueprintCard";
import ExperienceCard from "@/components/sections/ExperienceCard";
import { experiences } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen py-8 md:py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-12 border-b border-blue-500/30 pb-4"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-widest uppercase">
          Career Blueprint
        </h1>
        <div className="flex justify-between items-end mt-2">
          <p className="text-xs font-mono text-blue-400">CONTACT: MARNIN AUDU</p>
          <div className="text-xs font-mono text-blue-400 border border-blue-500/30 px-2 py-1">
            SCALE 1:1 REV A
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col xl:flex-row gap-12 relative">
        {/* Main "Bus" Line for visual connection */}
         <div className="hidden xl:block absolute left-[30%] top-20 bottom-0 w-[2px] bg-blue-500/20"></div>

        {/* Left Column: Education */}
        <div className="xl:w-1/3 space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-sm font-mono text-blue-300 mb-2 uppercase tracking-wider">Education</div>
            <BlueprintCard className="min-h-[200px] flex flex-col justify-center items-center text-center p-8 bg-blue-900/20">
               <div className="mb-4 p-4 rounded-full bg-blue-500/10 border border-blue-400/30">
                 <GraduationCap size={40} className="text-blue-300" />
               </div>
               <h3 className="text-xl font-bold text-white mb-2 max-w-[250px]">
                 AIR FORCE INSTITUTE OF TECHNOLOGY KADUNA
               </h3>
               <div className="text-blue-200 font-mono text-sm mb-1">
                 BACHELOR'S, COMPUTER SCIENCE
               </div>
               <div className="text-blue-400/60 font-mono text-xs">
                 (2021-2024) • GPA: 4.4
               </div>
            </BlueprintCard>
            
            {/* Connector to Main Bus */}
            <div className="hidden xl:block absolute top-[150px] right-0 w-[calc(100%-350px)] h-[2px] bg-blue-500/30"></div>
          </motion.div>
        </div>

        {/* Right Column: Professional Experience */}
        <div className="xl:w-2/3 space-y-12 relative">
           {/* Section Label */}
           <div className="absolute -left-8 md:-left-16 top-1/2 -rotate-90 text-blue-500/40 text-sm font-mono tracking-[0.5em] whitespace-nowrap hidden xl:block origin-center">
              PROFESSIONAL EXPERIENCE
           </div>

           <div className="space-y-6 md:pl-8 border-l border-blue-500/20 xl:border-none">
             {experiences.map((exp, index) => (
               <ExperienceCard key={exp.id} experience={exp} index={index} />
             ))}
           </div>
        </div>
      </div>
    </div>
  );
}
