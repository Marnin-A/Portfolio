"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ArrowRight, ChevronUp, ChevronDown, AlertTriangle, Construction } from "lucide-react";
import { projects } from "@/lib/data";

export default function ProjectsContent() {
    const [activeId, setActiveId] = useState(projects[0].id);
    const [showUpArrow, setShowUpArrow] = useState(false);
    const [showDownArrow, setShowDownArrow] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (!scrollContainerRef.current) return;
        const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
        setShowUpArrow(scrollTop > 10);
        setShowDownArrow(scrollTop + clientHeight < scrollHeight - 10);
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            // Initial check with a small delay to ensure content is rendered
            const timeoutId = setTimeout(handleScroll, 100);
            
            window.addEventListener('resize', handleScroll);
            return () => {
                container.removeEventListener('scroll', handleScroll);
                window.removeEventListener('resize', handleScroll);
                clearTimeout(timeoutId);
            };
        }
    }, []);

    // Re-check when projects change or activeId changes (though projects is static here)
    useEffect(() => {
        handleScroll();
    }, [activeId]);

    // Get active project details
    const activeProject = projects.find(p => p.id === activeId) || projects[0];

    return (
        <div className="min-h-screen py-8 md:py-0 md:h-screen w-full flex flex-col md:flex-row overflow-hidden bg-[#0f172a] pb-24 md:pb-0">
            
            {/* Left Column: Preview Area (60%) */}
            <div className="w-full md:w-[60%] h-[40vh] md:h-full relative overflow-hidden bg-[#1e40af]/10 border-r border-blue-500/20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeProject.id}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        {/* Background Image / Placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-[#0f172a] flex items-center justify-center">
                            {/* Fallback to Icon if no real image */}
                             <activeProject.icon className="text-blue-500/20 w-64 h-64" />
                        </div>
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent"></div>
                        
                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16 z-10 pl-6 md:pl-32"> {/* Increased padding for sidebar */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="text-blue-400 font-mono text-xs mb-2 tracking-widest uppercase">
                                    Project Details // {activeProject.category}
                                </div>
                                <h2 className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4 tracking-tight flex items-center gap-4">
                                    {activeProject.title}
                                    {activeProject.maintenance && (
                                        <motion.span 
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="px-3 py-1 text-xs font-mono bg-amber-500/20 text-amber-400 border border-amber-500/40 rounded flex items-center gap-2 uppercase tracking-widest"
                                        >
                                            <AlertTriangle size={14} />
                                            Under Maintenance
                                        </motion.span>
                                    )}
                                </h2>
                                <p className="text-blue-100/80 max-w-xl text-sm md:text-base leading-relaxed mb-6">
                                    {activeProject.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2">
                                    {activeProject.stack.map((tech) => (
                                        <span key={tech} className="px-3 py-1 border border-blue-500/30 rounded-full text-[10px] md:text-xs text-blue-300 bg-blue-900/20 backdrop-blur-sm uppercase tracking-wider">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(30,64,175,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(30,64,175,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Right Column: List (40%) */}
            <div className="w-full md:w-[40%] h-full flex flex-col pt-8 md:pt-32 relative z-20">
                <div className="px-6 md:px-12 mb-4 md:mb-8 flex justify-between items-end border-b border-blue-500/20 pb-4 mx-6 md:mx-0">
                    <h1 className="text-3xl md:text-6xl font-bold text-white tracking-tighter uppercase">Projects</h1>
                    <span className="text-blue-400 font-mono text-xl">{projects.length}</span>
                </div>

                <div className="relative flex-1 overflow-hidden">
                    {/* scroll indicators */}
                    <AnimatePresence>
                        {showUpArrow && (
                            <motion.div 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute top-2 left-1/2 -translate-x-1/2 z-30 p-1 bg-[#0f172a]/80 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-400 pointer-events-none"
                                style={{ left: '50%', transform: 'translateX(-50%)' }}
                            >
                                <ChevronUp size={20} />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div 
                        ref={scrollContainerRef}
                        className="h-full overflow-y-auto px-8 md:px-0 scrollbar-hide"
                    >
                        <div className="flex flex-col">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                onClick={() => setActiveId(project.id)}
                                onMouseEnter={() => setActiveId(project.id)}
                                className={`group relative py-6 md:py-8 px-6 md:px-12 cursor-pointer border-b border-blue-500/10 transition-all duration-300 ${
                                    activeId === project.id ? "bg-blue-900/10" : "hover:bg-blue-900/5"
                                }`}
                            >
                                <div className="flex justify-between items-center relative z-10">
                                    <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-300 flex items-center gap-2 ${
                                        activeId === project.id ? "text-white" : "text-blue-300/50 group-hover:text-blue-200"
                                    }`}>
                                        {project.title.toLowerCase()}
                                        {project.maintenance && (
                                            <span 
                                                title="Currently undergoing maintenance"
                                                className="px-1.5 py-0.5 text-[8px] font-mono bg-amber-500/20 text-amber-400 border border-amber-500/40 rounded uppercase cursor-help"
                                            >
                                                <Construction size={12} />
                                            </span>
                                        )}
                                    </h3>
                                    
                                    <div className="flex items-center gap-4">
                                        <span className={`text-xs font-mono transition-colors duration-300 hidden md:block ${
                                            activeId === project.id ? "text-blue-400" : "text-blue-500/30"
                                        }`}>
                                            {project.category}
                                        </span>
                                        <ArrowRight 
                                            size={16} 
                                            className={`transition-all duration-300 ${
                                                activeId === project.id 
                                                ? "text-blue-400 opacity-100 translate-x-0" 
                                                : "text-blue-500/30 opacity-0 -translate-x-4 group-hover:opacity-50"
                                            }`} 
                                        />
                                    </div>
                                </div>
                                
                                {/* Active Indicator Bar */}
                                {activeId === project.id && (
                                    <motion.div
                                        layoutId="activeBar"
                                        className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"
                                    />
                                )}
                            </div>
                        ))}
                        </div>
                    </div>
                    
                    <AnimatePresence>
                        {showDownArrow && (
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 p-1 bg-[#0f172a]/80 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-400 pointer-events-none"
                                style={{ left: '50%', transform: 'translateX(-50%)' }}
                            >
                                <ChevronDown size={20} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

        </div>
    );
}

