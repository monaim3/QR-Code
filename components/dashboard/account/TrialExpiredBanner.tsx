import AlertCircleBg from "@/components/icons/alert-circle-bg";
import Crown from "@/components/icons/crown";
import { Button } from "@/components/ui/button";

export default function TrialExpiredBanner() {
  return (
    <div className="flex items-center flex-col tablet:flex-row desktopDashboard:flex-row self-stretch tablet:gap-6 desktopDashboard:gap-6 gap-[10px] p-4 rounded-[var(--Corner-Radius-10)] bg-[var(--error)] desktopDashboard:my-1 my-0">
      <div className="flex items-center gap-2 flex-1">
        <AlertCircleBg className="w-6 h-6 shrink-0" />
        <p className="text-white font-semibold text-[16px] leading-[24px]">
          Your 7-Day Free Trial expired. Upgrade your account, to reactivate
          your QR code.
        </p>
      </div>

      <Button className="bg-white text-[var(--Black)] flex items-center justify-center gap-2 rounded-[var(--Corner-Radius-10)] py-2 px-4 text-[14px] leading-[22px] h-10 w-full tablet:w-auto desktopDashboard:w-auto">
        <Crown />
        Activate account
      </Button>
    </div>
  );
}
