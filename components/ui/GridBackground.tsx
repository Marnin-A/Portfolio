import { cn } from "@/lib/utils";

export default function GridBackground({ className }: { className?: string }) {
  return (
    <div className={cn("fixed inset-0 pointer-events-none z-[-1]", className)}>
      <div className="absolute inset-0 blueprint-grid opacity-30"></div>
      <div className="absolute inset-0 blueprint-grid-lg opacity-20"></div>
    </div>
  );
}
