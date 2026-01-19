import Footer from "../../app/otp-verify/footer";
import SmartQRPlanSelection from "../plan-and-pricing/body";
import GeneratorHeader from "@/components/generator/Generator_Header";

export default function PlanAndPricing() {
    return (
        <div>
         <GeneratorHeader/>
        <SmartQRPlanSelection/>
        <Footer/>
        </div>
    );
}