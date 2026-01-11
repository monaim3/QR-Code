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
import WebsiteUrlMobileFramBg from "@/public/images/generator_img/website url.webp";
import BusinessPage from "@/public/images/generator_img/Business page.webp";
import Facebook from "@/public/images/generator_img/Facebook.webp";
import Vcard from "@/public/images/generator_img/vcard.webp";
import Pdf from "@/public/images/generator_img/pdf.webp";
import Images from "@/public/images/generator_img/Images.webp";
import SocialMedia from "@/public/images/generator_img/Social media.webp";
import Video from "@/public/images/generator_img/Video.webp";
import SimpleText from "@/public/images/generator_img/Simple text.webp";
import App from "@/public/images/generator_img/App.webp";
import Menu from "@/public/images/generator_img/Menu.webp";
import Wifi from "@/public/images/generator_img/wifi.webp";
import Breadcrumb from "../../components/generator/Breadcrumb"


import WifiQr from "@/components/icons/wifi-qr";
import CreateArrow from "@/components/icons/create_arrow";
import { useRef, useState } from "react";
import Image from "next/image";
const qrTypes = [
  {
    id: "website-url",
    title: "Website URL",
    description: "Link to a website of your choice",
    href: "/generator/website-url",
    icon: <WebsiteUrlQr />,
    mobilePreview: WebsiteUrlMobileFramBg,
  },
  {
    id: "vcard",
    title: "vCard",
    description: "Share your electronic business card",
    href: "/generator/vcard",
    icon: <VcardQr />,
    mobilePreview: Vcard,
  },
  {
    id: "pdf",
    title: "PDF",
    description: "Show a PDF",
    href: "/generator/pdf",
    icon: <PdfQr />,
    mobilePreview: Pdf,
  },
  {
    id: "images",
    title: "Images",
    description: "Display an image gallery",
    href: "/generator/images",
    icon: <ImagesQr />,
    mobilePreview: Images,
  },
  {
    id: "social-media",
    title: "Social Media",
    description: "Share your social media channels",
    href: "/generator/social-media",
    icon: <SocialQr />,
    mobilePreview: SocialMedia,
  },
  {
    id: "video",
    title: "Video",
    description: "Share one or multiple videos",
    href: "/generator/video",
    icon: <VideoQr />,
    mobilePreview: Video,
  },
  {
    id: "simple-text",
    title: "Simple Text",
    description: "Display a body of text",
    href: "/generator/simple-text",
    icon: <SimpleTextQr />,
      mobilePreview: SimpleText,
  },
  {
    id: "business-page",
    title: "Business Page",
    description: "Share your business information",
    href: "/generator/business-page",
    icon: <BusinessQr />,
      mobilePreview: BusinessPage,
  },
  {
    id: "facebook",
    title: "Facebook",
    description: "Share your Facebook page",
    href: "/generator/facebook",
    icon: <FacebookQr />,
    mobilePreview: Facebook,
  },
  {
    id: "wifi",
    title: "Wi-Fi",
    description: "Connect to a wireless network",
    href: "/generator/wifi",
    icon: <WifiQr />,
    mobilePreview: Wifi,
  },
  {
    id: "app",
    title: "App",
    description: "Link to the iOS App Store/Google Play",
    href: "/generator/app",
    icon: <AppQr />,
    mobilePreview: App,
  },
  {
    id: "menu",
    title: "Menu",
    description: "Create a digital restaurant menu",
    href: "/generator/menu",
    icon: <MenuQr />,
    mobilePreview: Menu,
  },
];

interface ArrowProps {
  hideOnMobile?: boolean;
}

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

function Arrow({ hideOnMobile = false }: ArrowProps) {
  return (
    <div className={cn(
      "absolute top-[78px] left-[-50px] arrow-create-page",
      hideOnMobile && "hidden lg:block" // hidden on mobile if prop is true
    )}>
      <CreateArrow />
    </div>
  );
}

interface GeneratorProps {
  title?: string,
  showArrow?: boolean;
}

export default function GeneratorPage({ showArrow = false, title = 'Choose QR code type' }: GeneratorProps) {
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
        <div className={`absolute inset-0 top-0.3 ${hoveredType || isLeaving ? 'opacity-0 z-0' : 'opacity-100 z-10'}`}>
          <InitialQR />
        </div>
        
        {qrTypes.map((type) => (
          <div
            key={type.id}
            className={`absolute inset-0 top-0.3 transition-opacity duration-500 ease-in-out ${
              hoveredType === type.id ? 'opacity-100 z-20' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <Image
              src={type.mobilePreview}
              alt={type.title}
              fill
              className="object-cover object-top"
              priority={hoveredType === type.id}
            />
          </div>
        ))}
      </>
    );
  };
  return (
    <div className="bg-[var(--Generator-Background)] pb-20 desktop:pb-28">
      <div className="desktop:max-w-[1256px] desktop:mx-auto relative">
        {/* Arrow: hide on mobile */}
       { showArrow ? <Arrow hideOnMobile /> : <div></div>}
         <Container>
         <div className="desktopDashboard:py-12">
          <h1
          className={cn(
            "text-[24px] desktop:text-[32px] font-bold text-[var(--Black)] leading-[32px] desktop:leading-[40px] desktop:mb-[32px]",
            showArrow ? "block" : "hidden desktop:block"
          )}
        >
          {title}
        </h1>
          <div className="block lg:hidden">
           {showArrow ? <Breadcrumb /> : <div></div>}
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
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:sticky desktopDashboard:top-12">
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
