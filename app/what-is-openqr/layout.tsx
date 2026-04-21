import { ReactNode } from "react";
import Link from "next/link";
import Logo from "@/components/dashboard/layout/Logo";
import Container from "@/components/common/parent-container";

function SimpleHeader() {
  return (
    <header className="w-full bg-[#F5F6FA] border-b border-black">
      <Container>
        <div className="flex items-center h-16 desktop:h-[72px]">
          <Logo />
        </div>
      </Container>
    </header>
  );
}

function SimpleFooter() {
  return (
    <footer className="w-full border-t border-black">
      <Container>
        {/* Desktop: links left + copyright right | Mobile: stacked centered */}
        <div className="flex flex-col desktop:flex-row desktop:items-center desktop:justify-between gap-3 py-5 items-center text-center desktop:text-left">
          <nav className="flex flex-col desktop:flex-row desktop:items-center gap-3 desktop:gap-0">
            <Link
              href="/about-us"
              className="text-[14px] leading-[22px] text-[#3F3E3E] desktop:px-4 desktop:pl-0 hover:underline"
            >
              About us
            </Link>
            <span className="hidden desktop:block w-[1px] h-[14px] bg-[#CDD0DB] opacity-50" />
            <Link
              href="/terms-of-use"
              className="text-[14px] leading-[22px] text-[#3F3E3E] desktop:px-4 hover:underline"
            >
              Terms and conditions
            </Link>
            <span className="hidden desktop:block w-[1px] h-[14px] bg-[#CDD0DB] opacity-50" />
            <Link
              href="/privacy-policy"
              className="text-[14px] leading-[22px] text-[#3F3E3E] desktop:px-4 hover:underline"
            >
              Privacy policy
            </Link>
          </nav>
          <p className="text-[13px] leading-[20px] text-[#3F3E3E] opacity-70 whitespace-nowrap">
            {new Date().getFullYear()} © QRCenter.com™ All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default function WhatIsOpenQrLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SimpleHeader />
      <main className="flex-1">{children}</main>
      <SimpleFooter />
    </div>
  );
}
