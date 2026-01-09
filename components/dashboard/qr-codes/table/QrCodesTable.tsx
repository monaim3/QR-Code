"use client";

import { QRCodeItem } from "@/types/qr-code";
import QrCodesTableItem from "./QrCodesTableItem";

interface Props {
  qrData: QRCodeItem[];
  selectedIds: Set<string>;
  onToggleSelection: (id: string) => void;
}

export default function QrCodesTable({
  qrData,
  selectedIds,
  onToggleSelection,
}: Props) {
  return (
    <div className="flex flex-col items-start gap-2 self-stretch">
      {qrData?.map((item) => (
        <QrCodesTableItem
          key={item.id}
          item={item}
          isSelected={selectedIds.has(item.id)}
          onToggleSelection={onToggleSelection}
        />
      ))}
    </div>
  );
}
