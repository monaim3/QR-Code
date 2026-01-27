import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";
import AboutUsBody from "./body"

export default function AboutUsPage() {
    return (
        <div>
        <Header showOptions={true}/>
        <AboutUsBody/>
        <Footer/>
        </div>
    );
}