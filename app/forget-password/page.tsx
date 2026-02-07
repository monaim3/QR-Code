import { Suspense } from "react";
import LogoHeader from "../../components/common/logo_header";
import ForgetPasswordBody from "../forget-password/body"

export default function ForgetPassword(){
    return (
        <div className="bg-[var(--Generator-Background)]">
        <LogoHeader/>
        <Suspense fallback={null}>
        <ForgetPasswordBody/>
        </Suspense>
        </div>
    );
}