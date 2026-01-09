import CheckboxBar from "@/components/dashboard/qr-codes/checkbox-bar/CheckboxBar";
import CreateQrCodeBtn from "@/components/dashboard/qr-codes/CreateQrCodeBtn";
import Filters from "@/components/dashboard/qr-codes/filters/Filters";
import Pagination from "@/components/dashboard/qr-codes/table/Pagination";
import QrCodesTable from "@/components/dashboard/qr-codes/table/QrCodesTable";
import { QRCodeItem } from "@/types/qr-code";

const qrData: QRCodeItem[] = [
  {
    id: "1",
    title: "Italian Restaurant",
    thumbnail: "/images/dev/dev-qr-1.svg",
    shortUrl: "myqrcode.com/erTWEssq",
    type: "Website URL",
    destinationUrl: "www.italian-restaurant.com",
    scans: 256,
    createdAt: "Jun 27, 2023",
    lastModified: "Feb 12, 2024",
    status: "Active",
  },
  {
    id: "2",
    title: "Product campaign",
    thumbnail: "/images/dev/dev-qr-2.svg",
    shortUrl: "myqrcode.com/opWerasd",
    type: "Video",
    scans: 329,
    createdAt: "Jun 20, 2023",
    lastModified: "Feb 10, 2024",
    status: "Paused",
  },
  {
    id: "3",
    title: "Screenshot tool",
    thumbnail: "/images/dev/dev-qr-3.svg",
    shortUrl: "myqrcode.com/imsTRqwa",
    type: "Business",
    scans: 81,
    createdAt: "Jun 20, 2023",
    lastModified: "Feb 10, 2024",
    status: "Active",
  },
  {
    id: "4",
    title: "Texas Restaurant",
    thumbnail: "/images/dev/dev-qr-3.svg",
    shortUrl: "myqrcode.com/opWerasd",
    type: "Website",
    destinationUrl: "www.texas-restaurant.com",
    scans: 27,
    createdAt: "Jun 20, 2023",
    status: "Active",
  },
];

export default function QrCodes() {
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between gap-8 self-stretch font-roboto">
        <h2 className="font-bold text-[var(--Black)] text-[24px] leading-[var(--Typeface-Line-height-Heading-3)]">
          QR Codes
        </h2>
        <CreateQrCodeBtn />
      </div>

      <div className="font-roboto w-full flex flex-col items-start gap-6 self-stretch">
        {/* Filters */}
        <Filters />

        {/* Table */}
        <QrCodesTable qrData={qrData} />

        {/* Pagination */}
        <Pagination />
      </div>

      <CheckboxBar />
    </>
  );
}
