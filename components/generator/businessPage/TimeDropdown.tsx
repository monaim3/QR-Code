import { useEffect, useRef, useState } from "react";
import ChevronDownSmall from "@/components/icons/chevron-down-small";
import ChevronUpSmall from "@/components/icons/chevron-up-small";
import { Time } from "@/types/business";

interface Props {
  format: string;
  activeTime: Time;
  onChange: (time: Time) => void;
}

/** Convert 12h (hour 01-12 + amPm) to 24h hour (00-23) for display */
function to24hHour(hour: string, amPm: string | null): string {
  if (!amPm) return hour;
  const h = parseInt(hour, 10);
  if (amPm === "AM") return h === 12 ? "00" : hour.padStart(2, "0");
  return h === 12 ? "12" : (h + 12).toString().padStart(2, "0");
}

function formatTimeDisplay(time: Time, format: string): string {
  if (format === "24-hour") {
    const hour24 = to24hHour(time.hour, time.amPm);
    return `${hour24}:${time.minute}`;
  }
  return `${time.hour}:${time.minute} ${time.amPm ?? ""}`.trim();
}

export default function TimeDropdown({ format, activeTime, onChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHour, setActiveHour] = useState(activeTime.hour);
  const [activeMinutes, setActiveMinutes] = useState(activeTime.minute);
  const [amPm, setAmPm] = useState(activeTime.amPm);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const hours =
    format == "AM/PM"
      ? Array.from({ length: 12 }, (_, i) =>
          (i + 1).toString().padStart(2, "0"),
        )
      : Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, "0"));

  const minutes = Array.from({ length: 60 }, (_, i) =>
    i.toString().padStart(2, "0"),
  );

  const openDropdown = () => {
    if (format === "24-hour") {
      setActiveHour(to24hHour(activeTime.hour, activeTime.amPm));
      setActiveMinutes(activeTime.minute);
      setAmPm(null);
    } else {
      setActiveHour(activeTime.hour);
      setActiveMinutes(activeTime.minute);
      setAmPm(activeTime.amPm ?? "AM");
    }
    setIsOpen(true);
  };

  const closeDropdown = () => setIsOpen(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSave = () => {
    const time: Time = {
      hour: activeHour,
      minute: activeMinutes,
      amPm: format === "AM/PM" ? amPm : null,
    };
    closeDropdown();
    onChange(time);
  };

  return (
    <div className="relative w-[160px]" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => (isOpen ? closeDropdown() : openDropdown())}
        className="flex items-center gap-2 justify-between w-full self-stretch h-10 py-2 px-4 rounded-[var(--Corner-Radius-8)] border border-[var(--Boarder-Grey)] bg-white"
      >
        <span className="text-[var(--Dark-gray)] text-[14px] leading-[22px] font-medium flex-1 text-left">
          {formatTimeDisplay(activeTime, format)}
        </span>
        {isOpen ? (
          <ChevronUpSmall className="text-[var(--Grey)]" />
        ) : (
          <ChevronDownSmall className="text-[var(--Grey)]" />
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-10 flex flex-col items-start w-full mt-[6px] bg-white rounded-[var(--Corner-Radius-8)] shadow-[0_4px_14px_0_rgba(54,66,140,0.16)] animate-in fade-in zoom-in duration-150">
          <div className="pt-2 px-1 flex h-[229px] w-full relative">
            {/* Hours */}
            <div className="flex flex-col h-[220px] px-1 items-center gap-1 flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {hours.map((hour) => (
                <button
                  key={hour}
                  onClick={() => setActiveHour(hour)}
                  className={`h-8 w-full py-1 px-3 rounded-full hover:bg-[var(--light-grey-70)] transition-colors duration-300 text-[14px] leading-[22px] ${activeHour == hour ? "bg-[var(--purple-8)] text-[var(--Blue)]" : "text-[var(--Black)]"}`}
                >
                  {hour}
                </button>
              ))}
            </div>

            {/* Minutes */}
            <div className="flex flex-col h-[220px] px-1 items-center gap-1 flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {minutes.map((minute) => (
                <button
                  key={minute}
                  onClick={() => setActiveMinutes(minute)}
                  className={`h-8 w-full py-1 px-3 rounded-full hover:bg-[var(--light-grey-70)] transition-colors duration-300 text-[14px] leading-[22px] ${activeMinutes == minute ? "bg-[var(--purple-8)] text-[var(--Blue)]" : "text-[var(--Black)]"}`}
                >
                  {minute}
                </button>
              ))}
            </div>

            {format === "AM/PM" && (
              <div className="flex flex-col h-[220px] px-1 items-center gap-1 flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <button
                  onClick={() => setAmPm("AM")}
                  className={`h-8 w-full py-1 px-3 rounded-full hover:bg-[var(--light-grey-70)] transition-colors duration-300 text-[14px] leading-[22px] ${amPm == "AM" ? "bg-[var(--purple-8)] text-[var(--Blue)]" : "text-[var(--Black)]"}`}
                >
                  AM
                </button>
                <button
                  onClick={() => setAmPm("PM")}
                  className={`h-8 w-full py-1 px-3 rounded-full hover:bg-[var(--light-grey-70)] transition-colors duration-300 text-[14px] leading-[22px] ${amPm == "PM" ? "bg-[var(--purple-8)] text-[var(--Blue)]" : "text-[var(--Black)]"}`}
                >
                  PM
                </button>
              </div>
            )}

            {/* Lines */}
            {format === "AM/PM" ? (
              <>
                <div className="w-[0.5px] h-[220px] bg-[var(--boarder-grey-50)] absolute left-[53px] top-[8px]" />
                <div className="w-[0.5px] h-[220px] bg-[var(--boarder-grey-50)] absolute left-[102px] top-[8px]" />
              </>
            ) : (
              <div className="w-[0.5px] h-[220px] bg-[var(--boarder-grey-50)] absolute left-[80px] top-[8px]" />
            )}

            <div className="w-[144px] h-[0.5px] bg-[var(--boarder-grey-50)] absolute left-[50%] translate-x-[-50%] top-[229px]" />
          </div>

          <div className="p-2 w-full">
            <button
              onClick={handleSave}
              className="flex h-8 py-1 px-3 justify-center items-center gap-2 self-stretch rounded-full bg-[var(--Blue)] hover:bg-[var(--Blue-hover)] text-white text-[14px] leading-[22px] w-full transition-colors duration-300"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
