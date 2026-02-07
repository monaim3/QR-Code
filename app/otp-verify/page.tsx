import { Suspense } from "react";
import TwoFactorAuthPage from "../otp-verify/body";
import LogoHeader from "../../components/common/logo_header";
import Footer from "./footer";


export default function OtpVerify() {
    return (
        <div className="bg-[var(--Generator-Background)]">
        <LogoHeader/>
        <Suspense fallback={null}>
         <TwoFactorAuthPage/>
        </Suspense>
         <Footer/>
        </div>
    );
}