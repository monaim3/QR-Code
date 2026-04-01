import Image from "next/image";
import PlayCircle from "@/components/icons/play-circle";

export default function VideoInitialPreview() {
  return (
    <div className="w-full h-full flex flex-col items-center gap-6 pb-8 pt-[66.46px] px-5 relative rounded-[32px]">
      <div className="absolute left-0 top-0 w-full h-[300px] z-[1] rounded-[32px] bg-[#6594FF]" />
      <div className="absolute left-0 right-0 top-[32px] flex flex-col items-center justify-center px-[22px] z-[2]">
        <p className="text-[18px] leading-[26px] font-bold text-white">
          A Day to Remember
        </p>
        <p className="text-[10px] leading-[16px] font-regular text-center text-white">
          Full of smiles, emotions, and beautiful memories!
        </p>
        <div className="w-full max-w-full pt-4">
          <div className="flex items-center justify-center gap-2 w-full mb-2">
            <button className="py-2 px-4 w-full h-[40px] rounded-[32px] border border-transparent text-[var(--Black)] text-sm font-medium bg-white">
              Click here
            </button>
          </div>
        </div>
        <div className="w-full max-w-full pt-[26px]">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="flex flex-col items-start justify-center bg-white border border-white rounded-[6px] shadow-card mb-[10px]"
            >
              <div className="relative w-full h-[130px] p-[1px]">
                <Image
                  src="/images/vieo-sample.png"
                  alt="Video sample"
                  fill
                  className="object-contain"
                />
                <PlayCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <p className="text-[14px] leading-[22px] font-medium text-[var(--Black)] px-2 pt-2">
                So much joy!
              </p>
              <p className="text-[12px] leading-[20px] font-regular text-[var(--Black)] px-2 pb-2">
                A truly unforgettable moment!
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
