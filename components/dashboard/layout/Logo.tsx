import QrCode4 from "@/components/icons/qr-code-4";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="flex h-8 items-center gap-2 flex-1">
      <QrCode4 />
      <span className="text-[var(--Black)] font-roboto text-2xl font-bold leading-8">
        SmartQR
      </span>
    </Link>
  );
}
