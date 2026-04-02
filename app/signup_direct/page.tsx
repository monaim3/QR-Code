import { Suspense } from "react";
import LogoHeader from "../../components/common/logo_header";
import SignupDirectBody from "../signup_direct/body";

export default function Signup() {
  return (
    <div className="bg-[var(--Generator-Background)]">
      <Suspense fallback={<div className="w-full desktop:bg-[#F5F6FA] bg-white z-50 desktop:h-[72px] h-16" />}>
        <LogoHeader />
      </Suspense>
      <SignupDirectBody />
    </div>
  );
}
