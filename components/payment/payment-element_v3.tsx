"use client";
import { useState, ChangeEvent } from "react";
import CreditCard from "../icons/credit-card";
import Gpay from "../icons/gpay";
import Paypal from "../icons/pay-pal";
import ApplePay from "../icons/apple-pay";
import SecurityCheck from "../icons/security-check";
import Nortion from "../icons/nortion";
import ArrowRight from "../icons/arrow-right";
import PayPalText from "../icons/paypal-text";
import { useRouter } from "next/navigation";
import Edit from "@/components/icons/edit";

type PaymentMethod = {
  id: "card" | "gpay" | "paypal" | "applepay";
  icon?: string;
  label: string;
  isGoogle?: boolean;
  isPayPal?: boolean;
  isApple?: boolean;
};

export default function CheckoutElementV3() {
  const router = useRouter();
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

  function handleSuccess(){
    router.push("/checkout/congratulation");
  }

  return (
    <div className="flex flex-col w-full desktop:w-[591px] max-h-full">
      {/* Header */}
      <h1 className="text-[18px] leading-[26px] font-bold text-[var(--Black)]">
        Billing Information:
      </h1>
      <div className="h-[48px] w-full flex items-center justify-start bg-[var(--Generator-Background)] rounded-[10px] px-4 mt-2 gap-4">
        <p className="text-[16px] leading-[24px] font-medium text-[var(--Black)]">
            Plan:
        </p>
        <p className="text-[16px] leading-[24px] font-regular text-[var(--Black)]">
            Annual
        </p>
        <div className="w-full flex-1 flex items-center justify-end">
            <Edit />
        </div>
      </div>

        {/* Payment Methods */}
        <div className="mt-[24px]">
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
                className="w-full h-[56px] px-4 border-b-[1px] border-[var(--Boarder-Grey)]
                  focus:border-[var(--Blue)] outline-none transition-colors
                  text-[16px] leading-[24px] placeholder:text-[var(--Boarder-Grey)]"
              />
            </div>
          </div>
        )}

        {selectedMethod === "gpay" && (
          <div className="flex flex-col items-center justify-center mt-[24px] w-full h-[214px] desktop:h-[178px]">
            <p className="text-[16px] leading-[24px] item-center font-regular">Click below to pay with Google Pay:</p>
            <div
             onClick={() => {
              console.log("Google Pay clicked!");
            }}
            className="h-[48px] w-[300px] rounded-[10px] bg-[white] border-[1px] border-[var(--Boarder-Grey)] hover:border-[var(--Blue)] mt-[24px] flex items-center justify-center flex-shrink-0 transition duration-300">
            <Gpay/>
            </div>
          </div>
        )}

        {selectedMethod === "paypal" && (
          <div className="flex flex-col items-center justify-center mt-[24px] w-full h-[214px] desktop:h-[178px]">
          <p className="text-[16px] leading-[24px] item-center font-regular">Click below to pay with PayPal:</p>
          <div
           onClick={() => {
            console.log("PayPal clicked!");
          }}
          className="h-[48px] w-[300px] rounded-[10px] bg-[#FEC438] mt-[24px] flex items-center justify-center transition-opacity duration-300 hover:opacity-80">
          <PayPalText/>
          </div>
        </div>
        )}

           {selectedMethod === "applepay" && (
          <div className="flex flex-col items-center justify-center mt-[24px] w-full h-[214px] desktop:h-[178px]">
          <p className="text-[16px] leading-[24px] item-center font-regular">Click below to pay with PayPal:</p>
          <div
           onClick={() => {
            console.log("PayPal clicked!");
          }}
          className="h-[48px] w-[300px] rounded-[10px] bg-[var(--Black)] mt-[24px] flex items-center justify-center transition-opacity duration-300 hover:opacity-80">
          <ApplePay color="white"/>
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
       {selectedMethod === "card" && (
        <div className="hidden desktop:flex items-end justify-center gap-4 desktop:gap-6">
          <button
          onClick={handleSuccess}
          type="button"
          className="hidden desktop:block w-full mt-6 h-[48px] bg-[var(--Blue)] hover:bg-[var(--Blue-hover)] 
            text-white font-semibold text-[18px] rounded-[10px] transition-colors"
        >
          Confirm
        </button>
        <div className="h-[48px] w-[113px] rounded-[10px] flex items-center justify-center border border-[var(--Blue)]">
            <p className="text-[16px] leading-[26px] font-semibold text-[var(--Blue)]">
                Chnage
            </p>
        </div>
        </div>
       )}

        <div className="mt-[16px] desktop:mt-[24px]">
        <p className="text-[12px] leading-[20px] font-regular text-[var(--Grey)]">
          By providing your card information, you allow My QR Code to charge your card for future payments in accordance with their terms.
        </p>
        </div>
        <div className="desktop:hidden fixed flex flex-row items-center justify-center gap-4 bottom-0 left-0 w-full px-[20px] pt-[16px] pb-[32px] bg-white shadow-card z-[9999]">
          <button 
           type="button"
           onClick={handleSuccess}
           className="w-full py-3 bg-[var(--Blue)] text-white font-semibold rounded-lg flex items-center justify-center gap-3">
            Continue
            <ArrowRight className="w-5 h-5"/>
          </button>
           <div className="h-[48px] w-[113px] rounded-[10px] flex items-center justify-center border border-[var(--Blue)]">
            <p className="text-[16px] leading-[26px] font-semibold text-[var(--Blue)]">
                Chnage
            </p>
        </div>
        </div>
    </div>
  );
};