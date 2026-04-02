import { ChevronRight } from "lucide-react";
import Carousel from "@/components/generator/socialMedia/image-carousel";

const defaultImages = [
  "/images/social-user.png",
  "/images/social-user.png",
  "/images/social-user.png",
];

export default function SocialInitialPreview() {
  return (
    <div className="w-full h-full flex flex-col items-center gap-6 pb-8 pt-[66.46px] px-5 relative">
      <div className="absolute left-0 top-0 h-[145px] w-full z-[1] rounded-[32px] bg-[#6594FF]" />
      <div className="absolute left-0 right-0 top-[32px] flex flex-col items-center justify-center px-4 z-[2]">
        <Carousel images={defaultImages} />
        <p className="text-[18px] leading-[26px] font-bold text-[var(--Black)]">
          Scan &amp; Connect
        </p>
        <p className="text-[10px] leading-[16px] font-regular text-[var(--Black)] text-center">
          Hello, I&apos;m Mark. Explore my content and connect on social media.
        </p>
        <div className="w-full pt-6">
          {[
            { id: "facebook", name: "Facebook" },
            { id: "instagram", name: "Instagram" },
            { id: "twitter", name: "Twitter" },
          ].map((channel, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-start h-[58px] rounded-[6px] mb-[6px] p-2 gap-2 bg-[#f8f9fc]"
            >
              <div className="flex flex-col flex-1 items-start justify-start">
                <p className="text-[14px] leading-[22px] font-medium text-[var(--Black)]">
                  {channel.name}
                </p>
              </div>
              <ChevronRight height={16} width={16} className="text-[var(--Black)]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
