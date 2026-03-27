import Container from "../../components/common/parent-container";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ContactUsInputForm from "../../components/contact-us/input-form";
import ContactInformation from "../../components/contact-us/contact-information";
import MostCommonQuestion from "../../components/contact-us/most-common-questions";

export default function ContactUsBody() {
  return (
    <div className="flex flex-col bg-[var(--Generator-Background)]">
      {/* Breadcrumb */}
      <div className="bg-white">
        <Container>
          <div className="flex h-[54px] w-full items-center justify-start gap-2">
            <Link
              href="/"
              className="text-[14px] font-regular leading-[22px] text-[var(--Black)]"
            >
              QRCenter
            </Link>
            <ChevronRight className="w-4 h-4 text-[var(--breadcrumb)]" />
            <span className="text-[14px] font-regular leading-[22px] text-[var(--Blue)]">
              Contact Us
            </span>
          </div>
        </Container>
        <div></div>
      </div>
      <Container className="flex items-center justify-center pt-[16px] desktop:pt-[96px] pb-[80px] desktop:pb-[160px]">
        <div style={{ fontFamily: "var(--font-poppins)" }}>
          {/* Outer Card */}
          <div className="w-full max-w-full bg-white rounded-[12px] p-6 desktop:p-10 shadow-card flex flex-col desktop:flex-row items-stretch justify-between gap-6 desktop:gap-10">
            {/* Left Panel */}
            <ContactUsInputForm />
            {/* Right Panel */}
            <ContactInformation />
          </div>
        </div>
      </Container>
      <MostCommonQuestion />
    </div>
  );
}
