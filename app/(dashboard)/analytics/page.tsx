import DonutCharts from "@/components/dashboard/analytics/DonutCharts";
import AnalyticsFilter from "@/components/dashboard/analytics/Filter";
import KPIs from "@/components/dashboard/analytics/KPIs";
import ScanActivity from "@/components/dashboard/analytics/ScanActivity";

export default function Analytics() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between gap-8 self-stretch font-roboto">
        <h2 className="font-bold text-[var(--Black)] text-[24px] leading-[var(--Typeface-Line-height-Heading-3)]">
          Analytics
        </h2>
      </div>

      <div className="flex flex-col items-start gap-6 self-stretch w-full">
        {/* Filter */}
        <AnalyticsFilter />

        {/* KPIs */}
        <KPIs />

        {/* Scan Activity */}
        <ScanActivity />

        {/* Donut Charts */}
        <DonutCharts />
      </div>
    </>
  );
}
