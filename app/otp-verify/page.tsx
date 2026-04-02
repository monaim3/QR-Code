import { Suspense } from "react";
import TwoFactorAuthPage from "../otp-verify/body";
import LogoHeader from "../../components/common/logo_header";
import Footer from "./footer";


export default function OtpVerify() {
    return (
        <div className="bg-[var(--Generator-Background)]">
        <Suspense fallback={<div className="w-full desktop:bg-[#F5F6FA] bg-white z-50 desktop:h-[72px] h-16" />}>
          <LogoHeader/>
        </Suspense>
        <Suspense fallback={null}>
         <TwoFactorAuthPage/>
        </Suspense>
         <Footer/>
        </div>
    );
}