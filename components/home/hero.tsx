import { Button } from "@/components/ui/button";
import Image from "next/image";
import Container from "../common/parent-container";

export default function Hero() {
  return (
    <section className="bg-[#F5F6FA] pt-20 desktop:pt-[120px]">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col gap-4 items-center justify-center mb-8">
            <h1 className="text-[40px] font-bold text-center desktop:text-[48px] desktop:leading-[56px] text-[var(--Black)]">
              Generate your QR code in{" "}<span className="text-[var(--Blue)]">just seconds</span>
            </h1>
            <p className="text-lg font-regular text-center text-[var(--Dark-gray)]">
              Quickly generate and fully personalize your QR code in just a few
              simple clicks.
            </p>
          </div>

          <a href="#" className=" bg-[var(--Blue)] hover:bg-[#018f5f] rounded-[10px] text-white text-[18px] leading-[26px] font-medium py-[11px] px-8 inline-block transition-all duration-300 ease-linear
">Create QR code</a>

          {/* image stack */}
          <div className="pt-28 w-full">
              <div className="relative w-full">
                <div className="relative flex justify-center">
                 <img
                    src="/images/home/dashboard.svg"
                    alt="Analytics Graph"
                    className="w-[900]"
                  />

                  <div className=" absolute bottom-7 xl:left-5 sm:-left-8">
                    <img
                      src="/images/home/scan.svg"
                      alt="QR Scan"
                      className="w-45 sm:w-29 md:w-45 lg:w-45 xl:w-45 drop-shadow-[0_1.385px_22.154px_rgba(63,72,103,0.08)]"
                    />
                  </div>

                  <div className="xl:block absolute bottom-28 right-2 hidden">
                    <img
                      src="/images/home/qr.svg"
                      alt="Customize"
                      className="w-70 xl:w-70 shadow-[0_1.761px_28.179px_0_rgba(63,72,103,0.08)]"
                    />
                  </div>
                </div>
              </div>
          </div>

          {/* Brand Icons */}
          <div className="w-full py-10 desktop:py-16 border-t border-[#D3D8EB]">
            <div
              className="xl:flex items-center grid grid-cols-2 gap-12 md:grid-cols-3 justify-items-center justify-between">
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
