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

export default function AccountDeleteModal({ open, onClose }: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="!max-w-[500px] w-[calc(100%-40px)] tablet:!w-full desktopDashboard:!w-full flex flex-col gap-6 desktopDashboard:p-8 p-6 font-roboto"
        onOpenAutoFocus={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader className="flex flex-col justify-start items-center gap-2 text-left">
          <p className="text-[var(--error)] text-[14px] leading-[22px] w-full">
            Danger zone
          </p>
          <DialogTitle className="text-[var(--Black)] text-left text-[24px] font-semibold desktopDashboard:leading-[var(--Typeface-Line-height-Heading-3)] leading-[28px] w-full">
            Deleting is permanent
          </DialogTitle>

          <p className="text-[var(--Dark-gray)] text-[16px] leading-[24px] w-full">
            If you delete your account your subscription will be immediately
            cancelled. It will not be possible to restore the deleted QR codes.
          </p>

          <p className="text-[var(--Dark-gray)] text-[16px] leading-[24px] w-full">
            If you are 100% sure, please type DELETE below to confirm.
          </p>
        </DialogHeader>

        <div className="flex items-start gap-2 self-stretch">
          <input
            type="text"
            className="flex items-center gap-2 px-4 py-2 grow shrink-0 basis-0 self-stretch rounded-[var(--Corner-Radius-8)] border border-[var(--Boarder-Grey)] bg-white text-[var(--Black)] text-[14px] leading-[22px]"
          />

          <button className="flex h-10 px-4 py-2 justify-center items-center gap-2 bg-[var(--error)] rounded-[var(--Corner-Radius-10)] text-white text-[14px] leading-[22px]">
            <TrashAlt className="text-white" />
            Delete account
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
