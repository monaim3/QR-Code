import { useState } from "react";
import RadioButton from "../qr-codes/filters/RadioButton";
import PersonalForm from "./forms/PersonalForm";
import CompanyForm from "./forms/CompanyForm";

export default function BillingInfo() {
  const [isPersonal, setIsPersonal] = useState(true);

  const handlePersonal = () => {
    setIsPersonal(true);
  };

  const handleCompany = () => {
    setIsPersonal(false);
  };

  return (
    <div className="flex flex-col items-start gap-6 p-6 self-stretch bg-white rounded-[var(--Corner-Radius-10)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)]">
      <p className="text-[var(--Dark-gray)] text-[16px] leading-[24px]">
        Please choose how your account will be used.
      </p>

      <div className="flex items-center gap-6 py-4 self-stretch border-b border-[var(--boarder-grey-50)]">
        <button className="flex items-center gap-2" onClick={handlePersonal}>
          <RadioButton checked={isPersonal} />
          <p className="text-[var(--Black)] text-[14px] leading-[22px]">
            Personal
          </p>
        </button>

        <button className="flex items-center gap-2" onClick={handleCompany}>
          <RadioButton checked={!isPersonal} />
          <p className="text-[var(--Black)] text-[14px] leading-[22px]">
            Company
          </p>
        </button>
      </div>

      {isPersonal ? <PersonalForm /> : <CompanyForm />}
    </div>
  );
}
