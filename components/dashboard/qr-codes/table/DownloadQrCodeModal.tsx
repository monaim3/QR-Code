import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import CustomDropDown from "./CustomDropDown";
import { useEffect, useState } from "react";
import Download from "@/components/icons/download";
import Image from "next/image";
import ShareAndroid from "@/components/icons/share-android";
import Copy from "@/components/icons/copy";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function DownloadQrCodeModal({ open, onClose }: Props) {
  const [selectedFileFormat, setSelectedFileFormat] = useState<string>("SVG");
  const [message, setMessage] = useState<string>("");

  const handleSelectFileFormat = (format: string) => {
    setSelectedFileFormat(format);
  };

  const url = "https://myqrcode.com/qr-download/9efef5sadjyuf64";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setMessage("The link has been copied!");
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
        className={`!max-w-[500px] w-[calc(100%-40px)] tablet:!w-full desktopDashboard:!w-full p-0 gap-0 ${message ? "desktopDashboard:!h-[606px] tablet:!h-[602px] !h-[346px]" : "desktopDashboard:!h-[576px] tablet:!h-[572px] !h-[316px]"}`}
        onOpenAutoFocus={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <div className="w-full h-[240px] relative hidden tablet:block desktopDashboard:block">
          <Image
            src="/images/modal-illustration.svg"
            alt="Download qr code"
            fill
            sizes="100vw"
            className="hidden tablet:block desktopDashboard:block object-cover rounded-t-[var(--Corner-Radius-10)]"
          />
        </div>

        <div className="flex flex-col items-center gap-6 tablet:p-8 desktopDashboard:p-8 p-6 self-stretch">
          <DialogHeader className="flex flex-col justify-center items-center gap-2">
            <DialogTitle className="text-[var(--Black)] text-[24px] font-semibold desktopDashboard:leading-[var(--Typeface-Line-height-Heading-3)] leading-[28px]">
              Download your QR Code
            </DialogTitle>
            <p className="text-[var(--Dark-gray)] text-[16px] leading-[24px]">
              Select the type of file to download
            </p>
          </DialogHeader>

          <div className="space-y-4 self-stretch">
            {/* Type of file */}
            <div className="flex flex-col items-start gap-2">
              <Label className="text-[var(--Black)] font-rubik font-medium text-[14px] leading-[16px]">
                Type of file
              </Label>
              <CustomDropDown
                options={[
                  "SVG",
                  "PNG",
                  "JPG",
                  "SVG Tiny (Illustrator)",
                  "PDF",
                  "EPS",
                ]}
                selectedOption={selectedFileFormat}
                onSelect={handleSelectFileFormat}
              />
            </div>

            <div className="flex h-10 items-start gap-4 self-stretch">
              <Button className="h-10 flex items-center justify-center gap-2 py-2 px-4 flex-1 rounded-[var(--Corner-Radius-10)] bg-[var(--Blue)] text-white text-[14px] leading-[22px] hover:bg-[var(--Blue-hover)] transition-all duration-300 ease-linear self-stretch">
                <Download className="text-white" />
                Download
              </Button>

              <button className="flex w-10 p-2 justify-center items-center gap-2 self-stretch rounded-[var(--Corner-Radius-10)] border border-[var(--Blue)]">
                <ShareAndroid className="text-[var(--Blue)]" />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2 self-stretch">
            <div className="flex items-center justify-between gap-2 py-2 px-4 flex-1 self-stretch rounded-[var(--Corner-Radius-8)] border border-[var(--Boarder-Grey)]">
              <p className="text-[var(--Black)] text-[14px] leading-[22px]">
                {url}
              </p>

              <button onClick={handleCopy}>
                <Copy />
              </button>
            </div>

            {message && (
              <p className="text-[var(--Green)] text-[14px] leading-[22px]">
                {message}
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
