"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

class QrType {
  id: number;
  title: string;
  tabImagePath: string;
  contentDescription?: string;
  contentImagePath?: string;

  constructor(
    id: number,
    title: string,
    tabImagePath: string,
    contentDescription?: string,
    contentImagePath?: string
  ) {
    this.id = id;
    this.title = title;
    this.tabImagePath = tabImagePath;
    this.contentDescription = contentDescription;
    this.contentImagePath = contentImagePath;
  }
}

const QrTypeData = [
  new QrType(
    1,
    "Website Url",
    "/images/qr_types/website_url.svg",
    "Your QR code will open any URL, website or webpage you link it to. By simply scanning your unique QR code with a smartphone, users will conveniently open the webpage you chose. Easy, fast, professional!",
    "/images/qr_types/half_device_website.svg"
  ),
  new QrType(
    2,
    "Vcard",
    "/images/qr_types/vcard.svg",
    "Enhance the value of your electronic business card by adding a QR code. This gives viewers an easy way to access more information about you or your company. An added bonus: you can edit the QR content whenever you like.",
    "/images/qr_types/half_device_vcard.svg"
  ),
  new QrType(
    3,
    "PDF",
    "/images/qr_types/pdf.svg",
    "Put all the information that matters at your clients' and customers' fingertips. With a customizable QR code, they can access PDF files rich with content. And after a quick download, they can easily share or save.",
    "/images/qr_types/half_device_pdf.svg"
  ),
  new QrType(
    4,
    "Images",
    "/images/qr_types/Images.svg",
    "If you're in an industry that relies heavily on images to promote your brand, why not use a QR code to link to an image gallery in a snap? Showcase real estate, consumer goods, food and furniture with ease.",
    "/images/qr_types/half_device_image.svg"
  ),
  new QrType(
    5,
    "Social Media",
    "/images/qr_types/social_media.svg",
    "One QR code can open the door to all of your social media channels. Make it simple for users to follow you on Facebook, Instagram, Twitter or wherever they like to hang out online.",
    "/images/qr_types/half_device_socialmedia.svg"
  ),
  new QrType(
    6,
    "Video",
    "/images/qr_types/video.svg",
    "Add a QR code to a brochure, poster, mailer or any other platform to unlock instant access to video content. Make your print media more dynamic, capture attention and boost your brand appeal.",
    "/images/qr_types/half_device_video.svg"
  ),
  new QrType(
    7,
    "Simple Text",
    "/images/qr_types/simple_text.svg",
    "From product descriptions to serial numbers to information cards, any text can be accessed immediately with a custom QR code. Make your product more engaging and change the content in real time.",
    "/images/qr_types/half_device_text.svg"
  ),
  new QrType(
    8,
    "Business Pages",
    "/images/qr_types/business_page.svg",
    "Showcase your company information with a business page QR code. This simple, streamlined landing page can include your business details, opening hours and any other key info. Add a button to make booking an appointment effortless.",
    "/images/qr_types/half_device_business.svg"
  ),
  new QrType(
    9,
    "Facebook",
    "/images/qr_types/facebook.svg",
    "Want more likes and shares? Boost the impact of your print media by adding a QR code that links to your Facebook page. It's all about new ways to build your audience.",
    "/images/qr_types/half_device_facebook.svg"
  ),
  new QrType(
    10,
    "WiFi",
    "/images/qr_types/wi_fi.svg",
    "",
    "/images/qr_types/half_device_wifi.svg"
  ),
  new QrType(
    11,
    "App",
    "/images/qr_types/app.svg",
    "",
    "/images/qr_types/half_device_app.svg"
  ),
  new QrType(
    12,
    "Menu",
    "/images/qr_types/menu.svg",
    "",
    "/images/qr_types/half_device_menue.svg"
  ),
];

export default function QrTypes() {
  const [activeTab, setActiveTab] = React.useState(QrTypeData[0].id);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen desktop:px-8 px-5 desktop:py-20 py-16 bg-[radial-gradient(circle,#334A56,#2F3E46)]">
      <h1 className="desktop:text-4xl text-2xl font-bold text-center">
        <span className="text-white pb-4">QR codes for every use</span>
      </h1>
      <h3 className="desktop:text-1.5xl text-sm font-regular text-center px-3 pt-2 pb-8">
        <span className="text-white/60">
          Whatever content you want to share, there’s a QR code for it. Click
          the icons below to explore options and see examples.
        </span>
      </h3>
      <div className="w-full max-w-6xl mx-auto desktop:px-4">
        <div
          ref={scrollContainerRef}
          className="flex gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseDown={(e: React.MouseEvent<HTMLDivElement>) => {
            const container = scrollContainerRef.current;
            if (!container) return;

            const startX = e.pageX - container.offsetLeft;
            const scrollLeft = container.scrollLeft;

            const onMouseMove = (moveEvent: MouseEvent) => {
              const x = moveEvent.pageX - container.offsetLeft;
              const walk = (x - startX) * 2;
              container.scrollLeft = scrollLeft - walk;
            };

            const onMouseUp = () => {
              document.removeEventListener("mousemove", onMouseMove);
              document.removeEventListener("mouseup", onMouseUp);
            };

            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
          }}>
          {QrTypeData.map((qr) => {
            const isActive = activeTab === qr.id;
            return (
              <button
                key={qr.id}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => setActiveTab(qr.id)}
                className={`
                flex items-center gap-2 desktop:px-5 px-2 desktop:py-3 py-2 rounded-lg font-medium
                transition-all duration-200
                whitespace-nowrap
                ${
                  isActive
                    ? "bg-[#01A56D] text-white shadow-lg"
                    : "bg-white/10 text-slate-200 hover:bg-slate-500"
                }
            `}>
                <Image
                  src={qr.tabImagePath}
                  alt={qr.title}
                  width={36}
                  height={26}
                  className="flex-shrink-0"
                />
                <span className="font-sans font-normal whitespace-nowrap">
                  {qr.title}
                </span>
              </button>
            );
          })}
        </div>
        <div className="flex flex-col desktop:flex-row justify-center items-center desktop:items-start desktop:pt-[56px] pt-6 gap-[48px]">
          {/* Left: Image */}
          <div className="rounded-t-lg bg-white/10 px-[40px] pt-[40px] desktop:px-[80px] desktop:pt-[80px] shadow-lg w-full max-w-[438px] desktop:w-[438px] h-auto desktop:h-[330px] flex justify-center">
            <Image
              src={
                QrTypeData.find((qr) => qr.id === activeTab)
                  ?.contentImagePath ||
                "/images/qr_types/website_url_example.png"
              }
              alt={
                QrTypeData.find((qr) => qr.id === activeTab)?.title ||
                "QR Code Example"
              }
              width={350}
              height={350}
              className="object-contain"
            />
          </div>

          {/* Right: Text */}
          <div className="flex flex-col justify-center items-center desktop:items-start w-full max-w-[438px] desktop:w-[438px] h-auto desktop:h-[330px]">
            <h2 className="text-2xl font-bold text-center desktop:text-left text-white pb-2">
              {QrTypeData.find((qr) => qr.id === activeTab)?.title}
            </h2>
            <h1 className="text-sm font-normal text-center desktop:text-start text-white pb-4">
              {QrTypeData.find((qr) => qr.id === activeTab)?.contentDescription}
            </h1>
            <Button className="w-full desktop:w-auto text-white bg-[#01A56D] hover:bg-[#018f5f]">
              Create QR Code
            </Button>
            <div className="flex flex-row justify-center desktop:justify-start items-center pt-8 gap-4">
              <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-black transition-colors cursor-pointer">
                <SlArrowLeft className="text-white w-4 h-4" />
              </div>
              <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-black transition-colors cursor-pointer">
                <SlArrowRight className="text-white w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
