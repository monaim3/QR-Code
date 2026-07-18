"use client";

import { useRef, useState } from "react";
import JSZip from "jszip";
import Download from "@/components/icons/download";
import IconButton from "./IconButton";
import PauseCircle from "@/components/icons/pause-circle";
import RefreshCw from "@/components/icons/refresh-cw";
import TrashAlt from "@/components/icons/trash-alt";
import Close from "@/components/icons/close";
import { useAppSelector } from "@/store/hooks";
import { useT } from "@/utils/t";
import {
  useDeleteQrCodesMutation,
  useResetQrScansMutation,
  useDeactivateQrCodesMutation,
  useActivateQrCodesMutation,
} from "@/store/api/qrCodesApi";
import { QrCode as qrData } from "@/types/generatedQr";
import QrCodePreview from "@/components/dashboard/qr-codes/table/QrCodePreview";
import { captureQrAsBlob } from "@/lib/qr/qrCapture"; // same path used in DownloadAction

interface Props {
  selectedCount: number;
  ids: string[];
  selectedItems: qrData[];
  onClose: () => void;
}

export default function CheckboxBar({ selectedCount, ids, selectedItems, onClose }: Props) {
  const t = useT();
  const collapsed = useAppSelector((state) => state.sidebar.collapsed);

  const [deleteQrCodes, { isLoading }] = useDeleteQrCodesMutation();
  const [resetQrScans] = useResetQrScansMutation();
  const [deactivateQrCodes] = useDeactivateQrCodesMutation();
  const [activateQrCodes] = useActivateQrCodesMutation();

  const [isZipping, setIsZipping] = useState(false);
  // one hidden container ref per selected item, keyed by id
  const containerRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const setContainerRef = (id: string) => (el: HTMLDivElement | null) => {
    if (el) containerRefs.current.set(id, el);
    else containerRefs.current.delete(id);
  };

  const desktopPositionClasses = collapsed
    ? "desktopDashboard:left-[72px] left-0 desktopDashboard:max-w-[calc(100vw-72px)] max-w-full"
    : "desktopDashboard:left-[214px] left-0 desktopDashboard:max-w-[calc(100vw-214px)] max-w-full";

  const handleResetScans = async () => {
    try {
      await resetQrScans({ ids }).unwrap();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeactivate = async () => {
    try {
      await deactivateQrCodes({ ids }).unwrap();
    } catch (err) {
      console.error(err);
    }
  };

  const handleActivate = async () => {
    try {
      await activateQrCodes({ ids }).unwrap();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await deleteQrCodes({ ids }).unwrap();
      console.log(response.message);
    } catch (error) {
      console.error(error);
    }
  };

  const sanitizeFilename = (name: string) =>
    name.replace(/[^a-z0-9_\-]+/gi, "_").slice(0, 60) || "qr-code";

  const handleDownloadZip = async () => {
    if (selectedItems.length === 0 || isZipping) return;
    setIsZipping(true);

    try {
      const zip = new JSZip();
      const usedNames = new Set<string>();

      for (const item of selectedItems) {
        const container = containerRefs.current.get(item.id);
        if (!container) {
          console.warn(`No preview container mounted for ${item.id}, skipping`);
          continue;
        }

        const blob = await captureQrAsBlob(container, 1024, 1024, "image/png");

        let filename = `${sanitizeFilename(item.name)}.png`;
        // avoid collisions if multiple items share a sanitized name
        let suffix = 1;
        while (usedNames.has(filename)) {
          filename = `${sanitizeFilename(item.name)}-${suffix}.png`;
          suffix++;
        }
        usedNames.add(filename);

        zip.file(filename, blob);
      }

      const zipBlob = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(zipBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `qr-codes-${selectedItems.length}.zip`;
      link.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Failed to build QR zip:", err);
    } finally {
      setIsZipping(false);
    }
  };

  return (
    <div
      className={`
        fixed bottom-0 w-full flex items-center justify-center gap-10 py-4 px-5
        desktopDashboard:px-6 bg-white shadow-[0_1px_8px_0_rgba(63,72,103,0.16)]
        transition-all duration-300
        ${desktopPositionClasses}
      `}
    >
      {/* Portfolio */}
      <p className="text-[var(--Grey)] text-[14px] leading-[22px] desktopDashboard:hidden">
        {selectedCount}
      </p>
      <p className="text-[var(--Grey)] text-[14px] leading-[22px] desktopDashboard:block hidden">
        <span className="text-[var(--Dark-gray)]">{selectedCount}</span> items selected
      </p>

      {/* Buttons */}
      <div className="flex items-center justify-center gap-2 flex-1">
        <IconButton
          icon={<Download className="text-[var(--Dark-gray)]" />}
          text={isZipping ? t("public__dashboard__qr_table__qr_card__download") : t("public__dashboard__qr_table__qr_card__download")}
          onClick={handleDownloadZip}
        />
        <IconButton icon={<PauseCircle />} text={t("public__dashboard__qr_table__qr_card__download_option__pause")} onClick={handleDeactivate} />
        <IconButton icon={<RefreshCw />} text={t("public__dashboard__reset_scans__qr_code__modal_title")} onClick={handleResetScans} />
        <IconButton
          icon={<TrashAlt className="text-[var(--error)]" />}
          text={t("public__dashboard__account__settings__delete_account__button")}
          variant="error"
          onClick={handleDelete}
        />
      </div>

      {/* Close */}
      <button onClick={onClose}>
        <Close />
      </button>

      {/* Hidden preview containers — one per selected item, used as capture source for the zip */}
      <div style={{ position: "fixed", top: "-9999px", left: "-9999px", pointerEvents: "none" }}>
        {selectedItems.map((item) => (
          <div key={item.id} ref={setContainerRef(item.id)} style={{ width: "200px", height: "200px" }}>
            <QrCodePreview qrCodeData={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
