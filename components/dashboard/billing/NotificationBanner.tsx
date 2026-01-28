import AlertTriangle from "@/components/icons/alert-triangle";
import { Button } from "@/components/ui/button";

export default function NotificationBanner() {
  return (
    <div className="flex items-center flex-col tablet:flex-row desktopDashboard:flex-row self-stretch tablet:gap-6 desktopDashboard:gap-6 gap-[10px] p-4 rounded-[var(--Corner-Radius-10)] bg-[#E7E8EE] desktopDashboard:my-1 my-0">
      <div className="flex items-center gap-2 flex-1">
        <AlertTriangle className="w-6 h-6 shrink-0 text-[var(--Blue)]" />
        <div>
          <p className="text-[var(--Black)] text-[16px] leading-[24px] font-semibold">
            Subscription canceled
          </p>
          <p className="text-[var(--Dark-gray)] text-[16px] leading-[24px]">
            You canceled your subscription and the subscription period has now
            expired. All your QR codes have been paused. Please resubscribe to
            one of our plans to reactivate your QR codes and gain access to
            unlimited scans.
          </p>
        </div>
      </div>

      <Button className="bg-[var(--Blue)] text-white rounded-[var(--Corner-Radius-10)] py-2 px-4 text-[14px] leading-[22px] h-10 hover:bg-[var(--Blue-hover)] transition-all duration-300 ease-linear w-full tablet:w-auto desktopDashboard:w-auto">
        Resubscribe
      </Button>
    </div>
  );
}
