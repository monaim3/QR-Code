import Image from "next/image";
import { Globe } from "lucide-react";

export default function PdfInitialPreview() {
  return (
    <div className="w-full h-full relative">
      <div className="absolute inset-0 w-full h-1/2 rounded-[32px] bg-[#6594FF]" />
      <div className="absolute flex flex-col items-center justify-center w-full max-h top-[66px] px-[20px]">
        <p className="text-[10px] leading-[16px] font-regular text-white">
          Top offers
        </p>
        <p className="text-[18px] leading-[26px] font-bold text-white">
          Fresh Corner
        </p>
        <p className="text-[10px] leading-[16px] font-regular text-white text-center">
          Browse our top offers and handpicked highlights in this PDF.
        </p>
        <div className="w-full h-[314px] flex flex-col rounded-[6px] p-2 shadow-card bg-white mt-[24px]">
          <div className="flex items-start h-full justify-start overflow-hidden">
            <Image
              src="/images/sample-pdf.png"
              alt="Sample PDF"
              width={300}
              height={200}
            />
          </div>
          <div className="w-full h-[40px] flex items-center justify-center rounded-[6px] mt-2 bg-white border border-gray-400 flex-shrink-0">
            <p className="text-[12px] leading-[20px] font-regular text-[var(--Black)]">
              See PDF
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center gap-2 mt-[24px] mb-[29px]">
          <Globe className="h-4 w-4" />
          <p className="text-[10px] leading-[16px] font-regular text-[var(--Black)]">
            www.fashionista.com
          </p>
        </div>
      </div>
    </div>
  );
}
