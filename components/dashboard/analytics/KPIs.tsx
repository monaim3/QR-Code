import QrCode from "@/components/icons/qrcode";
import Scan from "@/components/icons/scan";
import KPICard from "./KPICard";
import ScanEye from "@/components/icons/scan-eye";
import { useT } from "@/utils/t";

export default function KPIs() {
  const t = useT();

  return (
    <div className="flex flex-col desktopDashboard:flex-row items-start desktopDashboard:gap-6 gap-2 self-stretch">
      <KPICard
        icon={QrCode}
        title={t("public__qr__statistics__cards__qr__types")}
        value="35"
      />
      <KPICard
        icon={Scan}
        title={t("public__qr__statistics__cards__total__scans")}
        value="82"
        highlight={t("public__dashboard__analytics__scans_total_tooltip")}
      />
      <KPICard
        icon={ScanEye}
        title={t("public__dashboard__analytics__scans_unique_label")}
        value="54"
        highlight={t("public__dashboard__analytics__scans_unique_tooltip")}
      />
    </div>
  );
}
