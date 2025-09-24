import React from "react";
import { cn } from "@/lib/utils";

interface PillProps {
  children: React.ReactNode;
  className?: string;
}

const Pill: React.FC<PillProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center px-4 py-2",
        "bg-[#201A25] text-white text-sm font-medium",
        "rounded-full border border-[#40324F]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Pill;
