"use client";

import { useState, useCallback } from "react";
import { QRCodeItem } from "@/types/qr-code";
import QrCodesTableItem from "./QrCodesTableItem";
import NameEditModal from "./NameEditModal";
import UrlEditModal from "./UrlEditModal";
import ShareQRModal from "./ShareQRModal";
import CustomDownloadModal from "./CustomDownloadModal";

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
  const [editingItem, setEditingItem] = useState<QRCodeItem | null>(null);
  const [isUrlEditing, setIsUrlEditing] = useState(false);
  const [isNameEditing, setIsNameEditing] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [sharingItem, setSharingItem] = useState<QRCodeItem | null>(null);
  const [isCustomDownloadModalOpen, setIsCustomDownloadModalOpen] =
    useState(false);
  const [customDownloadItem, setCustomDownloadItem] =
    useState<QRCodeItem | null>(null);

  // Handle save
  const handleSave = useCallback(() => {
    if (!editingItem) return;
    onUpdateQrCode(editingItem.id, { title: "" });
    setEditingItem(null);
  }, [editingItem, onUpdateQrCode]);

  // Handle cancel
  const handleCancel = useCallback(() => {
    setEditingItem(null);
  }, []);

  // Handle edit name request from child
  const handleEditName = useCallback((item: QRCodeItem) => {
    setEditingItem(item);
    setIsNameEditing(true);
  }, []);

  // Handle edit url request from child
  const handleEditUrl = useCallback((item: QRCodeItem) => {
    setEditingItem(item);
    setIsUrlEditing(true);
  }, []);

  // Handle share modal request from child
  const handleShareModal = useCallback((item: QRCodeItem) => {
    setSharingItem(item);
    setIsShareModalOpen(true);
  }, []);

  // Handle close share modal
  const handleCloseShareModal = useCallback(() => {
    setIsShareModalOpen(false);
    setSharingItem(null);
  }, []);

  // Handle custom download modal request from child
  const handleCustomDownloadModal = useCallback((item: QRCodeItem) => {
    setCustomDownloadItem(item);
    setIsCustomDownloadModalOpen(true);
  }, []);

  // Handle close custom download modal
  const handleCloseCustomDownloadModal = useCallback(() => {
    setIsCustomDownloadModalOpen(false);
    setCustomDownloadItem(null);
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
          />
        ))}
      </div>

      {/* Name Edit Modal */}
      <NameEditModal
        open={!!editingItem && isNameEditing}
        onClose={handleCancel}
        onSave={handleSave}
        item={editingItem}
      />

      {/* Url Edit Modal */}
      <UrlEditModal
        open={!!editingItem && isUrlEditing}
        onClose={handleCancel}
        onSave={handleSave}
        item={editingItem}
      />

      {/* Share Modal */}
      <ShareQRModal
        open={isShareModalOpen}
        onClose={handleCloseShareModal}
        item={sharingItem}
      />

      {/* Custom Download Modal */}
      <CustomDownloadModal
        open={isCustomDownloadModalOpen}
        onClose={handleCloseCustomDownloadModal}
      />
    </>
  );
}
