import Image from "next/image";
import forest from "../../../public/images/generator_img/forest-nature.png";
import { Globe } from "lucide-react";
import { IoShareSocialOutline } from "react-icons/io5";

export default function ImagesInitialPreview() {
  return (
    <div className="w-full h-full relative rounded-[32px] overflow-hidden bg-white pb-4">
      <div className="absolute top-0 left-0 right-0 h-[300px] bg-[#6594FF]" />
      <div className="relative z-3 mx-2 pt-12">
        <div className="px-4 pb-4 text-center mt-4 w-full overflow-hidden">
          <h2 className="text-lg font-bold leading-[26px] text-white">
            Vision Hub
          </h2>
          <p className="text-[10px] font-normal leading-[16px] mt-0.5 tracking-wide text-white">
            Every image tells a story, inviting you to look closer and feel more.
          </p>
        </div>
        <div className="flex gap-2 px-4 mx-auto items-center justify-center mb-4">
          <Globe size={16} className="flex-shrink-0 text-white" />
          <p className="text-[10px] font-normal leading-[16px] text-white">
            www.visionhub.com
          </p>
        </div>
        <div className="rounded-lg px-4">
          <div className="w-full px-1 pt-1 pb-1">
            <div
              className="w-full flex items-center justify-center overflow-hidden rounded-lg relative"
              style={{ aspectRatio: "207/240" }}
            >
              <Image
                src={forest.src}
                alt="Vision Hub"
                className="object-cover"
                fill
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 space-y-2 py-4 w-full">
        <div className="flex gap-2">
          <button className="w-full py-2 px-8 max-h-[40px] rounded-lg text-white text-xs font-normal leading-[20px] bg-black">
            View more
          </button>
          <button className="max-w-10 flex items-center justify-center w-full py-2.5 rounded-lg text-black text-xs font-normal leading-[20px] bg-white border border-black">
            <IoShareSocialOutline size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
