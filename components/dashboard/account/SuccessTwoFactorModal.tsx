import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SuccessTwoFactorModal({ open, onClose }: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="!max-w-[500px] w-[calc(100%-40px)] tablet:!w-full desktopDashboard:!w-full flex flex-col gap-6 desktopDashboard:px-8 desktopDashboard:py-16 p-6 font-roboto"
        onOpenAutoFocus={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader className="flex flex-col justify-start items-center gap-2 text-left">
          <p className="text-[var(--Dark-gray)] text-[14px] leading-[22px] w-full">
            Success!
          </p>
          <DialogTitle className="text-[var(--Black)] text-left text-[24px] font-semibold desktopDashboard:leading-[var(--Typeface-Line-height-Heading-3)] leading-[28px] w-full">
            Two-factor authentication disabled
          </DialogTitle>
        </DialogHeader>

        <Button className="h-10 flex items-center justify-center gap-2 py-2 px-4 flex-1 rounded-[var(--Corner-Radius-10)] bg-[var(--Blue)] text-white text-[14px] leading-[22px] hover:bg-[var(--Blue-hover)] transition-all duration-300 ease-linear w-full">
          Got it!
        </Button>
      </DialogContent>
    </Dialog>
  );
}
