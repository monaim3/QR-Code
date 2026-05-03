import Link from "next/link";
import Image from "next/image";
import Container from "../common/parent-container";

export default function WhatIsOpenQr() {
  return (
    <section className="flex-1 flex items-center w-full py-[56px] desktop:py-[120px] bg-[#F5F6FA] desktop:bg-white">
      <Container>
        <div className="flex flex-col desktop:flex-row items-center desktop:gap-[128px] gap-[56px]">
          {/* Left: Text Content */}
          <div className="flex flex-col desktop:flex-1 w-full">
            <h1 className="text-[28px] leading-[36px] desktop:text-[40px] desktop:leading-[52px] font-bold text-[#0A0909]">
              What is openqr.link?
            </h1>

            <div className="flex flex-col gap-4 mt-4 text-[16px] leading-[26px] font-normal text-[#0A0909]">
              <p>
                If you&apos;re wondering what{" "}
                <span className="text-[#4981FF]">openqr.link</span> is,
                you&apos;ve probably come across a QR code like the one shown
                nearby.
              </p>
              <p>
                <span className="text-[#4981FF]">openqr.link</span>, provided by{" "}
                <span className="text-[#4981FF]">QRCenter.com</span>, is a
                dynamic QR code service. These codes act as links that quickly
                direct you to specific websites, landing pages, or mobile app
                content. Businesses use them to guide users to their sites
                efficiently and track how often the QR codes are scanned.
                Interested in making your own QR codes? Click the button below
                to get started right away!
              </p>
            </div>

            <div className="mt-6">
              <Link
                href="/generator"
                className="bg-[var(--Blue)] hover:bg-[var(--Blue-hover)] rounded-[10px] text-white text-[18px] leading-[26px] font-medium py-[11px] px-8 block w-full text-center desktop:w-auto desktop:inline-block transition-all duration-300 ease-linear"
              >
                Create my QR code
              </Link>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="flex justify-center items-center desktop:flex-1">
            <Image
              src="/images/generator_img/qrlink2.svg"
              alt="QR Code Scan Illustration"
              width={600}
              height={400}
              className="w-[350px] h-[233px] desktop:w-[600px] desktop:h-[400px]"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
