"use client";

import { Button } from "@/components/ui/button";
import ActiveTwoFactorModal from "./ActiveTwoFactorModal";
import { useState } from "react";
import Circle from "@/components/icons/circle";
import DisableTwoFactorModal from "./DisableTwoFactorModal";
import SuccessTwoFactorModal from "./SuccessTwoFactorModal";

export default function TwoFactor() {
  const [isActiveModalOpen, setIsActiveModalOpen] = useState(false);
  const [isDisableModalOpen, setIsDisableModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleOpenModal = () => {
    if (isActive) {
      setIsDisableModalOpen(true);
    } else {
      setIsActiveModalOpen(true);
    }
  };

  const handleCloseActiveModal = () => {
    setIsActiveModalOpen(false);
  };

  const handleCloseDisableModal = () => {
    setIsDisableModalOpen(false);
  };

  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };

  return (
    <div className="flex flex-col desktopDashboard:flex-row items-center justify-between gap-6 p-6 self-stretch bg-white rounded-[var(--Corner-Radius-10)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)]">
      <p className="text-[var(--Dark-gray)] text-[16px] leading-[24px]">
        Enhance account security: add an extra layer of protection. <br />
        Simply enter your password and a verification code from your mobile
        device to log in.
      </p>

      {isActive && (
        <div className="flex items-center gap-4 w-full desktopDashboard:w-auto tablet:w-auto">
          <p className="text-[var(--Black)] text-[16px] leading-[24px] font-semibold">
            2FA Status:
          </p>

          <div className="flex items-center gap-2 py-2">
            <Circle className="text-[var(--Green)]" />
            <span className="text-[var(--Green)] text-[14px] leading-[22px] font-medium">
              Enabled
            </span>
          </div>
        </div>
      )}

      <Button
        onClick={handleOpenModal}
        className="flex h-10 px-4 py-2 justify-center items-center gap-2 rounded-[var(--Corner-Radius-10)] bg-[var(--Blue)] text-white text-[14px] leading-[22px] w-full desktopDashboard:w-auto tablet:w-auto"
      >
        {isActive ? "Disable 2FA" : "Activate 2FA"}
      </Button>

      <ActiveTwoFactorModal
        open={isActiveModalOpen}
        onClose={handleCloseActiveModal}
      />

      <DisableTwoFactorModal
        open={isDisableModalOpen}
        onClose={handleCloseDisableModal}
      />

      <SuccessTwoFactorModal
        open={isSuccessModalOpen}
        onClose={handleCloseSuccessModal}
      />
    </div>
  );
}
