"use client";
import Container from "../../components/common/parent-container";
import SignUpElements from "../../components/signup/sign-up-element";


export default function SignupDirectBody() {

  return (
    <Container
      className="flex items-center justify-center pt-14 desktop:pt-[48px] pb-8 desktop:pb-[160px]">
        <div style={{ fontFamily: "var(--font-poppins)" }}>
      {/* Outer Card */}
      <div className="
       w-full max-w-[488px]
        bg-white
        rounded-[12px]
        px-[16px] desktop:px-[32px]
        pt-[32px] pb-[24px] desktop:pb-[32px]
        shadow-card
        flex flex-col desktop:flex-row
        items-start
        overflow-hidden
      ">
      {/* Left Panel */}
       <SignUpElements withRightPannel={false} paddingRight={false}/>
      </div>
      </div>
    </Container>
  );
}
