"use client";

import { motion } from "framer-motion";
import { X, Download, ZoomIn, ZoomOut } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import { useState, useEffect } from "react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configure worker
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
}

export default function ResumeModal({ isOpen, onClose, pdfUrl }: ResumeModalProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState(1.0);
  const [windowWidth, setWindowWidth] = useState(1000);

  useEffect(() => {
    // Client-side only window check for responsiveness
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 768) setScale(0.6);
    }
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => Math.min(Math.max(1, prevPageNumber + offset), numPages));
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#0f172a]/90 backdrop-blur-sm"
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-5xl bg-[#1e40af]/10 border border-blue-500/30 rounded-xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header (Blueprint Style) */}
        <div className="flex items-center justify-between p-4 border-b border-blue-500/30 bg-[#0f172a]/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
             <div className="w-2 h-8 bg-blue-500 rounded-sm"></div>
             <div>
               <h2 className="text-white font-bold tracking-widest text-sm md:text-base">RESUME VIEWER</h2>
               <p className="text-[10px] text-blue-400 font-mono">SECURE DOCUMENT PREVIEW</p>
             </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setScale(s => Math.min(s + 0.1, 2.0))}
              className="p-2 text-blue-300 hover:text-white hover:bg-white/10 rounded transition-colors"
              title="Zoom In"
            >
              <ZoomIn size={18} />
            </button>
            <button
              onClick={() => setScale(s => Math.max(s - 0.1, 0.5))}
              className="p-2 text-blue-300 hover:text-white hover:bg-white/10 rounded transition-colors"
              title="Zoom Out"
            >
              <ZoomOut size={18} />
            </button>
            
            <a 
              href={pdfUrl} 
              download 
              className="p-2 text-blue-300 hover:text-white hover:bg-white/10 rounded transition-colors flex items-center gap-2 md:px-4 md:bg-blue-600/20 md:border md:border-blue-500/30"
            >
               <Download size={18} />
               <span className="hidden md:inline text-xs font-bold">DOWNLOAD</span>
            </a>
            <div className="w-[1px] h-6 bg-blue-500/30 mx-2"></div>
            <button 
              onClick={onClose}
              className="p-2 text-red-300 hover:text-white hover:bg-red-500/20 rounded transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* PDF Content */}
        <div className="flex-1 overflow-auto p-4 md:p-8 flex justify-center bg-[#0f172a]/50">
           <div className="border border-white/10 shadow-2xl relative">
             <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={
                  <div className="flex flex-col items-center justify-center p-12 text-blue-300 gap-4">
                    <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-xs font-mono animate-pulse">LOADING DATA STREAM...</span>
                  </div>
                }
                error={
                  <div className="p-8 text-red-300 text-center font-mono text-sm border border-red-500/30 bg-red-900/10 rounded">
                     ERROR: UNABLE TO LOAD DOCUMENT STREAM
                  </div>
                }
             >
                <Page 
                  pageNumber={pageNumber} 
                  scale={scale} 
                  renderTextLayer={false} 
                  renderAnnotationLayer={false}
                  className="max-w-full"
                />
             </Document>
           </div>
        </div>

        {/* Footer info */}
        <div className="p-2 bg-[#0f172a] border-t border-blue-500/30 flex justify-between items-center px-4">
             <div className="w-20"></div> {/* Spacer for center alignment */}
             
             <div className="flex items-center gap-4">
               <button 
                 onClick={() => changePage(-1)} 
                 disabled={pageNumber <= 1}
                 className="text-xs font-mono text-blue-300 hover:text-white disabled:opacity-30 disabled:hover:text-blue-300"
               >
                 [ PREV ]
               </button>
               
               <span className="text-[10px] text-blue-300 font-mono">
                  PAGE {pageNumber} / {numPages || "--"} • SCALED {(scale * 100).toFixed(0)}%
               </span>

               <button 
                 onClick={() => changePage(1)} 
                 disabled={pageNumber >= numPages}
                 className="text-xs font-mono text-blue-300 hover:text-white disabled:opacity-30 disabled:hover:text-blue-300"
               >
                 [ NEXT ]
               </button>
             </div>

             <div className="w-20 text-right">
                <span className="text-[9px] text-blue-500/30">V1.0</span>
             </div>
        </div>

      </motion.div>
    </div>
  );
}
