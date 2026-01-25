import Copy from "@/components/icons/copy";
import Ellipse266 from "@/components/icons/ellipse-266";
import Eye from "@/components/icons/eye";
import EyeOff from "@/components/icons/eye-off";
import TrashAlt from "@/components/icons/trash-alt";
import { useState } from "react";

export default function APIKey() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex p-6 items-center desktopDashboard:gap-6 tablet:gap-6 gap-4 self-stretch bg-white rounded-[var(--Corner-Radius-10)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)]">
      <div className="flex items-center gap-4 grow shrink-0 basis-0 w-[calc(100%-120px)]">
        <div className="flex h-12 px-4 py-2 items-center gap-4 self-stretch bg-white rounded-[var(--Corner-Radius-8)] border border-[var(--Boarder-Grey)] w-[calc(100%-26px)] max-w-[700px]">
          <p className="text-[var(--Grey)] text-[16px] leading-[24px] flex-1 truncate">
            {isVisible ? (
              <span>1dfea2217248a85c551a5e0b7ab71820</span>
            ) : (
              <div className="flex items-center gap-1">
                <Ellipse266 />
                <Ellipse266 />
                <Ellipse266 />
                <Ellipse266 />
                <Ellipse266 />
                <Ellipse266 />
                <Ellipse266 />
                <Ellipse266 />
              </div>
            )}
          </p>

          {isVisible ? (
            <Eye
              className="text-[var(--Grey)] cursor-pointer w-5 h-5"
              onClick={() => setIsVisible(false)}
            />
          ) : (
            <EyeOff
              className="text-[var(--Grey)] cursor-pointer w-5 h-5"
              onClick={() => setIsVisible(true)}
            />
          )}
        </div>
        <button className="shrink-0">
          <Copy className="text-[var(--Grey)] cursor-pointer" />
        </button>
      </div>
      <button className="flex h-10 px-4 py-2 justify-center items-center gap-2 rounded-[var(--Corner-Radius-10)] border border-[var(--Boarder-Grey)] bg-white shadow-[0_1px_8px_0_rgba(63,72,103,0.16)] text-[14px] leading-[22px]">
        <TrashAlt className="text-[var(--error)]" />
        <span className="text-[var(--error)]">Delete</span>
      </button>
    </div>
  );
}
