import * as React from "react";
import {
  format,
  subDays,
  startOfToday,
  endOfToday,
  subMonths,
  addMonths,
  setMonth,
  setYear,
  getMonth,
  getYear,
} from "date-fns";
import { DateRange } from "react-day-picker";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

const currentYear = new Date().getFullYear();
const YEARS = Array.from(
  { length: 6 },
  (_, i) => currentYear - 5 + i
).reverse();
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CalendarDate from "@/components/icons/calendar-date";
import ArrowLeft from "@/components/icons/arrow-left";
import ArrowRight from "@/components/icons/arrow-right";
import {
  Select,
  SelectValue,
  SelectContent,
  SelectTrigger,
  SelectItem,
} from "@/components/ui/select";

export function DateRangePicker({}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: startOfToday(),
    to: endOfToday(),
  });

  const [currentMonth, setCurrentMonth] = React.useState<Date>(
    date?.from || new Date()
  );

  // Update currentMonth when date changes
  React.useEffect(() => {
    if (date?.from) {
      setCurrentMonth(date.from);
    }
  }, [date?.from]);

  // Navigation handlers
  const handlePreviousMonth = () => {
    setCurrentMonth((prev) => subMonths(prev, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => addMonths(prev, 1));
  };

  // Month and year change handlers
  const handleMonthChange = (monthIndex: string) => {
    const month = parseInt(monthIndex, 10);
    setCurrentMonth((prev) => setMonth(prev, month));
  };

  const handleYearChange = (year: string) => {
    const yearNum = parseInt(year, 10);
    setCurrentMonth((prev) => setYear(prev, yearNum));
  };

  // Get current month and year values for the selects
  const currentMonthIndex = getMonth(currentMonth);
  const currentYearValue = getYear(currentMonth);

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
        className="w-auto p-6 flex gap-6 bg-white rounded-[var(--Corner-Radius-8)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)]"
        align="start"
      >
        {/* Sidebar Presets */}
        <div className="flex flex-col justify-center items-start gap-4 w-[221px]">
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
        <div className="flex flex-col items-start gap-2 w-auto">
          {/* Header */}
          <div className="flex items-center gap-6 self-stretch">
            <div className="flex justify-between items-center flex-1">
              <button onClick={handlePreviousMonth}>
                <ArrowLeft className="text-[var(--Grey)]" />
              </button>

              <Select
                value={String(currentMonthIndex)}
                onValueChange={handleMonthChange}
              >
                <SelectTrigger className="bg-white border-none shadow-none text-[var(--Black)] text-[14px] leading-[22px] font-semibold">
                  <SelectValue placeholder="Select a month" />
                </SelectTrigger>
                <SelectContent className="bg-white mt-[38px]">
                  {MONTHS.map((month, index) => (
                    <SelectItem
                      key={month}
                      value={String(index)}
                      className="text-[var(--Black)] text-[14px] leading-[22px]"
                    >
                      {month}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-between items-center flex-1">
              <Select
                value={String(currentYearValue)}
                onValueChange={handleYearChange}
              >
                <SelectTrigger className="bg-white border-none shadow-none text-[var(--Black)] text-[14px] leading-[22px] font-semibold">
                  <SelectValue placeholder="Select a year" />
                </SelectTrigger>
                <SelectContent className="bg-white mt-[38px]">
                  {YEARS.map((year) => (
                    <SelectItem
                      key={year}
                      value={String(year)}
                      className="text-[var(--Black)] text-[14px] leading-[22px]"
                    >
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <button onClick={handleNextMonth}>
                <ArrowRight className="text-[var(--Grey)]" />
              </button>
            </div>
          </div>

          {/* Calendar */}
          <Calendar
            initialFocus
            mode="range"
            month={currentMonth}
            onMonthChange={setCurrentMonth}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            className="w-full p-0"
            classNames={{
              button_previous: "hidden",
              button_next: "hidden",
            }}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
