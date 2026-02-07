import React from "react";

interface TooltipProps {
  text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ text }) => {
  return (
    <div className="relative inline-flex flex-col items-center">
      <div
        className="w-0 h-0 
        border-l-[7px] border-r-[7px] border-b-[10px]
        border-l-transparent border-r-transparent border-b-[#01A56D]
      "
      />

      <div
        className="bg-[#01A56D] text-white 
        px-3 py-2 
        rounded-lg
        text-sm font-medium
        leading-none
      "
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
