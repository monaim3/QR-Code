import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  bgColor?: string;
  className?: string;
   px?: number;
}

export default function Container({
  children,
  bgColor = "transparent",
  className,
  px = 20,
}: ContainerProps) {
  return (
    <div className={cn("w-full desktop:max-w-[1256px] mx-auto relative px-5", className)}>
      {children}
    </div>
  );
}
