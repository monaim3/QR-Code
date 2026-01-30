import { Fragment } from "react";
import { MenuSection } from "@/types/menu";
import Image from "next/image";
import { allergens as allergensList } from "@/lib/menu";

interface Props {
  section: MenuSection;
  index: number;
}

export default function PreviewSectionCard({ section, index }: Props) {
  return (
    <div className="space-y-4 bg-white rounded-[var(--Corner-Radius-6)] shadow-[0_4px_14px_0_rgba(54,66,140,0.16)] p-4 w-[220px] overflow-hidden">
      {/* Heading */}
      <div className="space-y-1">
        <p className="text-[var(--Black)] text-[16px] leading-[24px] font-medium">
          {section.name || "Section " + (index + 1)}
        </p>
        {section.nameTranslation && (
          <p className="text-[var(--Dark-gray)] text-[12px] leading-[20px]">
            {section.nameTranslation}
          </p>
        )}
      </div>

      {/* Description */}
      {(section.description || section.descriptionTranslation) && (
        <div className="space-y-1">
          {section.description && (
            <p className="text-[var(--Black)] text-[14px] leading-[22px]">
              {section.description}
            </p>
          )}
          {section.descriptionTranslation && (
            <p className="text-[var(--Dark-gray)] text-[12px] leading-[20px]">
              {section.descriptionTranslation}
            </p>
          )}
        </div>
      )}

      {/* Products */}
      {section.products
        .filter((p) => p.isVisible)
        .map((product) => (
          <Fragment key={product.id}>
            <div className="w-full h-[1px] bg-[var(--boarder-grey-50)]" />

            <div className="space-y-4 w-full">
              {product.image && (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={220}
                  height={120}
                  className="object-contain rounded-[4px]"
                />
              )}

              <div className="space-y-2 w-full">
                {(product.name || product.nameTranslation) && (
                  <div className="space-y-1 w-full">
                    {product.name && (
                      <p className="text-[var(--Black)] text-[16px] leading-[24px] font-medium">
                        {product.name}
                      </p>
                    )}
                    {product.nameTranslation && (
                      <p className="text-[var(--Dark-gray)] text-[12px] leading-[20px]">
                        {product.nameTranslation}
                      </p>
                    )}
                  </div>
                )}

                {product.price && (
                  <p className="text-[var(--Black)] text-[16px] leading-[24px] font-medium">
                    {product.price}
                  </p>
                )}

                {(product.description || product.descriptionTranslation) && (
                  <div className="space-y-1 w-full">
                    {product.description && (
                      <p className="text-[var(--Black)] text-[16px] leading-[24px]">
                        {product.description}
                      </p>
                    )}
                    {product.descriptionTranslation && (
                      <p className="text-[var(--Dark-gray)] text-[12px] leading-[20px]">
                        {product.descriptionTranslation}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {product.allergens?.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap">
                  {product.allergens.map((allergenId) => {
                    const allergen = allergensList.find(
                      (a) => a.id === allergenId,
                    );
                    if (!allergen) return null;
                    const Icon = allergen.icon;
                    return (
                      <button
                        key={allergen.id}
                        type="button"
                        className="flex p-2 items-center gap-2 rounded-[var(--Corner-Radius-8)] border border-[var(--Boarder-Grey)]"
                      >
                        <Icon />
                        <span className="text-[var(--Dark-gray)] text-[14px] leading-[22px]">
                          {allergen.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </Fragment>
        ))}
    </div>
  );
}
