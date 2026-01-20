import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";
import CancelSubscriptionPage from "./body";

export default function CancelSubscription() {
    return (
        <div>
          <Header className="bg-white desktop:bg-white border-b border-[var(--Boarder-Grey)]"/>
          <CancelSubscriptionPage/>
          <Footer />
        </div>
      );
}