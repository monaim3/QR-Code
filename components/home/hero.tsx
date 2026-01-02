import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <main className="flex flex-col gap-4 items-center justify-center min-w-screen desktop:pt-[120px] pt-20 bg-[#F5F6FA]">
      <h1 className="text-4xl font-bold text-center px-5">
        <span className="text-gray-900">Generate your QR code in </span>
        <span className="text-[#01A56D]">just seconds</span>
      </h1>

      <h3 className="text-1.5xl font-regular text-center px-3">
        <span className="text-gray-900">
          Quickly generate and fully personalize your QR code in just a few
          simple clicks.
        </span>
      </h3>

      <Button className="text-white bg-[#01A56D] hover:bg-[#018f5f]">
        Generate QR
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
      <div className="h-px bg-gray-300 mt-[-16px] w-full md:w-[calc(100%-230px)] mx-auto"></div>

      {/* Brand Icons */}
      <div className="grid grid-cols-2 gap-x-12 gap-y-12 desktop:flex desktop:flex-wrap desktop:justify-center desktop:gap-28 px-5 desktop:py-16 py-10 items-center justify-items-center">
        <img
          src="/images/brand/nestle.svg"
          alt="Nestle"
          className="w-24 h-auto desktop:w-29 desktop:h-8"
        />
        <img
          src="/images/brand/addidas.svg"
          alt="Adidas"
          className="w-12 h-auto desktop:w-[46px] desktop:h-8"
        />
        <img
          src="/images/brand/marriott.svg"
          alt="Marriott"
          className="w-24 h-auto desktop:w-[101px] desktop:h-8"
        />
        <img
          src="/images/brand/loreal.svg"
          alt="Loreal"
          className="w-28 h-auto desktop:w-[133px] desktop:h-6"
        />
        <img
          src="/images/brand/dhl.svg"
          alt="DHL"
          className="w-32 h-auto desktop:w-[170px] desktop:h-8"
        />
        <img
          src="/images/brand/hilton.svg"
          alt="Hilton"
          className="w-20 h-auto desktop:w-[86px] desktop:h-8"
        />
      </div>
    </main>
  );
}
