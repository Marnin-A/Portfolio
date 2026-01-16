"use client";

import { FileText } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamic import for Modal to avoid SSR issues with react-pdf
const ResumeModal = dynamic(() => import("./ResumeModal"), { ssr: false });

export default function Navbar() {
    const [isResumeOpen, setIsResumeOpen] = useState(false);
    // Force local path for debugging
    const resumeUrl = "/files/Marnin-Audu-Software-Developer.pdf";

    return (
        <>
            <nav className="absolute top-0 right-0 p-6 z-40 flex justify-end w-full pointer-events-none">
                   <button 
                     onClick={() => setIsResumeOpen(true)}
                     className="pointer-events-auto group flex items-center cursor-pointer gap-3 px-4 py-2 bg-[#1e40af]/10 border border-blue-400/30 rounded backdrop-blur-sm hover:bg-[#1e40af]/30 hover:border-blue-400/60 transition-all duration-300"
                   >
                       <span className="text-xs font-bold text-blue-200 tracking-widest group-hover:text-white sm:block hidden">VIEW RESUME</span>
                       <div className="p-1 border border-blue-400/30 rounded bg-blue-900/30 group-hover:bg-blue-900/50">
                         <FileText size={14} className="text-blue-300" />
                       </div>
                   </button> 
            </nav>

            <ResumeModal 
              isOpen={isResumeOpen} 
              onClose={() => setIsResumeOpen(false)} 
              pdfUrl={resumeUrl} 
            />
        </>
    );
}