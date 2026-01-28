import PlusCircle from "@/components/icons/plus-circle";
import User from "@/components/icons/user";
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import ContactView from "./ContactView";
import { ScrollArea } from "@/components/ui/scroll-area";
import CompanyView from "./CompanyView";
import SummaryView from "./SummaryView";
import SocialMediaView from "./SocialMediaView";
import { useEffect } from "react";
import { setIsPreviewWelcomeScreen } from "@/store/slices/vCardSlice";
import { useDispatch } from "react-redux";

export default function VCardPreview() {
  const dispatch = useDispatch();
  const vCard = useAppSelector((state) => state.vCard);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setIsPreviewWelcomeScreen(false));
    }, 1000);
  }, [vCard.isPreviewWelcomeScreen, dispatch]);

  const textColor = () => {
    switch (vCard.primaryColor) {
      case "#ECEDF1":
        return "text-[var(--Black)]";
      case "#ECECF0":
        return "text-[var(--Black)]";
      case "#DAEBF6":
        return "text-[var(--Black)]";
      case "#FFFFFF":
        return "text-[var(--Black)]";
      default:
        return "text-white";
    }
  };

  return (
    <ScrollArea className="w-full h-full">
      <div
        className={`w-full h-full bottom-0 left-0 flex justify-center items-center bg-white z-[3] absolute transition-transform duration-500 ease-in-out ${vCard.isPreviewWelcomeScreen ? "translate-y-0" : "translate-y-full"}`}
      >
        {vCard.welcomeScreen && (
          <Image src={vCard.welcomeScreen} alt="Background" fill />
        )}
      </div>
      <div className="w-full h-full flex flex-col items-center gap-6 pb-8 pt-[66.46px] px-5 relative">
        <div
          className="absolute left-0 top-0 h-[296px] w-full z-[1]"
          style={{ backgroundColor: vCard.primaryColor }}
        />

        <div className="flex flex-col items-center gap-2 stretch relative z-[2]">
          {/* Image */}
          <div className="flex w-[108px] h-[108px] justify-center items-center gap-2 aspect-square rounded-full bg-[var(--Generator-Background)] border-4 border-white mx-auto">
            {vCard.personalInfo.image ? (
              <Image
                src={vCard.personalInfo.image}
                alt="User"
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <User />
            )}
          </div>

          {/* Name */}
          <h4 className={`text-[18px] leading-[26px] font-bold ${textColor()}`}>
            {vCard.personalInfo.fullName || "Jane Cooper"}
          </h4>

          {/* Button */}
          <button
            className="flex h-10 px-6 py-2 justify-center items-center gap-2 self-stretch rounded-full w-auto "
            style={{ backgroundColor: vCard.secondaryColor }}
          >
            <PlusCircle
              className={`${vCard.secondaryColor === "#FFFFFF" ? "text-black" : "text-white"}`}
            />
            <span
              className={`text-[12px] leading-[20px] ${vCard.secondaryColor === "#FFFFFF" ? "text-black" : "text-white"}`}
            >
              Add contact
            </span>
          </button>
        </div>
        <div className="relative z-[2] flex flex-col items-start gap-2 self-stretch">
          <ContactView />
          <CompanyView />
          <SummaryView />
          <SocialMediaView />
        </div>
      </div>
    </ScrollArea>
  );
}
