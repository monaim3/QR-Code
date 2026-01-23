"use client";
import Container from "../../components/common/parent-container";
import SignUpReadyQr from "../../components/signup/sign-up-ready-qr"
import CheckoutElement from "../../components/payment/payment-element";


export default function CheckoutBody() {

  return (
    <Container
      className="flex items-center justify-center min-h-screen px-4 pt-[40px] desktop:pt-[48px] pb-[120px] desktop:pb-[160px]">
        <div style={{ fontFamily: "var(--font-poppins)" }}>
      {/* Outer Card */}
      <div className="
        w-full max-w-[976px]
        bg-white
        rounded-[12px]
        p-[16px] desktop:px-[32px]
        desktop:pt-[24px] desktop:pb-[32px]
        shadow-card
        flex flex-col desktop:flex-row
        items-start justify-between
        overflow-hidden
        desktop:gap-[32px]
      ">
        {/* Left Panel */}
       
       <CheckoutElement />

       {/* Right Panel */}
       <div className="block desktop:hidden h-[16px]"/>
      <SignUpReadyQr viewOnMobile={true} />
      </div>
      </div>
    </Container>
  );
}
