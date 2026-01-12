import { ReactNode } from "react";

interface MobileFrameProps {
  children: ReactNode;
  size?: "desktop" | "desktopDashboard";
}

export default function MobileFrame({
  children,
  size = "desktop",
}: MobileFrameProps) {
  const dimensions =
    size === "desktop"
      ? { width: "w-[280px]", height: "h-[560px]" }
      : { width: "w-[235px]", height: "h-[483px]" };

  return (
    <div
      className={`relative ${dimensions.width} ${dimensions.height} mx-auto`}
    >
      <div className="absolute inset-0 rounded-[40px] border-[8px] border-black bg-white ">
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="71"
            height="20"
            viewBox="0 0 71 20"
            fill="none"
          >
            <rect width="70.6947" height="20" rx="10" fill="#0A0909" />
            <ellipse
              cx="59.8937"
              cy="10"
              rx="4.90936"
              ry="4.54545"
              fill="white"
              fillOpacity="0.1"
            />
          </svg>
        </div>

        <div className="absolute -right-[12px] top-[162px] w-[6px] h-[60px] bg-black rounded-r-md" />
        <div className="absolute -left-[12px] top-[100px] w-[6px] h-[25px] bg-black rounded-l-md" />
        <div className="absolute -left-[12px] top-[150px] w-[6px] h-[40px] bg-black rounded-l-md" />
        <div className="absolute -left-[12px] top-[200px] w-[6px] h-[40px] bg-black rounded-l-md" />

        <div className="w-full h-full">{children}</div>
      </div>
    </div>
  );
}
