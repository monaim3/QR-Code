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
const qrTypes = [
  {
    id: "website-url",
    title: "Website URL",
    description: "Link to a website of your choice",
    href: "/generator/website-url",
    icon: <WebsiteUrlQr />,
  },
  {
    id: "vcard",
    title: "vCard",
    description: "Share your electronic business card",
    href: "/generator/vcard",
    icon: <VcardQr />,
  },
  {
    id: "pdf",
    title: "PDF",
    description: "Show a PDF",
    href: "/generator/pdf",
    icon: <PdfQr />,
  },
  {
    id: "images",
    title: "Images",
    description: "Display an image gallery",
    href: "/generator/images",
    icon: <ImagesQr />,
  },
  {
    id: "social-media",
    title: "Social Media",
    description: "Share your social media channels",
    href: "/generator/social-media",
    icon: <SocialQr />,
  },
  {
    id: "video",
    title: "Video",
    description: "Share one or multiple videos",
    href: "/generator/video",
    icon: <VideoQr />,
  },
  {
    id: "simple-text",
    title: "Simple Text",
    description: "Display a body of text",
    href: "/generator/simple-text",
    icon: <SimpleTextQr />,
  },
  {
    id: "business-page",
    title: "Business Page",
    description: "Share your business information",
    href: "/generator/business-page",
    icon: <BusinessQr />,
  },
  {
    id: "facebook",
    title: "Facebook",
    description: "Share your Facebook page",
    href: "/generator/facebook",
    icon: <FacebookQr />,
  },
  {
    id: "wifi",
    title: "Wi-Fi",
    description: "Connect to a wireless network",
    href: "/generator/wifi",
    icon: <WifiQr />,
  },
  {
    id: "app",
    title: "App",
    description: "Link to the iOS App Store/Google Play",
    href: "/generator/app",
    icon: <AppQr />,
  },
  {
    id: "menu",
    title: "Menu",
    description: "Create a digital restaurant menu",
    href: "/generator/menu",
    icon: <MenuQr />,
  },
];

export default function GeneratorPage() {
  return (
    <div className="bg-[var(--Generator-Background)] pb-28">
      <Container>
        <div className=" desktopDashboard:py-12">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-[var(--Black)] var(--font-poppins) mb-4 pt-2">
                Choose QR code type
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 desktopDashboard:gap-5">
                {qrTypes.map((type) => (
                  <QRTypeCard
                    key={type.id}
                    icon={type.icon}
                    title={type.title}
                    description={type.description}
                    href={type.href}
                  />
                ))}
              </div>
            </div>
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:sticky desktopDashboard:top-12">
              <MobileFrame>
                <InitialQR />
              </MobileFrame>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
