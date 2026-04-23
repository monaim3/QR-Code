import Container from "@/components/common/parent-container";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Wifi from "../../components/icons/wifi";
import LinkIcon from "../../components/icons/link";
import VideoCamera from "../../components/icons/video-camera";
import ImageIcon from "../../components/icons/image-icon";
import RestaurantIcon from "../../components/icons/restaurant";
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
          <div className="flex flex-col w-full h-full pt-[29px] desktop:pt-[120px]">
            <div className="flex flex-col items-center desktop:flex-row w-full min-w-full h-auto desktop:h-[480px]">
              {/* Left half - desktop only */}
              <div className="hidden desktop:block relative z-10">
                <AboutUsLeftElement />
              </div>

              {/* Right half */}
              <div className="order-1 desktop:order-2 desktop:flex-1 h-full flex items-center justify-center min-w-0">
                <Image
                  src="/images/generator_img/aboutqr.svg"
                  alt="QR Scan"
                  width={592}
                  height={480}
                  className="w-full max-w-[592px] h-auto drop-shadow-[0_1.385px_22.154px_rgba(63,72,103,0.08)]"
                />
              </div>

              {/* Mobile text - hidden on desktop */}
              <div className="block desktop:hidden order-2 w-full mt-6">
                <AboutUsLeftElement />
              </div>
            </div>
            <div className="flex pt-[120px] pb-[59px] items-center gap-6">
              <p className="hidden desktop:block text-[18px] leading-[26px] font-regular text-[#1D2948] whitespace-nowrap">
                Top brands that use QR codes:
              </p>
              <div className="overflow-hidden w-full">
                <div className="flex items-center gap-6 w-max animate-marquee">
                  {/* first set */}
                  <Image
                    src="/images/brand/toyota.svg"
                    alt="Toyota"
                    width={96}
                    height={24}
                    className="h-5 desktop:h-6 shrink-0"
                  />
                  <Image
                    src="/images/brand/netflix.svg"
                    alt="Netflix"
                    width={96}
                    height={24}
                    className="h-5 desktop:h-6 shrink-0"
                  />
                  <Image
                    src="/images/brand/disney.svg"
                    alt="Disney"
                    width={96}
                    height={28}
                    className="h-5 desktop:h-7 shrink-0"
                  />
                  <Image
                    src="/images/brand/oracle.svg"
                    alt="Oracle"
                    width={96}
                    height={24}
                    className="h-5 desktop:h-6 shrink-0"
                  />
                  <Image
                    src="/images/brand/delta.svg"
                    alt="Delta"
                    width={96}
                    height={24}
                    className="h-5 desktop:h-6 shrink-0"
                  />
                  <Image
                    src="/images/brand/fedex_express.svg"
                    alt="FedEx Express"
                    width={96}
                    height={24}
                    className="h-5 desktop:h-6 shrink-0"
                  />

                  {/* duplicate set for infinite loop */}
                  <Image
                    src="/images/brand/toyota.svg"
                    alt="Toyota"
                    width={96}
                    height={24}
                    className="h-5 desktop:h-6 shrink-0"
                  />
                  <Image
                    src="/images/brand/netflix.svg"
                    alt="Netflix"
                    width={96}
                    height={24}
                    className="h-5 desktop:h-6 shrink-0"
                  />
                  <Image
                    src="/images/brand/disney.svg"
                    alt="Disney"
                    width={96}
                    height={28}
                    className="h-5 desktop:h-7 shrink-0"
                  />
                  <Image
                    src="/images/brand/oracle.svg"
                    alt="Oracle"
                    width={96}
                    height={24}
                    className="h-5 desktop:h-6 shrink-0"
                  />
                  <Image
                    src="/images/brand/delta.svg"
                    alt="Delta"
                    width={96}
                    height={24}
                    className="h-5 desktop:h-6 shrink-0"
                  />
                  <Image
                    src="/images/brand/fedex_express.svg"
                    alt="FedEx Express"
                    width={96}
                    height={24}
                    className="h-5 desktop:h-6 shrink-0"
                  />
                </div>
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
