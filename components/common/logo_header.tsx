"use client";
import Container from "../common/parent-container";
import Link from "next/link";
import Logo from "../dashboard/layout/Logo";


export default function LogoHeader() {
  return (
    <header
      className="w-full desktop:bg-[#F5F6FA] bg-white z-50 desktop:h-[72px] h-16"
      style={{ fontFamily: "var(--font-poppins)" }}
    >
      <Container className="h-full flex items-center">
        <Logo />
      </Container>
    </header>
  );
}