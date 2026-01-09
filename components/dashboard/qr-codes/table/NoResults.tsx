import QrCode5 from "@/components/icons/qr-code-5";
import CreateQrCodeBtn from "../CreateQrCodeBtn";
import Error1 from "@/components/icons/error-1";

interface Props {
  filter?: "string";
}

export default function NoResults({ filter }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 self-stretch pt-[120px]">
      {filter ? (
        <Error1 />
      ) : (
        <div className="flex p-2 items-center rounded-[var(--Corner-Radius-8)] bg-white">
          <QrCode5 />
        </div>
      )}
      <div className="flex flex-col gap-2 items-center">
        <h4 className="text-[var(--Black)] font-roboto text-[18px] leading-[26px] font-bold">
          {filter ? "No matches found" : "Create your first QR code"}
        </h4>
        {filter && (
          <p className="text-[var(--Dark-gray)] text-[14px] leading-[22px] font-roboto">
            Try another search
          </p>
        )}
      </div>

      {!filter && <CreateQrCodeBtn />}
    </div>
  );
}
