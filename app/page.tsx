"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BlueprintCard from "@/components/ui/BlueprintCard";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 md:pl-24 pb-24 md:pb-4 relative z-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-5xl aspect-[4/5] md:aspect-video relative"
      >
        {/* Main Blueprint Container */}
        <div className="absolute inset-0 border-2 border-white/20 rounded-3xl bg-[#1e40af]/10 backdrop-blur-sm overflow-hidden">
           {/* Inner Border (Offset) */}
           <div className="absolute inset-3 border border-blue-400/30 rounded-2xl"></div>
           
           {/* Top Info Tag */}
           <div className="absolute hidden sm:block top-8 left-1/2 -translate-x-1/2 flex flex-col items-start border-l border-blue-400/50 pl-2">
              <span className="text-[10px] font-mono text-white/80">100</span>
              <div className="text-xs font-bold text-white tracking-widest">WHATBYTES</div>
              <div className="text-[10px] text-blue-300">Jan 2025-Present</div>
              <div className="text-[10px] text-white/80">SOFTWARE DEVELOPER</div>
           </div>

           {/* Content Area */}
           <div className="relative h-full flex flex-col md:flex-row items-center justify-center p-6 md:pl-24 md:pr-12 md:pl-32 gap-8 md:gap-12 overflow-visible">
              
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                 {/* Profile Picture with Dimensions */}
                 <div className="relative">
                    {/* Top Dim */}
                    <div className="absolute -top-6 left-0 right-0 flex justify-center">
                       <div className="h-[1px] w-full bg-white/30 relative top-1/2"></div>
                       <div className="bg-[#1e40af] px-2 text-[10px] text-white">60</div>
                    </div>
                    
                    {/* Left Dim */}
                    <div className="absolute top-0 -left-6 bottom-0 flex flex-col justify-center">
                       <div className="w-[1px] h-full bg-white/30 relative left-1/2"></div>
                       <div className="bg-[#1e40af] py-1 text-[10px] text-white -rotate-90">85</div>
                    </div>

                     {/* Bottom Dim */}
                    <div className="hidden md:flex absolute -bottom-6 left-0 right-0 justify-center">
                       <div className="h-[1px] w-full bg-white/30 relative top-1/2"></div>
                       <div className="bg-[#1e40af] px-2 text-[10px] text-white">100</div>
                    </div>

                    <div className="relative w-32 h-32 md:w-56 md:h-56 border-2 border-white/80 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                       {/* Corner Brackets */}
                       <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-white"></div>
                       <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-white"></div>
                       <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-white"></div>
                       <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-white"></div>
                       
                       {/* Center Focus */}
                       <div className="absolute inset-0 flex items-center justify-center opacity-30">
                          <div className="w-24 h-24 border border-white rounded-full"></div>
                       </div>
                       
                       <Image 
                         src="/profile.png" 
                         alt="Marnin Audu" 
                         fill 
                         className="object-cover" 
                       />
                    </div>
                 </div>

                  {/* Text Content */}
                 <div className="space-y-1 text-center md:text-left">
                    <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200" style={{ fontFamily: "Arial, sans-serif" }}>
                      MARNIN AUDU
                    </h1>
                    <h2 className="text-lg md:text-2xl text-white tracking-[0.2em] font-light">
                      SOFTWARE ENGINEER
                    </h2>
                    
                    <div className="pt-8">
                       <p className="font-handwriting text-2xl text-white/90 italic" style={{ fontFamily: "cursive" }}>
                         I build products that feel like magic and work like clockwork
                       </p>
                    </div>

                     {/* Side Notes */}
                    <div className="hidden sm:block pt-4 text-[9px] text-blue-200/70 font-mono space-y-1 md:pl-4 md:border-l border-blue-500/30 flex flex-col items-center md:items-start">
                       <p>• Service specification content load</p>
                       <p>• Optimizing protocol interfaces</p>
                       <p>• Domain initialization technical mainnet</p>
                    </div>
                 </div>
              </div>

           </div>

           {/* Footer */}
           <div className="absolute hidden md:block -bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-[999999]">
              <span className="text-xs font-mono text-white/50 tracking-widest">HOME PAGE LAYOUT - SCALE 1:1</span>
           </div>
           
           {/* Left/Right external rulers */}
           <div className="absolute top-0 bottom-0 left-2 w-[1px] bg-white/20"></div>
           <div className="absolute top-0 bottom-0 right-2 w-[1px] bg-white/20"></div>

           {/* Info Box - Bottom Left */}
           <div className="absolute hidden sm:block bottom-8 left-12 text-[9px] text-blue-200 font-mono leading-tight">
              <div className="font-bold text-white mb-1">WEB DEVELOPMENT DATA</div>
              <div>• First website went live in 1991</div>
              <div>• Over 50% of traffic is mobile-based</div>
              <div>• JS is used by 98% of all websites</div>
              <div>• Users form opinions in 0.05 seconds</div>
              <div>• 40% abandon sites taking 3s+ to load</div>
           </div>

           {/* Social Media - Bottom Right */}
           <div className="absolute bottom-8 right-12 flex gap-4 pointer-events-auto">
              <a href="https://github.com/Marnin-A" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <Github/>
              </a>
              <a href="https://www.linkedin.com/in/marnin-a-agyubok/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin/>
              </a>
               <a href="mailto:msmaudu@gmail.com" className="text-blue-300 hover:text-white transition-colors">
                <span className="sr-only">Email</span>
                <Mail/>
              </a>
              <a href="https://twitter.com/marnin_a" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter/>
              </a>
           </div>

        </div>
      </motion.div>
    </div>
  );
}
