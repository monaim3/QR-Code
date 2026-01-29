import { ScrollArea } from "@/components/ui/scroll-area";
import StructureCheck from "@/components/icons/structure-check";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";

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
        </div>
        </ScrollArea>
    );
}