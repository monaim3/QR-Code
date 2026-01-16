import TwoFactorAuthPage from "../otp-verify/body";
import LogoHeader from "../../components/common/logo_header";


export default function OtpVerify() {
    return (
        <div className="bg-[#F5F6FA]">
        <LogoHeader/>
         <TwoFactorAuthPage/>
        </div>
    );
}