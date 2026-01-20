import FaceSmile from "@/components/icons/face-smile";
import { Button } from "@/components/ui/button";

export default function ReviewBanner() {
  return (
    <div className="flex items-center flex-col tablet:flex-row desktopDashboard:flex-row self-stretch tablet:gap-6 desktopDashboard:gap-6 gap-[10px] p-4 rounded-[var(--Corner-Radius-10)] bg-[var(--Purple)] desktopDashboard:my-1 my-0">
      <div className="flex items-center gap-2 flex-1">
        <FaceSmile className="w-6 h-6 shrink-0" />
        <p className="text-white text-[16px] leading-[24px]">
          You have 20 out of 20 free scans left. Subscribe to get unlimited
          scans.
        </p>
      </div>

      <div className="flex items-center gap-2 w-full tablet:w-auto desktopDashboard:w-auto">
        <Button className="bg-white text-[var(--Dark-gray)] rounded-[var(--Corner-Radius-10)] py-2 px-4 text-[14px] leading-[22px] h-10 flex-1">
          Yes
        </Button>
        <Button className="border border-white text-white rounded-[var(--Corner-Radius-10)] py-2 px-4 text-[14px] leading-[22px] h-10 flex-1">
          No
        </Button>
      </div>
    </div>
  );
}
