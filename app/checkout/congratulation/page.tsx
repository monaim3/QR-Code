import { Suspense } from "react";
import LogoHeader from "../../../components/common/logo_header";
import Footer from "../../../app/otp-verify/footer";
import CongratulationPage from "./body"

export default function Congratulation() {
    return (
        <div className="bg-[var(--Generator-Background)]">
         <Suspense fallback={<div className="w-full desktop:bg-[#F5F6FA] bg-white z-50 desktop:h-[72px] h-16" />}>
           <LogoHeader/>
         </Suspense>
         <CongratulationPage/>
         <Footer/>
        </div>
    );
}
