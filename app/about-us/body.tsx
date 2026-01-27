import Container from "@/components/common/parent-container"; 
import Link from 'next/link';
import { ChevronRight } from "lucide-react";
import Wifi from "../../components/icons/wifi";
import LinkIcon from "../../components/icons/link";

export default function AboutUsBody() {
  return (
    <div className="flex flex-col">
        {/* Breadcrumb */}
        <div className="bg-white">
        <Container>
        <div className="flex h-[54px] w-full items-center justify-start gap-2">
            <Link
            href="/#"
            className="text-[14px] font-regular leading-[22px] text-[var(--Black)]"
          >
            My QR Code
          </Link>
          <ChevronRight className="w-4 h-4 text-[#79809A]" />
          <Link
            href="/#"
            className="text-[14px] font-regular leading-[22px] text-[var(--Blue)]"
          >
            About us
          </Link>
        </div>
        </Container>
        </div> 
        <div className="bg-[var(--Generator-Background)]">
     <Container className="w-full max-w-full">
        {/* Main content */}
        <div className="flex flex-col w-full h-[calc(100vh-54px)] desktop:mt-[120px]">
        <div className="flex flex-col desktop:flex-row w-full min-w-full h-[480px]">
        {/* Left half */}
        <div className="order-2 desktop:order-1 flex-1 h-full flex flex-col items-center justify-center desktop:items-start">
            <h1 className="text-[32px] desktop:text-[40px] leading-[40px] leading-[32px] font-bold">Get to know us</h1>
            <p className="w-[350px] desktop:w-[488px] text-center desktop:text-start text-[18px] leadind-[26px] font-regular mt-2">Welcome to My QR Code, your go-to QR code generator for your business and personal needs.</p>
            <Link 
            href="#"
            className="h-[48px] w-[159px] bg-[var(--Blue)] flex items-center justify-center text-[18px] leading-[26px] text-white font-medium rounded-[10px] mt-[24px]"
            >
            Learn more
            </Link>
        </div>

        {/* Right half */}
        <div className="order-1 desktop:order-2 flex-1 h-full flex items-center justify-center">
          <div className="relative flex justify-between">
            <div className="w-[412px] h-[412px] rounded-full flex items-center justify-center overflow-hidden"
                style={{
                background: "linear-gradient(180deg, rgba(155,162,251,0.1) 0%, rgba(247,249,252,0.1) 100%)"
                }}>
            <div className="w-[254px] h-[254px] rounded-full"
                style={{
                    background: "linear-gradient(180deg, rgba(155,162,251,0.2) 0%, rgba(247,249,252,0.2) 100%)"
                }}>
            </div>
            </div>
            <div className="absolute top-[91px] desktop:top-[108px] left-[115px] desktop:left-[-21px] right-[115px] desktop:right-0 desktop:bottom-[78px] desktop:right-[220px]">
                <img
                  src="/images/home/scan.svg"
                  alt="QR Scan"
                  className="w-[160px] h-[160px] desktop:w-[260px] desktop:h-[260px] drop-shadow-[0_1.385px_22.154px_rgba(63,72,103,0.08)]"
                />
            </div>
            <div className="absolute top-[0px] left-[110px] desktop:top-[-11px] desktop:left-[20px] h-[48px] w-[48px] bg-white flex items-center justify-center rounded-full">
               <Wifi/>
            </div>
            <div className="absolute top-[0px] desktop:top-[203px] left-[30px] desktop:left-[-99px] h-[48px] w-[48px] bg-white flex items-center justify-center rounded-full">
               <LinkIcon/>
            </div>
         </div>
        </div>
        </div>
        </div>
    </Container>
     </div>
    </div>
  );
}
