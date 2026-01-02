import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  bgColor?: string;
}

export default function Container({ children, bgColor = "transparent" }: ContainerProps) {
  return (
   <div className="w-[1220px]" style={{ backgroundColor: bgColor }}>
      {children}
  </div>
  );
}
