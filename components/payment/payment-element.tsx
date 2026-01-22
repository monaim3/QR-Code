"use client";
import { useState, ChangeEvent } from "react";
import CreditCard from "../icons/credit-card";
import Gpay from "../icons/gpay";
import Paypal from "../icons/pay-pal";
import ApplePay from "../icons/apple-pay";
import SecurityCheck from "../icons/security-check";
import Nortion from "../icons/nortion";

type PaymentMethod = {
  id: "card" | "gpay" | "paypal" | "applepay";
  icon?: string;
  label: string;
  isGoogle?: boolean;
  isPayPal?: boolean;
  isApple?: boolean;
};

export default function CheckoutElement() {
  const [selectedMethod, setSelectedMethod] =
    useState<PaymentMethod["id"]>("card");

  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardholderName, setCardholderName] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");

  const paymentMethods: PaymentMethod[] = [
    { id: "card", icon: "💳", label: "Card" },
    { id: "gpay", label: "Pay", isGoogle: true },
    { id: "paypal", label: "PayPal", isPayPal: true },
    { id: "applepay", label: "Pay", isApple: true },
  ];

  const formatCardNumber = (value: string): string => {
    const cleaned = value.replace(/\s/g, "");
    const chunks = cleaned.match(/.{1,4}/g) || [];
    return chunks.join(" ");
  };

  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, "");
    if (value.length <= 16 && /^\d*$/.test(value)) {
      setCardNumber(formatCardNumber(value));
    }
  };

  const formatExpiryDate = (value: string): string => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length >= 2) {
      return `${cleaned.slice(0, 2)} / ${cleaned.slice(2, 4)}`;
    }
    return cleaned;
  };

  const handleExpiryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 4) {
      setExpiryDate(formatExpiryDate(value));
    }
  };

  const handleCvvChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 3 && /^\d*$/.test(value)) {
      setCvv(value);
    }
  };

  return (
    <div className="flex flex-col w-full desktop:w-[456px] max-h-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-[16px] desktop:pb-[24px] border-b border-[var(--Boarder-Grey)]">
          <h1 className="text-[18px] leading-[26px] font-bold text-[var(--Black)]">
            Total due today:
          </h1>
          <p className="text-[16px] desktop:text-[18px] leading-[26px] font-regular text-[var(--Black)]">$1.95</p>
        </div>

        {/* Payment Methods */}
        <div className="mt-[16px] desktop:mt-[32px]">
          <h2 className="text-[16px] leading-[26px] font-bold text-[var(--Black)] mb-[8px]">
            Select payment method:
          </h2>
          <div className="grid grid-cols-4 gap-[8px] desktop:gap-[16px]">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                type="button"
                onClick={() => setSelectedMethod(method.id)}
                className={`
                  h-[56px] rounded-[10px] transition-all duration-200
                  flex items-center justify-center gap-2
                  ${
                    selectedMethod === method.id
                      ? "border-[2px] border-emerald-500 bg-white"
                      : "border-[1px] border-[var(--Boarder-Grey)] bg-white hover:border-gray-400"
                  }
                `}
              >
                {method.isGoogle && (
                  <Gpay/>
                )}

                {method.isPayPal && (
                  <Paypal/>
                )}

                {method.isApple && (
                  <ApplePay/>
                )}

                {method.id === "card" && (
                    <CreditCard/>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Card Details Form */}
        {selectedMethod === "card" && (
          <div className="mt-[24px] space-y-[16px]">
            {/* Cardholder Name */}
            <div>
              <label className="text-[16px] leading-[24px] font-semibold text-[var(--Black)]">
                Cardholder&apos;s name
              </label>
              <input
                type="text"
                placeholder="e.g. John Doe"
                value={cardholderName}
                onChange={(e) => setCardholderName(e.target.value)}
                className="w-full h-[56px] px-4 border-b-2 border-gray-300 
                  focus:border-emerald-500 outline-none transition-colors
                  text-[16px] leading-[24px] placeholder:text-[var(--placeholder-grey)]"
              />
            </div>

            {/* Card Number */}
            <div>
              <label className="text-[16px] leading-[24px] font-semibold text-[var(--Black)]">
                Card number
              </label>
              <input
                type="text"
                placeholder="•••• •••• •••• ••••"
                value={cardNumber}
                onChange={handleCardNumberChange}
                className="w-full h-[56px] px-4 border-b-2 border-gray-300 
                  focus:border-emerald-500 outline-none transition-colors
                  text-[16px] leading-[24px] placeholder:text-[var(--Boarder-Grey)]"
              />
            </div>

            {/* Expiry and CVV */}
            <div className="grid grid-cols-2 gap-[16px] desktop:gap-[24px]">
              <div>
                <label className="text-[16px] leading-[24px] font-semibold text-[var(--Black)]">
                  Expiration date
                </label>
                <input
                  type="text"
                  placeholder="MM / YY"
                  value={expiryDate}
                  onChange={handleExpiryChange}
                  className="w-full h-[56px] px-4 border-b-2 border-gray-300 
                    focus:border-emerald-500 outline-none transition-colors
                    text-[16px] leading-[24px] placeholder:text-[var(--Boarder-Grey)]"
                />
              </div>

              <div>
                <label className="text-[16px] leading-[24px] font-semibold text-[var(--Black)]">
                  CVV Code
                </label>
                <input
                  type="text"
                  placeholder="CVC"
                  value={cvv}
                  onChange={handleCvvChange}
                  className="w-full h-[56px] px-4 border-b-2 border-gray-300 
                    focus:border-emerald-500 outline-none transition-colors
                    text-[16px] leading-[24px] placeholder:text-[var(--Boarder-Grey)]"
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mt-[24px]">
            <div className="flex items-center gap-[8px]">
                <SecurityCheck/>
                <p className="text-[16px] leading-[22px] font-regular">Secure checkout</p>
            </div>
            <Nortion/>
        </div>

        {/* Submit */}
        <button
          type="button"
          className="w-full mt-6 h-[48px] bg-[var(--Blue)] hover:bg-[var(--Blue-hover)] 
            text-white font-semibold text-[18px] rounded-[10px] transition-colors"
        >
          Get my QR code
        </button>

        <div className="mt-[16px] desktop:mt-[24px]">

        </div>
    </div>
  );
};