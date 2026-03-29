import LogoHeader from "../../../components/common/logo_header";
import Footer from "../../../app/otp-verify/footer";
import CongratulationPage from "../congratulation/body"

export default function CheckoutSuccess() {
    return (
        <div className="bg-[var(--Generator-Background)]">
         <LogoHeader/>
         <CongratulationPage/>
         <Footer/>
        </div>
    );
}
