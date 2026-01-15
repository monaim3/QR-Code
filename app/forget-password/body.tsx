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
            <div className="flex flex-col items-center justify-start bg-white rounded-[12px] shadow-[0_4px_14px_0_rgba(54,66,140,0.16)] w-[400px] h-[288px] p-[32px]">
                <p className="text-[20px] desktop:text-[24px] leading-[28px] desktop:leading-[32px] font-bold text-[var(--black)] center">
                 Recover password
                </p>
                <p className="text-[16px] leading-[24px] font-regular text-[#3F3E3E] text-center mt-[8px]">
                 Enter your email and we will send you a link to reset your password
                </p>
                <div className="mt-[24px]">
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
                 className="mt-[16px] w-[318px] desktop:w-[336px] h-[48px] bg-[#01A56D] hover:bg-emerald-700 text-white text-[18px] leading-[16px] font-medium py-3.5 rounded-[10px] transition-colors duration-200"
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