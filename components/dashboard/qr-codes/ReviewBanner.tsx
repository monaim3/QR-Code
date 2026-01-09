import FaceSmile from "@/components/icons/face-smile";
import { Button } from "@/components/ui/button";

export default function ReviewBanner() {
  return (
    <div className="flex items-center self-stretch gap-6 p-4 rounded-[var(--Corner-Radius-10)] bg-[var(--Purple)]">
      <div className="flex items-center gap-2 flex-1">
        <FaceSmile />
        <p className="text-white text-[16px] leading-[24px]">
          You have 20 out of 20 free scans left. Subscribe to get unlimited
          scans.
        </p>
      </div>

      <div className="flex items-center gap-2">
        <Button className="bg-white text-[var(--Dark-gray)] rounded-[var(--Corner-Radius-10)] py-2 px-4 text-[14px] leading-[22px] h-10">
          Yes
        </Button>
        <Button className="border border-white text-white rounded-[var(--Corner-Radius-10)] py-2 px-4 text-[14px] leading-[22px] h-10">
          No
        </Button>
      </div>
    </div>
  );
}
