import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ReorderSectionCard from "./ReorderSectionCard";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ReorderModal({ open, onClose }: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="!max-w-[400px] w-[calc(100%-40px)] desktop:!w-full gap-6 p-6 tablet:p-8 desktop:p-8"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader className="flex flex-col gap-2">
          <DialogTitle className="text-[var(--Black)] text-left text-[20px] font-bold desktop:leading-[var(--Typeface-Line-height-Heading-3)] leading-[28px]">
            Reorder sections
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-2">
          <ReorderSectionCard title="Section 1" />
          <ReorderSectionCard title="Section 2" />
          <ReorderSectionCard title="Section 3" />
        </div>

        <div className="flex items-center justify-center gap-6 self-stretch">
          <Button
            onClick={onClose}
            variant="outline"
            className="h-10 flex items-center justify-center gap-2 py-2 px-4 flex-1 rounded-[var(--Corner-Radius-10)] border-[var(--Blue)] text-[var(--Blue)] text-[14px] leading-[22px] bg-white hover:bg-[var(--Blue)] hover:text-white transition-all duration-300 ease-linear"
          >
            Cancel
          </Button>
          <Button className="h-10 flex items-center justify-center gap-2 py-2 px-4 flex-1 rounded-[var(--Corner-Radius-10)] bg-[var(--Blue)] text-white text-[14px] leading-[22px] hover:bg-[var(--Blue-hover)] transition-all duration-300 ease-linear">
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
