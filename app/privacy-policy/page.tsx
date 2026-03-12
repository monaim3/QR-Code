import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";
import PrivacyPolicy from "./body";

export default function PrivacyPolicyPage() {
  return (
    <div>
      <Header showOptions={true} className="desktop:bg-white" />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
}
