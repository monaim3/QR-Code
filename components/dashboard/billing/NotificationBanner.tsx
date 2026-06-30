"use client";
import AlertTriangle from "@/components/icons/alert-triangle";
import { Button } from "@/components/ui/button";
import { useT } from "@/utils/t";

export default function NotificationBanner() {
  const t = useT();
  return (
    <div className="flex items-center flex-col tablet:flex-row desktopDashboard:flex-row self-stretch tablet:gap-6 desktopDashboard:gap-6 gap-[10px] p-4 rounded-[var(--Corner-Radius-10)] bg-[#E7E8EE] desktopDashboard:my-1 my-0">
      <div className="flex items-center gap-2 flex-1">
        <AlertTriangle className="w-6 h-6 shrink-0 text-[var(--Blue)] hidden tablet:block desktopDashboard:block" />
        <div>
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 shrink-0 text-[var(--Blue)] tablet:hidden desktopDashboard:hidden" />
            <p className="text-[var(--Black)] text-[16px] leading-[24px] font-semibold">
              {t("public__dashboard__user_status__is_premium_cancelled__modal_title")}
            </p>
          </div>
          <p className="text-[var(--Dark-gray)] text-[16px] leading-[24px]">
            {t("public__dashboard__premium_cancelled__banner_description")}
          </p>
        </div>
      </div>

      <Button className="bg-[var(--Blue)] text-white rounded-[var(--Corner-Radius-10)] py-2 px-4 text-[14px] leading-[22px] h-10 hover:bg-[var(--Blue-hover)] transition-all duration-300 ease-linear w-full tablet:w-auto desktopDashboard:w-auto">
        {t("public__dashboard__premium_cancelled__banner_button")}
      </Button>
    </div>
  );
}
