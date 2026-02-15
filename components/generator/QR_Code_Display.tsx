import Image from "next/image";
import WebsiteQr from "../icons/website-qr";

interface QRCodeDisplayProps {
  qrCodeSrc?: string;
}

export default function QRCodeDisplay({ qrCodeSrc }: QRCodeDisplayProps) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-white p-8 rounded-[32px] overflow-hidden">
      <div className="w-72 h-72 flex items-center justify-center">
        {qrCodeSrc ? (
          <Image
            src={qrCodeSrc}
            alt="QR Code"
            width={200}
            height={200}
            className="object-contain"
          />
        ) : (
          <WebsiteQr />
        )}
      </div>
    </div>
  );
}
