import { cn } from "@/lib/utils";

interface BlueprintCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  className?: string;
  children: React.ReactNode;
}

export default function BlueprintCard({
  label,
  className,
  children,
  ...props
}: BlueprintCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl border border-blue-500/30 bg-[#1e40af]/10 backdrop-blur-sm p-6 overflow-hidden group transition-all duration-300 hover:border-blue-400/50 hover:bg-[#1e40af]/20 hover:shadow-[0_0_20px_rgba(30,64,175,0.3)]",
        className
      )}
      {...props}
    >
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 h-4 w-4 border-l-2 border-t-2 border-blue-400/50 rounded-tl-md group-hover:border-blue-300 transition-colors"></div>
      <div className="absolute top-0 right-0 h-4 w-4 border-r-2 border-t-2 border-blue-400/50 rounded-tr-md group-hover:border-blue-300 transition-colors"></div>
      <div className="absolute bottom-0 left-0 h-4 w-4 border-l-2 border-b-2 border-blue-400/50 rounded-bl-md group-hover:border-blue-300 transition-colors"></div>
      <div className="absolute bottom-0 right-0 h-4 w-4 border-r-2 border-b-2 border-blue-400/50 rounded-br-md group-hover:border-blue-300 transition-colors"></div>

      {/* Measurement Lines (Decorative) */}
      <div className="absolute left-[-4px] top-1/2 h-8 w-1 bg-blue-500/20 rounded-full transform -translate-y-1/2"></div>
      <div className="absolute right-[-4px] top-1/2 h-8 w-1 bg-blue-500/20 rounded-full transform -translate-y-1/2"></div>
      
      {/* Label */}
      {label && (
        <div className="absolute top-3 left-4 md:left-6">
          <span className="text-[10px] uppercase tracking-[0.2em] text-blue-300/70 font-mono group-hover:text-blue-200 transition-colors">
            {label}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
