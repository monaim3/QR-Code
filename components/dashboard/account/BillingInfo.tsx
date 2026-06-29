"use client";

import { useState } from "react";
import RadioButton from "../qr-codes/filters/RadioButton";
import PersonalForm from "./forms/PersonalForm";
import CompanyForm from "./forms/CompanyForm";
import { useT } from "@/utils/t";

export default function BillingInfo() {
  const t = useT();
  const [isPersonal, setIsPersonal] = useState(true);

  return (
    <div className="flex flex-col items-start gap-6 p-6 self-stretch bg-white rounded-[var(--Corner-Radius-10)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)]">
      <p className="text-[var(--Dark-gray)] text-[16px] leading-[24px]">
        {t("public__dashboard__account__billing_info__section_title")}
      </p>

      <div className="flex items-center gap-6 py-4 self-stretch border-b border-[var(--boarder-grey-50)]">
        <button className="flex items-center gap-2" onClick={() => setIsPersonal(true)}>
          <RadioButton checked={isPersonal} />
          <p className="text-[var(--Black)] text-[14px] leading-[22px]">
            {t("public__dashboard__account__billing_info__section_personal")}
          </p>
        </button>

        <button className="flex items-center gap-2" onClick={() => setIsPersonal(false)}>
          <RadioButton checked={!isPersonal} />
          <p className="text-[var(--Black)] text-[14px] leading-[22px]">
            {t("public__dashboard__account__billing_info__section_company")}
          </p>
        </button>
      </div>

      {isPersonal ? <PersonalForm /> : <CompanyForm />}
    </div>
  );
}
