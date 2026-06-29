import Copy from "@/components/icons/copy";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { QrCode as qrData } from "@/types/generatedQr";
import { useEffect, useState } from "react";
import { useT } from "@/utils/t";

interface Props {
  open: boolean;
  onClose: () => void;
  item?: qrData | null;
}

export default function ShareQRModal({ open, onClose, item }: Props) {
  const t = useT();
  const [message, setMessage] = useState<string>("");

  const handleCopy = async () => {
    if (!item) return;
    await navigator.clipboard.writeText(item.content.url);
    setMessage(t("generator__share_qr_dialog__success_copy_button"));
  };

  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      setMessage("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [message]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="!max-w-[500px] desktopDashboard:!h-[216px] tablet:!h-[216px] !h-[212px] w-[calc(100%-40px)] tablet:!w-full desktopDashboard:!w-full desktopDashboard:gap-6 tablet:gap-6 gap-4 p-6 tablet:p-8 desktopDashboard:p-8"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader className="flex flex-col gap-2">
          <DialogTitle className="text-[var(--Black)] text-left text-[20px] font-bold desktopDashboard:leading-[var(--Typeface-Line-height-Heading-3)] leading-[28px]">
            {t("public__dashboard__share__qr_code__modal_title")}
          </DialogTitle>
          <p className="text-[var(--Dark-gray)] text-left text-[16px] leading-[24px]">
            {t("public__dashboard__share__qr_code__modal_description")}
          </p>
        </DialogHeader>

        <div className="flex flex-row items-center gap-2 relative">
          <Input
            readOnly
            value={item?.content?.url || ""}
            className="py-2 px-4 h-10 rounded-[var(--Corner-Radius-8)] border border-[var(--Boarder-Grey)] focus:ring-0 focus:outline-0 focus-visible:outline-none focus-visible:ring-0 focus:outline-none text-[var(--Black)] !text-[14px] !leading-[22px]"
          />

          <Button
            onClick={handleCopy}
            className="h-10 py-2 px-4 flex items-center justify-center gap-2 rounded-[var(--Corner-Radius-10)] bg-[var(--Blue)] text-white text-[14px] leading-[22px] hover:bg-[var(--Blue-hover)] transition-all duration-300 ease-linear"
          >
            <Copy />
            {t("public__dashboard__share__qr_code__modal_copy_button")}
          </Button>

          {message && (
            <p className="text-[var(--Green)] text-[14px] leading-[22px] absolute -bottom-6 left-2">
              {message}
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
