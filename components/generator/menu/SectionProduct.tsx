"use client";

import MenuAccordion from "./MenuAccordion";
import ImageUpload from "../vcard/ImageUpload";
import Input from "../vcard/Input";
import { allergens } from "@/lib/menu";
import { useAppDispatch } from "@/store/hooks";
import { updateProduct, removeProduct } from "@/store/slices/menuSlice";
import type { MenuProduct } from "@/types/menu";

interface Props {
  sectionId: string;
  product: MenuProduct;
  productIndex: number;
  isOpen: boolean;
  onClick: () => void;
  showReorder: boolean;
  onOpenReorderModal?: () => void;
  onDeleted?: () => void;
}

export default function SectionProduct({
  sectionId,
  product,
  productIndex,
  isOpen,
  onClick,
  showReorder,
  onOpenReorderModal,
  onDeleted,
}: Props) {
  const dispatch = useAppDispatch();

  const productTitle =
    product.name.trim() !== "" ? product.name : `Product ${productIndex + 1}`;

  const handleSelectOption = (option: string) => {
    const newAllergens = product.allergens.includes(option)
      ? product.allergens.filter((a) => a !== option)
      : [...product.allergens, option];
    dispatch(
      updateProduct({
        sectionId,
        productId: product.id,
        updates: { allergens: newAllergens },
      }),
    );
  };

  const handleDelete = () => {
    dispatch(removeProduct({ sectionId, productId: product.id }));
    onDeleted?.();
  };

  const handleProductVisibilityToggle = () => {
    dispatch(
      updateProduct({
        sectionId,
        productId: product.id,
        updates: { isVisible: !product.isVisible },
      }),
    );
  };

  const handleImageChange = (value: string | null) => {
    dispatch(
      updateProduct({
        sectionId,
        productId: product.id,
        updates: { image: value },
      }),
    );
  };

  return (
    <div className="flex flex-col justify-center items-start gap-8 desktop:p-6 p-4 self-stretch bg-[var(--light-grey-70)] rounded-[var(--Corner-Radius-10)]">
      <MenuAccordion
        title={productTitle}
        isVisible={product.isVisible}
        hideBtnText="Hide product"
        isOpen={isOpen}
        onClick={onClick}
        showReorder={showReorder}
        onReorderClick={onOpenReorderModal}
        onDelete={handleDelete}
        onPreview={handleProductVisibilityToggle}
      >
        <div className="desktop:space-y-8 space-y-6">
          <ImageUpload label="Add image" value={product.image} aspectRatio={1.7647} onCustomLogoUpload={handleImageChange} />

          <div className="space-y-4">
            <Input
              label="Product name*"
              placeholder="e.g. Eggs Benedict"
              id={`pro-name-${product.id}`}
              value={product.name}
              onChange={(value) =>
                dispatch(
                  updateProduct({
                    sectionId,
                    productId: product.id,
                    updates: { name: value },
                  }),
                )
              }
            />

            <div className="flex flex-col desktop:flex-row items-start desktop:gap-8 gap-4 self-stretch">
              <Input
                label="Name translation"
                placeholder="e.g. Enter item name translation"
                id={`pro-name-tr-${product.id}`}
                value={product.nameTranslation}
                onChange={(value) =>
                  dispatch(
                    updateProduct({
                      sectionId,
                      productId: product.id,
                      updates: { nameTranslation: value },
                    }),
                  )
                }
              />
              <Input
                label="Description"
                placeholder="e.g. Served with sourdough toast"
                id={`pro-desc-${product.id}`}
                value={product.description}
                onChange={(value) =>
                  dispatch(
                    updateProduct({
                      sectionId,
                      productId: product.id,
                      updates: { description: value },
                    }),
                  )
                }
              />
            </div>

            <div className="flex flex-col desktop:flex-row items-start desktop:gap-8 gap-4 self-stretch">
              <Input
                label="Description translation"
                placeholder="e.g. Translation if needed"
                id={`pro-desc-tr-${product.id}`}
                value={product.descriptionTranslation}
                onChange={(value) =>
                  dispatch(
                    updateProduct({
                      sectionId,
                      productId: product.id,
                      updates: { descriptionTranslation: value },
                    }),
                  )
                }
              />
              <Input
                label="Price"
                placeholder="e.g. 10 €"
                id={`pro-price-${product.id}`}
                value={product.price}
                onChange={(value) =>
                  dispatch(
                    updateProduct({
                      sectionId,
                      productId: product.id,
                      updates: { price: value },
                    }),
                  )
                }
              />
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-[var(--Black)] font-medium text-[16px] leading-[24px]">
              Allergens present
            </p>

            <div className="flex items-center content-center gap-4 self-stretch flex-wrap">
              {allergens.map((allergen) => {
                const Icon = allergen.icon;

                return (
                  <button
                    key={allergen.id}
                    type="button"
                    onClick={() => handleSelectOption(allergen.id)}
                    className={`flex p-2 items-center gap-2 rounded-[var(--Corner-Radius-8)] border ${product.allergens.includes(allergen.id) ? "border-[var(--Blue)]" : "border-[var(--Boarder-Grey)]"}`}
                  >
                    <Icon />
                    <span className="text-[var(--Dark-gray)] text-[14px] leading-[22px]"></span>
                    {allergen.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </MenuAccordion>
    </div>
  );
}
