"use client";
import { cn } from "@/lib/utils";

interface PingAnimationProps {
  className: string;
}

export const PingAnimation: React.FC<PingAnimationProps> = ({ className }) => {
  return (
    <span className="relative flex h-2 w-2">
      <span
        className={cn(
          "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
          className
        )}
      ></span>
      <span
        className={cn("relative inline-flex rounded-full h-2 w-2", className)}
      ></span>
    </span>
  );
};
