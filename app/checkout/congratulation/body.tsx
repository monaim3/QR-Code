"use client";
import Container from "../../../components/common/parent-container";
import LoadingAnimation from "../../../components/ui/loadingAnimation";

export default function CongratulationPage(){
    return (
        <Container className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex flex-col items-center justify-start bg-white rounded-[12px] shadow-card w-full max-w-[350px] desktop:max-w-[400px]  p-[24px] desktop:p-[32px]">
                <div className="w-[60px] h-[60px]">
                <LoadingAnimation/>
                </div>
                <p className="text-[20px] desktop:text-[24px] leading-[28px] desktop:leading-[32px] font-bold text-[var(--black)] center mt-[24px]">
                 Congratulations!
                </p>
                <p className="text-[16px] leading-[24px] font-regular text-[var(--Black)] text-center mt-[8px]">
                Your account has been created successfully, you now have access to myqrcode.com and all its functions.
                </p>
                 {/* Button */}
                <button
                 className="mt-[24px] w-full h-[48px] bg-[var(--Blue)] hover:bg-emerald-700 text-white text-[18px] leading-[16px] font-medium rounded-[10px] transition-colors duration-200"
                >
                 Go to My QR codes
                </button>
            </div>
        </Container>
    );
}