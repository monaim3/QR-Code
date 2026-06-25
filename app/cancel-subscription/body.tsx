"use client";
import React, { useEffect, useState } from "react";
import { Mail, ChevronRight, Loader2, CheckCircle2 } from "lucide-react";
import Container from "@/components/common/parent-container";
import InputField from "../../components/common/input_filed";
import EmailIcon from "../../components/icons/email";
import { useT } from "@/utils/t";

const renderWithLink = (str: string, href: string, className: string) => {
  const parts = str.split(/<link>|<\/link>/);
  return (
    <>
      {parts[0]}
      <a href={href} className={className}>{parts[1]}</a>
      {parts[2]}
    </>
  );
};

// Types
interface FormState {
  email: string;
  isSubmitting: boolean;
  status: "idle" | "success" | "error";
  message: string;
}

// Main Component
export default function CancelSubscriptionPage() {
  const t = useT();
  const [formState, setFormState] = useState<FormState>({
    email: "",
    isSubmitting: false,
    status: "idle",
    message: "",
  });

  const [cancelClick, setCancelClick] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 739px)");
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    if (!formState.email.trim()) {
      setFormState((prev) => ({
        ...prev,
        status: "error",
        message: t("auth__common__input_login_validation__required"),
      }));
      return;
    }

    if (!validateEmail(formState.email)) {
      setFormState((prev) => ({
        ...prev,
        status: "error",
        message: "Please enter a valid email address",
      }));
      return;
    }

    setCancelClick(true);
    setFormState((prev) => ({ ...prev, isSubmitting: true }));

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Replace with actual API endpoint
      // const response = await fetch('/api/cancel-subscription', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email: formState.email })
      // });

      setFormState((prev) => ({
        ...prev,
        isSubmitting: false,
        status: "success",
        message:
          "Subscription cancelled successfully. You will receive a confirmation email shortly.",
      }));
    } catch {
      setFormState((prev) => ({
        ...prev,
        isSubmitting: false,
        status: "error",
        message: "Something went wrong. Please try again or contact support.",
      }));
    }
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="bg-[#F5F6FA] font-[var(--font-poppins)]">
      <div className="bg-white h-[54px] flex items-center gap-3 text-[14px] leading-[22px] font-regular">
        <Container className="flex flex-row gap-[8px]">
          <button
            onClick={handleGoBack}
            className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1"
            aria-label="Go back"
          >
            <span className="text-[var(--Black)] text-[14px] leading-[22px] font-regular">
              QR Center
            </span>
          </button>
          <ChevronRight size={20} className="text-gray-500" />
          <span className="text-[var(--Blue)] text-[14px] leading-[22px] font-regular">
            {t("public__cancel_subscription__form_button")}
          </span>
        </Container>
      </div>
      <Container>
        <div className="min-h-[calc(100vh-127px)]">
          {/* Main Card - Centered */}
          <div className="flex items-center justify-center pt-[16px] desktop:pt-[120px] pb-[120px]">
            {!cancelClick ? (
              <div className="bg-white rounded-[10px] shadow-card w-full desktop:max-w-[600px] p-[24px] desktop:p-[32px]">
                {/* Header */}
                <div>
                  <h3 className="text-[20px] desktop:text-[24px] leading-[28px] desktop:leading-[32px] font-bold text-[var(--Black)]">
                    {t("public__cancel_subscription__title")}
                  </h3>
                  <p className="text-[var(--Dark-gray)] font-regular text-[16px] leading-[24px] pt-[8px]">
                    {t("public__cancel_subscription__description")}
                  </p>
                </div>
                <div className="h-px w-full bg-[#CDD0DB80] my-[24px] desktop:my-[32px]" />
                {/* Info Section */}
                <p className="text-[var(--Dark-gray)] text-[14px] leading-[22px] font-regular">
                  {t("public__cancel_subscription__form_instructions")}
                </p>

                {/* Input Section */}
                <div className="flex flex-col pt-[24px] desktop:pt-[32px] gap-[16px]">
                  {/* Email Input */}
                  <InputField
                    value={formState.email}
                    onChange={(value) =>
                      setFormState((prev) => ({
                        ...prev,
                        email: value,
                        status: "idle",
                        message: "",
                      }))
                    }
                    placeholder={t("public__cancel_subscription__form__email_placeholder__text")}
                    type="email"
                    desktopWidth={536}
                    leading={<Mail size={20} />}
                    error={
                      formState.status === "error" && !formState.email.trim()
                    }
                  />
                  {formState.status === "error" && !formState.email.trim() && (
                    <p className="text-[var(--error)] text-[14px] leading-[20px] font-regular -mt-[8px]">
                      {t("auth__common__input_login_validation__required")}
                    </p>
                  )}

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={
                      formState.isSubmitting || formState.status === "success"
                    }
                    className="w-full h-[48px] bg-[var(--Blue)] hover:bg-[var(--Blue-hover)] text-white font-semibold rounded-[10px] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {formState.isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Processing...</span>
                      </>
                    ) : formState.status === "success" ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        <span>Cancelled</span>
                      </>
                    ) : (
                      <span>{t("public__cancel_subscription__form_button")}</span>
                    )}
                  </button>
                </div>

                {/* Help Text */}
                <div className="pt-[24px] desktop:pt-[32px]">
                  <p className="text-[var(--Dark-gray)] text-[14px] leading-[22px] font-regular">
                    {renderWithLink(
                      t("public__cancel_subscription__ additional_info__email"),
                      "/contact-us",
                      "text-[var(--Blue)] hover:underline font-regular"
                    )}
                  </p>
                  <p className="text-[var(--Dark-gray)] text-[14px] leading-[22px] pt-[16px] font-regular">
                    {t("public__cancel_subscription__ additional_info__account")}
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <div className="bg-white rounded-[10px] shadow-card max-w-[350px] desktop:max-w-[500px] p-[24px] desktop:p-[32px] flex flex-col items-center">
                  <EmailIcon className="w-[40px] h-[32px] text-[var(--Blue)]" />
                  <h3 className="text-[20px] desktop:text-[24px] leading-[28px] desktop:leading-[32px] font-bold text-[var(--Black)] pt-[16px] desktop:pt-[24px]">
                    {t("public__cancel_subscription__confirmation_email__title")}
                  </h3>
                  <p className="text-[var(--Dark-gray)] font-regular text-[16px] leading-[24px] pt-[8px] text-center mb-[16px] desktop:mb-[24px]">
                    {t("public__cancel_subscription__confirmation_email__description")}
                  </p>
                  <button
                    onClick={handleGoHome}
                    className="w-[160px] h-[48px] bg-[var(--Blue)] hover:bg-[var(--Blue-hover)] text-white font-semibold rounded-[10px] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>{t("public__cancel_subscription__confirmation_email__button")}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
