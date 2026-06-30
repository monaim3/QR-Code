"use client";
import { useState } from "react";
import { useT } from "@/utils/t";
import Circle from "@/components/icons/circle";
import Visa from "@/components/icons/visa";
import { getStatusStyles } from "@/lib/utils";
import CancelSubscriptionModal from "./CancelSubscriptionModal";
import ChangeMethodModal from "./ChangeMethodModal";

export default function PaymentMethod() {
  const t = useT();
  const [isOpenCancelModal, setIsOpenCancelModal] = useState(false);
  const [isOpenChangeModal, setIsOpenChangeModal] = useState(false);

  const handleCloseCancelModal = () => {
    setIsOpenCancelModal(false);
  };

  const handleCloseChangeModal = () => {
    setIsOpenChangeModal(false);
  };

  return (
    <>
      <div className="flex flex-col items-start gap-4 self-stretch">
        <p className="text-[var(--Black)] font-bold text-[18px] leading-[26px]">
          {t("public__dashboard__billing__subscription__plan__and__payment_method")}
        </p>

        <div className="flex flex-col desktopDashboard:flex-row items-start desktopDashboard:gap-6 gap-2 self-stretch">
          {/* Current Plan */}
          <div className="flex flex-col items-start desktopDashboard:gap-6 gap-4 p-6 flex-1 self-stretch bg-white rounded-[var(--Corner-Radius-10)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)]">
            <div className="flex flex-col items-start gap-1 flex-1 self-stretch">
              <div className="flex items-center gap-6 self-stretch">
                <p className="text-[var(--Black)] font-semibold text-[16px] leading-[24px] flex-1">
                  {t("public__pricing_page__yearly_option__title")}
                </p>
                <div className="flex items-center gap-2">
                  <Circle className={getStatusStyles("Active")} />
                  <span
                    className={`text-[14px] leading-[22px] font-medium ${getStatusStyles("Active")}`}
                  >
                    {t("public__dashboard__billing__subscription_status_active")}
                  </span>
                </div>
              </div>

              <p className="text-[var(--Dark-gray)] text-[14px] leading-[22px]">
                {t("public__dashboard__billing__active_period__with_no_difference").replace("{date}", "Sep 18, 2024")}{" "}
                <span className="text-[var(--Grey)]">(179 days left)</span>
              </p>
            </div>

            <button
              onClick={() => setIsOpenCancelModal(true)}
              className="flex h-10 px-4 py-2 justify-center items-center gap-2 bg-white border border-[var(--Blue)] rounded-[var(--Corner-Radius-10)] text-[var(--Blue)] text-[14px] leading-[22px] hover:bg-[var(--Blue)] hover:text-white transition-all duration-300 ease-linear w-full tablet:w-auto desktopDashboard:w-auto"
            >
              {t("public__breadcrumbs__cancel_subscription")}
            </button>
          </div>

          {/* Payment Method */}
          <div className="flex flex-col items-start desktopDashboard:gap-6 gap-4 p-6 flex-1 self-stretch bg-white rounded-[var(--Corner-Radius-10)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)]">
            <div className="flex flex-col items-start gap-1 flex-1 self-stretch">
              <p className="text-[var(--Black)] font-semibold text-[16px] leading-[24px] flex-1">
                {t("public__dashboard__billing__subscription__payment_method")}
              </p>

              <p className="text-[var(--Dark-gray)] text-[14px] leading-[22px]">
                {t("public__dashboard__billing__change_payment_method_description")}
              </p>
            </div>

            <div className="flex items-center desktopDashboard:gap-6 gap-2 p-4 self-stretch rounded-[var(--Corner-Radius-8)] bg-[var(--Generator-Background)]">
              <div className="flex items-center desktopDashboard:gap-6 gap-2 flex-1">
                <Visa />
                <div className="flex flex-col desktopDashboard:flex-row desktopDashboard:items-center desktopDashboard:gap-6 flex-1">
                  <p className="text-[var(--Dark-gray)] desktopDashboard:text-[14px] text-[12px] desktopDashboard:leading-[22px] leading-[20px]">
                    **** **** **** 8902
                  </p>
                  <p className="text-[var(--Dark-gray)] desktopDashboard:text-[14px] text-[12px] desktopDashboard:leading-[22px] leading-[20px]">
                    Expiry 10/24
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpenChangeModal(true)}
                className="flex h-10 px-4 py-2 justify-center items-center gap-2 border border-[var(--Boarder-Grey)] bg-white rounded-[var(--Corner-Radius-10)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)] text-[var(--Dark-gray)] text-[14px] leading-[22px]"
              >
                {t("public__subscription__change_button")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <CancelSubscriptionModal
        open={isOpenCancelModal}
        onClose={handleCloseCancelModal}
      />
      <ChangeMethodModal
        open={isOpenChangeModal}
        onClose={handleCloseChangeModal}
      />
    </>
  );
}
