"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ClipboardList, FolderGit2, FileText } from "lucide-react"; // Icons closer to design
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "/", icon: Home, label: "HOME" },
  { name: "Experience", href: "/experience", icon: ClipboardList, label: "EXPERIENCE" },
  { name: "Projects", href: "/projects", icon: FolderGit2, label: "PROJECTS" },
  { name: "Articles", href: "/articles", icon: FileText, label: "ARTICLES" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-12 pointer-events-none md:pointer-events-auto">
      {/* Navigation Container - Visual only on desktop usually, but we make it functional */}
      <div className="flex flex-col gap-4 p-2 border border-blue-400/30 rounded-full md:rounded-xl bg-[#1e40af]/80 backdrop-blur-md w-16 md:w-20 items-center pointer-events-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative group flex items-center justify-center"
            >
              {/* Button Container */}
              <div 
                className={cn(
                  "w-12 h-12 md:w-14 md:h-14 rounded-xl border flex items-center justify-center transition-all duration-300",
                  isActive 
                    ? "border-white bg-blue-500/20 text-white shadow-[0_0_10px_rgba(255,255,255,0.3)]" 
                    : "border-blue-400/50 text-blue-300 hover:border-white hover:text-white hover:bg-white/10"
                )}
              >
                <Icon size={24} strokeWidth={1.5} />
              </div>

              {/* Label (Tooltip style to match design labels "HOME", "EXPERIENCE" pointing to buttons) */}
              <div className="absolute left-full pl-4 hidden md:flex items-center opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                 <div className="w-8 h-[1px] bg-blue-400/50 mr-2"></div>
                 <span className="text-xs font-mono text-blue-200 tracking-widest">{item.label}</span>
              </div>
            </Link>
          );
        })}
      </div>
      
      {/* Bottom measurement line from design */}
      <div className="absolute -bottom-8 left-0 right-0 h-4 border-l border-r border-blue-500/30 flex justify-center text-[10px] text-blue-400/50 font-mono">
         <span className="mt-1">40</span>
      </div>
    </nav>
  );
}
