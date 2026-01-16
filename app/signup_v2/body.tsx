"use client";

import SignUpElements from "../../components/signup/sign-up-element";
import CurverLine from "../../components/icons/curved-line";

export default function SignupV2Body() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left Panel: fixed width aligned to header/logo */}
      <div className="flex flex-col w-[456px] desktop:min-w-[456px] justify-start">
        <SignUpElements />
      </div>

      {/* Right Panel: free, full height, full width remaining */}
      <div className="flex-1 flex flex-col bg-gradient-to-b from-[#334A56] to-[#2F3E46] items-center justify-center min-h-screen">
        <CurverLine />
      </div>
    </div>
  );
}
