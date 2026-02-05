
import GeneratorHeader from "@/components/generator/Generator_Header";
import Footer from "../otp-verify/footer";
import CheckoutV2Body from "./body";

export default function CheckoutV2() {
    return (
        <div className="pb-[100px] desktop:pb-[0px]">
           <GeneratorHeader priceAndPlan={true} hideInfo={true}/>
          <CheckoutV2Body />
          <Footer/>
        </div>
      );
}