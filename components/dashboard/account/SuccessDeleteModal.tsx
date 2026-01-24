import TrashAlt from "@/components/icons/trash-alt";
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

export default function SuccessDeleteModal({ open, onClose }: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="!max-w-[500px] w-[calc(100%-40px)] tablet:!w-full desktopDashboard:!w-full flex flex-col gap-6 desktopDashboard:p-8 p-6 font-roboto"
        onOpenAutoFocus={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader className="flex flex-col justify-start items-center gap-2 text-left">
          <DialogTitle className="text-[var(--Black)] text-left text-[24px] font-semibold desktopDashboard:leading-[var(--Typeface-Line-height-Heading-3)] leading-[28px]">
            Account Deleted
          </DialogTitle>

          <p className="text-[var(--Dark-gray)] text-[16px] leading-[24px] text-center">
            Your account has been successfully deleted.
          </p>
        </DialogHeader>

        <div className="flex justify-center items-start">
          <button className="flex justify-center items-center px-4 py-2 rounded-[var(--Corner-Radius-10)] text-white bg-[var(--Blue)] text-[14px] leading-[22px] w-[120px]">
            OK
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
