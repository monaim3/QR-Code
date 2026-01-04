import { Button } from "@/components/ui/button";
import Image from "next/image";
import Container from "../common/parent-container";

export default function QrInstruction() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center py-10 lg:py-40 gap-[16px]">
        <h2 className="font-bold text-center text-gray-900 text-[24px] leading-[32px] desktop:text-[32px] desktop:leading-[40px]">
          How to create your custom QR code?
        </h2>
        <p className="font-regular text-center px-[12px] text-gray-900 text-base leading-6">
          Turn ordinary links into powerful visual connections
        </p>

        {/* Step Cards */}
        <div className="grid grid-cols-1 sm:px-20 lg:px-0 lg:grid-cols-3 gap-6 ">
          <StepCard
            imagePath="/images/steps/pick.svg"
            title="Pick your QR code content"
            subtitle1="Choose what you want to share — link websites, PDFs, menus, videos, apps, and more!"
          />
          <StepCard
            imagePath="/images/steps/personalized.svg"
            title="Personalize the design"
            subtitle1="Easily customize your QR code with logos, colors, frames, patterns, and styles at QReate.com™."
          />
          <StepCard
            imagePath="/images/steps/download.svg"
            title="Download your QR code"
            subtitle1="Get your QR code in PNG, SVG, or JPG format. Print or share it online — it’s that simple!"
          />
        </div>

        <div className="mt-12 hidden lg:block">
          <Button className="w-[198px] h-[48px] bg-[#01A56D] hover:bg-[#018f5f] rounded-[10px]">
            <span className="text-white text-[18px] font-regular py-[11px] px-[32px] inline-block">
              Create QR code
            </span>
          </Button>
        </div>
      </div>
    </Container>
  );
}

function StepCard({
  imagePath,
  title,
  subtitle1,
}: {
  imagePath: string;
  title: string;
  subtitle1: string;
}) {
  return (
    <div className="flex-shrink-0 flex flex-col items-center">
      <Image
        src={imagePath}
        alt={title}
        width={100}
        height={80}
        className="object-contain"
      />
      <h3 className="text-[18px] leading-[26px] font-bold text-center pt-[24px]">
        {title}
      </h3>

      {/* Subtitles */}
      <p className="flex flex-col pt-[8px] w-full items-center desktop:items-center text-[16px] leading-[22px] text-gray-600 text-center">
        {subtitle1}
      </p>
    </div>
  );
}
