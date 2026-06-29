"use client";

import { toast } from "sonner";
import FormInput from "./FormInput";
import SaveButton from "./SaveButton";
import SuccessToast from "../SuccessToast";
import { useT } from "@/utils/t";

export default function PersonalForm() {
  const t = useT();

  const handleSave = () => {
    toast.custom((t) => <SuccessToast t={t} />);
  };

  return (
    <div className="flex flex-col items-start gap-4 desktopDashboard:w-[600px] w-full">
      <div className="flex flex-col desktopDashboard:flex-row tablet:flex-row items-start gap-4 self-stretch">
        <FormInput label={t("public__dashboard__account__billing_info__name")} />
        <FormInput label={t("public__dashboard__account__billing_info__last_name")} />
      </div>

      <FormInput label={t("public__dashboard__account__billing_info__email_address")} />
      <FormInput label={t("public__dashboard__account__billing_info__phone_number")} />
      <FormInput label={t("public__dashboard__account__billing_info__street_address")} />
      <div className="flex flex-col desktopDashboard:flex-row tablet:flex-row items-start gap-4 self-stretch">
        <FormInput label={t("generator__content_form_section__about__address_section__city")} />
        <FormInput label={t("generator__content_form_section__about__address_section__state")} />
      </div>
      <div className="flex flex-col desktopDashboard:flex-row tablet:flex-row items-start gap-4 self-stretch">
        <FormInput label={t("public__dashboard__account__billing_info__zip_code")} />
        <FormInput label={t("public__dashboard__account__billing_info__country")} />
      </div>

      <SaveButton onClick={handleSave} />
    </div>
  );
}
