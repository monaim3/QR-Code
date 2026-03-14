import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";
import TermsAndCondition from "./body";

export default function FaqPage() {
    return (
        <div>
        <Header showOptions={true} className="desktop:bg-white"/>
        <TermsAndCondition/>
        <Footer/>
        </div>
    );
}