"use client";

import { useState, useCallback, useMemo } from "react";
import CheckboxBar from "@/components/dashboard/qr-codes/checkbox-bar/CheckboxBar";
import CreateQrCodeBtn from "@/components/dashboard/qr-codes/CreateQrCodeBtn";
import Filters from "@/components/dashboard/qr-codes/filters/Filters";
import Pagination from "@/components/dashboard/qr-codes/table/Pagination";
import QrCodesTable from "@/components/dashboard/qr-codes/table/QrCodesTable";
import { QRCodeItem } from "@/types/qr-code";
import NoResults from "@/components/dashboard/qr-codes/table/NoResults";
import SubscribeBanner from "@/components/dashboard/qr-codes/SubscribeBanner";
import ReviewBanner from "@/components/dashboard/qr-codes/ReviewBanner";
import { useSearchParams } from "next/navigation";

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

export default function QrCodesClient() {
  const [qrData, setQrData] = useState<QRCodeItem[]>(initialQrData);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [filters, setFilters] = useState<{
    query: string;
    status: string;
    types: string[];
    sortBy: string;
  }>({
    query: "",
    status: "",
    types: [],
    sortBy: "",
  });
  const searchParams = useSearchParams();
  const banner = searchParams.get("banner");
  const noData = searchParams.get("nodata");
  const filter = searchParams.get("filter");

  // Filter and sort QR codes based on filters
  const filteredQrData = useMemo(() => {
    let filtered = [...qrData];

    // Filter by search query (search in title)
    if (filters.query.trim()) {
      const queryLower = filters.query.toLowerCase().trim();
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(queryLower)
      );
    }

    // Filter by status
    if (filters.status) {
      filtered = filtered.filter((item) => item.status === filters.status);
    }

    // Filter by types
    if (filters.types.length > 0) {
      filtered = filtered.filter((item) =>
        filters.types.includes(item.type)
      );
    }

    // Sort data
    if (filters.sortBy) {
      switch (filters.sortBy) {
        case "name-asc":
          filtered.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "name-desc":
          filtered.sort((a, b) => b.title.localeCompare(a.title));
          break;
        case "scans-asc":
          filtered.sort((a, b) => a.scans - b.scans);
          break;
        case "scans-desc":
          filtered.sort((a, b) => b.scans - a.scans);
          break;
        case "date-asc":
          filtered.sort((a, b) => {
            const dateA = new Date(a.createdAt).getTime();
            const dateB = new Date(b.createdAt).getTime();
            return dateA - dateB;
          });
          break;
        case "date-desc":
          filtered.sort((a, b) => {
            const dateA = new Date(a.createdAt).getTime();
            const dateB = new Date(b.createdAt).getTime();
            return dateB - dateA;
          });
          break;
        default:
          break;
      }
    }

    return filtered;
  }, [qrData, filters]);

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
      if (prev.size === filteredQrData.length) {
        return new Set();
      }
      // Otherwise, select all
      return new Set(filteredQrData.map((item) => item.id));
    });
  }, [filteredQrData]);

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
            : item,
        ),
      );
    },
    [],
  );

  const selectedCount = selectedIds.size;
  const hasSelection = selectedCount > 0;
  const allSelected = selectedCount === filteredQrData.length && filteredQrData.length > 0;

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between desktopDashboard:gap-8 gap-4 self-stretch">
        <h2 className="font-bold text-[var(--Black)] desktopDashboard:text-[24px] text-[20px] desktopDashboard:leading-[var(--Typeface-Line-height-Heading-3)] leading-[28px]">
          QR Codes
        </h2>
        <CreateQrCodeBtn />
      </div>

      {/* Notification Banner */}
      <div className="flex flex-col items-start desktopDashboard:gap-0 gap-2 self-stretch desktopDashboard:my-[20px] my-3">
        {banner === "subscribe" && <SubscribeBanner />}
        {banner === "review" && <ReviewBanner />}
        {banner === "both" && (
          <>
            <SubscribeBanner /> <ReviewBanner />
          </>
        )}
      </div>

      <div className="w-full flex flex-col items-start desktopDashboard:gap-6 gap-4 self-stretch">
        {/* Filters */}
        <Filters
          allSelected={allSelected}
          onSelectAll={handleSelectAll}
          onFilterChange={setFilters}
        />

        {/* filteredQrData.length > 0 */}
        {noData !== "true" ? (
          <>
            {/* Table */}
            <QrCodesTable
              qrData={filteredQrData}
              selectedIds={selectedIds}
              onToggleSelection={handleToggleSelection}
              onUpdateQrCode={handleUpdateQrCode}
            />
            {/* Pagination */}
            <Pagination />
          </>
        ) : (
          <NoResults filter={filter || ""} />
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
