"use client";

import { motion } from "framer-motion";
import BlueprintCard from "@/components/ui/BlueprintCard";
import { articles } from "@/lib/data";
import { FileCode, FileText, Lock, Network } from "lucide-react";

const icons = {
  FileCode: FileCode,
  Network: Network,
  Lock: Lock,
};

export default function ArticlesContent() {
    return (
       <div className="min-h-screen py-8 md:py-16 pl-20 md:pl-32 pr-4 md:pr-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 border-b border-blue-500/30 pb-4"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-widest uppercase">
          Technical Logs (Articles)
        </h1>
        <div className="flex justify-between items-end mt-2">
          <p className="text-xs font-mono text-blue-400">DATABASE: PUBLIC RECORDS</p>
          <div className="text-xs font-mono text-blue-400 border border-blue-500/30 px-2 py-1">
            ARCHIVE V1.0
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
        {articles.length > 0 ? (
          articles.map((article, index) => {
            const Icon = icons[article.icon as keyof typeof icons] || FileText;
            
            return (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <BlueprintCard className="group cursor-pointer hover:bg-[#1e40af]/30 transition-colors">
                   <div className="flex flex-col md:flex-row gap-6">
                      {/* Icon / Date Block */}
                      <div className="flex-shrink-0 flex flex-row md:flex-col items-center md:items-start gap-4 md:w-32 border-b md:border-b-0 md:border-r border-blue-500/20 pb-4 md:pb-0 md:pr-4">
                         <div className="p-3 border border-blue-400/30 rounded bg-blue-900/20">
                            <Icon className="text-blue-300 w-6 h-6" />
                         </div>
                         <div className="text-center md:text-left">
                            <div className="text-[10px] text-blue-200 font-mono tracking-wider">{article.date}</div>
                            <div className="text-[8px] text-blue-400 uppercase mt-1">{article.category}</div>
                         </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-2">
                         <div className="flex justify-between items-start">
                            <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                               {article.title}
                            </h3>
                            <span className="text-[10px] font-mono text-blue-400/70 border border-blue-500/20 px-1 rounded">
                               {article.readTime}
                            </span>
                         </div>
                         <p className="text-sm text-blue-100/80 leading-relaxed">
                            {article.summary}
                         </p>
                         
                         <div className="pt-2 flex items-center gap-2 text-[10px] text-blue-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                            <span>READ_ENTRY</span>
                            <div className="h-[1px] w-8 bg-blue-400"></div>
                         </div>
                      </div>
                   </div>
                </BlueprintCard>
              </motion.div>
            );
          })
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-1 py-20 flex flex-col items-center justify-center border border-dashed border-blue-500/30 rounded-lg bg-blue-950/20"
          >
            <div className="mb-4 p-4 border border-blue-500/20 rounded-full bg-blue-900/10">
              <FileText className="w-12 h-12 text-blue-500/50" />
            </div>
            <h3 className="text-xl font-mono text-blue-300 tracking-tighter uppercase mb-2">No Records Found</h3>
            <p className="text-sm text-blue-400/60 font-mono max-w-xs text-center px-4">
              Database is currently offline or no public logs are available at this time.
            </p>
            <div className="mt-8 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 animate-pulse rounded-full"></div>
              <span className="text-[10px] font-mono text-blue-500/40 uppercase tracking-widest">Scanning Network...</span>
            </div>
          </motion.div>
        )}
      </div>
      
      {/* Visual Footer */}
      <div className="mt-12 border-t border-blue-500/20 pt-4 text-center">
         <p className="text-[10px] text-blue-500/40 font-mono uppercase tracking-[0.3em]">End of Records</p>
      </div>

    </div>
    );
}