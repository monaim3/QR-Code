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
import Link from "next/link";

type PaymentMethod = {
  id: "card" | "gpay" | "paypal" | "applepay";
  icon?: string;
  label: string;
  isGoogle?: boolean;
  isPayPal?: boolean;
  isApple?: boolean;
};

export default function CheckoutElement() {
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
    // { id: "paypal", label: "PayPal", isPayPal: true },
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

  function handleSuccess() {
    router.push("/checkout/success");
  }

  return (
    <div className="flex flex-col w-full desktop:w-[456px] max-h-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-[16px] desktop:pb-[24px] border-b-[1px] border-[var(--Boarder-Grey)]">
        <h1 className="text-[18px] leading-[26px] font-bold text-[var(--Black)]">
          Total due today:
        </h1>
        <p className="text-[16px] desktop:text-[18px] leading-[26px] font-regular text-[var(--Black)]">
          $1.95
        </p>
      </div>

      {/* Payment Methods */}
      <div className="mt-[16px] desktop:mt-[32px]">
        <h2 className="text-[16px] leading-[26px] font-bold text-[var(--Black)] mb-[8px]">
          Select payment method:
        </h2>
        <div className="grid grid-cols-3 gap-[8px] desktop:gap-[16px]">
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
              {method.isGoogle && <Gpay />}

              {method.isPayPal && <Paypal />}

              {method.isApple && <ApplePay />}

              {method.id === "card" && <CreditCard />}
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
              className="w-full h-[56px] px-4 border-b-[1px] border-[var(--Boarder-Grey)] 
                  focus:border-[var(--Blue)] outline-none transition-colors
                  text-[16px] leading-[24px] placeholder:text-[var(--Grey)]"
            />
          </div>

          {/* Card Number */}
          <div>
            <label className="text-[16px] leading-[24px] font-semibold text-[var(--Black)]">
              Card number
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="•••• •••• •••• ••••"
                value={cardNumber}
                onChange={handleCardNumberChange}
                className="w-full h-[56px] pl-4 pr-[110px] border-b-[1px] border-[var(--Boarder-Grey)]
                    focus:border-[var(--Blue)] outline-none transition-colors
                    text-[16px] leading-[24px] placeholder:text-[var(--Grey)]"
              />
              {/* Card brand icons */}
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                {/* Visa */}
                <svg width="38" height="24" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="38" height="24" rx="6" fill="white" stroke="#E6E6E6" strokeWidth="1"/>
                  <text x="19" y="16" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="11" fill="#1A1F71" letterSpacing="1">VISA</text>
                </svg>
                {/* Mastercard */}
                <svg width="38" height="24" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="38" height="24" rx="6" fill="white" stroke="#E6E6E6" strokeWidth="1"/>
                  <circle cx="14.5" cy="12" r="5.5" fill="#EB001B"/>
                  <circle cx="23.5" cy="12" r="5.5" fill="#F79E1B"/>
                  <path d="M19 7.52a5.5 5.5 0 010 8.96A5.5 5.5 0 0119 7.52z" fill="#FF5F00"/>
                </svg>
                {/* American Express */}
                <svg width="38" height="24" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="38" height="24" rx="6" fill="#2557D6"/>
                  <text x="19" y="11" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="5.5" fill="white" letterSpacing="0.3">AMERICAN</text>
                  <text x="19" y="18" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="5.5" fill="white" letterSpacing="0.3">EXPRESS</text>
                </svg>
              </div>
            </div>
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
                className="w-full h-[56px] px-4 border-b-[1px] border-[var(--Boarder-Grey)]
                    focus:border-[var(--Blue)] outline-none transition-colors
                    text-[16px] leading-[24px] placeholder:text-[var(--Grey)]"
              />
            </div>

            <div>
              <label className="text-[16px] leading-[24px] font-semibold text-[var(--Black)]">
                CVV Code
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="CVC"
                  value={cvv}
                  onChange={handleCvvChange}
                  className="w-full h-[56px] pl-4 pr-10 border-b-[1px] border-[var(--Boarder-Grey)]
                      focus:border-[var(--Blue)] outline-none transition-colors
                      text-[16px] leading-[24px] placeholder:text-[var(--Grey)]"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[var(--Grey)]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M2 9H22" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M6 14H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedMethod === "gpay" && (
        <div className="flex flex-col items-center justify-center mt-[24px] w-full h-[272px] desktop:h-[344px]">
          <p className="text-[16px] leading-[24px] item-center font-regular">
            Click below to pay with Google Pay:
          </p>
          <div
            onClick={() => {
              console.log("Google Pay clicked!");
            }}
            className="h-[48px] w-[300px] rounded-[10px] bg-[white] border-[1px] border-[var(--Boarder-Grey)] hover:border-[var(--Blue)] mt-[24px] flex items-center justify-center transition duration-300"
          >
            <Gpay />
          </div>
        </div>
      )}

      {selectedMethod === "paypal" && (
        <div className="flex flex-col items-center justify-center mt-[24px] w-full h-[272px] desktop:h-[344px]">
          <p className="text-[16px] leading-[24px] item-center font-regular">
            Click below to pay with PayPal:
          </p>
          <div
            onClick={() => {
              console.log("PayPal clicked!");
            }}
            className="h-[48px] w-[300px] rounded-[10px] bg-[#FEC438] mt-[24px] flex items-center justify-center transition-opacity duration-300 hover:opacity-80"
          >
            <PayPalText />
          </div>
        </div>
      )}

      {selectedMethod === "applepay" && (
        <div className="flex flex-col items-center justify-center mt-[24px] w-full h-[272px] desktop:h-[344px]">
          <p className="text-[16px] leading-[24px] item-center font-regular">
            Click below to pay with PayPal:
          </p>
          <div
            onClick={() => {
              console.log("PayPal clicked!");
            }}
            className="h-[48px] w-[300px] rounded-[10px] bg-[var(--Black)] mt-[24px] flex items-center justify-center transition-opacity duration-300 hover:opacity-80"
          >
            <ApplePay color="white" />
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mt-[24px]">
        <div className="flex items-center gap-[8px]">
          <SecurityCheck />
          <p className="text-[16px] leading-[22px] text-[var(--Dark-gray)] font-regular">
            Secure checkout
          </p>
        </div>
        <Nortion />
      </div>

      {/* Submit */}
      {selectedMethod === "card" && (
        <button
          onClick={handleSuccess}
          type="button"
          className="hidden desktop:block w-full mt-6 h-[48px] bg-[var(--Blue)] hover:bg-[var(--Blue-hover)]
            text-white font-semibold text-[18px] rounded-[10px] transition-colors"
        >
          Get my QR code
        </button>
      )}

      <div className="mt-[16px] desktop:mt-[24px]">
        <p className="text-[12px] leading-[20px] font-regular text-[var(--Grey)]">
          By proceeding with payment, you agree to be charged $1.95 now, accept our{" "}
          <Link href="/terms-of-use" className="text-[var(--Blue)] underline">
            Terms and conditions
          </Link>
          , and acknowledge that you have read our{" "}
          <Link href="/privacy-policy" className="text-[var(--Blue)] underline">
            Privacy Policy
          </Link>
          . Your payment will appear as &quot;smartqrcode.com&quot; on your statement. After 7 days, you will be billed $39 every 4 weeks until you cancel your subscription. You can cancel anytime. For any inquiries, contact us at{" "}
          <a href="mailto:support@smartqrcode.com" className="text-[var(--Blue)] underline">
            support@smartqrcode.com
          </a>{" "}
          or call us at +1-631-892-9925.
        </p>
      </div>
      <div className="md:hidden fixed bottom-0 left-0 w-full px-[20px] pt-[16px] pb-[32px] bg-white shadow-card z-[9999]">
        <button
          type="button"
          onClick={handleSuccess}
          className="w-full h-[48px] bg-[var(--Blue)] hover:bg-[var(--Blue-hover)] transition duration-300 text-white font-semibold rounded-[10px] flex items-center justify-center gap-3"
        >
          Get my QR code
        </button>
      </div>
    </div>
  );
}
