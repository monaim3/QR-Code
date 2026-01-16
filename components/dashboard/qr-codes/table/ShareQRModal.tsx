import Copy from "@/components/icons/copy";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { QRCodeItem } from "@/types/qr-code";

interface Props {
  open: boolean;
  onClose: () => void;
  item?: QRCodeItem | null;
}

export default function ShareQRModal({ open, onClose, item }: Props) {
  const handleCopy = async () => {
    if (!item) return;
    await navigator.clipboard.writeText(item.shortUrl);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="!max-w-[500px] !h-[216px] gap-6"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader className="flex flex-col gap-2">
          <DialogTitle className="text-[var(--Black)] font-rubik text-[24px] font-semibold leading-[var(--Typeface-Line-height-Heading-3)]">
            Share QR code
          </DialogTitle>
          <p className="text-[var(--Dark-gray)] text-[16px] leading-[24px]">
            Share the link below with others (e.g. a printing agency) to
            download and print the QR code
          </p>
        </DialogHeader>

        <div className="flex flex-row items-center gap-2">
          <Input
            readOnly
            value={item?.shortUrl || ""}
            className="py-2 px-4 rounded-[var(--Corner-Radius-8)] border border-[var(--Boarder-Grey)] focus:ring-0 focus:outline-0 focus-visible:outline-none focus-visible:ring-0 focus:outline-none text-[var(--Black)] !text-[14px] !leading-[22px]"
          />

          <Button
            onClick={handleCopy}
            className="h-10 py-2 px-4 flex items-center justify-center gap-2 rounded-[var(--Corner-Radius-10)] bg-[var(--Blue)] text-white text-[14px] leading-[22px] hover:bg-[var(--Blue-hover)] transition-all duration-300 ease-linear"
          >
            <Copy />
            Copy
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
