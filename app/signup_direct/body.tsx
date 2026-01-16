"use client";
import Container from "../../components/common/parent-container";
import SignUpElements from "../../components/signup/sign-up-element";


export default function SignupDirectBody() {

  return (
    <Container
      className="flex items-center justify-center min-h-screen px-4">
        <div style={{ fontFamily: "var(--font-poppins)" }}>
      {/* Outer Card */}
      <div className="
        w-full max-w-[488px]
        bg-white
        rounded-[12px]
        p-[16px] desktop:p-[32px]
        shadow-[0_4px_14px_rgba(54,66,140,0.16)]
        flex flex-col desktop:flex-row
        items-start justify-between
        overflow-hidden
      ">
        {/* Left Panel */}
       
       <SignUpElements />
      </div>
      </div>
    </Container>
  );
}
