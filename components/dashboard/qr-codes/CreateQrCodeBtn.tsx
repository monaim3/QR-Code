import PlusCircle from "@/components/icons/plus-circle";
import Link from "next/link";

export default function CreateQrCodeBtn() {
  return (
    <Link
      href="/qr-codes/generator"
      className="bg-[var(--Blue)] h-12 px-6 py-2 rounded-[var(--Corner-Radius-10)] inline-flex items-center justify-center gap-2 hover:bg-[var(--Blue-hover)] transition-all duration-300 ease-linear"
    >
      <PlusCircle />
      <span
        className="text-white text-[18px] font-semibold
  leading-[26px]"
      >
        Create QR Code
      </span>
    </Link>
  );
}
