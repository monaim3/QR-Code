import AlertCircleBg from "@/components/icons/alert-circle-bg";
import Crown from "@/components/icons/crown";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useT } from "@/utils/t";

export default function TrialExpiredBanner() {
  const t = useT();
  const router = useRouter();

  const handleActivateAccount = () => {
    router.push("/plan-and-pricing_v2");
  };

  const trialMessage = t("public__dashboard__trial_expired__alert_message")
    .replace("<trial_days></trial_days>", "7");

  return (
    <div className="flex items-center flex-col tablet:flex-row desktopDashboard:flex-row self-stretch tablet:gap-6 desktopDashboard:gap-6 gap-[10px] p-4 rounded-[var(--Corner-Radius-10)] bg-[var(--error)] desktopDashboard:my-1 my-0">
      <div className="flex items-center gap-2 flex-1">
        <AlertCircleBg className="w-6 h-6 shrink-0" />
        <p className="text-white font-semibold text-[16px] leading-[24px]">
          {trialMessage}
        </p>
      </div>

      <Button
        onClick={handleActivateAccount}
        className="bg-white text-[var(--Black)] flex items-center justify-center gap-2 rounded-[var(--Corner-Radius-10)] py-2 px-4 text-[14px] leading-[22px] h-10 w-full tablet:w-auto desktopDashboard:w-auto"
      >
        <Crown />
        {t("public__dashboard__trial_expired__cta_activate")}
      </Button>
    </div>
  );
}
