import { ScrollArea } from "@/components/ui/scroll-area";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import { socialChannels } from "@/lib/socialChannels";
import Carousel from "@/components/generator/socialMedia/image-carousel";
import { ChevronRight } from "lucide-react";

export default function SocialPreView(){
  const dispatch = useDispatch();
  const social = useAppSelector((state) => state.social);

  const textColor = () => {
    switch (social.primaryColor) {
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

  const buttonTextColor = () => {
     switch (social.secondaryColor) {
      case "#232321":
        return "text-[White]";
      case "#ECECF0":
        return "text-[var(--Black)]";
      case "#DAEBF6":
        return "text-[var(--Black)]";
      case "#FFFFFF":
        return "text-[var(--Black)]";
        case "#ECEDF1":
        return "text-[var(--Black)]";
      default:
        return "text-white";
    }
  }

    return (
        <ScrollArea className="w-full h-full relative">
           <div
              className={`w-full h-full bottom-0 left-0 flex justify-center items-center bg-white z-[3] absolute transition-transform duration-500 ease-in-out ${social.isPreviewWelcomeScreen ? "translate-y-0" : "translate-y-full"}`}>
                 {social.welcomeScreen && (
                    <Image src={social.welcomeScreen} alt="Background" fill />
                  )}
                </div>
            <div className="absolute inset-0 w-full h-[145px]"
             style={{ backgroundColor: social.primaryColor }}
            />
            <div className="relative z-10 flex flex-col items-center px-4 pt-8 ">
                 <div className="absolute left-0 right-0 top-[32px] flex flex-col items-center justify-center px-4">
             <Carousel images={social.carousels}/>
             <p className="text-[18px] leading-[26px] font-bold text-[var(--Black)]">{social.socialInfo.headLine.trim() === "" ? "Scan & Connect" : social.socialInfo.headLine}</p>
             <p className="text-[10px] leading-[16px] font-regular text-[var(--Black)] text-center">{social.socialInfo.description.trim() === "" ? "Hello, I’m Mark. Explore my content and connect on social media." : social.socialInfo.description}</p>
             <div className="w-full pt-6">
                {social?.socialChannels?.map((channel,index)=>{
                  const findChannel = socialChannels.find((ch) => ch.id === channel.id);
                  const ChannelIcon = findChannel?.icon as React.ComponentType;
                  return (
                   <div 
                   key={"channel-"+index}
                   className="flex flex-row items-center justify-start h-[58px] rounded-[6px] mb-[6px] p-2 gap-2"
                   style={{ backgroundColor: social.secondaryColor }}
                   >
                    {channel.isIcon && ChannelIcon ? <ChannelIcon/> : 
                    <img src={channel.icon ?? ""} alt={channel?.name} className="w-6 h-6 object-contain"/>}
                    <div className="flex flex-col flex-1 items-start justify-start">
                        <p className={`text-[14px] leading-[22px] font-medium ${buttonTextColor()} text-denter`}>{channel.name}</p>
                        <p className={`text-[12px] leading-[20px] font-regular ${buttonTextColor()} text-denter`}>{channel.description}</p>
                    </div>
                    <ChevronRight height={16} width={16} className={`${buttonTextColor()}`}/>
                   </div>
                  );
                })}
             </div>
             <div className="flex gap-2 mt-4">
             </div>
            </div>
            </div>
        </ScrollArea>
    );
}