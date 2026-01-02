import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function QrInstraction() {
  return (
    <main className="flex flex-col gap-4 items-center justify-center min-w-screen desktop:px-[50px] px-5 desktop:py-[160px] py-16">
      <h1 className="text-4xl font-bold text-center">
        <span className="text-gray-900">
          How to create your custom QR code?
        </span>
      </h1>
      <h3 className="text-1.5xl font-regular text-center px-3">
        <span className="text-gray-900">
          Turn ordinary links into powerful visual connections
        </span>
      </h3>
      <div className="flex flex-row flex-wrap gap-8 desktop:pt-[80px] pt-10 pb-12 justify-center">
        <StepCard
          imagePath="/images/steps/pick.svg"
          title="Pick your QR code content"
          subtitle1="Choose what you want to share — link websites,"
          subtitle2="PDFs, menus, videos, apps, and more!"
        />
        <StepCard
          imagePath="/images/steps/personalized.svg"
          title="Personalize the design"
          subtitle1="Easily customize your QR code with logos, colors,"
          subtitle2="frames, patterns, and styles at QReate.com™."
        />
        <StepCard
          imagePath="/images/steps/download.svg"
          title="Download your QR code"
          subtitle1="Get your QR code in PNG, SVG, or JPG format. Print"
          subtitle2="or share it online — it’s that simple!"
        />
      </div>
      <Button className="text-white bg-[#01A56D] hover:bg-[#018f5f]">
        Create QR Code
      </Button>
    </main>
  );
}

function StepCard({
  imagePath,
  title,
  subtitle1,
  subtitle2,
}: {
  imagePath: string;
  title: string;
  subtitle1: string;
  subtitle2: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={imagePath}
        alt={title}
        width={100}
        height={80}
        className="object-contain"
      />
      <h2 className="text-lg font-bold text-center pt-6">{title}</h2>
      <span className="text-base text-center text-gray-600 pt-2">
        {subtitle1}
      </span>
      <span className="text-base text-center text-gray-600">{subtitle2}</span>
    </div>
  );
}
