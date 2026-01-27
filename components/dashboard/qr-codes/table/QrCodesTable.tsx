"use client";

import { useState, useCallback } from "react";
import { QRCodeItem } from "@/types/qr-code";
import QrCodesTableItem from "./QrCodesTableItem";
import NameEditModal from "./NameEditModal";
import UrlEditModal from "./UrlEditModal";
import ShareQRModal from "./ShareQRModal";
import CustomDownloadModal from "./CustomDownloadModal";
import QrPreviewModal from "./QrPreviewModal";
import DownloadQrCodeModal from "./DownloadQrCodeModal";
import { useSearchParams } from "next/navigation";

interface Props {
  qrData: QRCodeItem[];
  selectedIds: Set<string>;
  onToggleSelection: (id: string) => void;
  onUpdateQrCode: (id: string, updates: Partial<QRCodeItem>) => void;
}

export default function QrCodesTable({
  qrData,
  selectedIds,
  onToggleSelection,
  onUpdateQrCode,
}: Props) {
  const [selectedItem, setSelectedItem] = useState<QRCodeItem | null>(null);
  const [isUrlEditing, setIsUrlEditing] = useState(false);
  const [isNameEditing, setIsNameEditing] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isCustomDownloadModalOpen, setIsCustomDownloadModalOpen] =
    useState(false);
  const [isQrPreviewModalOpen, setIsQrPreviewModalOpen] = useState(false);
  const searchParams = useSearchParams();
  const downloadModalParam = searchParams.get("download-modal");
  const [isDownloadModal, setIsDownloadModal] = useState(downloadModalParam === "true");
  // Handle save
  const handleSave = useCallback(() => {
    if (!selectedItem) return;
    onUpdateQrCode(selectedItem.id, { title: "" });
    setSelectedItem(null);
  }, [selectedItem, onUpdateQrCode]);

  // Handle cancel
  const handleCancel = useCallback(() => {
    setSelectedItem(null);
  }, []);

  // Handle edit name request from child
  const handleEditName = useCallback((item: QRCodeItem) => {
    setIsShareModalOpen(false);
    setIsCustomDownloadModalOpen(false);
    setIsQrPreviewModalOpen(false);
    setIsUrlEditing(false);
    setSelectedItem(item);
    setIsNameEditing(true);
  }, []);

  // Handle edit url request from child
  const handleEditUrl = useCallback((item: QRCodeItem) => {
    setIsNameEditing(false);
    setIsShareModalOpen(false);
    setIsCustomDownloadModalOpen(false);
    setIsQrPreviewModalOpen(false);
    setSelectedItem(item);
    setIsUrlEditing(true);
  }, []);

  // Handle share modal request from child
  const handleShareModal = useCallback((item: QRCodeItem) => {
    setIsNameEditing(false);
    setIsUrlEditing(false);
    setIsCustomDownloadModalOpen(false);
    setIsQrPreviewModalOpen(false);
    setSelectedItem(item);
    setIsShareModalOpen(true);
  }, []);

  // Handle close share modal
  const handleCloseShareModal = useCallback(() => {
    setIsShareModalOpen(false);
    setSelectedItem(null);
  }, []);

  // Handle custom download modal request from child
  const handleCustomDownloadModal = useCallback((item: QRCodeItem) => {
    setIsNameEditing(false);
    setIsUrlEditing(false);
    setIsShareModalOpen(false);
    setIsQrPreviewModalOpen(false);
    setSelectedItem(item);
    setIsCustomDownloadModalOpen(true);
  }, []);

  // Handle close custom download modal
  const handleCloseCustomDownloadModal = useCallback(() => {
    setIsCustomDownloadModalOpen(false);
    setSelectedItem(null);
  }, []);

  // Handle close qr preview modal
  const handleCloseQrPreviewModal = useCallback(() => {
    setIsQrPreviewModalOpen(false);
    setSelectedItem(null);
  }, []);

  // Handle close download qr code modal
  const handleCloseDownloadModal = useCallback(() => {
    setIsDownloadModal(false);
    setSelectedItem(null);
  }, []);

  // Handle qr preview modal request from child
  const handleQrPreviewModal = useCallback((item: QRCodeItem) => {
    setIsNameEditing(false);
    setIsUrlEditing(false);
    setIsShareModalOpen(false);
    setIsCustomDownloadModalOpen(false);
    setSelectedItem(item);
    setIsQrPreviewModalOpen(true);
  }, []);

  return (
    <>
      <div className="flex flex-col items-start gap-2 self-stretch">
        {qrData?.map((item) => (
          <QrCodesTableItem
            key={item.id}
            item={item}
            isSelected={selectedIds.has(item.id)}
            onToggleSelection={onToggleSelection}
            onEditName={handleEditName}
            onEditUrl={handleEditUrl}
            onShareModal={handleShareModal}
            onCustomDownloadModal={handleCustomDownloadModal}
            onQrPreviewModal={handleQrPreviewModal}
          />
        ))}
      </div>

      {/* Name Edit Modal */}
      <NameEditModal
        open={!!selectedItem && isNameEditing}
        onClose={handleCancel}
        onSave={handleSave}
        item={selectedItem}
      />

      {/* Url Edit Modal */}
      <UrlEditModal
        open={!!selectedItem && isUrlEditing}
        onClose={handleCancel}
        onSave={handleSave}
        item={selectedItem}
      />

      {/* Share Modal */}
      <ShareQRModal
        open={isShareModalOpen}
        onClose={handleCloseShareModal}
        item={selectedItem}
      />

      {/* Custom Download Modal */}
      <CustomDownloadModal
        open={isCustomDownloadModalOpen}
        onClose={handleCloseCustomDownloadModal}
      />

      {/* Qr Preview Modal */}
      <QrPreviewModal
        open={isQrPreviewModalOpen}
        onClose={handleCloseQrPreviewModal}
        item={selectedItem}
      />

      {/* Download Qr Code Modal */}
      <DownloadQrCodeModal
        open={isDownloadModal}
        onClose={handleCloseDownloadModal}
      />
    </>
  );
}
