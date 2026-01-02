import {Button} from "@/components/ui/button";

export default function Hero() {
  return (
    <main className="flex flex-col gap-4 items-center justify-center min-w-screen pt-[120px] bg-[#F5F6FA]">
      <h1 className="text-4xl font-bold text-center">
        <span className="text-gray-900">Generate your QR code in </span>
        <span className="text-[#01A56D]">just seconds</span>
      </h1>
      <h3 className="text-1.5xl font-regular text-center px-3">
        <span className="text-gray-900">Quickly generate and fully personalize your QR code in just a few simple clicks. </span>
      </h3>
        <Button className="text-white bg-[#01A56D] hover:bg-[#018f5f]">
        Generate QR
       </Button>
       {/* image stack */}
      <div className="h-auto pt-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Container */}
          <div className="relative w-full">
            {/* Graph Image - Main Center */}
            <div className="relative w-full flex justify-center">
              <img
                src="/images/home/graph.svg"
                alt="Analytics Graph"
                className="w-full max-w-5xl h-auto object-contain"
              />
              
              {/* QR Scan Image - Overlapping bottom left of graph */}
              <div className="absolute bottom-[-10px] -left-4 sm:-left-8 md:left-[-185px] lg:left-[-185px] xl:left-[-185px]">
                <img
                  src="/images/home/qrscan.svg"
                  alt="QR Scan"
                  className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 h-auto object-contain drop-shadow-2xl"
                />
              </div>

              {/* Customize Image - Overlapping top right of graph */}
              <div className="absolute top-[-60px] right-[-170px]">
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
      {/* GaryBoarder */}
      <div className="h-px bg-gray-300 mt-[-16px] w-full md:w-[calc(100%-230px)] mx-auto"></div>
      {/* Brand Icons */}
      <div className="flex flex-wrap justify-center gap-28 px-4 py-16">
      <img src="/images/brand/nestle.svg" alt="Icon 1" className="w-29 h-8 sm:w-20 sm:h-[32px]" />
      <img src="/images/brand/addidas.svg" alt="Icon 2" className="w-[46px] h-8 sm:w-[46px] sm:h-[32px]" />
      <img src="/images/brand/marriott.svg" alt="Icon 3" className="w-[101px] h-8 sm:w-[101px] sm:h-[32px]" />
      <img src="/images/brand/loreal.svg" alt="Icon 4" className="w-[133px] h-6 sm:w-[133px] sm:h-[24px]" />
      <img src="/images/brand/dhl.svg" alt="Icon 5" className="w-[170px] h-8 sm:w-[170px] sm:h-[32px]" />
      <img src="/images/brand/hilton.svg" alt="Icon 5" className="w-[86px] h-8 sm:w-[86px] sm:h-[32px]" />
    </div>
    </main>
  );
}