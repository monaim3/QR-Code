"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ReorderSectionCard from "./ReorderSectionCard";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSectionsOrder, setProductsOrder } from "@/store/slices/menuSlice";
import { useState } from "react";

export type ReorderModalMode = "sections" | "products";

interface ReorderItem {
  id: string;
  title: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
  mode: ReorderModalMode;
  sectionId?: string;
}

function buildInitialItems(
  mode: ReorderModalMode,
  sections: { id: string; name: string; products: { id: string; name: string }[] }[],
  sectionId?: string,
): ReorderItem[] {
  if (mode === "sections") {
    return sections.map((s, index) => ({
      id: s.id,
      title: s.name.trim() !== "" ? s.name : `Section ${index + 1}`,
    }));
  }
  const section = sectionId ? sections.find((s) => s.id === sectionId) : null;
  if (!section) return [];
  return section.products.map((p, index) => ({
    id: p.id,
    title: p.name.trim() !== "" ? p.name : `Product ${index + 1}`,
  }));
}

function ReorderModalContent({
  mode,
  sectionId,
  sections,
  onClose,
}: {
  mode: ReorderModalMode;
  sectionId?: string;
  sections: { id: string; name: string; products: { id: string; name: string }[] }[];
  onClose: () => void;
}) {
  const dispatch = useAppDispatch();
  const [orderedItems, setOrderedItems] = useState<ReorderItem[]>(() =>
    buildInitialItems(mode, sections, sectionId),
  );

  const handleMoveUp = (index: number) => {
    if (index <= 0) return;
    setOrderedItems((prev) => {
      const next = [...prev];
      [next[index - 1], next[index]] = [next[index], next[index - 1]];
      return next;
    });
  };

  const handleMoveDown = (index: number) => {
    if (index >= orderedItems.length - 1) return;
    setOrderedItems((prev) => {
      const next = [...prev];
      [next[index], next[index + 1]] = [next[index + 1], next[index]];
      return next;
    });
  };

  const handleSave = () => {
    const orderedIds = orderedItems.map((item) => item.id);
    if (mode === "sections") {
      dispatch(setSectionsOrder({ orderedIds }));
    } else if (sectionId) {
      dispatch(setProductsOrder({ sectionId, orderedIds }));
    }
    // Close after store update is committed and subscribers have re-rendered
    requestAnimationFrame(() => onClose());
  };

  const title =
    mode === "sections" ? "Reorder sections" : "Reorder products";

  return (
    <>
      <DialogHeader className="flex flex-col gap-2">
        <DialogTitle className="text-[var(--Black)] text-left text-[20px] font-bold desktop:leading-[var(--Typeface-Line-height-Heading-3)] leading-[28px]">
          {title}
        </DialogTitle>
      </DialogHeader>

      <div className="space-y-2">
        {orderedItems.map((item, index) => (
          <ReorderSectionCard
            key={item.id}
            title={item.title}
            onMoveUp={() => handleMoveUp(index)}
            onMoveDown={() => handleMoveDown(index)}
            isFirst={index === 0}
            isLast={index === orderedItems.length - 1}
          />
        ))}
      </div>

      <div className="flex items-center justify-center gap-6 self-stretch">
        <Button
          onClick={onClose}
          variant="outline"
          className="h-10 flex items-center justify-center gap-2 py-2 px-4 flex-1 rounded-[var(--Corner-Radius-10)] border-[var(--Blue)] text-[var(--Blue)] text-[14px] leading-[22px] bg-white hover:bg-[var(--Blue)] hover:text-white transition-all duration-300 ease-linear"
        >
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          className="h-10 flex items-center justify-center gap-2 py-2 px-4 flex-1 rounded-[var(--Corner-Radius-10)] bg-[var(--Blue)] text-white text-[14px] leading-[22px] hover:bg-[var(--Blue-hover)] transition-all duration-300 ease-linear"
        >
          Save
        </Button>
      </div>
    </>
  );
}

export default function ReorderModal({
  open,
  onClose,
  mode,
  sectionId,
}: Props) {
  const sections = useAppSelector((state) => state.menu.sections);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="!max-w-[400px] w-[calc(100%-40px)] desktop:!w-full gap-6 p-6 tablet:p-8 desktop:p-8"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        {open ? (
          <ReorderModalContent
            key={`${mode}-${sectionId ?? "sections"}`}
            mode={mode}
            sectionId={sectionId}
            sections={sections}
            onClose={onClose}
          />
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
