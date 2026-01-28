import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";
import FaqBody from "./body"

export default function FaqPage() {
    return (
        <div>
        <Header showOptions={true}/>
        <FaqBody/>
        <Footer/>
        </div>
    );
}