"use client";

import { useState, useCallback } from "react";
import CheckboxBar from "@/components/dashboard/qr-codes/checkbox-bar/CheckboxBar";
import CreateQrCodeBtn from "@/components/dashboard/qr-codes/CreateQrCodeBtn";
import Filters from "@/components/dashboard/qr-codes/filters/Filters";
import Pagination from "@/components/dashboard/qr-codes/table/Pagination";
import QrCodesTable from "@/components/dashboard/qr-codes/table/QrCodesTable";
import { QRCodeItem } from "@/types/qr-code";
import NoResults from "@/components/dashboard/qr-codes/table/NoResults";
import SubscribeBanner from "@/components/dashboard/qr-codes/SubscribeBanner";

const initialQrData: QRCodeItem[] = [
  {
    id: "1",
    title: "Italian Restaurant",
    thumbnail: "/images/dev/dev-qr-1.svg",
    shortUrl: "myqrcode.com/erTWEssq",
    type: "Website URL",
    destinationUrl: "www.italian-restaurant.com",
    scans: 256,
    createdAt: "Jun 27, 2023",
    lastModified: "Feb 12, 2024",
    status: "Active",
  },
  {
    id: "2",
    title: "Product campaign",
    thumbnail: "/images/dev/dev-qr-2.svg",
    shortUrl: "myqrcode.com/opWerasd",
    type: "Video",
    scans: 329,
    createdAt: "Jun 20, 2023",
    lastModified: "Feb 10, 2024",
    status: "Paused",
  },
  {
    id: "3",
    title: "Screenshot tool",
    thumbnail: "/images/dev/dev-qr-3.svg",
    shortUrl: "myqrcode.com/imsTRqwa",
    type: "Business",
    scans: 81,
    createdAt: "Jun 20, 2023",
    lastModified: "Feb 10, 2024",
    status: "Active",
  },
  {
    id: "4",
    title: "Texas Restaurant",
    thumbnail: "/images/dev/dev-qr-3.svg",
    shortUrl: "myqrcode.com/opWerasd",
    type: "Website",
    destinationUrl: "www.texas-restaurant.com",
    scans: 27,
    createdAt: "Jun 20, 2023",
    status: "Active",
  },
];

export default function QrCodes() {
  const [qrData, setQrData] = useState<QRCodeItem[]>(initialQrData);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const handleToggleSelection = useCallback((id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const handleClearSelection = useCallback(() => {
    setSelectedIds(new Set());
  }, []);

  const handleSelectAll = useCallback(() => {
    setSelectedIds((prev) => {
      // If all items are selected, deselect all
      if (prev.size === qrData.length) {
        return new Set();
      }
      // Otherwise, select all
      return new Set(qrData.map((item) => item.id));
    });
  }, [qrData]);

  const handleUpdateQrCode = useCallback(
    (id: string, updates: Partial<QRCodeItem>) => {
      setQrData((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                ...updates,
                lastModified: new Date().toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                }),
              }
            : item
        )
      );
    },
    []
  );

  const selectedCount = selectedIds.size;
  const hasSelection = selectedCount > 0;
  const allSelected = selectedCount === qrData.length && qrData.length > 0;

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between gap-8 self-stretch font-roboto">
        <h2 className="font-bold text-[var(--Black)] text-[24px] leading-[var(--Typeface-Line-height-Heading-3)]">
          QR Codes
        </h2>
        <CreateQrCodeBtn />
      </div>

      {/* Notification Banner */}
      <div className="flex flex-col items-start self-stretch gap-2">
        <SubscribeBanner />
      </div>

      <div className="font-roboto w-full flex flex-col items-start gap-6 self-stretch">
        {/* Filters */}
        <Filters allSelected={allSelected} onSelectAll={handleSelectAll} />

        {qrData.length > 0 ? (
          <>
            {/* Table */}
            <QrCodesTable
              qrData={qrData}
              selectedIds={selectedIds}
              onToggleSelection={handleToggleSelection}
              onUpdateQrCode={handleUpdateQrCode}
            />
            {/* Pagination */}
            <Pagination />
          </>
        ) : (
          <NoResults />
        )}
      </div>

      {hasSelection && (
        <CheckboxBar
          selectedCount={selectedCount}
          onClose={handleClearSelection}
        />
      )}
    </>
  );
}
