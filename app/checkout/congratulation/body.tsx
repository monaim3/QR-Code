"use client";
import Container from "../../../components/common/parent-container";
import LoadingAnimation from "../../../components/ui/loadingAnimation";

export default function CongratulationPage(){
    return (
        <Container className="flex flex-col items-center justify-center min-h-[calc(100vh-159px)]">
            <div className="flex flex-col items-center justify-start bg-white rounded-[12px] shadow-card w-full max-w-[350px] desktop:max-w-[400px]  p-[24px] desktop:p-[32px]">
                <div className="size-[60px]">
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
                 className="mt-6 w-full h-12 bg-[var(--Blue)] hover:bg-[var(--Blue-hover)] text-white text-[18px] leading-[16px] font-medium rounded-[10px] transition-all duration-300"
                >
                 Go to My QR codes
                </button>
            </div>
        </Container>
    );
}