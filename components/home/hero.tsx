"use client";
import Link from "next/link";
import Container from "../common/parent-container";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-[#F5F6FA] pt-16 desktop:pt-[120px]">
      <Container className="px-0 desktop:px-5">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col gap-4 items-center justify-center mb-8 px-5">
            <h1 className="text-[40px] leading-[48px] font-bold text-center desktop:text-[48px] desktop:leading-[56px] text-[var(--Black)]">
              Generate your QR code in{" "}<span className="text-[var(--Blue)]">just seconds</span>
            </h1>
            <p className="text-lg font-regular text-center text-[var(--Dark-gray)]">
              Quickly generate and fully personalize your QR code in just a few
              simple clicks.
            </p>
          </div>
          <Link href="/generator" className="bg-[var(--Blue)] hover:bg-[var(--Blue-hover)] rounded-[10px] text-white text-[18px] leading-[26px] font-medium py-[11px] px-8 inline-block transition-all duration-300 ease-linear
           ">Create QR code</Link>
          {/* image stack */}
          <div className="pt-24 desktop:pt-28 w-full">
              <div className="relative w-full">
                <div className="relative flex justify-center pl-[120px] desktop:pl-0">
                 <img
                    src="/images/home/dashboard.svg"
                    alt="Analytics Graph"
                    className="w-[590] desktop:w-[900] object-cover object-left-top h-[280px] desktop:h-auto"
                  />

                  <div className="absolute bottom-7 left-8 desktop:left-5">
                    <img
                      src="/images/home/scan.svg"
                      alt="QR Scan"
                      className="w-[118px] desktop:w-[180px] drop-shadow-[0_1.385px_22.154px_rgba(63,72,103,0.08)]"
                    />
                  </div>

                  <div className="xl:block absolute bottom-28 right-2 hidden ">
                  <motion.img
                    src="/images/home/qr.svg"
                    alt="Customize"
                    className="w-70 xl:w-70 rounded-[12px] drop-shadow-[0_1.761px_28.179px_rgba(63,72,103,0.08)]"
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                      duration: 5,
                      ease: [0.4, 0, 0.6, 1],
                      repeat: Infinity,
                    }}
                  />

                  </div>
                </div>
              </div>
          </div>

          {/* Brand Icons */}
          <div className="w-full py-10 desktop:py-16 border-t border-[#D3D8EB] px-4 desktop:px-0">
            <div
              className="flex flex-wrap items-center justify-items-center justify-center desktop:justify-between gap-8">
              <img
                src="/images/brand/toyota.svg"
                alt="Toyota"
                className="h-5 desktop:h-6"
              />

              <img
                src="/images/brand/netflix.svg"
                alt="Netflix"
                className="h-5 desktop:h-6"
              />

              <img
                src="/images/brand/disney.svg"
                alt="Disney"
                className="h-5 desktop:h-7"
              />

              <img
                src="/images/brand/oracle.svg"
                alt="Oracle"
                className="h-5 desktop:h-6 w-full flex justify-center desktop:w-auto"
              />

              <img
                src="/images/brand/delta.svg"
                alt="Delta"
                className="h-5 desktop:h-6"
              />

              <img
                src="/images/brand/fedex_express.svg"
                alt="Fedex Express"
                className="h-5 desktop:h-6"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
