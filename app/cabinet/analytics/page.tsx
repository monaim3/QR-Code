"use client";
import DonutCharts from "@/components/dashboard/analytics/DonutCharts";
import AnalyticsFilter from "@/components/dashboard/analytics/Filter";
import KPIs from "@/components/dashboard/analytics/KPIs";
import ScanActivity from "@/components/dashboard/analytics/ScanActivity";
import ScanHeatmap from "@/components/dashboard/analytics/ScanHeatmap";
import { useT } from "@/utils/t";

export default function Analytics() {
  const t = useT();

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between gap-8 self-stretch">
        <h2 className="font-bold text-[var(--Black)] text-[24px] leading-[var(--Typeface-Line-height-Heading-3)]">
          {t("public__dashboard__analytics_title")}
        </h2>
      </div>

      {/* Notification Banner */}
      <div className="flex flex-col items-start desktopDashboard:gap-0 gap-2 self-stretch desktopDashboard:my-[20px] my-3"></div>

      <div className="flex flex-col items-start desktopDashboard:gap-6 gap-4 self-stretch w-full">
        {/* Filter */}
        <AnalyticsFilter />

        {/* KPIs */}
        <KPIs />

        {/* Scan Activity */}
        <ScanActivity />

        {/* Donut Charts */}
        <DonutCharts />

        {/* Scans Heatmap */}
        <ScanHeatmap />
      </div>
    </>
  );
}
