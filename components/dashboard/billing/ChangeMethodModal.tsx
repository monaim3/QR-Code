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

export default function ChangeMethodModal({ open, onClose }: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="!max-w-[500px] w-[calc(100%-40px)] tablet:!w-full desktopDashboard:!w-full gap-6 desktopDashboard:p-8 p-6"
        onOpenAutoFocus={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader className="flex flex-col justify-start items-center gap-2">
          <DialogTitle className="text-[var(--Black)] text-[24px] font-semibold desktopDashboard:leading-[var(--Typeface-Line-height-Heading-3)] leading-[28px] text-left w-full">
            Change payment method
          </DialogTitle>
          <p className="text-[var(--Dark-gray)] text-[16px] leading-[24px]">
            We&apos;re currently working on enabling direct modifications to
            payment information. In the meantime, our dedicated support team is
            available to assist you with any changes you need. Please don&apos;t
            hesitate to reach out, and we&apos;ll take care of it for you
            promptly. Thank you for your patience and understanding.
          </p>
        </DialogHeader>

        <div className="flex items-center justify-center gap-4 self-stretch">
          <Button
            onClick={onClose}
            variant="outline"
            className="h-10 flex items-center justify-center gap-2 py-2 px-4 flex-1 rounded-[var(--Corner-Radius-10)] border-[var(--Blue)] text-[var(--Blue)] text-[14px] leading-[22px] bg-white hover:bg-[var(--Blue)] hover:text-white transition-all duration-300 ease-linear"
          >
            Back
          </Button>
          <Button className="h-10 flex items-center justify-center gap-2 py-2 px-4 flex-1 rounded-[var(--Corner-Radius-10)] bg-[var(--Blue)] text-white text-[14px] leading-[22px] hover:bg-[var(--Blue-hover)] transition-all duration-300 ease-linear">
            Contact Support
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
