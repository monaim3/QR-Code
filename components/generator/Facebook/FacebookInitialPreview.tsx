import Women from "../../../public/images/generator_img/women.jpg";
import FacebookIcon from "@/components/icons/facebook-icon";
import { Globe } from "lucide-react";
import Image from "next/image";

export default function FacebookInitialPreview() {
  return (
    <div className="w-full h-full relative rounded-[32px] overflow-hidden bg-white pb-4">
      <div className="absolute top-0 left-0 right-0 h-[220px] bg-[#6594FF]" />
      <div className="relative z-3 mx-8 pt-12">
        <div className="w-full px-1 pt-1 pb-1">
          <div className="w-full aspect-[3/4] flex items-center justify-center overflow-hidden border-2 border-white rounded-lg relative">
            <Image
              src={Women.src}
              alt="Lydia Harper"
              className="object-cover"
              fill
              unoptimized
            />
          </div>
        </div>
        <div className="px-4 pb-4 text-center mt-4 w-full overflow-hidden">
          <h2 className="text-lg font-bold leading-[26px]">Lydia Harper</h2>
          <p className="text-[10px] font-normal leading-[16px] mt-0.5 uppercase tracking-wide">
            PROJECT MANAGER
          </p>
        </div>
        <div className="flex gap-2 px-4 mb-4 items-center justify-center w-full overflow-hidden">
          <Globe size={16} className="text-gray-600 flex-shrink-0" />
          <p className="text-[10px] font-normal leading-[16px]">
            www.lydiaharper.com
          </p>
        </div>
      </div>
      <div className="px-5 mt-8 space-y-2 pb-4 w-full">
        <button className="w-full py-2.5 rounded-lg text-white text-xs font-normal leading-[20px] bg-black">
          Learn more
        </button>
        <button className="w-full py-2.5 rounded-lg bg-[#F8F9FC] text-gray-900 text-sm font-medium flex items-center justify-between px-4">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
              <FacebookIcon />
            </div>
            <span className="text-xs font-normal leading-[20px] truncate">Facebook</span>
          </div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-400 flex-shrink-0">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
