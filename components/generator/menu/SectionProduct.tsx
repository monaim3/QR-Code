import { useState } from "react";
import MenuAccordion from "./MenuAccordion";
import ImageUpload from "../vcard/ImageUpload";
import Input from "../vcard/Input";
import { allergens } from "@/lib/menu";

export default function SectionProduct() {
  const [activeProduct, setActiveProduct] = useState(1);
  const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);

  const handleClick = (section: number) =>
    setActiveProduct(activeProduct === section ? 0 : section);

  const handleSelectOption = (option: string) => {
    if (selectedAllergens.includes(option)) {
      setSelectedAllergens(
        selectedAllergens.filter((allergen) => allergen !== option),
      );
    } else {
      setSelectedAllergens([...selectedAllergens, option]);
    }
  };

  return (
    <div className="flex flex-col justify-center items-start gap-8 desktop:p-6 p-4 self-stretch bg-[var(--light-grey-70)] rounded-[var(--Corner-Radius-10)]">
      <MenuAccordion
        title="Product 1"
        isOpen={activeProduct === 1}
        onClick={() => handleClick(1)}
      >
        <div className="desktop:space-y-8 space-y-6">
          <ImageUpload label="Add image" />

          <div className="space-y-4">
            <Input
              label="Product name*"
              placeholder="e.g. Eggs Benedict"
              id="pro-name"
              // value={menu.restaurantInfo.name}
              // onChange={(v) => handleChange(v, "name")}
            />

            <div className="flex flex-col desktop:flex-row items-start desktop:gap-8 gap-4 self-stretch">
              <Input
                label="Name translation"
                placeholder="e.g. Enter item name translation"
                id="pro-name-tr"
                // value={menu.restaurantInfo.name}
                // onChange={(v) => handleChange(v, "name")}
              />
              <Input
                label="Description"
                placeholder="e.g. Served with sourdough toast"
                id="pro-desc"
                // value={menu.restaurantInfo.description}
                // onChange={(v) => handleChange(v, "description")}
              />
            </div>

            <div className="flex flex-col desktop:flex-row items-start desktop:gap-8 gap-4 self-stretch">
              <Input
                label="Description translation"
                placeholder="e.g. Translation if needed"
                id="pro-desc-tr"
                // value={menu.restaurantInfo.name}
                // onChange={(v) => handleChange(v, "name")}
              />
              <Input
                label="Price"
                placeholder="e.g. 10 €"
                id="pro-price"
                // value={menu.restaurantInfo.description}
                // onChange={(v) => handleChange(v, "description")}
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
                    onClick={() => handleSelectOption(allergen.id)}
                    className={`flex p-2 items-center gap-2 rounded-[var(--Corner-Radius-8)] border ${selectedAllergens.includes(allergen.id) ? "border-[var(--Blue)]" : "border-[var(--Boarder-Grey)]"}`}
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
