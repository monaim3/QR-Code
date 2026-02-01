import Time from "@/components/icons/time";
import { useAppSelector } from "@/store/hooks";
import { Time as TimeType, TimeSlot, TimeFormat } from "@/types/business";
import PreviewAccordion from "../PreviewAccordion";

const DAYS_ORDER = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

function formatTime(time: TimeType, timeFormat: TimeFormat): string {
  if (timeFormat === "24-hour") {
    return `${time.hour}:${time.minute}`;
  }
  return `${time.hour}:${time.minute} ${time.amPm ?? ""}`.trim();
}

function formatSlot(slot: TimeSlot, timeFormat: TimeFormat): string {
  return `${formatTime(slot.open, timeFormat)} - ${formatTime(slot.close, timeFormat)}`;
}

function getTimeSlots(
  slots: [TimeSlot, TimeSlot?],
  timeFormat: TimeFormat,
): string[] {
  const parts = [formatSlot(slots[0], timeFormat)];
  if (slots[1]) parts.push(formatSlot(slots[1], timeFormat));
  return parts;
}

export default function OpenHoursPreview() {
  const { timeFormat, useWeekdaysTemplate, weeklyOpeningHours, openingHours } =
    useAppSelector((state) => state.business);

  if (timeFormat === "24/7") {
    return (
      <PreviewAccordion
        title="Open hours"
        icon={<Time className="text-[var(--Grey)]" />}
      >
        <div className="p-2">
          <p className="text-[var(--Dark-gray)] text-[10px] leading-[20px]">
            Open 24/7
          </p>
        </div>
      </PreviewAccordion>
    );
  }

  const lines: { label: string; timeSlots: string[] }[] = [];

  if (useWeekdaysTemplate) {
    const weekdaysTimeSlots = getTimeSlots(weeklyOpeningHours, timeFormat);
    for (const day of [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ] as const) {
      lines.push({ label: day, timeSlots: weekdaysTimeSlots });
    }
    for (const day of ["Saturday", "Sunday"] as const) {
      const entry = openingHours.find((h) => h.day === day);
      if (entry) {
        lines.push({
          label: day,
          timeSlots: getTimeSlots(entry.times, timeFormat),
        });
      }
    }
  } else {
    for (const day of DAYS_ORDER) {
      const entry = openingHours.find((h) => h.day === day);
      if (entry) {
        lines.push({
          label: day,
          timeSlots: getTimeSlots(entry.times, timeFormat),
        });
      }
    }
  }

  if (lines.length === 0) {
    return (
      <PreviewAccordion
        title="Open hours"
        icon={<Time className="text-[var(--Grey)]" />}
      >
        <div className="p-2">
          <p className="text-[var(--Grey)] text-[14px] leading-[22px]">
            No hours set
          </p>
        </div>
      </PreviewAccordion>
    );
  }

  return (
    <PreviewAccordion
      title="Open hours"
      icon={<Time className="text-[var(--Grey)]" />}
    >
      <div className="p-2 space-y-4">
        {lines.map(({ label, timeSlots }, index) => (
          <div key={label}>
            <div className="flex justify-between gap-2 items-start">
              <p className="text-[var(--Black)] text-[10px] leading-[20px] flex-shrink-0">
                {label}:
              </p>
              <div className="flex flex-col gap-0.5 min-w-0">
                {timeSlots.map((slot, i) => (
                  <p
                    key={i}
                    className="text-[var(--Dark-gray)] text-[10px] leading-[20px]"
                  >
                    {slot}
                  </p>
                ))}
              </div>
            </div>
            {index !== lines.length - 1 && (
              <div className="w-full h-[1px] bg-[var(--boarder-grey-50)] mt-4" />
            )}
          </div>
        ))}
      </div>
    </PreviewAccordion>
  );
}
