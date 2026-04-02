"use client";
import Container from "../common/parent-container";
import Logo from "../dashboard/layout/Logo";
import { useSearchParams } from "next/navigation";


export default function LogoHeader() {
  const searchParams = useSearchParams();
  const isOnboardingFlow = searchParams.get("onboarding-flow") === "true";

  return (
    <header
      className="w-full desktop:bg-[#F5F6FA] bg-white z-50 desktop:h-[72px] h-16"
      style={{ fontFamily: "var(--font-poppins)" }}
    >
      <Container className="h-full flex items-center">
        <Logo noLink={isOnboardingFlow} />
      </Container>
    </header>
  );
}