"use client";

import { Button } from "@/components/ui/button";
import FormSelect from "./FormSelect";
import TrashAlt from "@/components/icons/trash-alt";
import { useT } from "@/utils/t";

interface Props {
  onDeleteClick: () => void;
}

export default function DeleteAccount({ onDeleteClick }: Props) {
  const t = useT();

  return (
    <div className="flex flex-col items-start gap-6 p-6 self-stretch bg-white rounded-[var(--Corner-Radius-10)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)]">
      <div className="flex flex-col gap-2">
        <h4 className="text-[var(--Black)] text-[18px] leading-[26px] font-bold">
          {t("public__dashboard__account__settings__delete_account__title")}
        </h4>
        <p className="text-[var(--Dark-gray)] text-[16px] leading-[24px]">
          {t("public__dashboard__account__settings__delete_account__description")}
        </p>
      </div>

      <div className="w-full h-[1px] bg-[var(--boarder-grey-50)]" />

      <div className="flex flex-col items-start gap-4 desktopDashboard:w-[600px] w-full">
        <FormSelect
          label={t("public__dashboard__account__settings__delete_account__label")}
          options={[
            "My QR campaign is over",
            "I don't want to use QR codes",
            "Other",
          ]}
        />

        <Button
          onClick={onDeleteClick}
          className="flex w-full h-[38px] px-4 py-2 justify-center items-center gap-2 rounded-[var(--Corner-Radius-10)] bg-[var(--error)] text-white text-[14px] leading-[22px] desktopDashboard:w-[120px] tablet:w-[120px]">
          <TrashAlt />
          {t("ui__file_upload__delete_button")}
        </Button>
      </div>
    </div>
  );
}
