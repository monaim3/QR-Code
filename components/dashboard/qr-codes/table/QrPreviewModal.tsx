import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Download from "@/components/icons/download";
import { QrCode as qrData } from "@/types/generatedQr";
import Image from "next/image";
import AlertTriangle from "@/components/icons/alert-triangle";
import QrCodePreview from "./QrCodePreview";

interface Props {
  open: boolean;
  onClose: () => void;
  item?: qrData | null;
}

export default function QrPreviewModal({ open, onClose, item }: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className={`!max-w-[500px] desktopDashboard:gap-10 tablet:gap-10 gap-6 p-6 tablet:p-8 desktopDashboard:p-8 w-[calc(100%-40px)] tablet:!w-full desktopDashboard:!w-full ${
          item?.disabled === true
            ? "desktopDashboard:!h-[482px] tablet:!h-[478px] !h-[454px]"
            : "desktopDashboard:!h-[470px] tablet:!h-[466px] !h-[442px]"
        }`}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader className="flex flex-col justify-center items-center gap-2">
          <DialogTitle className="text-[var(--Black)] text-[24px] font-semibold desktopDashboard:leading-[var(--Typeface-Line-height-Heading-3)] leading-[28px]">
            Scan the QR code
          </DialogTitle>
          <p className="text-[var(--Dark-gray)] text-[16px] leading-[24px] text-center">
            Scan this QR code in order to preview your content.
            <br /> You can also use the link below.
          </p>
        </DialogHeader>

        <div className="flex flex-col items-center justify-center gap-4">
          <QrCodePreview qrCodeData={item as qrData} />
          <p className="text-[#3D75F3] text-[14px] leading-[22px] text-center">
            {item?.content.url}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-1 self-stretch">
          {item?.disabled === true ? (
            <>
              <AlertTriangle className="text-[var(--error)]" />
              <p className="text-center text-[var(--error)] text-[16px] leading-[24px]">
                This QR code is paused
              </p>
            </>
          ) : (
            <Button className="h-10 w-[210px] flex items-center justify-center gap-2 py-2 px-4 rounded-[var(--Corner-Radius-10)] bg-[var(--Blue)] text-white text-[14px] leading-[22px] hover:bg-[var(--Blue-hover)] transition-all duration-300 ease-linear">
              <Download className="text-white" />
              Download
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
