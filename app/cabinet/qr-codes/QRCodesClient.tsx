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
import { useT } from "@/utils/t";
import { useGetQrCodesQuery } from "@/store/api/qrCodesApi";
import { QrCode as qrData } from "@/types/generatedQr";
import { useEffect } from "react";

export default function QrCodesClient() {
  const { data, isLoading, isError, refetch } = useGetQrCodesQuery(undefined, {refetchOnMountOrArgChange: true,});
  const t = useT();
  const [qrData, setQrData] = useState<qrData[]>(data || []);
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

  // ── pagination state ──────────────────────────────────────────────
  const [perPage, setPerPage] = useState<string>("10"); // "10" | "25" | "50" | "All"
  const [currentPage, setCurrentPage] = useState<number>(1);

  const searchParams = useSearchParams();
  const banner = searchParams.get("banner");
  const noData = searchParams.get("nodata");
  const filter = searchParams.get("filter");

  // Filter and sort QR codes based on filters
  const filteredQrData = useMemo(() => {
    let filtered = [...qrData];

    if (filters.query.trim()) {
      const queryLower = filters.query.toLowerCase().trim();
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(queryLower),
      );
    }

    if (filters.status) {
      filtered = filtered.filter((item) => {
        const itemStatus = item.disabled === false ? "Active" : "Paused";
        return itemStatus === filters.status;
      });
    }

    if (filters.types.length > 0) {
      filtered = filtered.filter((item) => filters.types.includes(item.content.type));
    }

    if (filters.sortBy) {
      switch (filters.sortBy) {
        case "name-asc":
          filtered.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "name-desc":
          filtered.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case "scans-asc":
          filtered.sort((a, b) => Number(a.scansAmount) - Number(b.scansAmount));
          break;
        case "scans-desc":
          filtered.sort((a, b) => Number(b.scansAmount) - Number(a.scansAmount));
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

  // ── derive page size & slice ──────────────────────────────────────
  const pageSize = perPage === "All" ? filteredQrData.length || 1 : Number(perPage);
  const totalEntries = filteredQrData.length;
  const totalPages = Math.max(1, Math.ceil(totalEntries / pageSize));

  // clamp current page if filters/page-size shrink the result set
  const safePage = Math.min(currentPage, totalPages);

  const paginatedQrData = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return filteredQrData.slice(start, start + pageSize);
  }, [filteredQrData, safePage, pageSize]);

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
      if (prev.size === filteredQrData.length) {
        return new Set();
      }
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

  // ── pagination handlers ─────────────────────────────────────────
  const handlePerPageChange = useCallback((value: string) => {
    setPerPage(value);
    setCurrentPage(1); // reset to page 1 whenever page size changes
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const selectedCount = selectedIds.size;
  const hasSelection = selectedCount > 0;
  const allSelected = selectedCount === filteredQrData.length && filteredQrData.length > 0;

  useEffect(() => {
    if (data) {
      setQrData(data);
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between desktopDashboard:gap-8 gap-4 self-stretch">
        <h2 className="font-bold text-[var(--Black)] desktopDashboard:text-[24px] text-[20px] desktopDashboard:leading-[var(--Typeface-Line-height-Heading-3)] leading-[28px]">
          {t("public__dashboard__sidebar__link_groups__qr_codes")}
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

        {noData !== "true" ? (
          <>
            {/* Table — now fed the paginated slice, not raw data */}
            <QrCodesTable
              qrData={paginatedQrData}
              selectedIds={selectedIds}
              onToggleSelection={handleToggleSelection}
              onUpdateQrCode={handleUpdateQrCode}
            />
            {/* Pagination */}
            <Pagination
              totalEntries={totalEntries}
              currentPage={safePage}
              totalPages={totalPages}
              perPage={perPage}
              onPerPageChange={handlePerPageChange}
              onPageChange={handlePageChange}
            />
          </>
        ) : (
          <NoResults filter={filter || ""} />
        )}
      </div>

      {hasSelection && (
        <CheckboxBar
          selectedCount={selectedCount}
          ids={Array.from(selectedIds)}
          selectedItems={filteredQrData.filter((item) => selectedIds.has(item.id))}
          onClose={handleClearSelection}
        />
      )}
    </>
  );
}