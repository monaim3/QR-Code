import Close from "@/components/icons/close";
import { Button } from "@/components/ui/button";
import CheckBox from "../qr-codes/filters/CheckBox";

interface Props {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
  selectedSortBy: string;
  setSelectedSortBy: (selected: string) => void;
  selectedMethod: string[];
  setSelectedMethod: (selected: string[]) => void;
  handleClearFilter: () => void;
}

export default function MobileBillingFilter({
  isDrawerOpen,
  setIsDrawerOpen,
  selectedSortBy,
  setSelectedSortBy,
  selectedMethod,
  setSelectedMethod,
  handleClearFilter,
}: Props) {
  const sortOptions = [
    "Invoice",
    "Transaction date",
    "Plan",
    "Payment method",
    "Amount",
    "Status",
  ];

  const methods = ["Credit or debit card", "Paypal", "Google Pay", "Apple Pay"];

  // Toggle selection logic
  const toggleMethodOption = (option: string) => {
    if (selectedMethod.includes(option)) {
      setSelectedMethod(selectedMethod.filter((item) => item !== option));
    } else {
      setSelectedMethod([...selectedMethod, option]);
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
          <div className="flex flex-col items-start gap-4 tablet:px-8 px-5 self-stretch">
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
                  <CheckBox
                    checked={item === selectedSortBy}
                    isRounded={true}
                  />
                  <p className="text-[var(--Dark-Gray)] text-[14px] leading-[22px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Methods */}
          <div className="flex flex-col items-start gap-4 tablet:px-8 px-5 self-stretch">
            <div className="flex items-center gap-2 self-stretch">
              <p className="text-[var(--Black)] text-[16px] leading-[24px] font-semibold">
                Payment method
              </p>
              {selectedMethod.length > 0 && (
                <div className="flex w-4 h-4 p-0.5 flex-col justify-center items-center gap-2 bg-[var(--Blue)] rounded-full text-white text-[10px] leading-[10px]">
                  {selectedMethod.length}
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 flex-wrap self-stretch">
              {methods.map((item, index) => (
                <div
                  key={index}
                  onClick={() => toggleMethodOption(item)}
                  className={`flex py-2 px-4 items-center gap-2 rounded-full text-[14px] leading-[22px] border ${selectedMethod.includes(item) ? "text-[var(--Blue)] border-[var(--Blue)] " : "text-[var(--Dark-Gray)] border-[var(--Boarder-Grey)]"}`}
                >
                  {item}
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
            Clear all
          </Button>
          <Button className="flex h-10 px-4 py-2 justify-center items-center gap-2 flex-1 rounded-[var(--Corner-Radius-10)]  bg-[var(--Blue)] text-white text-[14px] leading-[22px]">
            See results
          </Button>
        </div>
      </div>
    </div>
  );
}
