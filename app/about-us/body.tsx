import Container from "@/components/common/parent-container";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Wifi from "../../components/icons/wifi";
import LinkIcon from "../../components/icons/link";
import VideoCamera from "../../components/icons/video-camera";
import ImageIcon from "../../components/icons/image-icon";
import RestaurantIcon from "../../components/icons/restaurant";
import AboutUsLeftelement from "../../components/about-us/left-elements";
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
              QRCenter
            </Link>
            <ChevronRight className="w-4 h-4 text-[var(--breadcrumb)]" />
            <span className="text-[14px] font-regular leading-[22px] text-[var(--Blue)]">About us</span>
          </div>
        </Container>
      </section>
      <section className="bg-[var(--Generator-Background)] overflow-hidden">
        <Container className="w-full max-w-full">
          {/* Main content */}
          <div className="flex flex-col w-full h-full pt-[29px] desktop:pt-[120px]">
            <div className="flex flex-col items-center desktop:flex-row w-full min-w-full h-[480px]">
              {/* Left half */}
              <div className="hidden desktop:block relative z-10">
                <AboutUsLeftelement />
              </div>

              {/* Right half */}
              <div className="order-1 desktop:order-2 desktop:flex-1 h-full flex items-center justify-center">
                <div className="relative flex justify-between">
                  <div
                    className="w-[412px] h-[412px] rounded-full flex items-center justify-center overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(155,162,251,0.1) 0%, rgba(247,249,252,0.1) 100%)",
                    }}
                  >
                    <div
                      className="w-[254px] h-[254px] rounded-full"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(155,162,251,0.2) 0%, rgba(247,249,252,0.2) 100%)",
                      }}
                    ></div>
                  </div>
                  <div className="absolute top-[91px] bottom-[161px] left-[126px] right-[126px] desktop:top-[108px] desktop:bottom-[44px] desktop:left-[-21px] desktop:right-[173px]">
                    <img
                      src="/images/home/scan.svg"
                      alt="QR Scan"
                      className="w-[160px] h-[160px] desktop:w-[260px] desktop:h-[260px] drop-shadow-[0_1.385px_22.154px_rgba(63,72,103,0.08)]"
                    />
                  </div>
                  <div className="absolute top-[22px] bottom-[350px] left-[61px] right-[311px] desktop:top-[-12px] esktop:bottom-[376px] desktop:left-[-8px] desktop:right-[372] h-[48px] w-[48px] bg-white flex items-center justify-center rounded-full">
                    <Wifi />
                  </div>
                  <div className="absolute top-[203px] bottom-[169px] mobile:left-[55px] right-[317px] desktop:top-[195px] desktop:bottom-[169px] desktop:right-[536px] h-[48px] w-[48px] bg-white flex items-center justify-center rounded-full">
                    <LinkIcon />
                  </div>
                  <div className="mobile:hidden desktop:absolute desktop:top-[145px] desktop:bottom-[219px] desktop:left-[264px] desktop:right-[100px] h-[48px] w-[48px] bg-white flex items-center justify-center rounded-full">
                    <VideoCamera />
                  </div>
                  <div className="absolute top-[117px] bottom-[255px] left-[325px] right-[48px] desktop:top-[31px] desktop:bottom-[339px] desktop:left-[407px] h-[48px] w-[48px] bg-white flex items-center justify-center rounded-full">
                    <ImageIcon />
                  </div>
                  <div className="mobile:hidden desktop:absolute desktop:top-[300.17px] dedsktop:bottom-[68.17px] desktop:left-[355.33px] desktop:right-[40.42px] h-[48px] w-[48px] bg-white flex items-center justify-center rounded-full">
                    <RestaurantIcon />
                  </div>
                  <div className="absolute desktop:hidden top-[291px] left-[31px] right-[31px]">
                    <AboutUsLeftelement />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pt-[120px] pb-[59px] items-center gap-6">
              <p className="hidden desktop:block text-[18px] leading-[26px] font-regular text-[#1D2948] whitespace-nowrap">
                Top brands that use QR codes:
              </p>
              <div className="overflow-hidden w-full">
                <div className="flex items-center gap-6 w-max animate-marquee">
                  {/* first set */}
                  <img
                    src="/images/brand/toyota.svg"
                    className="h-5 desktop:h-6 shrink-0"
                  />
                  <img
                    src="/images/brand/netflix.svg"
                    className="h-5 desktop:h-6 shrink-0"
                  />
                  <img
                    src="/images/brand/disney.svg"
                    className="h-5 desktop:h-7 shrink-0"
                  />
                  <img
                    src="/images/brand/oracle.svg"
                    className="h-5 desktop:h-6 shrink-0"
                  />
                  <img
                    src="/images/brand/delta.svg"
                    className="h-5 desktop:h-6 shrink-0"
                  />
                  <img
                    src="/images/brand/fedex_express.svg"
                    className="h-5 desktop:h-6 shrink-0"
                  />

                  {/* duplicate set for infinite loop */}
                  <img
                    src="/images/brand/toyota.svg"
                    className="h-5 desktop:h-6 shrink-0"
                  />
                  <img
                    src="/images/brand/netflix.svg"
                    className="h-5 desktop:h-6 shrink-0"
                  />
                  <img
                    src="/images/brand/disney.svg"
                    className="h-5 desktop:h-7 shrink-0"
                  />
                  <img
                    src="/images/brand/oracle.svg"
                    className="h-5 desktop:h-6 shrink-0"
                  />
                  <img
                    src="/images/brand/delta.svg"
                    className="h-5 desktop:h-6 shrink-0"
                  />
                  <img
                    src="/images/brand/fedex_express.svg"
                    className="h-5 desktop:h-6 shrink-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="w-full bg-white" id="more_about">
        <OurMission />
      </section>
      <CustomerReview />
      <GetInTouch />
    </div>
  );
}
