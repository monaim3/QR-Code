import PlusCircle from "@/components/icons/plus-circle";
import Link from "next/link";
import { useT } from "@/utils/t";

export default function CreateQrCodeBtn() {
  const t = useT();

  return (
    <Link
      href="/qr-codes/generator"
      className="bg-[var(--Blue)] desktopDashboard:h-12 h-10 px-6 py-2 rounded-[var(--Corner-Radius-10)] inline-flex items-center justify-center gap-2 hover:bg-[var(--Blue-hover)] transition-all duration-300 ease-linear"
    >
      <PlusCircle className="text-white" />
      <span
        className="text-white desktopDashboard:text-[18px] text-[14px] desktopDashboard:font-semibold
  desktopDashboard:leading-[26px] leading-[22px]"
      >
        {t("public__dashboard__shared__cta_button")}
      </span>
    </Link>
  );
}
