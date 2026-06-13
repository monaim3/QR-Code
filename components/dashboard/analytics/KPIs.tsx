"use client";

import QrCode from "@/components/icons/qrcode";
import Scan from "@/components/icons/scan";
import KPICard from "./KPICard";
import ScanEye from "@/components/icons/scan-eye";
import { useT } from "@/utils/t";
import { useGetAnalyticsBatchQuery } from "@/store/api/analyticsApi";
import { useAnalyticsParams } from "@/utils/useAnalyticsParams";

export default function KPIs() {
  const t = useT();
  const params = useAnalyticsParams();
  const { data } = useGetAnalyticsBatchQuery(params);

  return (
    <div className="flex flex-col desktopDashboard:flex-row items-start desktopDashboard:gap-6 gap-2 self-stretch">
      <KPICard
        icon={QrCode}
        title={t("public__qr__statistics__cards__qr__types")}
        value={String(data?.scorecard.totalQrCodes ?? "—")}
      />
      <KPICard
        icon={Scan}
        title={t("public__qr__statistics__cards__total__scans")}
        value={String(data?.scorecard.totalScans ?? "—")}
        highlight={t("public__dashboard__analytics__scans_total_tooltip")}
      />
      <KPICard
        icon={ScanEye}
        title={t("public__dashboard__analytics__scans_unique_label")}
        value={String(data?.scorecard.uniqueScans ?? "—")}
        highlight={t("public__dashboard__analytics__scans_unique_tooltip")}
      />
    </div>
  );
}
