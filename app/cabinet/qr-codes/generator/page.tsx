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
import { useT } from "@/utils/t";
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

export default function DashboardGenerator() {
  const t = useT();

  const qrTypes = [
    {
      id: "website-url",
      title: t("generator__step_1__qr_type_cards__url__title"),
      description: t("generator__step_1__qr_type_cards__url__description"),
      href: "/qr-codes/generator/website-url",
      icon: <WebsiteUrlQr />,
      mobilePreview: <WebsiteUrlPreview url={""} />,
    },
    {
      id: "vcard",
      title: t("generator__step_1__qr_type_cards__vcard__title"),
      description: t("generator__step_1__qr_type_cards__vcard__description"),
      href: "/qr-codes/generator/vcard",
      icon: <VcardQr />,
      mobilePreview: <VCardPreview />,
    },
    {
      id: "pdf",
      title: t("generator__step_1__qr_type_cards__pdf__title"),
      description: t("generator__step_1__qr_type_cards__pdf__description__changed"),
      href: "/qr-codes/generator/pdf",
      icon: <PdfQr />,
      mobilePreview: <PdfPreView />,
    },
    {
      id: "images",
      title: t("generator__step_1__qr_type_cards__images__title"),
      description: t("generator__step_1__qr_type_cards__images__description"),
      href: "/qr-codes/generator/images",
      icon: <ImagesQr />,
      mobilePreview: <ImagesPreview />,
    },
    {
      id: "social-media",
      title: t("generator__step_1__qr_type_cards__social_media__title"),
      description: t("generator__step_1__qr_type_cards__social_media__description__changed"),
      href: "/qr-codes/generator/social-media",
      icon: <SocialQr />,
      mobilePreview: <SocialPreView />,
    },
    {
      id: "video",
      title: t("generator__step_1__qr_type_cards__video__title"),
      description: t("generator__step_1__qr_type_cards__video__description"),
      href: "/qr-codes/generator/video",
      icon: <VideoQr />,
      mobilePreview: <VideoPreView />,
    },
    {
      id: "simple-text",
      title: t("generator__step_1__qr_type_cards__plain_text__title"),
      description: t("generator__step_1__qr_type_cards__plain_text__description"),
      href: "/qr-codes/generator/simple-text",
      icon: <SimpleTextQr />,
      mobilePreview: <SimpleTextPreview />,
    },
    {
      id: "business-page",
      title: t("generator__step_1__qr_type_cards__business_page__title"),
      description: t("generator__step_1__qr_type_cards__business_page__description__changed"),
      href: "/qr-codes/generator/business-page",
      icon: <BusinessQr />,
      mobilePreview: <BusinessPreview />,
    },
    {
      id: "facebook",
      title: t("generator__step_1__qr_type_cards__facebook__title"),
      description: t("generator__step_1__qr_type_cards__facebook__description__changed"),
      href: "/qr-codes/generator/facebook",
      icon: <FacebookQr />,
      mobilePreview: <FacebookPreview />,
    },
    {
      id: "wifi",
      title: t("generator__step_1__qr_type_cards__wifi__title"),
      description: t("generator__step_1__qr_type_cards__wifi__description"),
      href: "/qr-codes/generator/wifi",
      icon: <WifiQr />,
      mobilePreview: <WifiPreview />,
    },
    {
      id: "app",
      title: t("generator__step_1__qr_type_cards__app__title"),
      description: t("generator__step_1__qr_type_cards__app__description"),
      href: "/qr-codes/generator/app",
      icon: <AppQr />,
      mobilePreview: <AppPreView />,
    },
    {
      id: "menu",
      title: t("generator__step_1__qr_type_cards__menu__title"),
      description: t("generator__step_1__qr_type_cards__menu__description"),
      href: "/qr-codes/generator/menu",
      icon: <MenuQr />,
      mobilePreview: <MenuPreview />,
    },
  ];

  const [hoveredType, setHoveredType] = useState<string | null>(null);
  const [isLeaving, setIsLeaving] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (typeId: string) => {
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
              {t("generator__step_1__title")}
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
