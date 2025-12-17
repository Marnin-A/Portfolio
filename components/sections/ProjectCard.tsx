import { motion } from "framer-motion";
import BlueprintCard from "@/components/ui/BlueprintCard";
import { Server, Cpu, Network, Database, Box } from "lucide-react";

const icons = {
  Server: Server,
  Chip: Cpu,
  Network: Network,
  ServerStack: Database,
};

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    role: string;
    dates: string;
    techStack: string[];
    features: string[];
    serverIcon?: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const Icon = icons[project.serverIcon as keyof typeof icons] || Box;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 + 0.2 }}
      className="h-full"
    >
      <BlueprintCard className="h-full flex flex-col relative group hover:bg-[#1e40af]/20">
        {/* Header */}
        <div className="border-b border-blue-500/30 pb-3 mb-4">
          <h3 className="text-lg font-bold text-white tracking-widest">{project.title}</h3>
          <div className="flex justify-between items-center mt-1">
             <span className="text-xs text-blue-300 font-mono">({project.dates})</span>
             <span className="text-xs text-blue-200 font-bold">{project.role}</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 flex gap-4">
          {/* Visual Placeholder (Schematic Icon) */}
          <div className="w-1/3 flex flex-col items-center justify-center border-r border-blue-500/20 pr-4">
             <div className="p-4 border border-blue-400/30 rounded-lg bg-blue-900/30 mb-2">
               <Icon size={40} className="text-blue-300" />
             </div>
             <div className="text-[10px] font-mono text-blue-400/60 text-center">SCHEMATIC DIAGRAM</div>
          </div>

          {/* Details */}
          <div className="flex-1 space-y-4">
             {/* Tech Stack */}
             <div className="flex flex-wrap gap-2">
               {project.techStack.map((tech) => (
                 <span key={tech} className="text-[10px] font-mono border border-blue-500/40 px-1.5 py-0.5 rounded text-blue-300">
                   {tech}
                 </span>
               ))}
             </div>

             {/* Features */}
             <ul className="space-y-2">
               {project.features.map((feature, i) => (
                 <li key={i} className="text-xs text-blue-100/80 flex items-start gap-2">
                   <span className="text-blue-500 mt-0.5">●</span>
                   {feature}
                 </li>
               ))}
             </ul>
          </div>
        </div>

        {/* Decorative Dimensions */}
        <div className="absolute -left-2 top-0 bottom-0 w-[1px] bg-blue-500/20">
           {/* Arrows or markers styling can go here */}
        </div>
      </BlueprintCard>
    </motion.div>
  );
}
