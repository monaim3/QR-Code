import Plus from "@/components/icons/plus";
import Input from "../vcard/Input";
import MenuAccordion from "./MenuAccordion";
import SectionProduct from "./SectionProduct";

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

export default function MenuSection({ isOpen, onClick }: Props) {
  return (
    <MenuAccordion title="Section 1" isOpen={isOpen} onClick={onClick}>
      <div className="flex flex-col items-start gap-4 self-stretch">
        <div className="flex flex-col desktop:flex-row items-start desktop:gap-12 gap-4 self-stretch">
          <Input
            label="Name of section*"
            placeholder="e.g. Breakfast"
            id="section-name"
            // value={vCard.personalInfo.fullName}
            // onChange={handleFullNameChange}
          />

          <Input
            label="Name translation"
            placeholder="Enter name translation"
            id="tr-name"
            // value={vCard.personalInfo.fullName}
            // onChange={handleFullNameChange}
          />
        </div>

        <div className="flex flex-col desktop:flex-row items-start desktop:gap-12 gap-4 self-stretch">
          <Input
            label="Description of section"
            placeholder="e.g. Fresh breakfast available until midnig..."
            id="section-desc"
            // value={vCard.personalInfo.fullName}
            // onChange={handleFullNameChange}
          />

          <Input
            label="Description translation"
            placeholder="e.g. Enter description translation"
            id="tr-desc"
            // value={vCard.personalInfo.fullName}
            // onChange={handleFullNameChange}
          />
        </div>
      </div>

      {/* Product */}
      <div className="space-y-2">
        <SectionProduct />

        {/* Add New Product */}
        <div className="flex flex-col justify-center items-start gap-2 p-6 self-stretch bg-[var(--light-grey-70)] rounded-[var(--Corner-Radius-10)]">
          <button className="flex h-10 px-4 py-2 justify-center items-center gap-2 border border-[var(--Boarder-Grey)] rounded-[var(--Corner-Radius-10)] text-[var(--Dark-gray)] text-[14px] leading-[22px]">
            <Plus />
            Add product
          </button>
        </div>
      </div>
    </MenuAccordion>
  );
}
