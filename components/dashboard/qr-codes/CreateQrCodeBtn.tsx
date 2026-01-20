import PlusCircle from "@/components/icons/plus-circle";
import Link from "next/link";

export default function CreateQrCodeBtn() {
  return (
    <Link
      href="/qr-codes/generator"
      className="bg-[var(--Blue)] desktopDashboard:h-12 h-10 px-6 py-2 rounded-[var(--Corner-Radius-10)] inline-flex items-center justify-center gap-2 hover:bg-[var(--Blue-hover)] transition-all duration-300 ease-linear"
    >
      <PlusCircle />
      <span
        className="text-white desktopDashboard:text-[18px] text-[14px] desktopDashboard:font-semibold
  desktopDashboard:leading-[26px] leading-[22px]"
      >
        Create QR Code
      </span>
    </Link>
  );
}
