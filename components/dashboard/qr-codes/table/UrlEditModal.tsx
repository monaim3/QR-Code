import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { QRCodeItem } from "@/types/qr-code";
import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: () => void;
  item?: QRCodeItem | null;
}

export default function UrlEditModal({ open, onClose, onSave, item }: Props) {
  const [error] = useState<string>("");

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="!max-w-[500px] !h-[258px] gap-6"
        onOpenAutoFocus={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader className="flex flex-col gap-2">
          <DialogTitle className="text-[var(--Black)] text-[20px] font-bold leading-[var(--Typeface-Line-height-Heading-3)]">
            Edit destination URL
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-start gap-2">
          <Label className="text-[var(--Black)] font-semibold text-[16px] leading-[24px]">
            Complete URL
          </Label>
          <div className="flex flex-col gap-1 w-full">
            <Input
              type="text"
              className={`h-10 py-2 px-4 rounded-[var(--Corner-Radius-8)] focus:ring-0 focus:outline-0 focus-visible:outline-none focus-visible:ring-0 focus:outline-none text-[var(--Black)] !text-[16px] !leading-[24px] ${
                error
                  ? "border-2 border-[var(--error)]"
                  : "border border-[var(--Boarder-Grey)]"
              }`}
              defaultValue={item?.destinationUrl || ""}
            />
            {error && (
              <p className="text-[var(--error)] text-[12px] leading-[20px]">
                {error}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 self-stretch">
          <Button
            onClick={onClose}
            variant="outline"
            className="h-10 flex items-center justify-center gap-2 py-2 px-4 flex-1 rounded-[var(--Corner-Radius-10)] border-[var(--Blue)] text-[var(--Blue)] text-[14px] leading-[22px] bg-white"
          >
            Cancel
          </Button>
          <Button
            onClick={() => onSave()}
            className="h-10 flex items-center justify-center gap-2 py-2 px-4 flex-1 rounded-[var(--Corner-Radius-10)] bg-[var(--Blue)] text-white text-[14px] leading-[22px] hover:bg-[var(--Blue-hover)] transition-all duration-300 ease-linear"
          >
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
