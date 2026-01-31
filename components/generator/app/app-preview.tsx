import { ScrollArea } from "@/components/ui/scroll-area";
import StructureCheck from "@/components/icons/structure-check";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import AppleAvailable from "@/components/icons/apple-available";
import PlayStoreAvailable from "@/components/icons/playstore-available";
import AmazonAvailable from "@/components/icons/amazon-available";
import MiStoreIcon from "@/components/icons/mi-available";

export default function AppPreView(){
  const dispatch = useDispatch();
  const app = useAppSelector((state) => state.app);

  const textColor = () => {
    switch (app.primaryColor) {
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
        <ScrollArea className="w-full h-full relative">
           <div
              className={`w-full h-full bottom-0 left-0 flex justify-center items-center bg-white z-[3] absolute transition-transform duration-500 ease-in-out ${app.isPreviewWelcomeScreen ? "translate-y-0" : "translate-y-full"}`}>
                 {app.welcomeScreen && (
                    <Image src={app.welcomeScreen} alt="Background" fill />
                  )}
                </div>
            <div className="absolute inset-0 w-full h-[96px]"
             style={{ backgroundColor: app.primaryColor }}
            />
            <div className="h-[80px] w-[80px] bg-white rounded-[20px] absolute left-[90px] right-[90px] top-[58px] shadow-card"/>
             <div>
                {app.appInfo.image === null || app.appInfo.image.trim() === "" ? 
                <div>
                 <div className="absolute w-[68px] h-[68px] rounded-[16px] bg-gradient-to-br from-[#EBA579] to-[#EB7986] left-[96px] right-[96px] top-[64px]"/>
                <div className="absolute h-10 w-10 left-[110px] right-[110px] top-[78px]">
                <StructureCheck/>
             </div>
                </div> : 
                <div className="absolute w-[68px] h-[68px] rounded-[16px] left-[96px] right-[96px] top-[64px]">
                <Image
                    src={app.appInfo.image}
                    alt="App Image"
                    width={68}
                    height={68}
                    className="rounded-[16px] object-cover w-full h-full"
                />
            </div>}
            </div>
            <div className="flex flex-col items-center mt-[150px] px-[20px]">
            <p className="text-[18px] leading-[26px] text-[var(--Black)] font-bold">
               {app.appInfo.appName?.trim() || "MindFlow"}
            </p>
            <p className="text-[10px] leading-[16px] text-[var(--Black)] font-regular">
             {app.appInfo.developer?.trim() || "CreativeCore Apps"}
            </p>
            <p className="text-[10px] leading-[16px] text-[var(--Black)] font-regular mt-[10px] text-center">
             {app.appInfo.description?.trim() || "Organize your tasks, streamline your day, and stay focused with smart, personalized tools."}
            </p>
            <div className="w-full">
              {app.appInfo.buttons.map((button,index)=> {
              return <div
              className="flex items-center justify-center bg-white border border-[var(--Boarder-Grey)] rounded-[10px] h-[40px] w-full max-w mt-2 cursor-pointer"
              onClick={() => window.open(button.url, "_blank")}>
              <p className="text-[12px] leading-[20px] text-[var(--Black)]">
                {button.text}
              </p>
            </div>
            })}
            </div>
            <div className="w-full pt-4">
              {app.appStoreLinks.map((button,index)=> {
              return <div className="h-[40px] bg-[var(--Black)] rounded-[10px] flex items-center justify-center mb-2">
                {button.storeName === "appStore" ? 
                <div className="h-[40px] w-full bg-[var(--Black)] rounded-[10px] flex items-center justify-center"
                onClick={() => window.open(button.storeUrl, "_blank")}>
                 <AppleAvailable/>
                </div> :
                 button.storeName === "goolgePlay" ?
                 <div className="h-[40px] w-full bg-[var(--Black)] rounded-[10px] flex items-center justify-center"
                 onClick={() => window.open(button.storeUrl, "_blank")}>
                 <PlayStoreAvailable/>
                </div> :
                   button.storeName === "amazon" ? 
                   <div className="h-[40px] w-full bg-[var(--Black)] rounded-[10px] flex items-center justify-center"
                   onClick={() => window.open(button.storeUrl, "_blank")}>
                 <AmazonAvailable/>
                </div> :
                    <div className="h-[40px] w-full bg-[var(--Black)] rounded-[10px] flex items-center justify-center"
                    onClick={() => window.open(button.storeUrl, "_blank")}>
                 <MiStoreIcon/>
                </div>}
              </div>
            })}
            </div>
            </div>
        </ScrollArea>
    );
}