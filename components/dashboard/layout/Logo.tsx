"use client";

import QrCode4 from "@/components/icons/qr-code-4";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Logo() {
  const pathname = usePathname();
  const isDisabledPath =
    pathname.startsWith("/pricing") || pathname.startsWith("/checkout");

  const content = (
    <>
      <QrCode4 />

      <span className="text-[var(--Black)] text-2xl font-bold leading-8">
        QRCenter
      </span>
    </>
  );

  if (isDisabledPath) {
    return <div className="flex h-8 items-center gap-2 flex-0">{content}</div>;
  }

  return (
    <Link href={"/"} className="flex h-8 items-center gap-2 flex-0">
      {content}
    </Link>
  );
}
