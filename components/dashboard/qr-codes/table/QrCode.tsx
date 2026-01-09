import Image from "next/image";
import QrCodeLoader from "./QrCodeLoader";

interface Props {
  isLoading?: boolean;
  thumbnail: string;
}

export default function QrCode({ isLoading = false, thumbnail }: Props) {
  return (
    <div className="w-[88px] h-[88px] p-2 border hover:border-2 border-[var(--Boarder-Grey)] rounded-[var(--Corner-Radius-8)] bg-white shadow-[0_2px_8px_0_rgba(0,0,0,0.08)] cursor-pointer flex flex-col items-center justify-center">
      {isLoading ? (
        <QrCodeLoader />
      ) : (
        <Image
          src={thumbnail}
          alt="Qr Code"
          width={80}
          height={80}
          className="w-full"
        />
      )}
    </div>
  );
}
