import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";
import ContactUsBody from "./body";

export default function ContactUsPage() {
    return (
        <div>
        <Header showOptions={true} className="desktop:bg-white"/>
        <ContactUsBody/>
        <Footer/>
        </div>
    );
}