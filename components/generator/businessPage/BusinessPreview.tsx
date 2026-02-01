import { ScrollArea } from "@/components/ui/scroll-area";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setIsPreviewWelcomeScreen } from "@/store/slices/businessSlice";
import Image from "next/image";
import { useEffect } from "react";
import BusinessInitialPreview from "./BusinessInitialPreview";
import OpenHoursPreview from "./OpenHoursPreview";
import LocationPreview from "./LocationPreview";
import FacilitiesPreview from "./FacilitiesPreview";
import SummaryPreview from "./SummaryPreview";
import ContactPreview from "./ContactPreview";
import SocialMediaPreview from "./SocialMediaPreview";

export default function BusinessPreview() {
  const dispatch = useAppDispatch();
  const business = useAppSelector((state) => state.business);

  const isInitialState =
    !business.businessImage &&
    !business.businessInfo.companyName &&
    !business.businessInfo.title &&
    !business.businessInfo.subTitle &&
    business.businessInfo.buttons.length === 0 &&
    business.primaryColor === "#6594FF" &&
    business.secondaryColor === "#FFFFFF" &&
    business.useWeekdaysTemplate === true &&
    business.weeklyOpeningHours[0].open.hour === "09" &&
    business.weeklyOpeningHours[0].open.minute === "00" &&
    business.weeklyOpeningHours[0].close.hour === "17" &&
    business.weeklyOpeningHours[0].close.minute === "00" &&
    business.openingHours.length === 0 &&
    !business.contactInfo.fullName &&
    !business.contactInfo.phoneNumber &&
    !business.contactInfo.website &&
    !business.contactInfo.email &&
    business.contactInfo.altPhoneNumbers.length === 0 &&
    business.contactInfo.altEmails.length === 0 &&
    !business.summary &&
    !business.street &&
    !business.postalCode &&
    !business.city &&
    !business.state &&
    !business.country &&
    !business.addressUrl &&
    business.socialChannels.length === 0 &&
    business.facilities.length === 0 &&
    !business.welcomeScreen &&
    !business.qrCodeName;

  const handleRedirect = (url: string) => {
    if (!url) return;

    // Ensure URL is properly formatted for external navigation
    let formattedUrl = url.trim();

    // Add protocol if missing (assume https for external URLs)
    if (
      !formattedUrl.startsWith("http://") &&
      !formattedUrl.startsWith("https://")
    ) {
      formattedUrl = `https://${formattedUrl}`;
    }

    const link = document.createElement("a");
    link.href = formattedUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(setIsPreviewWelcomeScreen(false));
    }, 1000);
  }, [business.isPreviewWelcomeScreen, dispatch]);

  return (
    <ScrollArea className="w-full h-full">
      {/* Welcome Screen */}
      <div
        className={`w-full h-full bottom-0 left-0 flex justify-center items-center bg-white z-[3] absolute transition-transform duration-500 ease-in-out ${business.isPreviewWelcomeScreen ? "translate-y-0" : "translate-y-full"}`}
      >
        {business.welcomeScreen && (
          <Image
            src={business.welcomeScreen}
            alt="Background"
            width={200}
            height={200}
            className="object-contain"
          />
        )}
      </div>

      {/* Initial Preview - show until any state changes */}
      {isInitialState ? (
        <BusinessInitialPreview />
      ) : (
        <div className="w-full h-full flex flex-col items-center gap-6 pb-8 pt-[58px] px-5 relative">
          <div
            className="absolute left-0 top-0 h-[123px] w-full z-[1]"
            style={{ backgroundColor: business.primaryColor }}
          />

          {business.businessImage && (
            <div className="w-full relative z-[2] h-[100px] bg-white rounded-[var(--Corner-Radius-4)] p-[2px] shadow-[0_4px_14px_0_rgba(54,66,140,0.16)]">
              <Image
                src={business.businessImage}
                alt="business"
                width={280}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>
          )}

          <div className="space-y-4 z-[2]">
            <div className="space-y-2">
              <div>
                <h4 className="text-[var(--Black)] font-bold text-[18px] leading-[26px] text-center">
                  {business.businessInfo.companyName}
                </h4>
                <p className="text-[var(--Dark-gray)] text-[10px] leading-[16px] text-center">
                  {business.businessInfo.title}
                </p>
              </div>

              <p className="text-[var(--Black)] text-[10px] leading-[16px] text-center w-[220px] mx-auto">
                {business.businessInfo.subTitle}
              </p>
            </div>

            {business.businessInfo.buttons.length > 0 && (
              <>
                {business.businessInfo.buttons.map((button, index) => (
                  <button
                    key={index}
                    onClick={() => handleRedirect(button.url)}
                    className="w-full rounded-[var(--Corner-Radius-6)] flex h-10 py-2 px-8 justify-center items-center gap-2 self-stretch text-white text-[12px] leading-[20px] border"
                    style={{
                      backgroundColor: business.secondaryColor,
                      color:
                        business.secondaryColor === "#FFFFFF"
                          ? "var(--Black)"
                          : "white",
                      borderColor:
                        business.secondaryColor === "#FFFFFF"
                          ? "var(--Black)"
                          : business.secondaryColor,
                    }}
                  >
                    {button.text}
                  </button>
                ))}
              </>
            )}

            <div className="w-full space-y-2">
              <OpenHoursPreview />
              <LocationPreview />
              <FacilitiesPreview />
              <SummaryPreview />
              <ContactPreview />
              <SocialMediaPreview />
            </div>
          </div>
        </div>
      )}
    </ScrollArea>
  );
}
