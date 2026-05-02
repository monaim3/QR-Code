"use client";

import {
  cityData,
  countryData,
  operatingSystemData,
  qrCodeData,
} from "@/lib/data";
import DonutChartCard from "./DonutChartCard";
import { useT } from "@/utils/t";

export default function DonutCharts() {
  const t = useT();

  return (
    <div className="grid gap-6 desktopDashboard:grid-cols-2 desktopMd:grid-cols-1 desktopLg:grid-cols-1 grid-cols-1 w-full">
      <DonutChartCard
        title={t("public__dashboard__analytics__os_card__title")}
        data={operatingSystemData}
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
