"use client";

import Accordion from "@/components/common/Accordion";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Input from "../vcard/Input";
import { setQrCodeName } from "@/store/slices/businessSlice";

import { useT } from "@/utils/t";
export default function BusinessQrName() {
  const dispatch = useAppDispatch();
  const menu = useAppSelector((state) => state.menu);

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
          value={menu.qrCodeName}
          onChange={handleChange}
        />
      </Accordion>
    </div>
  );
}
