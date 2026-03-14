"use client";
import { useState } from "react";
import SignUpElements from "../../components/signup/sign-up-element";
import CurverLine from "../../components/icons/curved-line";
import QrCode4 from "@/components/icons/qr-code-4";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    imagePath: "/images/step-1.svg",
    title: "Pick your QR code content",
    subTitle:
      "Choose what you want to share — link websites, PDFs, menus, videos, apps, and more!",
  },
  {
    id: 2,
    imagePath: "/images/step-2.svg",
    title: "Personalize the design",
    subTitle:
      "Easily customize your QR code with logos, colors, frames, patterns, and styles at QReate.com™.",
  },
  {
    id: 3,
    imagePath: "/images/step-3.svg",
    title: "Download your QR code",
    subTitle:
      "Get your QR code in PNG, SVG, or JPG format. Print or share it online — it’s that simple!",
  },
];

export default function SignupV2Body() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  return (
    <div className="flex min-h-screen w-full desktop:overflow-x-hidden">
      {/* Left Panel: smaller width */}
      <div className="desktop:w-1/12">
        {/* Can leave empty or add content */}
      </div>

      {/* Middle Panel */}
      <div className="desktop:flex flex-col w-full desktop:w-1/3 justify-center items-end relative">
        <div className="absolute top-0 left-0 right-0 desktop:top-5 desktop:left-auto w-full desktop:max-w-[520px] h-16 desktop:h-auto px-4 desktop:p-0 flex items-center justify-start border-b desktop:border-0 border-[var(--Boarder-Grey)] bg-white desktop:bg-transparent backdrop-blur-[20px]">
          <Link
            href={"/"}
            className="bg-white desktop:bg-transparent flex items-center gap-2"
          >
            <QrCode4 />
            <span className="text-[var(--Black)] font-roboto text-2xl font-bold leading-8">
              QRCenter
            </span>
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center px-[20px] desktop:px-0 pb-14 pt-[120px] desktop:pt-[86px] desktop:max-w-[520px]">
          <div className="bg-white desktop:bg-transparent shadow-card desktop:shadow-none px-4 py-6 desktop:p-0 desktop:pr-12 rounded-[10px]">
            <SignUpElements socialRow={true} withRightPannel={false} />
          </div>
        </div>
        {/* <div className="h-[120px]"></div> */}
      </div>

      {/* Right Panel: take remaining space */}
      <div className="hidden desktop:flex flex-1 relative bg-gradient-to-b from-[#334A56] to-[#2F3E46] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <CurverLine className="pt-[120px]" />
        </div>
        {/* Absolute overlay, perfectly centered */}
        <div className="flex items-center justify-center pt-[20vh]">
          <div className="relative w-[438px] flex flex-col items-center justify-center text-center">
            <div className="relative w-full">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 linear w-full ${
                    index === currentTestimonial
                      ? "opacity-100 translate-x-0 relative"
                      : index < currentTestimonial
                        ? "opacity-0 -translate-x-full absolute top-0 left-0 right-0"
                        : "opacity-0 translate-x-full absolute top-0 left-0 right-0"
                  } flex flex-col items-center`}
                >
                  <div className="w-full relative flex flex-col items-center gap-[0px] p-10 rounded-[24px] border border-white/60 bg-white/20">
                    <div className="absolute top-2 right-2">
                      <div className="bg-[#FFFFFF99] size-10 rounded-full flex items-center justify-center">
                        <span className="text-[18px] leading-[26px] font-semibold">
                          {testimonial.id}
                        </span>
                      </div>
                    </div>
                    <img
                      src={testimonial.imagePath}
                      alt="Icon"
                      className="w-[200px] h-[160px]"
                    />
                    <h2 className="text-[18px] leading-[26px] font-bold text-white pt-[24px]">
                      {testimonial.title}
                    </h2>
                    <p className="text-[15px] leading-[24px] font-regular text-white pt-[8px]">
                      {testimonial.subTitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center space-x-2 mt-4 desktop:mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-[16px] w-[16px] rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-white"
                      : "border border-white"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
