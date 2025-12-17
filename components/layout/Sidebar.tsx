"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, FolderGit2, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Experience", href: "/experience", icon: Briefcase },
  { name: "Projects", href: "/projects", icon: FolderGit2 },
  // { name: "Articles", href: "/articles", icon: FileText }, // Hidden for now based on requirements
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 top-0 h-full w-20 md:w-64 border-r border-white/20 bg-[#1e40af]/90 backdrop-blur-sm z-50 flex flex-col items-center md:items-start py-8 md:px-6">
       <div className="mb-12 hidden md:block">
        <h1 className="text-2xl font-bold tracking-wider text-white">PORTFOLIO</h1>
        <p className="text-xs text-blue-200 mt-1">EST. 2025</p>
      </div>

      <div className="w-full space-y-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-300 relative overflow-hidden",
                isActive
                  ? "bg-white/10 text-white border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                  : "text-blue-200 hover:text-white hover:bg-white/5"
              )}
            >
              {isActive && (
                 <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-white/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
              <Icon size={24} strokeWidth={1.5} className="z-10" />
              <span className="hidden md:block font-medium tracking-wide z-10 text-sm">
                {item.name.toUpperCase()}
              </span>
            </Link>
          );
        })}
      </div>

      <div className="mt-auto flex flex-col items-center md:items-start gap-4">
        {/* Social Links */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
           <a href="https://github.com/Marnin-A" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white transition-colors">
             <span className="sr-only">GitHub</span>
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 6 2 6 5.5.269 0 .569.122 1.1.268 2.372 5.029 4.102 7.156 4.102 8.642 0 2.302-1.34-3.791-2.903-8.629-3.791-.569-.122-1.1-.268-1.5-.268-4.5 0-9 4.5-9 9 0 .5.09 1.5.28 2 .43.2.96.2 1.5.2 2 0 4-1.2 5-3 .7-1.3 1.2-2.3 2-3 .5-1.7 1-2.7 1.4-3" /><path d="M9 22v-4c0-1.38-.62-2-2-2-2 0-3 1-3 1" /></svg>
           </a>
           <a href="https://www.linkedin.com/in/marnin-a-agyubok/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white transition-colors">
             <span className="sr-only">LinkedIn</span>
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
           </a>
           <a href="mailto:msmaudu@gmail.com" className="text-blue-300 hover:text-white transition-colors">
             <span className="sr-only">Email</span>
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
           </a>
           <a href="https://twitter.com/marnin_a" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white transition-colors">
             <span className="sr-only">Twitter</span>
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
           </a>
        </div>
        
        <div className="hidden md:block text-[10px] text-blue-300 opacity-60">
          <p>SYSTEM STATUS: ONLINE</p>
          <p>V 1.0.0</p>
        </div>
      </div>
    </nav>
  );
}
