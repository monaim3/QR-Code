import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";
import PricingPage from "./body";
import CurrenctSelector from '@/components/common/currency_dropdown';

export default function Pricing() {
    return (
        <div className="pb-[100px] desktop:pb-[0px]">
          <Header languageDropDown={true} hideDivider={true} className="bg-white desktop:bg-white border-b border-[var(--Boarder-Grey)]"/>
          <PricingPage/>
          <Footer />
        </div>
      );
}