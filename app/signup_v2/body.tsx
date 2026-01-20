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
    subTitle: 'Choose what you want to share — link websites, PDFs, menus, videos, apps, and more!',
  },
  {
    id: 2,
    imagePath: "/images/step-2.svg",
    title: "Personalize the design",
    subTitle: 'Easily customize your QR code with logos, colors, frames, patterns, and styles at QReate.com™.',
  },
  {
    id: 3,
    imagePath: "/images/step-3.svg",
    title: "Download your QR code",
    subTitle: 'Get your QR code in PNG, SVG, or JPG format. Print or share it online — it’s that simple!',
  },
];

export default function SignupV2Body() {
   const [currentTestimonial, setCurrentTestimonial] = useState(0);
  return (
    <div className="flex min-h-screen w-full">
      {/* Left Panel: smaller width */}
      <div className="desktop:w-1/12">
        {/* Can leave empty or add content */}
      </div>

      {/* Middle Panel */}
      <div className="flex flex-col w-full desktop:w-1/3 items-start justify-start">
      <div className="w-full h-[64px]">
         <Link href={"/"} className="bg-white desktop:bg-transparent flex items-center gap-2 px-[20px] desktop:px-0 py-[8px]">
        <QrCode4 />
        <span className="text-[var(--Black)] font-roboto text-2xl font-bold leading-8">
          SmartQR
        </span>
      </Link>
      </div>
      <div className="px-[20px] desktop:px-0 pt-[56px] desktop:pt-[149px]">
        <div className="shadow-card md:shadow-none p-[16px] md:p-0 rounded-[10px]">
        <SignUpElements socialRow={true} />
      </div>
      </div>
      <div className="h-[120px]"></div>
      </div>

      {/* Right Panel: take remaining space */}
      <div className="hidden md:block flex-1 relative bg-gradient-to-b from-[#334A56] to-[#2F3E46] items-center justify-center min-h-screen">
       <CurverLine className="pt-[120px]" />
       {/* Absolute overlay, perfectly centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex flex-col items-center justify-center text-center w-[300px]">
          <div className="relative w-full">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ease-in-out w-full ${
                index === currentTestimonial
                  ? "opacity-100 translate-x-0 relative"
                  : index < currentTestimonial
                  ? "opacity-0 -translate-x-full absolute top-0 left-0 right-0"
                  : "opacity-0 translate-x-full absolute top-0 left-0 right-0"
              } flex flex-col items-center`}
            >
              <div className="w-[438px] flex flex-col items-center gap-[0px] p-[8px]
                rounded-[24px] border border-white/60 bg-white/20">
                  <div className="w-full flex justify-end">
                  <div className="bg-[#FFFFFF99] w-[40px] h-[40px] rounded-full flex items-center justify-center">
                    <p className="text-[18px] leading-[26px] font-semibold">{testimonial.id}</p>
                  </div>
                </div>
                  <img
                    src={testimonial.imagePath}
                    alt="My Icon"
                    className="w-[200px] h-[160px]"
                  />
                  <p className="text-[18px] leading-[26px] font-bold text-white pt-[24px]">{testimonial.title}</p>
                   <p className="text-[16px] leading-[24px] font-regular text-white pt-[8px] pb-[38px]">{testimonial.subTitle}</p>
                </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-2 mt-4 desktop:mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? "bg-emerald-500 w-6 desktop:w-8"
                  : "bg-gray-300 w-2 desktop:w-2 hover:bg-gray-400"
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
