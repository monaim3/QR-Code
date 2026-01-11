import InitialQrCode from "@/components/icons/initial-qr-code";
export default function InitialQR() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full px-8 py-12">
        <div className="w-40 h-40 mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
          <InitialQrCode />
        </div>
        <p className="text-center text-sm text-[var(--breadcrumb)] leading-[22px] font-roboto">
          Select a type of QR Code from the left column
        </p>
      </div>
    </>
  );
}
