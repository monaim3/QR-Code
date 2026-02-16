import Footer from "../../app/otp-verify/footer";
import SmartQRPlanSelection from "./body";
import GeneratorHeader from "@/components/generator/Generator_Header";

export default function PlanAndPricing() {
    return (
        <div className="pb-[100px] desktop:pb-[0px]">
         <GeneratorHeader priceAndPlan={true} hideInfo={true}/>
        <SmartQRPlanSelection/>
        <Footer/>
        </div>
    );
}