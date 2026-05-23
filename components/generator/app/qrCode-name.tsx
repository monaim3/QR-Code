"use client";

import Accordion from "@/components/common/Accordion";
import Input from "@/components/generator/vcard/Input";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setQrCodeName } from "@/store/slices/app-slice";
import { useT } from "@/utils/t";
export default function NameQrCode() {
  const dispatch = useAppDispatch();
  const app = useAppSelector((state) => state.app);

  const handleChange = (value: string) => {
    dispatch(setQrCodeName(value));
  };
  const t = useT();
  return (
    <div className="w-full">
      <Accordion
        title={t("generator__content_form_section__qr_name__title")}
        description={t("generator__content_form_section__qr_name__description")}
      >
        <Input
          label={t("generator__content_form_section__qr_name__field_label")}
          placeholder={t(
            "generator__content_form_section__qr_name__field_placeholder",
          )}
          id="qrName"
          value={app.qrCodeName}
          onChange={handleChange}
        />
      </Accordion>
    </div>
  );
}
