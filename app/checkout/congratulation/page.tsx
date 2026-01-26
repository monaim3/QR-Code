import LogoHeader from "../../../components/common/logo_header";
import Footer from "../../../app/otp-verify/footer";
import CongratulationPage from "./body"

export default function Congratulation() {
    return (
        <div className="bg-[var(--Generator-Background)]">
         <LogoHeader/>
         <CongratulationPage/>
         <Footer/>
        </div>
    );
}