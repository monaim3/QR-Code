import Close from "@/components/icons/close";
import RadioButton from "./RadioButton";

interface Props {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
  selectedSortBy: string;
  setSelectedSortBy: (selected: string) => void;
  selectedStatus: string;
  setSelectedStatus: (selected: string) => void;
}

export default function MobileFilter({
  isDrawerOpen,
  setIsDrawerOpen,
  selectedSortBy,
  setSelectedSortBy,
  selectedStatus,
  setSelectedStatus,
}: Props) {
  const sortOptions = [
    "Name",
    "Type",
    "Scans",
    "Creation date",
    "Last modified date",
    "Status",
  ];

  const statusOptions = ["Active", "Paused"];

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
        className={`absolute z-50 bottom-0 left-0 w-full bg-white rounded-t-[10px] transition-transform duration-500 ease-in-out ${isDrawerOpen ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="flex items-center gap-4 py-4 px-5 border-b border-[var(--boarder-grey-50)]">
          <h4 className="flex-1 text-[var(--Black)] text-[18px] leading-[26px] font-bold">
            Filters
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
          <div className="flex flex-col items-start gap-4 px-5 self-stretch">
            <p className="text-[var(--Black)] text-[16px] leading-[24px] font-semibold">
              Sort by
            </p>

            <div className="flex flex-col items-start self-stretch">
              {sortOptions.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedSortBy(item)}
                  className="flex h-10 p-2 items-center gap-2 self-stretch"
                >
                  <RadioButton checked={item === selectedSortBy} />
                  <p className="text-[var(--Dark-Gray)] text-[14px] leading-[22px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Code Status */}
          <div className="flex flex-col items-start gap-4 px-5 self-stretch">
            <p className="text-[var(--Black)] text-[16px] leading-[24px] font-semibold">
              QR code status
            </p>

            <div className="flex items-center gap-2 flex-wrap self-stretch">
              {statusOptions.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedStatus(item)}
                  className={`flex py-2 px-4 items-center gap-2 rounded-full text-[14px] leading-[22px] border ${item === selectedStatus ? "text-[var(--Blue)] border-[var(--Blue)] " : "text-[var(--Dark-Gray)] border-[var(--Boarder-Grey)]"}`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
