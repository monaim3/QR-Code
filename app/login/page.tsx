import { Suspense } from "react";
import LogoHeader from "../../components/common/logo_header";
import LoginBody from "../login/body"

export default function Login() {
    return (
        <div className="bg-[var(--Generator-Background)]">
         <Suspense fallback={<div className="w-full desktop:bg-[#F5F6FA] bg-white z-50 desktop:h-[72px] h-16" />}>
           <LogoHeader/>
         </Suspense>
         <LoginBody/>
        </div>
    );
}
