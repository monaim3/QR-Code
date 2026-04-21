"use client";
import MobileFrame from "@/components/common/MobileFrame";
import Container from "@/components/common/parent-container";
import InitialQR from "@/components/generator/InitialQR";
import QRTypeCard from "@/components/generator/QRTypeCard";
import AppQr from "@/components/icons/app-qr";
import BusinessQr from "@/components/icons/business-qr";
import FacebookQr from "@/components/icons/facebook-qr";
import ImagesQr from "@/components/icons/Images-qr";
import MenuQr from "@/components/icons/menu-qr";
import PdfQr from "@/components/icons/pdf-qr";
import SimpleTextQr from "@/components/icons/simple-text-qr";
import SocialQr from "@/components/icons/social-qr";
import VcardQr from "@/components/icons/vcard-qr";
import VideoQr from "@/components/icons/video-qr";
import WebsiteUrlQr from "@/components/icons/website-url-qr";
import WifiQr from "@/components/icons/wifi-qr";
import { useRef, useState } from "react";
import Breadcrumb from "@/components/generator/Breadcrumb";
import { cn } from "@/lib/utils";
import WebsiteUrlPreview from "@/components/generator/Website_Url_Preview";
import PdfPreView from "@/components/generator/pdf/pdf-preview";
import ImagesPreview from "@/components/generator/Images/ImagesPreview";
import SocialPreView from "@/components/generator/socialMedia/social-preview";
import VideoPreView from "@/components/generator/video/video-preview";
import SimpleTextPreview from "@/components/generator/SimpleText/SimpleTextPreview";
import BusinessPreview from "@/components/generator/businessPage/BusinessPreview";
import FacebookPreview from "@/components/generator/Facebook/FacebookPreview";
import WifiPreview from "@/components/generator/Wifi/WifiPreview";
import AppPreView from "@/components/generator/app/app-preview";
import MenuPreview from "@/components/generator/menu/MenuPreview";
import VCardPreview from "@/components/generator/vcard/VCardPreview";

const qrTypes = [
  {
    id: "website-url",
    title: "Website URL",
    description: "Link to a website of your choice",
    href: "/qr-codes/generator/website-url",
    icon: <WebsiteUrlQr />,
    mobilePreview: <WebsiteUrlPreview url={""} />,
  },
  {
    id: "vcard",
    title: "vCard",
    description: "Share your electronic business card",
    href: "/qr-codes/generator/vcard",
    icon: <VcardQr />,
    mobilePreview: <VCardPreview />,
  },
  {
    id: "pdf",
    title: "PDF",
    description: "Show a PDF",
    href: "/qr-codes/generator/pdf",
    icon: <PdfQr />,
    mobilePreview: <PdfPreView />,
  },
  {
    id: "images",
    title: "Images",
    description: "Display an image gallery",
    href: "/qr-codes/generator/images",
    icon: <ImagesQr />,
    mobilePreview: <ImagesPreview />,
  },
  {
    id: "social-media",
    title: "Social Media",
    description: "Share your social media channels",
    href: "/qr-codes/generator/social-media",
    icon: <SocialQr />,
    mobilePreview: <SocialPreView />,
  },
  {
    id: "video",
    title: "Video",
    description: "Share one or multiple videos",
    href: "/qr-codes/generator/video",
    icon: <VideoQr />,
    mobilePreview: <VideoPreView />,
  },
  {
    id: "simple-text",
    title: "Simple Text",
    description: "Display a body of text",
    href: "/qr-codes/generator/simple-text",
    icon: <SimpleTextQr />,
    mobilePreview: <SimpleTextPreview />,
  },
  {
    id: "business-page",
    title: "Business Page",
    description: "Share your business information",
    href: "/qr-codes/generator/business-page",
    icon: <BusinessQr />,
    mobilePreview: <BusinessPreview />,
  },
  {
    id: "facebook",
    title: "Facebook",
    description: "Share your Facebook page",
    href: "/qr-codes/generator/facebook",
    icon: <FacebookQr />,
    mobilePreview: <FacebookPreview />,
  },
  {
    id: "wifi",
    title: "Wi-Fi",
    description: "Connect to a wireless network",
    href: "/qr-codes/generator/wifi",
    icon: <WifiQr />,
    mobilePreview: <WifiPreview />,
  },
  {
    id: "app",
    title: "App",
    description: "Link to the iOS App Store/Google Play",
    href: "/qr-codes/generator/app",
    icon: <AppQr />,
    mobilePreview: <AppPreView />,
  },
  {
    id: "menu",
    title: "Menu",
    description: "Create a digital restaurant menu",
    href: "/qr-codes/generator/menu",
    icon: <MenuQr />,
    mobilePreview: <MenuPreview />,
  },
];

export default function DashboardGenerator() {
  const [hoveredType, setHoveredType] = useState<string | null>(null);
  const [isLeaving, setIsLeaving] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (typeId: string) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsLeaving(false);
    setHoveredType(typeId);
  };

  const handleMouseLeave = () => {
    setIsLeaving(true);
    timeoutRef.current = setTimeout(() => {
      setHoveredType(null);
      setIsLeaving(false);
    }, 1000);
  };

  const getCurrentPreview = () => {
    return (
      <>
        <div
          className={`absolute inset-0 top-0.3 ${
            hoveredType || isLeaving ? "opacity-0 z-0" : "opacity-100 z-10"
          }`}
        >
          <InitialQR />
        </div>

        {qrTypes.map((type) => (
          <div
            key={type.id}
            className={`absolute inset-0 top-0.3 transition-opacity duration-500 ease-in-out ${
              hoveredType === type.id
                ? "opacity-100"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {type.mobilePreview}
          </div>
        ))}
      </>
    );
  };
  return (
    <div className="bg-[var(--Generator-Background)] pb-20 desktop:pb-28 w-full">
      <div className="desktop:max-w-[1256px] desktop:mx-auto relative">
        <Container>
          <div className="desktop:py-12">
            <h1
              className={cn(
                "pt-6 desktop:pt-0 text-[24px] desktop:text-[32px] font-bold text-[var(--Black)] leading-[32px] desktop:leading-[40px] desktop:mb-[32px] hidden desktop:block",
              )}
            >
              Choose QR code type
            </h1>
            <div className="block desktop:hidden">
              {<Breadcrumb useMobileSteps={true} />}
            </div>
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 desktopDashboard:gap-5 generator-items-create">
                  {qrTypes.map((type) => (
                    <div
                      key={type.id}
                      onMouseEnter={() => handleMouseEnter(type.id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <QRTypeCard
                        icon={type.icon}
                        title={type.title}
                        description={type.description}
                        href={type.href}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden mt-6 lg:flex lg:items-center lg:justify-center lg:sticky desktopDashboard:top-12">
                <MobileFrame>
                  <div className="w-full h-full rounded-[32px] overflow-hidden relative pt-12">
                    {getCurrentPreview()}
                  </div>
                </MobileFrame>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
