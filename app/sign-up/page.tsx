'use client';
import { Suspense } from "react";
import LogoHeader from "../../components/common/logo_header";
import SignupBody from "./body";

export default function Signup() {
  return (
    <div className="bg-[var(--Generator-Background)]">
      <LogoHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <SignupBody />
      </Suspense>
    </div>
  );
}