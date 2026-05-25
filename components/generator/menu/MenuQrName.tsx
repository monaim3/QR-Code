"use client";

import Accordion from "@/components/common/Accordion";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Input from "../vcard/Input";
import { setQrCodeName } from "@/store/slices/menuSlice";
import { useT } from "@/utils/t";

export default function MenuQrName() {
  const dispatch = useAppDispatch();
  const menu = useAppSelector((state) => state.menu);
  const t = useT();
  const handleChange = (value: string) => {
    dispatch(setQrCodeName(value));
  };

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
          value={menu.qrCodeName}
          onChange={handleChange}
        />
      </Accordion>
    </div>
  );
}
