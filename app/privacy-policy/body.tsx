import Container from "../../components/common/parent-container";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <div className="bg-white">
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
              Privacy Policy
            </span>
          </div>
        </Container>
      </div>
      <div className="bg-[var(--Generator-Background)]">
        <Container className="flex flex-col items-center justify-center">
          <div className="bg-white shadow-card p-[24px] desktop:p-[40px] mt-[16px] desktop:mt-[96px] mb-[80px] desktop:mb-[160px] flex flex-col items-start justify-start max-w-[800px] rounded-[12px]">
            <p className="text-6 desktop:text-8 leading-8 desktop:leading-10 font-bold text-[var(--Black)]">
              Privacy Policy
            </p>
            <p className="text-4 leading-8 font-regular mt-6 text-[var(--Black)]">
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </span>
              <span className="text-[#4981FF] ml-[3px] underline">
                Privacy Policy
              </span>
              <span>
                , the Data Processing Agreement, and the Standard Contractual
                Clauses for data transfer.
              </span>
            </p>
            <p className="text-4 leading-8 font-regular mt-4 text-[var(--Black)]">
              <span>Company offers its website</span>
              <span className="text-[#4981FF] ml-[3px] underline">
                https://example.com
              </span>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </span>
            </p>
            <p className="text-4 leading-8 font-regular mt-4 text-[var(--Black)]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p className="text-4 leading-8 font-regular mt-4 text-[var(--Black)]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p className="text-6 desktop:text-8 leading-8 desktop:leading-10 font-bold text-[var(--Black)] mt-4">
              1. PRIVACY POLICY
            </p>
            <p className="text-4 leading-8 font-regular mt-2 text-[var(--Black)]">
              <span>We take your privacy very seriously. Our</span>
              <span className="text-[#4981FF] ml-[3px] underline">
                Privacy Policy
              </span>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </span>
              <span className="text-[#4981FF] ml-[3px] underline">
                Privacy Policy
              </span>
              .Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s
            </p>
            <p className="text-6 desktop:text-8 leading-8 desktop:leading-10 font-bold text-[var(--Black)] mt-4">
              2. ELIGIBILITY
            </p>
            <p className="text-4 leading-8 font-regular mt-2 text-[var(--Black)]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}
