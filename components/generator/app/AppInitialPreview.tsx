import { ScrollArea } from "@/components/ui/scroll-area";
import StructureCheck from "@/components/icons/structure-check";
import AppleAvailable from "@/components/icons/apple-available";
import PlayStoreAvailable from "@/components/icons/playstore-available";
import AmazonAvailable from "@/components/icons/amazon-available";
import MiStoreIcon from "@/components/icons/mi-available";

export default function AppInitialPreview() {
  return (
    <ScrollArea className="w-full h-full relative">
      <div className="absolute inset-0 w-full h-[96px] rounded-[32px] bg-[#6594FF]" />
      <div className="h-[80px] w-[80px] bg-white rounded-[20px] absolute left-[90px] right-[90px] top-[58px] shadow-card" />
      <div>
        <div className="absolute w-[68px] h-[68px] rounded-[16px] bg-gradient-to-br from-[#EBA579] to-[#EB7986] left-[96px] right-[96px] top-[64px]" />
        <div className="absolute h-10 w-10 left-[110px] right-[110px] top-[78px]">
          <StructureCheck />
        </div>
      </div>
      <div className="flex flex-col items-center mt-[150px] px-[20px]">
        <p className="text-[18px] leading-[26px] text-[var(--Black)] font-bold">
          MindFlow
        </p>
        <p className="text-[10px] leading-[16px] text-[var(--Black)] font-regular">
          CreativeCore Apps
        </p>
        <p className="text-[10px] leading-[16px] text-[var(--Black)] font-regular mt-[10px] text-center">
          Organize your tasks, streamline your day, and stay focused with smart, personalized tools.
        </p>
        <div className="w-full pt-4">
          {[
            { storeName: "appStore" },
            { storeName: "goolgePlay" },
            { storeName: "amazon" },
            { storeName: "mi" },
          ].map((link, index) => (
            <div key={index} className="h-[40px] bg-[var(--Black)] rounded-[10px] flex items-center justify-center mb-2">
              {link.storeName === "appStore" ? <AppleAvailable /> :
               link.storeName === "goolgePlay" ? <PlayStoreAvailable /> :
               link.storeName === "amazon" ? <AmazonAvailable /> :
               <MiStoreIcon />}
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}
