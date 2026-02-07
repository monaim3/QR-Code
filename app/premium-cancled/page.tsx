
import GeneratorHeader from "@/components/generator/Generator_Header";
import Footer from "../otp-verify/footer";
import PremiumCancledBody from "./body";

export default function PremiumCancled() {
    return (
        <div className="pb-[100px] desktop:pb-[0px]">
           <GeneratorHeader priceAndPlan={true} hideInfo={true}/>
          <PremiumCancledBody />
          <Footer/>
        </div>
      );
}