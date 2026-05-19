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
        description="Give a name to your QR code"
      >
        <Input
          label="Name your QR code"
          placeholder="e.g. My first QR code"
          id="qrName"
          value={menu.qrCodeName}
          onChange={handleChange}
        />
      </Accordion>
    </div>
  );
}
