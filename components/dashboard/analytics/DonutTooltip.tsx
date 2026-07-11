"use client";
import { useT } from "@/utils/t";

interface TooltipCoordinate {
  x: number;
  y: number;
}

interface Props {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
  isHeatmap?: boolean;
  coordinate?: TooltipCoordinate;
}

export interface TooltipPayload {
  name: string;
  value: number;
  fill: string;
  payload: {
    scans?: number;
  };
}

const OFFSET_Y = 12;

export default function DonutTooltip({
  active,
  payload,
  label,
  isHeatmap,
  coordinate,
}: Props) {
  const t = useT();
  if (active && payload && payload.length) {
    const data = payload[0] as TooltipPayload;
    const scanCount = data.payload.scans || 0;
    const scansLabel = t("public__dashboard__qr_table__qr__card__scans").toLowerCase();

    return (
      <div
        className="flex flex-col items-center w-[150px] p-4 gap-1 rounded-[var(--Corner-Radius-8)] bg-white shadow-[0_1px_8px_0_rgba(63,72,103,0.16)] relative"
        style={{
          position: "absolute",
          left: coordinate?.x,
          top: (coordinate?.y ?? 0) - OFFSET_Y,
          transform: "translate(-50%, -100%)",
          pointerEvents: "none",
        }}
      >
        <p className="text-[14px] leading-[22px] text-[var(--Dark-gray)] text-center">
          {label || data.name}
        </p>
        <p className="text-[var(--Dark-gray)] text-center text-[14px] leading-[22px] font-semibold">
          {isHeatmap
            ? `${scanCount} ${scansLabel}`
            : label
              ? t("public__dashboard__analytics__activity_card__total_scans", { count: payload[0].value })
              : `${scanCount} ${scansLabel} (${data.value}%)`}
        </p>

        <div className="w-3 h-3 rotate-45 absolute right-[51.515px] bottom-[-5.971px] bg-white left-1/2 -translate-x-1/2"></div>
      </div>
    );
  }
  return null;
}
