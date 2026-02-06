"use client";
import Container from "../../components/common/parent-container";
import SignUpElements from "../../components/signup/sign-up-element";
import SignUpReadyQr from "../../components/signup/sign-up-ready-qr";


export default function SignupBody() {

  return (
    <Container
      className="flex items-center justify-center pt-14 desktop:pt-[48px] pb-8 desktop:pb-[160px]">
        <div style={{ fontFamily: "var(--font-poppins)" }}>
      {/* Outer Card */}
      <div className="
        w-full max-w-[976px]
        bg-white
        rounded-[12px]
        px-[16px] desktop:px-[32px]
        pt-[32px] pb-[24px] desktop:pb-[32px]
        shadow-card
        flex flex-col desktop:flex-row
        items-stretch justify-between
        overflow-hidden
      ">
        {/* Left Panel */}
       
       <SignUpElements />

       {/* Right Panel */}
      <SignUpReadyQr />
      </div>
      </div>
    </Container>
  );
}
