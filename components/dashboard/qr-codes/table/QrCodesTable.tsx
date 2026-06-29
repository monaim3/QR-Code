"use client";
import { useState, useCallback, useEffect } from "react";
import QrCodesTableItem from "./QrCodesTableItem";
import NameEditModal from "./NameEditModal";
import UrlEditModal from "./UrlEditModal";
import ShareQRModal from "./ShareQRModal";
import CustomDownloadModal from "./CustomDownloadModal";
import QrPreviewModal from "./QrPreviewModal";
import DownloadQrCodeModal from "./DownloadQrCodeModal";
import { useSearchParams } from "next/navigation";
import { QrCode as qrData } from "@/types/generatedQr";

interface Props {
  qrData: qrData[];
  selectedIds: Set<string>;
  onToggleSelection: (id: string) => void;
  onUpdateQrCode: (id: string, updates: Partial<qrData>) => void;
}

export default function QrCodesTable({
  qrData,
  selectedIds,
  onToggleSelection,
  onUpdateQrCode,
}: Props) {
  const [selectedItem, setSelectedItem] = useState<qrData | null>(null);
  const [isUrlEditing, setIsUrlEditing] = useState(false);
  const [isNameEditing, setIsNameEditing] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isCustomDownloadModalOpen, setIsCustomDownloadModalOpen] = useState(false);
  const [isQrPreviewModalOpen, setIsQrPreviewModalOpen] = useState(false);
  const [localQrData, setLocalQrData] = useState<qrData[]>(qrData);
  const searchParams = useSearchParams();
  const downloadModalParam = searchParams.get("download-modal");
  const [isDownloadModal, setIsDownloadModal] = useState(downloadModalParam === "true");

  // Sync local data when qrData prop changes
  useEffect(() => {
    setLocalQrData(qrData);
  }, [qrData]);

  // Handle save name
  const handleSaveName = useCallback((newName: string) => {
    if (!selectedItem) return;
    // Update local state immediately
    setLocalQrData((prevData) =>
      prevData.map((item) =>
        item.id === selectedItem.id ? { ...item, name: newName } : item
      )
    );
    // Call parent update function
    onUpdateQrCode(selectedItem.id, { name: newName });
    setIsNameEditing(false);
    setSelectedItem(null);
  }, [selectedItem, onUpdateQrCode]);

  // Handle save URL
  const handleSaveUrl = useCallback((newUrl: string) => {
    if (!selectedItem) return;
    // Update local state immediately
    setLocalQrData((prevData) =>
      prevData.map((item) =>
        item.id === selectedItem.id ? { ...item, destinationUrl: newUrl } : item
      )
    );
    // Call parent update function
    onUpdateQrCode(selectedItem.id, { content: { ...selectedItem.content, url: newUrl } });
    setIsUrlEditing(false);
    setSelectedItem(null);
  }, [selectedItem, onUpdateQrCode]);

  // Handle cancel
  const handleCancel = useCallback(() => {
    setSelectedItem(null);
  }, []);

  // Handle edit name request from child
  const handleEditName = useCallback((item: qrData) => {
    setIsShareModalOpen(false);
    setIsCustomDownloadModalOpen(false);
    setIsQrPreviewModalOpen(false);
    setIsUrlEditing(false);
    setSelectedItem(item);
    setIsNameEditing(true);
  }, []);

  // Handle edit url request from child
  const handleEditUrl = useCallback((item: qrData) => {
    setIsNameEditing(false);
    setIsShareModalOpen(false);
    setIsCustomDownloadModalOpen(false);
    setIsQrPreviewModalOpen(false);
    setSelectedItem(item);
    setIsUrlEditing(true);
  }, []);

  // Handle share modal request from child
  const handleShareModal = useCallback((item: qrData) => {
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
  const handleCustomDownloadModal = useCallback((item: qrData) => {
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
  const handleQrPreviewModal = useCallback((item: qrData) => {
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
        {localQrData?.map((item) => (
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
        onSave={handleSaveName}
        item={selectedItem}
      />

      {/* Url Edit Modal */}
      <UrlEditModal
        open={!!selectedItem && isUrlEditing}
        onClose={handleCancel}
        onSave={handleSaveUrl}
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
        item={selectedItem}
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
