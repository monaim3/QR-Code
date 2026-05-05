import Container from "@/components/common/parent-container";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import AboutUsLeftElement from "../../components/about-us/left-elements";
import OurMission from "../../components/about-us/our-mission";
import CustomerReview from "../../components/home/customer_review";
import GetInTouch from "../../components/about-us/get-in-touch";

export default function AboutUsBody() {
  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <section className="bg-white">
        <Container>
          <div className="flex h-[54px] w-full items-center justify-start gap-2">
            <Link
              href="/"
              className="text-[14px] font-regular leading-[22px] text-[var(--Black)]"
            >
              QR Center
            </Link>
            <ChevronRight className="w-4 h-4 text-[var(--breadcrumb)]" />
            <span className="text-[14px] font-regular leading-[22px] text-[var(--Blue)]">
              About us
            </span>
          </div>
        </Container>
      </section>
      <section className="bg-[var(--Generator-Background)] overflow-hidden">
        <Container className="w-full max-w-full">
          {/* Main content */}
          <div className="flex flex-col w-full py-[29px] desktop:py-[120px]">
            <div className="flex flex-col items-center desktop:flex-row w-full min-w-full h-auto desktop:h-[480px]">
              {/* Left half - desktop only */}
              <div className="hidden desktop:block relative z-10">
                <AboutUsLeftElement />
              </div>

              {/* Right half - desktop */}
              <div className="hidden desktop:flex order-1 desktop:order-2 desktop:flex-1 h-full items-center justify-center min-w-0">
                <Image
                  src="/images/generator_img/aboutqr.svg"
                  alt="QR Scan"
                  width={592}
                  height={480}
                  className="w-[592px] h-[480px] drop-shadow-[0_1.385px_22.154px_rgba(63,72,103,0.08)]"
                />
              </div>

              {/* Right half - mobile */}
              <div className="flex desktop:hidden order-1 -mx-5 w-[calc(100%+2.5rem)] justify-center items-center">
                <div className="relative w-full">
                  <Image
                    src="/images/generator_img/gettoknow.svg"
                    alt="QR Background"
                    width={350}
                    height={207}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/images/generator_img/gettoknowqr.svg"
                      alt="QR Code"
                      width={155}
                      height={155}
                      className="w-[95%] h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile text - hidden on desktop */}
              <div className="block desktop:hidden order-2 w-full mt-6">
                <AboutUsLeftElement />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="w-full bg-white" id="mission-section">
        <OurMission />
      </section>
      <CustomerReview />
      <GetInTouch />
    </div>
  );
}
