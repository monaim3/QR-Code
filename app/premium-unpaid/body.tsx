"use client";
import Container from "../../components/common/parent-container";
import CheckoutElementV4 from "../../components/payment/payment-element_v4";
import Edit from "@/components/icons/edit";
import CheckIcon from "@/components/icons/check-icon";


export default function PremiumUnpaidBody() {

const authFeatureList = [
  'Unlimited QR codes',
  'Unlimited QR code scans',
 'Unrestricted customization options',
  'Unlimited access to analytics',
 'Unlimited downloads',
  'Full access to all download formats',
 'Create any type of QR code you need'
];

  return (
    <Container
      className="flex items-center justify-center min-h-screen px-4 pt-[40px] desktop:pt-[48px] pb-[120px] desktop:pb-[160px]">
        <div className="flex items-center gap-8" style={{ fontFamily: "var(--font-poppins)" }}>
      {/* Outer Card */}
      <div className="
        w-full max-w-[1215px]
        bg-var(--Generator-Background)
        rounded-[12px]
        p-[16px] desktop:px-[32px]
        desktop:pt-[24px] desktop:pb-[32px]
        flex flex-col desktop:flex-row
        items-stratch justify-between
        overflow-hidden
        desktop:gap-[32px]
      ">
        {/* Left Panel */}
        <div className="shadow-card bg-white rounded-[12px] p-[16px] desktop:px-[32px] desktop:pt-[24px] desktop:pb-[32px]">
            <CheckoutElementV4 />
        </div>
       <div className="flex flex-col w-full desktop:w-[592px] max-h-full mt-[40px] desktop:mt-[0px]">
       <p className="text-[18px] leading-[26px] font-bold text-[var(--Black)]">
        Summary
       </p>
       <div className="h-[48px] w-full flex items-center px-4 py-3 gap-4 border border-[var(--Boarder-Grey)] rounded-[10px] mt-2">
         <p className="text-[16px] leading-[24px] font-semibold text-[var(--Black)]">
            12 Months Plan:
         </p>
         <p className="text-[16px] leading-[24px] font-regular text-[var(--Dark-gray)]">
           $18 / mo
         </p>
         <div className="flex flex-1 items-center justify-end">
            <Edit />
         </div>
       </div>
       <div className="flex items-center justify-between pt-6 desktop:pt-8">
         <p className="text-[18px] leading-[26px] font-bold text-[var(--Black)]">
        Total:
       </p>
        <p className="text-[16px] leading-[26px] font-regular text-[var(--Black)]">
           $216
         </p>
       </div>
       <div className="w-full border border-dotted border-[var(--Boarder-Grey)] rounded-[10px] p-6 mt-[24] desktop:mt-[32px]">

         <p className="text-[20px] leading-[28px] desktop:text-[24px] desktop:leading-[32px] font-bold text-[var(--Black)]">
           Features
         </p>

          <p className="text-[14px] leading-[22px] font-regular text-[var(--Dark-gray)] pt-1">
           The following features are included in every plan
         </p>

         <div className="h-[1px] w-full bg-[var(--Boarder-Grey)] my-6 desktop:my-8"/>

          <div className="flex flex-col w-full gap-[16px] overflow-auto">
        {authFeatureList.map((feature,index) => (
          <div key={index} className="flex items-center gap-[8px]">
            <CheckIcon/>
            <p className="text-[16px] leading-[24px] font-regular text-[var(--Dark-gray)]">{feature}</p>
          </div>
        ))}
      </div>

       </div>
      </div>
      </div>
      </div>
    </Container>
  );
}
