"use client";

import DonutChartCard from "./DonutChartCard";
import type { ChartData } from "./DonutChartCard";
import { useT } from "@/utils/t";
import { useGetAnalyticsBatchQuery } from "@/store/api/analyticsApi";
import { useAnalyticsParams } from "@/utils/useAnalyticsParams";

const CHART_COLORS = [
  "#01A56D",
  "#FF9C6F",
  "#6AD39F",
  "#FD4255",
  "#FFC65F",
  "#E769F1",
  "#6DFACD",
  "#A155EC",
  "#3D75F3",
  "#FFD700",
];

export default function DonutCharts() {
  const t = useT();
  const params = useAnalyticsParams();
  const { data } = useGetAnalyticsBatchQuery(params);

  const osData: ChartData[] = (data?.os ?? []).map((item, i) => ({
    name: item.os,
    value: item.scansPercentage,
    fill: CHART_COLORS[i % CHART_COLORS.length],
    scans: item.scans,
  }));

  const qrCodeData: ChartData[] = (data?.qrCodes ?? []).map((item, i) => ({
    name: item.qrCodeName,
    value: item.scansPercentage,
    fill: CHART_COLORS[i % CHART_COLORS.length],
    scans: item.scans,
  }));

  const countryData: ChartData[] = (data?.countries ?? []).map((item, i) => ({
    name: item.country,
    value: item.scansPercentage,
    fill: CHART_COLORS[i % CHART_COLORS.length],
    scans: item.scans,
  }));

  const cityData: ChartData[] = (data?.cities ?? []).map((item, i) => ({
    name: item.city,
    value: item.scansPercentage,
    fill: CHART_COLORS[i % CHART_COLORS.length],
    scans: item.scans,
  }));

  return (
    <div className="grid gap-6 desktopDashboard:grid-cols-2 desktopMd:grid-cols-1 desktopLg:grid-cols-1 grid-cols-1 w-full">
      <DonutChartCard
        title={t("public__dashboard__analytics__os_card__title")}
        data={osData}
      />
      <DonutChartCard
        title={t("public__dashboard__analytics__qr_name_card__title")}
        data={qrCodeData}
      />
      <DonutChartCard
        title={t("public__qr__stats__chart__countries__title")}
        data={countryData}
      />
      <DonutChartCard
        title={t("public__qr__stats__chart__cities__title")}
        data={cityData}
      />
    </div>
  );
}
