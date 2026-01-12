interface Props {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
  isHeatmap?: boolean;
}

export interface TooltipPayload {
  name: string;
  value: number;
  fill: string;
  payload: {
    scans?: number;
  };
}

export default function CustomTooltip({
  active,
  payload,
  label,
  isHeatmap,
}: Props) {
  if (active && payload && payload.length) {
    const data = payload[0] as TooltipPayload;
    const scanCount = data.payload.scans || 0;

    return (
      <div
        className="flex flex-col items-center p-4 gap-1 rounded-[var(--Corner-Radius-8)] bg-white shadow-[0_1px_8px_0_rgba(63,72,103,0.16)] font-roboto relative"
        style={{ transform: `translate(25px, -20px)` }}
      >
        <p className="text-[14px] leading-[22px] text-[var(--Dark-gray)] text-center">
          {label || data.name}
        </p>
        <p className="text-[var(--Dark-gray)] text-center text-[14px] leading-[22px] font-semibold">
          {isHeatmap
            ? `${scanCount} scans`
            : label
            ? `${payload[0].value} total scans`
            : `${scanCount} scans (${data.value}%)`}
        </p>

        <div className="w-3 h-3 rotate-45 absolute right-[51.515px] bottom-[-5.971px] bg-white left-1/2 -translate-x-1/2"></div>
      </div>
    );
  }
  return null;
}
