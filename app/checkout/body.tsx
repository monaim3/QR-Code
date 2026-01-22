"use client";
import Container from "../../components/common/parent-container";
import SignUpReadyQr from "../../components/signup/sign-up-ready-qr"
import CheckoutElement from "../../components/payment/payment-element";


export default function CheckoutBody() {

  return (
    <Container
      className="flex items-center justify-center min-h-screen px-4">
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
      <SignUpReadyQr />
      </div>
      </div>
    </Container>
  );
}
