import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  bgColor?: string;
  className?: string;
}

export default function Container({
  children,
  bgColor = "transparent",
  className,
}: ContainerProps) {
  return (
    <div
      className={cn("max-w-[1256px] mx-auto px-5", className)}
      style={{ backgroundColor: bgColor }}>
      {children}
    </div>
  );
}
