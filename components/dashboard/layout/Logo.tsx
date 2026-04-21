"use client";

import QrCode4 from "@/components/icons/qr-code-4";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DASHBOARD_PATHS = [
  "/cabinet/qr-codes",
  "/cabinet/analytics",
  "/cabinet/billing",
  "/cabinet/account",
  "/cabinet/contact-us",
];

interface Props {
  noLink?: boolean;
}

export default function Logo({ noLink }: Props) {
  const pathname = usePathname();
  const isDisabledPath =
    noLink ||
    pathname.startsWith("/pricing") ||
    pathname.startsWith("/checkout");

  const isDashboardPath = DASHBOARD_PATHS.some((p) => pathname.startsWith(p));

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
    <Link
      href={isDashboardPath ? "/cabinet/qr-codes" : "/"}
      className="flex h-8 items-center gap-2 flex-0"
    >
      {content}
    </Link>
  );
}
