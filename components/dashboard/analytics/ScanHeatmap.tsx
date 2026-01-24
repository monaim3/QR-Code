"use client";

import { useState } from "react";
import CustomTooltip, { TooltipPayload } from "./CustomTooltip";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const hours = Array.from({ length: 24 }, (_, i) => {
  const hour24 = (i + 1) % 24;
  const hour = hour24 === 0 ? 12 : hour24 > 12 ? hour24 - 12 : hour24;
  const amPm = hour24 >= 12 ? "pm" : "am";
  return `${hour} ${amPm}`;
});

// Mock data: { "Day-Hour": count }
const data: Record<string, number> = {
  "Tuesday-10 am": 1,
  "Thursday-11 am": 1,
  "Wednesday-3 pm": 1,
  "Saturday-5 pm": 1,
};

export default function ScanHeatmap() {
  const [hoveredCell, setHoveredCell] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-start gap-6 p-6 self-stretch rounded-[var(--Corner-Radius-10)] bg-white shadow-[0_1px_8px_0_rgba(63,72,103,0.16)]">
      <h4 className="text-[var(--Black)] text-[18px] leading-[26px] font-bold">
        Scans by time of the day
      </h4>

      <div className="h-[608px] w-full flex">
        {/* Y-Axis Labels (Hours) */}
        <div className="flex w-[36.988px] flex-col justify-start items-end gap-1">
          {hours.map((hour) => (
            <span
              key={hour}
              className="text-[var(--Grey)] text-[12px] leading-[20px]"
            >
              {hour}
            </span>
          ))}
        </div>

        <div className="flex-1 relative desktopDashboard:ml-[22.6px] desktopDashboard:mr-[27.74px] tablet:ml-[18px] tablet:mr-[20px] ml-[15.01px] mr-[15px]">
          <div className="grid grid-cols-7 gap-1">
            {days.map((day) => (
              <div key={day} className="flex flex-col gap-1">
                {hours.map((hour) => {
                  const count = data[`${day}-${hour}`] || 0;
                  const cellId = `${day}-${hour}`;
                  const isHovered = hoveredCell === cellId;

                  return (
                    <div
                      key={cellId}
                      className="relative group"
                      onMouseEnter={() => setHoveredCell(cellId)}
                      onMouseLeave={() => setHoveredCell(null)}
                    >
                      {/* The Heatmap Cell */}
                      <div
                        className={`h-[20px] w-full rounded-[var(--Corner-Radius-4)] transition-colors cursor-pointer ${
                          count > 0 ? "bg-[var(--Blue)]" : "bg-[#E7F4ED]"
                        }`}
                      />

                      {/* Your Custom Tooltip Integration */}
                      {isHovered && (
                        <div className="absolute z-50 bottom-full mb-1 pointer-events-none">
                          <CustomTooltip
                            active={true}
                            label={`${day} ${hour}`}
                            isHeatmap={true}
                            payload={[
                              {
                                value: count,
                                name: "scans",
                                payload: { scans: count },
                              } as TooltipPayload,
                            ]}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* X-Axis (Days) */}
          <div className="grid grid-cols-7 gap-1 mt-4">
            {days.map((day) => (
              <span
                key={day}
                className="text-center text-[12px] leading-[20px] text-[var(--placeholder-grey)] flex-shrink-0"
              >
                <span className="hidden desktopDashboard:inline">{day}</span>
                <span className="desktopDashboard:hidden">{day.charAt(0)}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Legend / Intensity Scale */}
        <div className="flex flex-col items-center justify-between">
          <span className="text-[12px] leading-[20px] text-center text-[var(--Placeholder-grey)]">
            1
          </span>
          <div className="w-[32.878px] h-full rounded-[var(--Corner-Radius-8)] bg-gradient-to-t from-[#E7F4ED] to-[#01A56D] mt-1 mb-4" />
          <span className="text-[12px] leading-[20px] text-center text-[var(--Placeholder-grey)]">
            0
          </span>
        </div>
      </div>
    </div>
  );
}
