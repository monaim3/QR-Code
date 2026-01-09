import Copy from "@/components/icons/copy";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ShareQRModal({ open, onClose }: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="max-w-[500px] gap-6"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader className="flex flex-col gap-2">
          <DialogTitle className="text-[var(--Black)] font-rubik text-[24px] font-semibold leading-[var(--Typeface-Line-height-Heading-3)]">
            Share QR code
          </DialogTitle>
          <p className="text-[var(--Dark-gray)] font-roboto text-[16px] leading-[24px]">
            Share the link below with others (e.g. a printing agency) to
            download and print the QR code
          </p>
        </DialogHeader>

        <div className="flex flex-row items-center gap-2">
          <Input
            readOnly
            value="https://myqrcode.com/qr-download/9efef527"
            className="py-2 px-4 rounded-[var(--Corner-Radius-8)] border border-[var(--Boarder-Grey)] focus:ring-0 focus:outline-0 focus-visible:outline-none focus-visible:ring-0 focus:outline-none text-[var(--Black)] font-roboto text-[14px] leading-[22px]"
          />

          <Button className="h-10 py-2 px-4 flex items-center justify-center gap-2 rounded-[var(--Corner-Radius-10)] bg-[var(--Blue)] text-white text-[14px] leading-[22px]">
            <Copy />
            Copy
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
