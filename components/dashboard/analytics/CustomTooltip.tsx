interface Props {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}

export default function CustomTooltip({ active, payload, label }: Props) {
  if (active && payload && payload.length) {
    return (
      <div
        className="flex flex-col items-center p-4 gap-1 rounded-[var(--Corner-Radius-8)] bg-white shadow-[0_1px_8px_0_rgba(63,72,103,0.16)] font-roboto relative"
        style={{ transform: `translate(25px, -20px)` }}
      >
        <p className="text-[14px] leading-[22px] text-[var(--Dark-gray)] text-center">
          {label}
        </p>
        <p className="text-[var(--Dark-gray)] text-center text-[14px] leading-[22px] font-semibold">
          {payload[0].value} total scans
        </p>

        <div className="w-3 h-3 rotate-45 absolute right-[51.515px] bottom-[-5.971px] bg-white"></div>
      </div>
    );
  }
  return null;
}
