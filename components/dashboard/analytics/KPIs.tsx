import QrCode from "@/components/icons/qrcode";
import Scan from "@/components/icons/scan";
import KPICard from "./KPICard";
import ScanEye from "@/components/icons/scan-eye";

export default function KPIs() {
  return (
    <div className="flex items-start gap-6 self-stretch font-roboto">
      <KPICard icon={QrCode} title="Total number of QR codes" value="35" />
      <KPICard
        icon={Scan}
        title="Total scans"
        value="82"
        highlight="Total number of scans"
      />
      <KPICard
        icon={ScanEye}
        title="Unique scans"
        value="54"
        highlight="Total number of unique scans"
      />
    </div>
  );
}
