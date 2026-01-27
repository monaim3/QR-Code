"use client";

import {
  cityData,
  countryData,
  operatingSystemData,
  qrCodeData,
} from "@/lib/data";
import DonutChartCard from "./DonutChartCard";

export default function DonutCharts() {
  return (
    <div className="grid gap-6 desktopDashboard:grid-cols-2 desktopMd:grid-cols-1 desktopLg:grid-cols-1 grid-cols-1 w-full">
      <DonutChartCard
        title={"Scans by operating system"}
        data={operatingSystemData}
      />
      <DonutChartCard title={"Scans by QR code name"} data={qrCodeData} />
      <DonutChartCard title={"Scans by country"} data={countryData} />
      <DonutChartCard title={"Scans by city"} data={cityData} />
    </div>
  );
}
