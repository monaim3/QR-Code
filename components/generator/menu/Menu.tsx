import Accordion from "@/components/common/Accordion";
import MenuSection from "./MenuSection";
import { useState } from "react";
import Plus from "@/components/icons/plus";
import DeleteModal from "./DeleteModal";

export default function Menu() {
  const [activeSection, setActiveSection] = useState(1);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(true);

  const handleClick = (section: number) =>
    setActiveSection(activeSection === section ? 0 : section);

  return (
    <div className="w-full">
      <Accordion title="Menu" description="Input your menu" defaultOpen={true}>
        <div className="desktop:space-y-8 space-y-6">
          <MenuSection
            isOpen={activeSection === 1}
            onClick={() => handleClick(1)}
          />

          {/* Add New Section */}
          <div className="flex flex-col justify-center items-center gap-2 pt-8 self-stretch border-t border-[var(--boarder-grey-50)]">
            <button className="flex h-10 px-4 py-2 justify-center items-center gap-2 rounded-[var(--Corner-Radius-10)] bg-[var(--Blue)] text-white font-medium text-[14px] leading-[22px]">
              <Plus />
              Add new section
            </button>
          </div>
        </div>
      </Accordion>

      {/* Modal */}
      <DeleteModal
        open={isOpenDeleteModal}
        onClose={() => setIsOpenDeleteModal(false)}
      />
    </div>
  );
}
