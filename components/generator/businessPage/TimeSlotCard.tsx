import CheckBox from "@/components/dashboard/qr-codes/filters/CheckBox";
import TimeDropdown from "./TimeDropdown";
import Plus from "@/components/icons/plus";
import TrashAlt from "@/components/icons/trash-alt";
import { OpeningTime, Time, TimeSlot } from "@/types/business";

const DEFAULT_SLOT: TimeSlot = {
  open: { hour: "09", minute: "00", amPm: "AM" },
  close: { hour: "17", minute: "00", amPm: "PM" },
};

export interface TimeSlotCardProps {
  day: string;
  timeFormat: string;
  isChecked: boolean;
  onToggle: () => void;
  entry: OpeningTime | null;
  defaultSlot0?: TimeSlot;
  onOpenChange: (slotIndex: 0 | 1, time: Time) => void;
  onCloseChange: (slotIndex: 0 | 1, time: Time) => void;
  onAddSecondSlot: () => void;
  onRemoveSecondSlot: () => void;
}

export default function TimeSlotCard({
  day,
  timeFormat,
  isChecked,
  onToggle,
  entry,
  defaultSlot0,
  onOpenChange,
  onCloseChange,
  onAddSecondSlot,
  onRemoveSecondSlot,
}: TimeSlotCardProps) {
  const slot0 = entry?.times[0] ?? defaultSlot0 ?? DEFAULT_SLOT;
  const slot1 = entry?.times[1];
  const hasSecondSlot = !!slot1;

  return (
    <div className="flex flex-col p-4 justify-center items-start gap-2 self-stretch rounded-[var(--Corner-Radius-10)] bg-[var(--light-grey-70)]">
      <div
        className={`flex flex-col desktop:flex-row items-center desktop:gap-8 gap-4 self-stretch ${isChecked ? "opacity-100" : "opacity-50"}`}
      >
        <div className="flex items-center gap-2 flex-1 text-[var(--Black)] text-[16px] leading-[24px]">
          <CheckBox checked={isChecked} onChange={onToggle} />
          <p>{day}</p>
        </div>

        <div className="flex items-center gap-2">
          <TimeDropdown
            format={timeFormat}
            activeTime={slot0.open}
            onChange={(time) => onOpenChange(0, time)}
          />
          <TimeDropdown
            format={timeFormat}
            activeTime={slot0.close}
            onChange={(time) => onCloseChange(0, time)}
          />
          <button
            type="button"
            disabled={hasSecondSlot}
            onClick={onAddSecondSlot}
            className="flex w-10 h-10 p-2 justify-center items-center rounded-[var(--Corner-Radius-10)] border border-[var(--Border-color)] hover:bg-[var(--light-grey-70)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
            aria-label="Add second time slot"
          >
            <Plus className="text-[var(--Dark-gray)]" />
          </button>
        </div>
      </div>

      {hasSecondSlot && slot1 ? (
        <div
          className={`flex flex-col desktop:flex-row items-center justify-end desktop:gap-8 gap-4 self-stretch ${isChecked ? "opacity-100" : "opacity-50"}`}
        >
          <div className="flex items-center gap-2">
            <TimeDropdown
              format={timeFormat}
              activeTime={slot1.open}
              onChange={(time) => onOpenChange(1, time)}
            />
            <TimeDropdown
              format={timeFormat}
              activeTime={slot1.close}
              onChange={(time) => onCloseChange(1, time)}
            />
            <button
              type="button"
              onClick={onRemoveSecondSlot}
              className="flex w-10 h-10 p-2 justify-center items-center rounded-[var(--Corner-Radius-10)] border border-[var(--Border-color)] hover:bg-[var(--light-grey-70)]"
              aria-label="Remove second time slot"
            >
              <TrashAlt className="text-[var(--Dark-gray)]" />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
