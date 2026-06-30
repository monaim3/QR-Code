import Close from "@/components/icons/close";
import RadioButton from "./RadioButton";
import { Button } from "@/components/ui/button";
import { useT } from "@/utils/t";

interface Props {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
  selectedSortBy: string;
  setSelectedSortBy: (selected: string) => void;
  selectedStatus: string;
  setSelectedStatus: (selected: string) => void;
  selectedTypes: string[];
  setSelectedTypes: (selected: string[]) => void;
  handleClearFilter: () => void;
}

export default function MobileFilter({
  isDrawerOpen,
  setIsDrawerOpen,
  selectedSortBy,
  setSelectedSortBy,
  selectedStatus,
  setSelectedStatus,
  selectedTypes,
  setSelectedTypes,
  handleClearFilter,
}: Props) {
  const t = useT();

  const sortOptions = [
    { value: "Name", label: t("public__dashboard__qr_table__controls__sort_name") },
    { value: "Type", label: t("public__dashboard__qr_table__controls__sort_type") },
    { value: "Scans", label: t("public__dashboard__qr_table__controls__sort_scans") },
    { value: "Creation date", label: t("public__dashboard__qr_table__controls__sort_creation_date") },
    { value: "Last modified date", label: t("public__dashboard__qr_table__controls__sort_updated_date") },
    { value: "Status", label: t("public__dashboard__qr_table__controls__sort_status") },
  ];

  const statusOptions = [
    { value: "Active", label: t("public__dashboard__qr_table__controls__status_active") },
    { value: "Paused", label: t("public__dashboard__qr_table__controls__status_paused") },
  ];

  const typeOptions = [
    { value: "Website URL", label: t("generator__step_1__qr_type_cards__url__title") },
    { value: "vCard", label: t("generator__step_1__qr_type_cards__vcard__title") },
    { value: "PDF", label: t("generator__step_1__qr_type_cards__pdf__title") },
    { value: "Images", label: t("generator__step_1__qr_type_cards__images__title") },
    { value: "Social Media", label: t("public__api__messages__qr-categories__socialMedia__title") },
    { value: "Video", label: t("generator__step_1__qr_type_cards__video__title") },
    { value: "Simple Text", label: t("public__api__messages__qr-categories__plainText__title") },
    { value: "Business Page", label: t("generator__step_1__qr_type_cards__business_page__title") },
    { value: "Facebook", label: t("generator__step_1__qr_type_cards__facebook__title") },
    { value: "Wi-Fi", label: t("generator__step_1__qr_type_cards__wifi__title") },
    { value: "App", label: t("generator__step_1__qr_type_cards__app__title") },
    { value: "Menu", label: t("generator__step_1__qr_type_cards__menu__title") },
  ];

  const toggleTypeOption = (value: string) => {
    if (selectedTypes.includes(value)) {
      setSelectedTypes(selectedTypes.filter((item) => item !== value));
    } else {
      setSelectedTypes([...selectedTypes, value]);
    }
  };

  return (
    <div
      className={`fixed inset-0 desktopDashboard:hidden transition-all duration-300 ease-in-out z-50 ${
        isDrawerOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[var(--pop-up-color)] transition-opacity duration-300 z-50"
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Drawer Content */}
      <div
        className={`absolute z-50 bottom-0 left-0 w-full bg-white rounded-t-[10px] transition-transform duration-500 ease-in-out max-h-[90vh] overflow-y-auto ${isDrawerOpen ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="flex items-center gap-4 py-4 tablet:px-8 px-5 border-b border-[var(--boarder-grey-50)]">
          <h4 className="flex-1 text-[var(--Black)] text-[18px] leading-[26px] font-bold">
            {t("public__dashboard__qr_table__controls__filters")}
          </h4>

          <button
            onClick={() => setIsDrawerOpen(false)}
            aria-label="Close menu"
          >
            <Close className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col items-start gap-4 py-4 self-stretch">
          {/* Sort By */}
          <div className="flex flex-col items-start gap-4 tablet:px-8 px-5 self-stretch">
            <p className="text-[var(--Black)] text-[16px] leading-[24px] font-semibold">
              {t("public__dashboard__qr_table__controls__sort_placeholder")}
            </p>

            <div className="flex flex-col items-start self-stretch">
              {sortOptions.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedSortBy(item.value)}
                  className="flex h-10 p-2 items-center gap-2 self-stretch"
                >
                  <RadioButton checked={item.value === selectedSortBy} />
                  <p className="text-[var(--Dark-Gray)] text-[14px] leading-[22px]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Code Status */}
          <div className="flex flex-col items-start gap-4 tablet:px-8 px-5 self-stretch">
            <div className="flex items-center gap-2 self-stretch">
              <p className="text-[var(--Black)] text-[16px] leading-[24px] font-semibold">
                {t("public__dashboard__qr_table__controls__status_placeholder")}
              </p>
              {selectedStatus && (
                <div className="flex w-4 h-4 p-0.5 flex-col justify-center items-center gap-2 bg-[var(--Blue)] rounded-full text-white text-[10px] leading-[10px]">
                  1
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 flex-wrap self-stretch">
              {statusOptions.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedStatus(item.value)}
                  className={`flex py-2 px-4 items-center gap-2 rounded-full text-[14px] leading-[22px] border ${item.value === selectedStatus ? "text-[var(--Blue)] border-[var(--Blue)] " : "text-[var(--Dark-Gray)] border-[var(--Boarder-Grey)]"}`}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* Code Type */}
          <div className="flex flex-col items-start gap-4 tablet:px-8 px-5 self-stretch">
            <div className="flex items-center gap-2 self-stretch">
              <p className="text-[var(--Black)] text-[16px] leading-[24px] font-semibold">
                {t("public__dashboard__qr_table__controls__type_placeholder")}
              </p>
              {selectedTypes.length > 0 && (
                <div className="flex w-4 h-4 p-0.5 flex-col justify-center items-center gap-2 bg-[var(--Blue)] rounded-full text-white text-[10px] leading-[10px]">
                  {selectedTypes.length}
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 flex-wrap self-stretch">
              {typeOptions.map((item, index) => (
                <div
                  key={index}
                  onClick={() => toggleTypeOption(item.value)}
                  className={`flex py-2 px-4 items-center gap-2 rounded-full text-[14px] leading-[22px] border ${selectedTypes.includes(item.value) ? "text-[var(--Blue)] border-[var(--Blue)] " : "text-[var(--Dark-Gray)] border-[var(--Boarder-Grey)]"}`}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex tablet:px-8 px-5 py-4 justify-center items-center gap-4 self-stretch bg-white shadow-[0_1px_8px_0_rgba(63,72,103,0.16)]">
          <Button
            onClick={handleClearFilter}
            variant="outline"
            className="flex h-10 px-4 py-2 justify-center items-center gap-2 flex-1 rounded-[var(--Corner-Radius-10)] border border-[var(--Blue)] text-[var(--Blue)] text-[14px] leading-[22px]"
          >
            {t("public__dashboard__qr_table__controls__clear_all")}
          </Button>
          <Button className="flex h-10 px-4 py-2 justify-center items-center gap-2 flex-1 rounded-[var(--Corner-Radius-10)]  bg-[var(--Blue)] text-white text-[14px] leading-[22px]">
            {t("public__dashboard__qr_table__controls__see_results")}
          </Button>
        </div>
      </div>
    </div>
  );
}
