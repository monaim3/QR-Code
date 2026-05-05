"use client";

import Plus from "@/components/icons/plus";
import Input from "../vcard/Input";
import MenuAccordion from "./MenuAccordion";
import SectionProduct from "./SectionProduct";
import { useAppDispatch } from "@/store/hooks";
import {
  updateSection,
  addProduct,
  createProductIdPublic,
} from "@/store/slices/menuSlice";
import { clearFieldError } from "@/store/slices/validationSlice";
import type { MenuSection as MenuSectionType } from "@/types/menu";
import { useState } from "react";

interface Props {
  section: MenuSectionType;
  sectionIndex: number;
  isOpen: boolean;
  onClick: () => void;
  onDelete: () => void;
  showReorder: boolean;
  onOpenReorderModal?: () => void;
  onOpenProductReorder?: (sectionId: string) => void;
}

export default function MenuSection({
  section,
  sectionIndex,
  isOpen,
  onClick,
  onDelete,
  showReorder,
  onOpenReorderModal,
  onOpenProductReorder,
}: Props) {
  const dispatch = useAppDispatch();
  const [activeProductId, setActiveProductId] = useState<string | null>(null);
  // When only one product, use activeProductId so user can collapse it
  const effectiveActiveProductId =
    section.products.length === 1 ? activeProductId : (activeProductId ?? null);

  const sectionTitle =
    section.name.trim() !== "" ? section.name : `Section ${sectionIndex + 1}`;

  const handleSectionNameChange = (value: string) => {
    dispatch(updateSection({ id: section.id, updates: { name: value } }));
  };
  const handleSectionNameTranslationChange = (value: string) => {
    dispatch(
      updateSection({ id: section.id, updates: { nameTranslation: value } }),
    );
  };
  const handleSectionDescriptionChange = (value: string) => {
    dispatch(
      updateSection({ id: section.id, updates: { description: value } }),
    );
  };
  const handleSectionDescriptionTranslationChange = (value: string) => {
    dispatch(
      updateSection({
        id: section.id,
        updates: { descriptionTranslation: value },
      }),
    );
  };

  const handleAddProduct = () => {
    const newProductId = createProductIdPublic();
    dispatch(addProduct({ sectionId: section.id, productId: newProductId }));
    dispatch(clearFieldError("menuItems"));
    setActiveProductId(newProductId);
  };

  const handleProductClick = (productId: string) => {
    setActiveProductId(
      effectiveActiveProductId === productId ? null : productId,
    );
  };

  const handleSectionVisibilityToggle = () => {
    dispatch(
      updateSection({
        id: section.id,
        updates: { isVisible: !section.isVisible },
      }),
    );
  };

  return (
    <MenuAccordion
      title={sectionTitle}
      isVisible={section.isVisible}
      hideBtnText="Hide section"
      isOpen={isOpen}
      onClick={onClick}
      onDelete={onDelete}
      showReorder={showReorder}
      onReorderClick={onOpenReorderModal}
      onPreview={handleSectionVisibilityToggle}
    >
      <div className="flex flex-col items-start gap-4 self-stretch">
        <div className="flex flex-col desktop:flex-row items-start desktop:gap-12 gap-4 self-stretch">
          <Input
            label="Name of section*"
            placeholder="e.g. Breakfast"
            id={`section-name-${section.id}`}
            value={section.name}
            onChange={handleSectionNameChange}
            validationKey={`sectionName_${section.id}`}
          />

          <Input
            label="Name translation"
            placeholder="Enter name translation"
            id={`tr-name-${section.id}`}
            value={section.nameTranslation}
            onChange={handleSectionNameTranslationChange}
          />
        </div>

        <div className="flex flex-col desktop:flex-row items-start desktop:gap-12 gap-4 self-stretch">
          <Input
            label="Description of section"
            placeholder="e.g. Fresh breakfast available until midnig..."
            id={`section-desc-${section.id}`}
            value={section.description}
            onChange={handleSectionDescriptionChange}
          />

          <Input
            label="Description translation"
            placeholder="e.g. Enter description translation"
            id={`tr-desc-${section.id}`}
            value={section.descriptionTranslation}
            onChange={handleSectionDescriptionTranslationChange}
          />
        </div>
      </div>

      {/* Products */}
      <div className="space-y-2">
        {section.products.map((product, productIndex) => (
          <SectionProduct
            key={product.id}
            sectionId={section.id}
            product={product}
            productIndex={productIndex}
            isOpen={effectiveActiveProductId === product.id}
            onClick={() => handleProductClick(product.id)}
            showReorder={section.products.length > 1}
            onOpenReorderModal={() => onOpenProductReorder?.(section.id)}
            onDeleted={() => {
              if (effectiveActiveProductId === product.id)
                setActiveProductId(null);
            }}
          />
        ))}

        {/* Add New Product */}
        <div className="flex flex-col justify-center items-start gap-2 p-6 self-stretch bg-[var(--light-grey-70)] rounded-[var(--Corner-Radius-10)]">
          <button
            type="button"
            onClick={handleAddProduct}
            className="flex h-10 px-4 py-2 justify-center items-center gap-2 border border-[var(--Boarder-Grey)] rounded-[var(--Corner-Radius-10)] text-[var(--Dark-gray)] text-[14px] leading-[22px]"
          >
            <Plus />
            Add product
          </button>
        </div>
      </div>
    </MenuAccordion>
  );
}
