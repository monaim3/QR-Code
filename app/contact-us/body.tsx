import Container from "../../components/common/parent-container";
import Link from 'next/link';
import { ChevronRight } from "lucide-react";
import ContactUsInputForm from "../../components/contact-us/input-form";
import ContactInformation from "../../components/contact-us/contact-information";
import MostCommonQuestion from "../../components/contact-us/most-common-questions";


export default function ContactUsBody() {
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
            Smart QR Code
          </Link>
          <ChevronRight className="w-4 h-4 text-[#79809A]" />
          <Link
            href="/#"
            className="text-[14px] font-regular leading-[22px] text-[var(--Blue)]"
          >
            Contact US
          </Link>
        </div>
        </Container>
        <div>
        </div>
        </div> 
        <Container
      className="flex items-center justify-center pt-14 desktop:pt-[48px] pb-8 desktop:pb-[160px]">
        <div style={{ fontFamily: "var(--font-poppins)" }}>
      {/* Outer Card */}
      <div className="
        w-full max-w-[976px]
        bg-white
        rounded-[12px]
        px-[16px] desktop:px-[32px]
        pt-[32px] pb-[24px] desktop:pb-[32px]
        shadow-card
        flex flex-col desktop:flex-row
        items-stratch justify-between
        overflow-hidden
        mobile:gap-6
      ">
        {/* Left Panel */}
        <ContactUsInputForm/>
       {/* Right Panel */}
       <ContactInformation/>
      </div>
      </div>
        </Container>
        <MostCommonQuestion/>
    </div>
    );
}