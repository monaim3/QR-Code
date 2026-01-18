import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";
import PricingPage from "./body"

export default function Pricing() {
    return (
        <div>
          <Header className="bg-white desktop:bg-white"/>
          <PricingPage/>
          <Footer />
        </div>
      );
}