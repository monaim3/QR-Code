"use client";

import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChartData } from "./DonutChartCard";
import Close from "@/components/icons/close";

interface Props {
  data: ChartData[];
}

export default function DonutChartPopover({ data }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="text-[var(--Blue)] text-[14px] leading-[22px] font-bold">
          Show more
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[568px] h-auto p-6 flex flex-col gap-6 bg-white rounded-[var(--Corner-Radius-10)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)] absolute -right-[80px] bottom-0"
        align="start"
      >
        <div className="flex items-center gap-6 self-stretch">
          <p className="flex-1 text-[var(--Black)] text-[16px] leading-[24px] font-semibold">
            All countries
          </p>

          <button onClick={() => setOpen(false)}>
            <Close />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-1">
          {data?.map((item, i) => (
            <div key={i} className="flex justify-between items-center gap-4">
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: item.fill }}
                />
                <p className="text-[var(--Black)] text-[14px] leading-[22px] truncate">
                  {item.name}
                </p>
              </div>

              <p className="text-[var(--Black)] text-[14px] leading-[22px] font-semibold flex-shrink-0">
                {item.value.toLocaleString()}%
              </p>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
