"use client";

import { toast } from "sonner";
import FormInput from "./FormInput";
import SaveButton from "./SaveButton";
import SuccessToast from "../SuccessToast";

export default function PersonalForm() {
  const handleSave = () => {
    toast.custom((t) => <SuccessToast t={t} />);
  };

  return (
    <div className="flex flex-col items-start gap-4 desktopDashboard:w-[600px] w-full">
      <div className="flex flex-col desktopDashboard:flex-row tablet:flex-row items-start gap-4 self-stretch">
        <FormInput label="Name" />
        <FormInput label="Last name" />
      </div>

      <FormInput label="Email address" />
      <FormInput label="Phone number" />
      <FormInput label="Street address" />
      <div className="flex flex-col desktopDashboard:flex-row tablet:flex-row items-start gap-4 self-stretch">
        <FormInput label="City" />
        <FormInput label="State" />
      </div>
      <div className="flex flex-col desktopDashboard:flex-row tablet:flex-row items-start gap-4 self-stretch">
        <FormInput label="Zip/Postal code" />
        <FormInput label="Country" />
      </div>

      <SaveButton onClick={handleSave} />
    </div>
  );
}
