import QrCode4 from "@/components/icons/qr-code-4";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="flex h-8 items-center gap-2 flex-0">
      <QrCode4 />

      <span className="text-[var(--Black)] text-2xl font-bold leading-8">
        QRCenter
      </span>
    </Link>
  );
}
