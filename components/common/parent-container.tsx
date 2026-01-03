import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  bgColor?: string;
}

export default function Container({
  children,
  bgColor = "transparent",
}: ContainerProps) {
  return (
    <div
      className="max-w-[350px] desktop:max-w-[1220px] mx-auto px-[16px]"
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </div>
  );
}
