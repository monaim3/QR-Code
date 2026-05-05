"use client";

import Accordion from "@/components/common/Accordion";
import MenuSection from "./MenuSection";
import { Fragment, useEffect, useState } from "react";
import Plus from "@/components/icons/plus";
import DeleteModal from "./DeleteModal";
import ReorderModal from "./ReorderModal";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  addSection,
  createSectionId,
  removeSection,
} from "@/store/slices/menuSlice";
import { setFieldError, clearFieldError } from "@/store/slices/validationSlice";

export default function Menu() {
  const dispatch = useAppDispatch();
  const sections = useAppSelector((state) => state.menu.sections);
  const validationErrors = useAppSelector((state) => state.validation.errors);
  const showErrors = useAppSelector((state) => state.validation.showErrors);
  const hasMenuError = showErrors && !!validationErrors.menuItems;

  useEffect(() => {
    if (!showErrors) return;
    const hasProducts = sections.some(
      (s) => s.products && s.products.length > 0,
    );
    if (hasProducts) {
      dispatch(clearFieldError("menuItems"));
    } else {
      dispatch(
        setFieldError({
          field: "menuItems",
          error: "This field is required and cannot be left blank.",
        }),
      );
    }
  }, [sections, showErrors, dispatch]);

  const [activeSectionId, setActiveSectionId] = useState<string | null>(
    () => sections[0]?.id ?? null,
  );
  const effectiveActiveSectionId =
    sections.length === 1 ? activeSectionId : (activeSectionId ?? null);
  const [deleteModalSectionId, setDeleteModalSectionId] = useState<
    string | null
  >(null);
  const [reorderModal, setReorderModal] = useState<
    { mode: "sections" } | { mode: "products"; sectionId: string } | null
  >(null);

  const handleAddSection = () => {
    const newId = createSectionId();
    dispatch(addSection(newId));
    setActiveSectionId(newId);
  };

  const handleSectionClick = (sectionId: string) => {
    setActiveSectionId(
      effectiveActiveSectionId === sectionId ? null : sectionId,
    );
  };

  const handleDeleteSectionClick = (sectionId: string) => {
    setDeleteModalSectionId(sectionId);
  };

  const handleConfirmDeleteSection = () => {
    if (deleteModalSectionId) {
      dispatch(removeSection(deleteModalSectionId));
      setActiveSectionId(null);
      setDeleteModalSectionId(null);
    }
  };

  return (
    <div className="w-full">
      <Accordion
        title="Menu"
        description="Input your menu"
        defaultOpen={true}
        forceOpen={hasMenuError}
      >
        <div className="desktop:space-y-8 space-y-6">
          {sections.map((section, index) => {
            const sectionHasError =
              showErrors &&
              (!!validationErrors[`sectionName_${section.id}`] ||
                section.products.some(
                  (p) => !!validationErrors[`productName_${p.id}`],
                ));
            return (
            <Fragment key={section.id}>
              <MenuSection
                section={section}
                sectionIndex={index}
                isOpen={effectiveActiveSectionId === section.id || sectionHasError}
                onClick={() => handleSectionClick(section.id)}
                onDelete={() => handleDeleteSectionClick(section.id)}
                showReorder={sections.length > 1}
                onOpenReorderModal={() => setReorderModal({ mode: "sections" })}
                onOpenProductReorder={(sectionId) =>
                  setReorderModal({ mode: "products", sectionId })
                }
              />
              {sections.length > 1 && index < sections.length - 1 && (
                <div className="h-[1px] w-full bg-[var(--boarder-grey-50)]" />
              )}
            </Fragment>
            );
          })}

          {/* Add New Section */}
          <div
            className={`flex flex-col justify-center items-center gap-2 self-stretch ${sections.length > 0 ? "pt-8 border-t border-[var(--boarder-grey-50)]" : ""}`}
          >
            <button
              type="button"
              onClick={handleAddSection}
              className="flex h-10 px-4 py-2 justify-center items-center gap-2 rounded-[var(--Corner-Radius-10)] bg-[var(--Blue)] text-white font-medium text-[14px] leading-[22px]"
            >
              <Plus />
              Add new section
            </button>
          </div>
        </div>
        {hasMenuError && (
          <p className="text-sm text-red-500 mt-2" data-validation-error="true">
            {validationErrors.menuItems}
          </p>
        )}
      </Accordion>

      {/* Delete section confirmation */}
      <DeleteModal
        open={!!deleteModalSectionId}
        onClose={() => setDeleteModalSectionId(null)}
        onConfirm={handleConfirmDeleteSection}
      />
      <ReorderModal
        open={!!reorderModal}
        onClose={() => setReorderModal(null)}
        mode={reorderModal?.mode ?? "sections"}
        sectionId={
          reorderModal?.mode === "products" ? reorderModal.sectionId : undefined
        }
      />
    </div>
  );
}
