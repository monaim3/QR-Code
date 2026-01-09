import CheckboxBar from "@/components/dashboard/qr-codes/checkbox-bar/CheckboxBar";
import CreateQrCodeBtn from "@/components/dashboard/qr-codes/CreateQrCodeBtn";
import Filters from "@/components/dashboard/qr-codes/filters/Filters";
import Pagination from "@/components/dashboard/qr-codes/table/Pagination";
import QrCodesTable from "@/components/dashboard/qr-codes/table/QrCodesTable";

export default function QrCodes() {
  return (
    <>
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
        <QrCodesTable />

        {/* Pagination */}
        <Pagination />
      </div>

      <CheckboxBar />
    </>
  );
}
