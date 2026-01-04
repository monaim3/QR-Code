import { ReactNode } from "react";

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
      className="max-w-[1220px] mx-auto px-5 "
      style={{ backgroundColor: bgColor }}>
      {children}
    </div>
  );
}
