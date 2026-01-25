import Footer from "../../app/otp-verify/footer";
import GeneratorHeader from "@/components/generator/Generator_Header";
import CheckoutBody from "../checkout/body";

export default function CheckoutPage() {
    return (
        <div className="pb-[100px] desktop:pb-[0px]">
        <GeneratorHeader priceAndPlan={true} hideInfo={true}/>
       <CheckoutBody/>
       <Footer/>
       </div>
    );
}