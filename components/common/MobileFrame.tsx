import Image from "next/image";
import InitialQrCode from "@/components/icons/initial-qr-code";

interface MobileFrameProps {
  qrCodeSrc?: string;
  message?: string;
}

export default function MobileFrame({
  qrCodeSrc,
  message = "Select a type of QR Code from the left column",
}: MobileFrameProps) {
  return (
    <div className="relative w-[280px] h-[560px] mx-auto">
      <div className="absolute inset-0 rounded-[40px] border-[8px] border-black bg-white">
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="71"
            height="20"
            viewBox="0 0 71 20"
            fill="none"
          >
            <rect width="70.6947" height="20" rx="10" fill="#0A0909" />
            <ellipse
              cx="59.8937"
              cy="10"
              rx="4.90936"
              ry="4.54545"
              fill="white"
              fillOpacity="0.1"
            />
          </svg>
        </div>

        <div className="absolute -right-[12px] top-[162px] w-[6px] h-[60px] bg-black rounded-r-md" />

        <div className="absolute -left-[12px] top-[100px] w-[6px] h-[25px] bg-black rounded-l-md" />
        <div className="absolute -left-[12px] top-[150px] w-[6px] h-[40px] bg-black rounded-l-md" />
        <div className="absolute -left-[12px] top-[200px] w-[6px] h-[40px] bg-black rounded-l-md" />

        <div className="flex flex-col items-center justify-center h-full px-8 py-12">
          <div className="w-40 h-40 mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
            {qrCodeSrc ? (
              <Image
                src={qrCodeSrc}
                alt="QR Code"
                width={160}
                height={160}
                className="object-contain"
              />
            ) : (
              <InitialQrCode />
            )}
          </div>
          <p
            className="text-center text-sm text-[var(--breadcrumb)] leading-[22px]"
            style={{ fontFamily: "var(--font-roboto)" }}
          >
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}
