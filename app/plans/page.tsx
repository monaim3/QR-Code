import GeneratorHeader from "@/components/generator/Generator_Header";
import Footer from "../otp-verify/footer";
import PricingPage from "./body";

export default function PlansPage() {
  return (
    <div className="pb-[100px] desktop:pb-[0px]">
      <GeneratorHeader priceAndPlan={true} hideInfo={true} />
      <PricingPage />
      <Footer />
    </div>
  );
}
