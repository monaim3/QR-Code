import AlertCircle from "@/components/icons/alert-circle";
import { Button } from "@/components/ui/button";

export default function SubscribeBanner() {
  return (
    <div className="flex items-center flex-col tablet:flex-row self-stretch tablet:gap-6 gap-[10px] p-4 rounded-[var(--Corner-Radius-10)] bg-[#E7E8EE] desktopDashboard:my-1 my-0">
      <div className="flex items-center gap-2 flex-1">
        <AlertCircle className="w-6 h-6 shrink-0" />
        <p className="text-[var(--Dark-gray)] text-[16px] leading-[24px]">
          You have 20 out of 20 free scans left. Subscribe to get unlimited
          scans.
        </p>
      </div>

      <Button className="bg-[var(--Blue)] text-white rounded-[var(--Corner-Radius-10)] py-2 px-4 text-[14px] leading-[22px] h-10 hover:bg-[var(--Blue-hover)] transition-all duration-300 ease-linear w-full tablet:w-auto">
        Subscribe
      </Button>
    </div>
  );
}
