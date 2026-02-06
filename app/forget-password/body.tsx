"use client";
import Container from "../../components/common/parent-container";
import InputField from "../../components/common/input_filed";
import { useState } from "react";
import { Mail } from "lucide-react"
import BackButtonWithText from "../../components/common/back_button_with_text";
import { useRouter } from "next/navigation";
import CheckInboxModal from "../../components/modals/check-inbox-modal"

export default function ForgetPasswordBody(){
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = () => {
       setIsModalOpen(true);
       //router.push("/otp-verify");
    };

    return (
        <Container className="flex flex-col items-center justify-center min-h-[calc(100vh-72px)]">
            <div className="flex flex-col items-center justify-start bg-white rounded-[12px] shadow-card max-w-[350px] desktop:max-w-[400px] p-[24px] desktop:p-[32px]">
                <p className="text-[20px] desktop:text-[24px] leading-[28px] desktop:leading-[32px] font-bold text-[var(--black)] center">
                 Recover password
                </p>
                <p className="text-[16px] leading-[24px] font-regular text-[var(--Black)] text-center mt-[8px]">
                 Enter your email and we will send you a link to reset your password
                </p>
                <div className="relative w-full desktop:flex-1 mt-[24px]">
                {/* Email Input */}
                <InputField
                  value={email}
                  onChange={setEmail}
                  placeholder="Enter your email"
                  type="email"
                  leading={<Mail size={20} />}
                />
                </div>
                 {/* send link Button */}
                <button
                 onClick={handleSubmit}
                 className="h-[48px] mt-[16px] w-full h-12 bg-[var(--Blue)] hover:bg-[var(--Blue-hover)] text-white text-[18px] leading-[16px] font-medium rounded-[10px] transition-colors duration-300"
                >
                 Send reset link
                </button>

                <CheckInboxModal
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
               />
            </div>
            <div className="mt-6">
             <BackButtonWithText/>
            </div>
        </Container>
    );
}