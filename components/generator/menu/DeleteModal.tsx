import TrashAlt from "@/components/icons/trash-alt";
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

export default function DeleteModal({ open, onClose }: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="!max-w-[400px] w-[calc(100%-40px)] desktop:!w-full gap-4 p-6 tablet:p-8 desktop:p-8"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <div className="flex items-center justify-center">
          <div className="flex p-8 items-center gap-2 rounded-full bg-[var(--light-grey-70)] w-auto">
            <TrashAlt className="w-8 h-8 text-[var(--Blue)]" />
          </div>
        </div>

        <div className="space-y-6">
          <DialogHeader className="flex flex-col items-center gap-2">
            <DialogTitle className="text-[var(--Black)] text-[20px] font-bold desktop:leading-[var(--Typeface-Line-height-Heading-3)] leading-[28px]">
              Are you sure?
            </DialogTitle>
            <p className="text-[var(--Dark-gray)] text-center text-[16px] leading-[24px]">
              The entire section and all the products will be deleted.
            </p>
          </DialogHeader>

          <div className="flex items-center justify-center desktop:gap-6 gap-4 self-stretch">
            <Button
              onClick={onClose}
              variant="outline"
              className="h-10 flex items-center justify-center gap-2 py-2 px-4 flex-1 rounded-[var(--Corner-Radius-10)] border-[var(--Blue)] text-[var(--Blue)] text-[14px] leading-[22px] bg-white hover:bg-[var(--Blue)] hover:text-white transition-all duration-300 ease-linear"
            >
              Cancel
            </Button>
            <Button className="h-10 flex items-center justify-center gap-2 py-2 px-4 flex-1 rounded-[var(--Corner-Radius-10)] bg-[var(--Blue)] text-white text-[14px] leading-[22px] hover:bg-[var(--Blue-hover)] transition-all duration-300 ease-linear">
              Delete
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
