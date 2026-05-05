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
import Breadcrumb from "../../components/generator/Breadcrumb";
import WifiQr from "@/components/icons/wifi-qr";
import CreateArrow from "@/components/icons/create_arrow";
import { useRef, useState } from "react";
import { useT } from "@/utils/t";
import WebsiteUrlPreview from "@/components/generator/Website_Url_Preview";
import PdfInitialPreview from "@/components/generator/pdf/PdfInitialPreview";
import ImagesInitialPreview from "@/components/generator/Images/ImagesInitialPreview";
import SocialInitialPreview from "@/components/generator/socialMedia/SocialInitialPreview";
import VideoInitialPreview from "@/components/generator/video/VideoInitialPreview";
import SimpleTextInitialPreview from "@/components/generator/SimpleText/SimpleTextInitialPreview";
import FacebookInitialPreview from "@/components/generator/Facebook/FacebookInitialPreview";
import WifiInitialPreview from "@/components/generator/Wifi/WifiInitialPreview";
import AppInitialPreview from "@/components/generator/app/AppInitialPreview";
import VCardInitialPreview from "@/components/generator/vcard/VCardInitialPreview";
import BusinessInitialPreview from "@/components/generator/businessPage/BusinessInitialPreview";
import MenuInitialPreview from "@/components/generator/menu/InitialPreview";

interface ArrowProps {
  hideOnMobile?: boolean;
}

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

function Arrow({ hideOnMobile = false }: ArrowProps) {
  return (
    <div
      className={cn(
        "absolute top-[102px] left-[-50px] arrow-create-page",
        hideOnMobile && "hidden lg:block",
      )}
    >
      <CreateArrow />
    </div>
  );
}

interface GeneratorProps {
  title?: string;
  showArrow?: boolean;
}

export default function GeneratorPage({
  showArrow = false,
  title,
}: GeneratorProps) {
  const t = useT();

  const qrTypes = [
    {
      id: "website-url",
      title: t("generator__step_1__qr_type_cards__url__title"),
      description: t("generator__step_1__qr_type_cards__url__description"),
      href: "/generator/website-url",
      icon: <WebsiteUrlQr />,
      mobilePreview: <WebsiteUrlPreview url={""} />,
    },
    {
      id: "vcard",
      title: t("generator__step_1__qr_type_cards__vcard__title"),
      description: t("generator__step_1__qr_type_cards__vcard__description"),
      href: "/generator/vcard",
      icon: <VcardQr />,
      mobilePreview: <VCardInitialPreview />,
    },
    {
      id: "pdf",
      title: t("generator__step_1__qr_type_cards__pdf__title"),
      description: t("generator__step_1__qr_type_cards__pdf__description__changed"),
      href: "/generator/pdf",
      icon: <PdfQr />,
      mobilePreview: <PdfInitialPreview />,
    },
    {
      id: "images",
      title: t("generator__step_1__qr_type_cards__images__title"),
      description: t("generator__step_1__qr_type_cards__images__description"),
      href: "/generator/images",
      icon: <ImagesQr />,
      mobilePreview: <ImagesInitialPreview />,
    },
    {
      id: "social-media",
      title: t("generator__step_1__qr_type_cards__social_media__title"),
      description: t("generator__step_1__qr_type_cards__social_media__description__changed"),
      href: "/generator/social-media",
      icon: <SocialQr />,
      mobilePreview: <SocialInitialPreview />,
    },
    {
      id: "video",
      title: t("generator__step_1__qr_type_cards__video__title"),
      description: t("generator__step_1__qr_type_cards__video__description"),
      href: "/generator/video",
      icon: <VideoQr />,
      mobilePreview: <VideoInitialPreview />,
    },
    {
      id: "simple-text",
      title: t("generator__step_1__qr_type_cards__plain_text__title"),
      description: t("generator__step_1__qr_type_cards__plain_text__description"),
      href: "/generator/simple-text",
      icon: <SimpleTextQr />,
      mobilePreview: <SimpleTextInitialPreview />,
    },
    {
      id: "business-page",
      title: t("generator__step_1__qr_type_cards__business_page__title"),
      description: t("generator__step_1__qr_type_cards__business_page__description__changed"),
      href: "/generator/business-page",
      icon: <BusinessQr />,
      mobilePreview: <BusinessInitialPreview />,
    },
    {
      id: "facebook",
      title: t("generator__step_1__qr_type_cards__facebook__title"),
      description: t("generator__step_1__qr_type_cards__facebook__description__changed"),
      href: "/generator/facebook",
      icon: <FacebookQr />,
      mobilePreview: <FacebookInitialPreview />,
    },
    {
      id: "wifi",
      title: t("generator__step_1__qr_type_cards__wifi__title"),
      description: t("generator__step_1__qr_type_cards__wifi__description"),
      href: "/generator/wifi",
      icon: <WifiQr />,
      mobilePreview: <WifiInitialPreview />,
    },
    {
      id: "app",
      title: t("generator__step_1__qr_type_cards__app__title"),
      description: t("generator__step_1__qr_type_cards__app__description"),
      href: "/generator/app",
      icon: <AppQr />,
      mobilePreview: <AppInitialPreview />,
    },
    {
      id: "menu",
      title: t("generator__step_1__qr_type_cards__menu__title"),
      description: t("generator__step_1__qr_type_cards__menu__description"),
      href: "/generator/menu",
      icon: <MenuQr />,
      mobilePreview: <MenuInitialPreview />,
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
    <div className="bg-[var(--Generator-Background)] pb-20 desktop:pb-28 min-h-[calc(100vh-73px)]">
      <div className="desktop:max-w-[1256px] desktop:mx-auto relative">
        {showArrow ? <Arrow hideOnMobile /> : <div></div>}
        <Container>
          <div>
            <h1
              className={cn(
                "pt-6 desktop:pt-[72px] text-[24px] desktop:text-[32px] font-bold text-[var(--Black)] leading-[32px] desktop:leading-[40px] desktop:mb-[32px]",
                showArrow ? "block" : "hidden desktop:block",
              )}
            >
              {title ?? t("generator__step_1__title")}
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
