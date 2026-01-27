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
  onReset: () => void;
}

export default function InputResetModal({ open, onClose, onReset }: Props) {
  const handleReset = () => {
    onClose();
    onReset();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="!max-w-[500px] w-[calc(100%-40px)] tablet:!w-full desktop:!w-full gap-6 desktop:p-8 p-6"
        onOpenAutoFocus={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader className="flex flex-col justify-center items-center gap-2">
          <DialogTitle className="text-[var(--Black)] text-[24px] font-semibold desktop:leading-[var(--Typeface-Line-height-Heading-3)] leading-[28px]">
            Switching will reset your input.
          </DialogTitle>
          <p className="text-[var(--Dark-gray)] text-[16px] leading-[24px]">
            Are you sure you want to continue?
          </p>
        </DialogHeader>

        <div className="flex items-center justify-center gap-6 self-stretch">
          <Button
            onClick={onClose}
            variant="outline"
            className="h-12 flex items-center justify-center gap-2 py-2 px-6 flex-1 rounded-[var(--Corner-Radius-10)] border-[var(--Blue)] text-[var(--Blue)] font-medium text-[18px] leading-[26px] bg-white hover:bg-[var(--Blue)] hover:text-white transition-all duration-300 ease-linear"
          >
            No
          </Button>
          <Button
            onClick={handleReset}
            className="h-12 flex items-center justify-center gap-2 py-2 px-6 flex-1 rounded-[var(--Corner-Radius-10)] bg-[var(--Blue)] text-white font-medium text-[18px] leading-[26px] hover:bg-[var(--Blue-hover)] transition-all duration-300 ease-linear"
          >
            Yes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
