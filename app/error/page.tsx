import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";
import ErrorBody from "./body"

export default function Error() {
    return (
        <div>
        <Header showOptions={true}/>
       <ErrorBody/>
        <Footer/>
        </div>
    );
}