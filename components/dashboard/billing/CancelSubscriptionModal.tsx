"use client";

import { useT } from "@/utils/t";
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

export default function CancelSubscriptionModal({ open, onClose }: Props) {
  const t = useT();
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="!max-w-[500px] w-[calc(100%-40px)] tablet:!w-full desktopDashboard:!w-full gap-6 desktopDashboard:p-8 p-6"
        onOpenAutoFocus={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader className="flex flex-col justify-start items-center gap-2">
          <DialogTitle className="text-[var(--Black)] text-[24px] font-semibold desktopDashboard:leading-[var(--Typeface-Line-height-Heading-3)] leading-[28px] w-full text-left">
            {t("public__dashboard__billing__cancel_subscription_title")}
          </DialogTitle>
          <p className="text-[var(--Dark-gray)] text-[16px] leading-[24px] w-full text-left">
            {t("public__dashboard__billing__cancel_subscription_description")}
          </p>
        </DialogHeader>

        <div className="flex items-center justify-center gap-4 self-stretch">
          <Button
            onClick={onClose}
            variant="outline"
            className="h-10 flex items-center justify-center gap-2 py-2 px-4 flex-1 rounded-[var(--Corner-Radius-10)] border-[var(--Blue)] text-[var(--Blue)] text-[14px] leading-[22px] bg-white hover:bg-[var(--Blue)] hover:text-white transition-all duration-300 ease-linear"
          >
            {t("auth__common__back")}
          </Button>
          <Button className="h-10 flex items-center justify-center gap-2 py-2 px-4 flex-1 rounded-[var(--Corner-Radius-10)] bg-[var(--Blue)] text-white text-[14px] leading-[22px] hover:bg-[var(--Blue-hover)] transition-all duration-300 ease-linear">
            {t("public__dashboard__delete__qr_code__modal_confirm")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
