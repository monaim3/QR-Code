import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import CustomDropDown from "./CustomDropDown";
import { useState } from "react";
import Download from "@/components/icons/download";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CustomDownloadModal({ open, onClose }: Props) {
  const [selectedFileFormat, setSelectedFileFormat] = useState<string>("SVG");
  const [selectedSize, setSelectedSize] = useState<string>("1024x1024");

  const handleSelectFileFormat = (format: string) => {
    setSelectedFileFormat(format);
  };

  const handleSelectSize = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="!max-w-[500px] desktopDashboard:!h-[360px] tablet:!h-[356px] !h-[340px] w-[calc(100%-40px)] tablet:!w-full desktopDashboard:!w-full gap-6 desktopDashboard:p-8 p-6"
        onOpenAutoFocus={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader className="flex flex-col justify-center items-center gap-2">
          <DialogTitle className="text-[var(--Black)] text-[24px] font-semibold desktopDashboard:leading-[var(--Typeface-Line-height-Heading-3)] leading-[28px]">
            Custom download
          </DialogTitle>
          <p className="text-[var(--Dark-gray)] font-roboto text-[16px] leading-[24px]">
            Select the format to download
          </p>
        </DialogHeader>

        <div className="space-y-4">
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

          {/* Size of the QR code */}
          <div className="flex flex-col items-start gap-2">
            <Label className="text-[var(--Black)] font-rubik font-medium text-[14px] leading-[16px]">
              Size of the QR code
            </Label>
            <CustomDropDown
              options={[
                "1024x1024",
                "512x512",
                "256x256",
                "128x128",
                "64x64",
                "32x32",
              ]}
              selectedOption={selectedSize}
              onSelect={handleSelectSize}
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 self-stretch">
          <Button
            onClick={onClose}
            variant="outline"
            className="h-10 flex items-center justify-center gap-2 py-2 px-4 flex-1 rounded-[var(--Corner-Radius-10)] border-[var(--Blue)] text-[var(--Blue)] text-[14px] leading-[22px] bg-white hover:bg-[var(--Blue)] hover:text-white transition-all duration-300 ease-linear"
          >
            Cancel
          </Button>
          <Button className="h-10 flex items-center justify-center gap-2 py-2 px-4 flex-1 rounded-[var(--Corner-Radius-10)] bg-[var(--Blue)] text-white text-[14px] leading-[22px] hover:bg-[var(--Blue-hover)] transition-all duration-300 ease-linear">
            <Download className="text-white" />
            Download
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
