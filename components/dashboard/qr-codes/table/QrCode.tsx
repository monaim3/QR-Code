import QrCodeIcon from "./qr-code-test";
import QrCodeLoader from "./QrCodeLoader";

interface Props {
  isLoading?: boolean;
}

export default function QrCode({ isLoading = false }: Props) {
  return (
    <div className="w-[88px] h-[88px] p-2 border hover:border-2 border-[var(--Boarder-Grey)] rounded-[var(--Corner-Radius-8)] bg-white shadow-[0_2px_8px_0_rgba(0,0,0,0.08)] cursor-pointer flex flex-col items-center justify-center">
      {isLoading ? <QrCodeLoader /> : <QrCodeIcon />}
    </div>
  );
}
