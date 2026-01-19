"use client";
import Container from "../../components/common/parent-container";
import InputField from "../../components/common/input_filed";
import { useState } from "react";
import { Mail } from "lucide-react"
import BackButtonWithText from "../../components/common/back_button_with_text"

export default function ForgetPasswordBody(){
    
    const [email, setEmail] = useState("");

    const handleSubmit = () => {
        alert(`Email: ${email}`);
    };

    return (
        <Container className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex flex-col items-center justify-start bg-white rounded-[12px] shadow-card w-[350px] desktop:w-[400px] h-[288px] p-[24px] desktop:p-[32px]">
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
                 className="mt-[16px] w-full desktop:w-[336px] h-[48px] bg-[var(--Blue)] hover:bg-emerald-700 text-white text-[18px] leading-[16px] font-medium rounded-[10px] transition-colors duration-200"
                >
                 Send reset link
                </button>
            </div>
            <div className="mt-[24px]">
             <BackButtonWithText/>
            </div>
        </Container>
    );
}