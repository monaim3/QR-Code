import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ChevronUpSmall from "@/components/icons/chevron-up-small";
import ChevronDownSmall from "@/components/icons/chevron-down-small";
import CheckBox from "../qr-codes/filters/CheckBox";
import CloseCircle from "@/components/icons/close-circle";
import { useT } from "@/utils/t";

export interface QrCodeOption {
  id: string;
  name: string;
}

interface Props {
  options: QrCodeOption[];
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function QrCodeSearchDropdown({
  options,
  search,
  setSearch,
  selected,
  setSelected,
}: Props) {
  const t = useT();
  const [open, setOpen] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const filteredOptions = options.filter((opt) =>
    opt.name.toLowerCase().includes(search.toLowerCase()),
  );

  const toggleOption = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelected([]);
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen && inputRef.current === document.activeElement) {
      return;
    }
    setOpen(newOpen);
  };

  const handleTriggerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (
      target.tagName === "INPUT" ||
      target.closest("input") ||
      (open && target !== e.currentTarget)
    ) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const selectedLabels = selected
    .map((id) => options.find((opt) => opt.id === id)?.name)
    .filter((name): name is string => name !== undefined);

  const displayLabel =
    selectedLabels.length > 1
      ? `${selectedLabels[0]} / +${selectedLabels.length - 1}`
      : selectedLabels[0] || "";

  const renderSelectedBadge = () => {
    if (selected.length === 0) return null;
    return (
      <span className="flex items-center gap-1 bg-[var(--Generator-Background)] text-[var(--Blue)] text-[12px] leading-[20px] px-1 rounded-full group">
        <button onClick={(e) => handleReset(e)}>
          <CloseCircle className="text-[var(--Grey)]" />
        </button>
        {displayLabel}
      </span>
    );
  };

  return (
    <div className="desktopDashboard:w-[300px] w-full">
      <Popover open={open} onOpenChange={handleOpenChange}>
        <PopoverTrigger asChild>
          <div
            className="h-10 py-2 px-4 rounded-[var(--Corner-Radius-8)] border border-[var(--Boarder-Grey)] bg-white hover:ring-[var(--Boarder-Grey)] hover:ring-2 transition-colors flex items-center justify-between gap-2 flex-1"
            onClick={handleTriggerClick}
          >
            {open ? (
              <div className="flex flex-wrap gap-2 flex-1 items-center">
                {renderSelectedBadge()}

                <input
                  ref={inputRef}
                  autoFocus={open}
                  placeholder={
                    selected.length === 0
                      ? t(
                          "public__dashboard__analytics__filter__qr_placeholder",
                        )
                      : ""
                  }
                  className="flex-1 min-w-[50px] outline-none text-[14px] leading-[22px] text-[var(--Grey)] placeholder:text-[var(--Grey)]"
                  value={search}
                  onChange={(e) => {
                    e.stopPropagation();
                    setSearch(e.target.value);
                    if (!open) setOpen(true);
                  }}
                  onFocus={(e) => {
                    e.stopPropagation();
                    setOpen(true);
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpen(true);
                  }}
                  onKeyDown={(e) => {
                    e.stopPropagation();
                  }}
                />
              </div>
            ) : (
              <div>
                {selected.length > 0 ? (
                  renderSelectedBadge()
                ) : (
                  <p className="text-[var(--Grey)] text-[14px] leading-[22px]">
                    {t("public__qr__statistics__filter__qr__title")}
                  </p>
                )}
              </div>
            )}

            {open ? (
              <ChevronUpSmall className="text-[var(--Grey)]" />
            ) : (
              <ChevronDownSmall className="text-[var(--Grey)]" />
            )}
          </div>
        </PopoverTrigger>

        <PopoverContent
          align="start"
          className="w-[var(--radix-popover-trigger-width)] p-2 bg-white rounded-[var(--Corner-Radius-8)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)]"
          onInteractOutside={(e) => {
            const target = e.target as HTMLElement;
            if (
              target === inputRef.current ||
              inputRef.current?.contains(target)
            ) {
              e.preventDefault();
            }
          }}
        >
          <div className="space-y-1">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => {
                const isSelected = selected.includes(option.id);
                return (
                  <div
                    key={option.id}
                    onClick={() => toggleOption(option.id)}
                    className={cn(
                      "flex h-10 p-2 items-center gap-2 self-stretch cursor-pointer rounded-[var(--Corner-Radius-8)] transition-colors",
                      isSelected
                        ? "bg-[var(--Light-blue)]"
                        : "hover:bg-[var(--Light-blue)]",
                    )}
                  >
                    <CheckBox checked={isSelected} />
                    <span className="text-[var(--Dark-gray)] text-[14px] leading-[22px]">
                      {option.name}
                    </span>
                  </div>
                );
              })
            ) : (
              <div className="h-10 flex items-center justify-center text-[14px] leading-[22px] text-[var(--Grey)]">
                {t("public__select_dropdown__no_options_available")}
              </div>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
