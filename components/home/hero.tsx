import { Button } from "@/components/ui/button";
import Container from "../common/parent-container";

export default function Hero() {
  return (
    <div className="bg-[#F5F6FA] pt-20 desktop:pt-[120px]">
      <Container>
        <div className="flex flex-col gap-4 items-center justify-center">
          <h1 className="text-[40px] font-bold text-center   desktop:text-[48px] desktop:leading-[56px] text-gray-900">
            Generate your QR code in{" "}
            <span className="text-[#01A56D]">just seconds</span>
          </h1>

          <p className="text-lg font-regular text-center px-3 leading-[26px] pb-[16px] text-gray-900">
            Quickly generate and fully personalize your QR code in just a few
            simple clicks.
          </p>

          <Button className="w-[198px] h-12 bg-[#01A56D] hover:bg-[#018f5f] rounded-[10px]">
            <span className="text-white text-lg font-regular py-[11px] px-8 inline-block">
              Create QR code
            </span>
          </Button>

          {/* image stack */}
          <div className="h-auto pt-12 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="relative w-full">
                <div className="relative w-full flex justify-center">
                  {/* Graph Image */}
                  <img
                    src="/images/home/graph.svg"
                    alt="Analytics Graph"
                    className="w-full max-w-5xl h-auto object-contain"
                  />

                  {/* QR Scan Image */}
                  <div className=" absolute bottom-[-1] -left-4 sm:-left-8 md:left-[-185px] lg:left-[-185px] xl:left-[-185px]">
                    <img
                      src="/images/home/qrscan.svg"
                      alt="QR Scan"
                      className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 h-auto object-contain drop-shadow-2xl"
                    />
                  </div>

                  {/* Customize Image (desktop only) */}
                  <div className="hidden xl:block absolute top-[-60px] right-[-170px]">
                    <img
                      src="/images/home/customize.svg"
                      alt="Customize"
                      className="w-40 sm:w-48 md:w-56 lg:w-64 xl:w-80 h-auto object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gray Border */}
          <div className="h-px bg-gray-300 mt-[-16px] w-full md:w-[calc(100%)] mx-auto"></div>

          {/* Brand Icons */}
          <div
            className="grid grid-cols-2 gap-x-12 gap-y-12
  desktop:flex desktop:flex-nowrap desktop:justify-start desktop:gap-x-28 desktop:gap-y-28
  w-full max-w-[1220px] mx-auto
  py-[40px] desktop:py-[64px]">
            <img
              src="/images/brand/nestle.svg"
              alt="Nestle"
              className="w-[116px] h-auto desktop:w-[115px] desktop:h-8"
            />
            <img
              src="/images/brand/addidas.svg"
              alt="Adidas"
              className="w-[46px] h-auto desktop:w-[46px] desktop:h-8"
            />
            <img
              src="/images/brand/marriott.svg"
              alt="Marriott"
              className="w-[101px] h-auto desktop:w-[101px] desktop:h-8"
            />
            <img
              src="/images/brand/loreal.svg"
              alt="Loreal"
              className="w-[133px] h-auto desktop:w-[133px] desktop:h-6"
            />
            <img
              src="/images/brand/dhl.svg"
              alt="DHL"
              className="w-[170px] h-auto desktop:w-[170px] desktop:h-8"
            />
            <img
              src="/images/brand/hilton.svg"
              alt="Hilton"
              className="w-[86px] h-auto desktop:w-[86px] desktop:h-8"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
