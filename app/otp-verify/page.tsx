import TwoFactorAuthPage from "../otp-verify/body";
import LogoHeader from "../../components/common/logo_header";
import Footer from "./footer";


export default function OtpVerify() {
    return (
        <div className="bg-[var(--Generator-Background)]">
        <LogoHeader/>
         <TwoFactorAuthPage/>
         <Footer/>
        </div>
    );
}