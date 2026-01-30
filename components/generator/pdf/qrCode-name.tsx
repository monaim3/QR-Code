"use client";

import Accordion from "@/components/common/Accordion";
import Input from "@/components/generator/vcard/Input";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setQrCodeName } from "@/store/slices/pdf-slice";

export default function NameQrCode() {
  const dispatch = useAppDispatch();
  const app = useAppSelector((state) => state.pdf);

  const handleChange = (value: string) => {
    dispatch(setQrCodeName(value));
  };

  return (
    <div className="w-full">
      <Accordion
        title="Name of the QR code"
        description="Give a name to your QR code"
      >
        <Input
          label="Name your QR code"
          placeholder="e.g. My first QR code"
          id="qrName"
          value={app.qrCodeName}
          onChange={handleChange}
        />
      </Accordion>
    </div>
  );
}