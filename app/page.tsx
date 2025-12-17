"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BlueprintCard from "@/components/ui/BlueprintCard";

export default function Home() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl"
      >
        <BlueprintCard label="HOME PAGE LAYOUT - SCALE 1:1" className="min-h-[600px] flex items-center justify-center relative p-8 md:p-16">
          
          {/* Main Content Container */}
          <div className="flex flex-col md:flex-row items-center gap-12 relative z-10 w-full justify-center">
            
            {/* Profile Picture Section */}
            <div className="relative group">
               {/* Label pointing to picture */}
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.5, duration: 0.5 }}
                 className="absolute -top-12 left-1/2 -translate-x-1/2 md:-top-16 md:left-20 flex flex-col items-center"
               >
                  <span className="text-[10px] text-blue-300 font-mono tracking-widest mb-1">PROFILE PICTURE</span>
                  <div className="h-8 w-[1px] bg-blue-400/50"></div>
                  <div className="w-16 h-[1px] bg-blue-400/50"></div>
                  <div className="h-4 w-[1px] bg-blue-400/50"></div>
               </motion.div>

               {/* Image Container with Brackets */}
               <div className="relative p-4 border border-blue-500/20 rounded-xl bg-blue-900/20 backdrop-blur-sm">
                  {/* Scope Corners */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-blue-400 rounded-tl-lg"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-blue-400 rounded-tr-lg"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-blue-400 rounded-bl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-400 rounded-br-lg"></div>
                  
                  <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-lg overflow-hidden border border-blue-500/30">
                    <Image
                      src="/profile.png"
                      alt="Marnin Audu"
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      priority
                    />
                  </div>
                  
                  {/* Dimensions Labels */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-blue-400/70 font-mono">60</div>
                  <div className="absolute -left-6 top-1/2 -translate-y-1/2 text-[10px] text-blue-400/70 font-mono -rotate-90">80</div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-blue-400/70 font-mono">100</div>
               </div>
            </div>

            {/* Text Content Section */}
            <div className="text-center md:text-left space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2">
                  MARNIN AUDU
                </h1>
                <h2 className="text-xl md:text-2xl text-blue-400 font-mono tracking-widest uppercase">
                  Frontend Developer
                </h2>
              </motion.div>

              <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.6 }}
                 className="pt-6 relative"
              >
                 <p className="font-handwriting text-2xl md:text-3xl text-white/90 italic tracking-wide" style={{ fontFamily: "cursive" }}>
                   I build products that feel like magic and work like Clock work
                 </p>
                 
                 {/* Decorative line below tagline */}
                 <div className="absolute -bottom-4 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="pt-8 flex flex-col gap-2 text-[10px] text-blue-300/60 font-mono text-right"
              >
                  <p>• Service specification content load</p>
                  <p>• Optimizing protocol interfaces</p>
                  <p>• Domian initialization technical mainnet</p>
              </motion.div>
            </div>
          </div>

          {/* Grid decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
             <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-blue-500/10"></div>
             <div className="absolute right-8 top-0 bottom-0 w-[1px] bg-blue-500/10"></div>
             <div className="absolute top-8 left-0 right-0 h-[1px] bg-blue-500/10"></div>
             <div className="absolute bottom-8 left-0 right-0 h-[1px] bg-blue-500/10"></div>
          </div>
        
        </BlueprintCard>
      </motion.div>
    </div>
  );
}
