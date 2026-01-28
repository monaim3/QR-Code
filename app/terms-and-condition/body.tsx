import Container from "../../components/common/parent-container";
import Link from 'next/link';
import { ChevronRight } from "lucide-react";

export default function TermsAndCondition() {
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
            Terms And Conditions
          </Link>
        </div>
        </Container>
        </div> 
        <div className="bg-[var(--Generator-Background)]">
          <Container className="flex flex-col items-center justify-center">
            <div className="bg-white shadow-card p-[24px] desktop:p-[40px] mt-[16px] desktop:mt-[96px] mb-[80px] desktop:mb-[160px] flex flex-col items-start justify-start max-w-[800px] rounded-[12px]">
                <p className="text-6 desktop:text-8 leading-8 desktop:leading-10 font-bold text-[var(--Black)]">
                Terms and conditions
                </p>
                <p className="text-4 leading-8 font-regular mt-6 text-[var(--Black)]">
                    <span>
                    Welcome to MyQRCode.com! These Terms and conditions (“Terms”) apply to your access and use of our websites, services, apps, and products that you purchase or sign up for on MyQRCode.com (collectively, the “Services”). These Terms constitute a written contract between you (“you”, “your”, or “user”) and Outsourcing International EOOD, a Bulgarian company with registration number 204188831, headquartered at Office 5, 46, “Stefan Mladenov” Str, 1700 Sofia, Bulgaria, dba “My QR Code”, (“Company”, “we”, “our”, or “us”). In addition to these Terms, your use of the Services is governed also by our
                    </span>
                    <span className="text-[#4981FF] ml-[3px] underline">
                    Privacy Policy
                    </span>
                    <span>
                    , the Data Processing Agreement, and the Standard Contractual Clauses for data transfer.
                    </span>
                </p>
                <p className="text-4 leading-8 font-regular mt-4 text-[var(--Black)]">
                    <span>
                    Company offers its website
                    </span>
                    <span className="text-[#4981FF] ml-[3px] underline">
                    https://myqrcode.com
                    </span>
                    <span>
                    (the “Site“) and Services to you conditioned upon your acceptance of these Terms. If you do not understand these Terms or do not agree to be bound by the Terms you may not access or use our Services, and you must immediately cease accessing or using the Services.
                    </span>
                </p>
                <p className="text-4 leading-8 font-regular mt-4 text-[var(--Black)]">
                You agree to these Terms by starting to use the Services. Moreover, by creating an Account with us (as defined hereunder in section 4, (B), purchasing a paid Account, or accessing or using any of our services or/and application program interfaces (the “API“), you acknowledge and agree that you are indicating that you have read, understand, and agree to be bound by the terms of these Terms. YOU HAVE NO RIGHT TO ACCESS OR USE OUR SERVICES IF YOU DO NOT AGREE TO THESE TERMS.
                </p>
                <p className="text-4 leading-8 font-regular mt-4 text-[var(--Black)]">
                AS DESCRIBED IN SECTION 3 BELOW, THESE TERMS CONTAIN AN ARBITRATION PROVISION AND A WAIVER OF CLASS ACTIONS. YOU AGREE THAT ANY DISPUTE OR DISPUTES BETWEEN YOU AND US WILL BE RESOLVED BY BINDING, INDIVIDUAL ARBITRATION, AND YOU ARE WAIVING YOUR RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS ACTION OR REPRESENTATIVE PROCEEDING.
                </p>
                <p className="text-6 desktop:text-8 leading-8 desktop:leading-10 font-bold text-[var(--Black)] mt-4">
                1. PRIVACY POLICY
                </p>
                <p className="text-4 leading-8 font-regular mt-2 text-[var(--Black)]">
                 <span>
                   We take your privacy very seriously. Our
                 </span>
                 <span className="text-[#4981FF] ml-[3px] underline">
                 Privacy Policy
                 </span>
                 <span>
                 explains how we collect information from you and how we may use and share that information (including personal data within the meaning of GDPR). For information about how we collect, use, share, or otherwise process your personal data and your use of the Services, please see our
                 </span>
                 <span className="text-[#4981FF] ml-[3px] underline">
                  Privacy Policy
                 </span>
                 . With respect to your data protection obligations please review also section 6 hereunder.
                </p>
                <p className="text-6 desktop:text-8 leading-8 desktop:leading-10 font-bold text-[var(--Black)] mt-4">
                2. ELIGIBILITY
                </p>
                <p className="text-4 leading-8 font-regular mt-2 text-[var(--Black)]">
                You must be at least eighteen (18) years old to create an Account and use our Services. If you are agreeing to these Terms on behalf of an organization or entity, you represent and warrant that you are authorized to agree to these Terms on that organization or entity’s behalf and bind them to these Terms. In such case, “you” and “your” will refer to that organization.
                </p>
            </div>
          </Container>
        </div>
        </div>
    );
}