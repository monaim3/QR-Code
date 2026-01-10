import Download from "@/components/icons/download";
import ClearFilter from "../qr-codes/filters/ClearFilter";

export default function AnalyticsFilter() {
  return (
    <div className="flex flex-col items-start gap-4 self-stretch font-roboto w-full">
      <div className="flex items-center justify-between self-stretch">
        <span>Calendar</span>

        <button className="py-2 px-4 h-10 flex items-center justify-center gap-2 rounded-[var(--Corner-Radius-10)] border border-[var(--Boarder-Grey)] bg-white shadow-[0_1px_4px_0_rgba(63,72,103,0.16)]">
          <Download className="text-[var(--Dark-gray)]" />
          <span className="text-[var(--Dark-gray)] text-[14px] leading-[22px]">
            Export Data
          </span>
        </button>
      </div>

      <div className="flex items-center gap-4 justify-between w-full">
        <div>Search Filters</div>

        <ClearFilter />
      </div>
    </div>
  );
}
