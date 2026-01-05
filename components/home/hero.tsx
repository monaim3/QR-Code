"use client";
import Image from "next/image";
import Link from "next/link";
import Container from "../common/parent-container";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-[#F5F6FA] pt-14 desktop:pt-[120px]">
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
          <Link href="#" className="bg-[var(--Blue)] hover:bg-[var(--Blue-hover)] rounded-[10px] text-white text-[18px] leading-[26px] font-medium py-[11px] px-8 inline-block transition-all duration-300 ease-linear
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

                  <div className="xl:block absolute bottom-28 right-2 hidden">
                  <motion.img
                    src="/images/home/qr.svg"
                    alt="Customize"
                    className="w-70 xl:w-70 shadow-[0_1.761px_28.179px_0_rgba(63,72,103,0.08)]"
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
              className="flex flex-wrap items-center justify-items-center justify-center desktop:justify-between gap-12">
              <Image
                src="/images/brand/nestle.svg"
                alt="Nestle"
                width={116}
                height={32}
                className="w-[116px] h-auto"
              />

              <Image
                src="/images/brand/addidas.svg"
                alt="Adidas"
                width={46}
                height={32}
                className="w-[46px] h-auto"
              />

              <Image
                src="/images/brand/marriott.svg"
                alt="Marriott"
                width={101}
                height={32}
                className="w-[101px] h-auto"
              />

              <Image
                src="/images/brand/loreal.svg"
                alt="L'Oreal"
                width={133}
                height={24}
                className="w-[133px] h-auto"
              />

              <Image
                src="/images/brand/dhl.svg"
                alt="DHL"
                width={170}
                height={32}
                className="w-[170px] h-auto"
              />

              <Image
                src="/images/brand/hilton.svg"
                alt="Hilton"
                width={86}
                height={32}
                className="w-[86px] h-auto"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
