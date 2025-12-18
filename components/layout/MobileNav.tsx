"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ClipboardList, FolderGit2, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Experience", href: "/experience", icon: ClipboardList },
  { name: "Projects", href: "/projects", icon: FolderGit2 },
  { name: "Articles", href: "/articles", icon: FileText },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <div className="flex justify-around items-center p-2 pb-7 bg-[#1e40af]/90 backdrop-blur-xl border border-blue-400/30 rounded-2xl shadow-lg shadow-blue-900/50">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative flex flex-col items-center justify-center w-10 h-10 rounded-xl transition-all duration-300",
                isActive
                  ? "text-white bg-blue-500/20 shadow-[0_0_10px_rgba(37,99,235,0.3)] border border-blue-400/50"
                  : "text-blue-300/70 hover:text-white"
              )}
            >
              <Icon size={20} strokeWidth={1.5} />
              {/* {isActive && (
                <span className="absolute -bottom-2 w-1 h-1 bg-blue-400 rounded-full"></span>
              )} */}
              <span className="absolute -bottom-6 text-sm">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
