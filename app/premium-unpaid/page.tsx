
import GeneratorHeader from "@/components/generator/Generator_Header";
import Footer from "../otp-verify/footer";
import PremiumUnpaidBody from "./body";

export default function PremiumUnPaid() {
    return (
        <div className="pb-[100px] desktop:pb-[0px]">
           <GeneratorHeader priceAndPlan={true} hideInfo={true}/>
          <PremiumUnpaidBody />
          <Footer/>
        </div>
      );
}