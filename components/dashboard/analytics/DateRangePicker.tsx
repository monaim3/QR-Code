import * as React from "react";
import { format, subDays, startOfToday, endOfToday, subMonths } from "date-fns";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CalendarDate from "@/components/icons/calendar-date";

export function DateRangePicker({}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2025, 9, 26), // Matching your screenshot (Oct 26)
    to: new Date(2025, 9, 26),
  });

  const presets = [
    {
      label: "Today",
      getValue: () => ({ from: startOfToday(), to: endOfToday() }),
    },
    {
      label: "Yesterday",
      getValue: () => ({
        from: subDays(startOfToday(), 1),
        to: subDays(endOfToday(), 1),
      }),
    },
    {
      label: "Last 7 days",
      getValue: () => ({
        from: subDays(startOfToday(), 7),
        to: startOfToday(),
      }),
    },
    {
      label: "Last 30 days",
      getValue: () => ({
        from: subDays(startOfToday(), 30),
        to: startOfToday(),
      }),
    },
    {
      label: "Last 90 days",
      getValue: () => ({
        from: subDays(startOfToday(), 90),
        to: startOfToday(),
      }),
    },
    {
      label: "Last 12 months",
      getValue: () => ({
        from: subMonths(startOfToday(), 12),
        to: startOfToday(),
      }),
    },
    {
      label: "All time",
      getValue: () => ({ from: new Date(2020, 0, 1), to: startOfToday() }),
    },
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className="flex justify-start items-center py-2 px-4 rounded-[var(--Corner-Radius-10)] gap-2 w-[237px] h-[40px] border border-[var(--Boarder-Grey)] bg-white text-[var(--Grey)] text-[14px] leading-[22px]"
        >
          {date?.from ? (
            date.to ? (
              <>
                {format(date.from, "LLL dd, y")} -{" "}
                {format(date.to, "LLL dd, y")}
              </>
            ) : (
              format(date.from, "LLL dd, y")
            )
          ) : (
            <span>Pick a date</span>
          )}

          <CalendarDate className="text-[var(--Grey)]" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto h-auto p-6 flex gap-6 bg-white rounded-[var(--Corner-Radius-8)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)]"
        align="start"
      >
        {/* Sidebar Presets */}
        <div className="flex flex-col justify-center items-start gap-4 w-[221px] h-[267px]">
          {presets.map((preset) => (
            <Button
              key={preset.label}
              variant="ghost"
              className="text-[var(--Grey)] text-[14px] leading-[22px] p-0"
              onClick={() => setDate(preset.getValue())}
            >
              {preset.label}
            </Button>
          ))}
        </div>

        {/* Dual Calendar */}
        <div className="flex flex-col items-start gap-2 w-[466px]">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            className="w-full"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
