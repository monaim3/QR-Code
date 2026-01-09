"use client";

import { QRCodeItem } from "@/types/qr-code";
import QrCodesTableItem from "./QrCodesTableItem";

interface Props {
  qrData: QRCodeItem[];
}

export default function QrCodesTable({ qrData }: Props) {
  return (
    <div className="flex flex-col items-start gap-2 self-stretch">
      {qrData?.map((item) => (
        <QrCodesTableItem key={item.id} item={item} />
      ))}
    </div>
  );
}
