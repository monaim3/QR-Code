"use client";

import Accordion from "@/components/common/Accordion";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Input from "../vcard/Input";
import { setQrCodeName } from "@/store/slices/businessSlice";

export default function BusinessQrName() {
  const dispatch = useAppDispatch();
  const menu = useAppSelector((state) => state.menu);

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
          value={menu.qrCodeName}
          onChange={handleChange}
        />
      </Accordion>
    </div>
  );
}
