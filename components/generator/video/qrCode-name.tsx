"use client";

import Accordion from "@/components/common/Accordion";
import Input from "@/components/generator/vcard/Input";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setQrCodeName } from "@/store/slices/video-slice";
import { useT } from "@/utils/t";

export default function NameQrCode() {
  const dispatch = useAppDispatch();
  const video = useAppSelector((state) => state.video);

  const handleChange = (value: string) => {
    dispatch(setQrCodeName(value));
  };
  const t = useT();
  return (
    <div className="w-full">
      <Accordion
        title={t("generator__content_form_section__qr_name__title")}
        description={t(
          "generator__content_form_section__welcome_screen__description",
        )}
      >
        <Input
          label={t("generator__content_form_section__qr_name__field_label")}
          placeholder={t(
            "generator__content_form_section__qr_name__field_placeholder",
          )}
          id="qrName"
          value={video.qrCodeName}
          onChange={handleChange}
        />
      </Accordion>
    </div>
  );
}
