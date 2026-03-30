"use client";
import Container from "../../components/common/parent-container";
import InputField from "../../components/common/input_filed";
import { useState } from "react";
import { Mail } from "lucide-react";
import BackButtonWithText from "../../components/common/back_button_with_text";
import CheckInboxModal from "../../components/modals/check-inbox-modal";
import { z } from "zod";

const emailSchema = z
  .string()
  .min(1, "This field is required and cannot be left blank.")
  .email("You have entered an invalid email address. Please try again.");

export default function ForgetPasswordBody() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = () => {
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setEmailError(result.error.issues[0].message);
      return;
    }
    setEmailError("");
    setIsModalOpen(true);
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
            onChange={(value) => {
              setEmail(value);
              if (emailError) {
                setEmailError("");
              }
            }}
            placeholder="Enter your email"
            type="email"
            leading={<Mail size={20} />}
            error={Boolean(emailError)}
          />
          {emailError && (
            <p className="mt-2 text-[14px] leading-[20px] text-[var(--error)]">
              {emailError}
            </p>
          )}
        </div>
        {/* send link Button */}
        <button
          onClick={handleSubmit}
          className="mt-[16px] w-full h-12 bg-[var(--Blue)] hover:bg-[var(--Blue-hover)] text-white text-[18px] leading-[16px] font-medium rounded-[10px] transition-colors duration-300"
        >
          Send reset link
        </button>

        <CheckInboxModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
      <div className="mt-6">
        <BackButtonWithText />
      </div>
    </Container>
  );
}
