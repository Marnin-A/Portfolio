import { motion } from "framer-motion";
import BlueprintCard from "@/components/ui/BlueprintCard";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

interface ExperienceCardProps {
  experience: {
    id: number;
    company: string;
    role: string;
    dates: string;
    description: string[];
    icon: string;
    website: string;
  };
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 + 0.3 }}
      className="relative"
    >
      {/* Connector Line (Horizontal Trace) */}
      <div className="absolute top-1/2 right-full h-[2px] w-8 md:w-16 bg-blue-500/30 -translate-y-1/2">
        <div className="absolute right-0 top-1/2 h-2 w-2 rounded-full bg-blue-400/50 -translate-y-1/2 translate-x-1/2"></div>
      </div>

      <BlueprintCard className="w-full max-w-xl group-hover:bg-[#1e40af]/30 mx-auto">
        <div className="flex items-start gap-4">
          <div className="border border-blue-500/30 overflow-hidden rounded-lg bg-blue-900/40 shrinking-0">
            <Image src={experience.icon} alt={experience.company} className="text-blue-300 w-6 h-6 md:w-8 md:h-8" height={24} width={24}/>
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">
                {experience.company}
              </h3>
              <span className="text-xs font-mono text-blue-300 border border-blue-500/30 px-2 py-1 rounded">
                {experience.dates}
              </span>
            </div>
            <h4 className="text-sm md:text-base font-bold text-blue-200 uppercase tracking-wider">
              {experience.role}
            </h4>
            <div className="pt-2">
               <ul className="list-none space-y-1">
                 {experience.description.map((item, i) => (
                   <li key={i} className="text-blue-100/70 text-sm flex items-start gap-2">
                     <span className="text-blue-500 mt-1">▹</span>
                     {item}
                   </li>
                 ))}
               </ul>
            </div>
         <div className="flex justify-end">
           {experience.website && <Link href={experience.website} target="_blank" rel="noopener noreferrer">
              <span className="w-max flex items-center gap-2 text-xs font-mono text-blue-300 border border-blue-500/30 px-2 py-1 rounded">
                Website
              <ArrowUpRightIcon className="w-4 h-4 text-blue-300"/>
              </span>
            </Link>}
         </div>
          </div>
         
        </div>
      </BlueprintCard>
    </motion.div>
  );
}
