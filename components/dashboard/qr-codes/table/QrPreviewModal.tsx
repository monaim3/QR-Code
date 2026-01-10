import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Download from "@/components/icons/download";
import { QRCodeItem } from "@/types/qr-code";
import Image from "next/image";
import AlertTriangle from "@/components/icons/alert-triangle";

interface Props {
  open: boolean;
  onClose: () => void;
  item?: QRCodeItem | null;
}

export default function QrPreviewModal({ open, onClose, item }: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="max-w-[500px] gap-10"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader className="flex flex-col justify-center items-center gap-2">
          <DialogTitle className="text-[var(--Black)] font-rubik text-[24px] font-semibold leading-[var(--Typeface-Line-height-Heading-3)]">
            Scan the QR code
          </DialogTitle>
          <p className="text-[var(--Dark-gray)] font-roboto text-[16px] leading-[24px] text-center">
            Scan this QR code in order to preview your content.
            <br /> You can also use the link below.
          </p>
        </DialogHeader>

        <div className="flex flex-col items-center justify-center gap-4">
          {item?.thumbnail && (
            <Image
              src={item.thumbnail}
              alt="QR Code"
              width={144}
              height={144}
            />
          )}
          <p className="text-[#3D75F3] text-[14px] leading-[22px] text-center font-roboto">
            {item?.shortUrl}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-1 self-stretch">
          {item?.status === "Paused" ? (
            <>
              <AlertTriangle className="text-[var(--error)]" />
              <p className="text-center text-[var(--error)] text-[16px] leading-[24px] font-roboto">
                This QR code is paused
              </p>
            </>
          ) : (
            <Button className="h-10 w-[210px] flex items-center justify-center gap-2 py-2 px-4 rounded-[var(--Corner-Radius-10)] bg-[var(--Blue)] text-white text-[14px] leading-[22px]">
              <Download className="text-white" />
              Download
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
