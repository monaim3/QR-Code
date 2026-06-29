"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import CustomDropDown from "./CustomDropDown";
import Download from "@/components/icons/download";
import { QrCode as qrData } from "@/types/generatedQr";
import QrCodePreview from "./QrCodePreview";
import { toPng, toJpeg, toSvg } from "html-to-image";

interface Props {
  open: boolean;
  onClose: () => void;
  item?: qrData | null;
}

export default function CustomDownloadModal({
  open,
  onClose,
  item,
}: Props) {
  const [selectedFileFormat, setSelectedFileFormat] =
    useState<string>("SVG");

  const [selectedSize, setSelectedSize] =
    useState<string>("1024x1024");

  const exportRef = useRef<HTMLDivElement>(null);

  const handleSelectFileFormat = (format: string) => {
    setSelectedFileFormat(format);
  };

  const handleSelectSize = (size: string) => {
    setSelectedSize(size);
  };

  const getDimensions = () => {
    const [width, height] = selectedSize.split("x").map(Number);

    return {
      width,
      height,
    };
  };

  const downloadQr = async (
    format: "png" | "jpg" | "svg" = "png",
    width = 1024,
    height = 1024
  ) => {
    if (!exportRef.current) return;

    const wrapper = document.createElement("div");

    wrapper.style.background = "#ffffff";
    wrapper.style.padding = "40px";
    wrapper.style.display = "inline-flex";
    wrapper.style.alignItems = "center";
    wrapper.style.justifyContent = "center";

    const clone = exportRef.current.cloneNode(true) as HTMLElement;

    wrapper.appendChild(clone);
    document.body.appendChild(wrapper);

    try {
      const options = {
        width,
        height,
        pixelRatio: 1,
        cacheBust: true,
        backgroundColor: "#ffffff",
      };

      let dataUrl = "";

      if (format === "png") {
        dataUrl = await toPng(wrapper, options);
      } else if (format === "jpg") {
        dataUrl = await toJpeg(wrapper, {
          ...options,
          quality: 1,
        });
      } else {
        dataUrl = await toSvg(wrapper, options);
      }

      const link = document.createElement("a");

      link.download = `qr-code-${width}x${height}.${format}`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Failed to download QR:", error);
    } finally {
      document.body.removeChild(wrapper);
    }
  };

  const handleDownload = async () => {

  console.log("item", item);
  console.log("exportRef", exportRef.current);


    const { width, height } = getDimensions();

    switch (selectedFileFormat) {
      case "PNG":
        await downloadQr("png", width, height);
        break;

      case "JPG":
        await downloadQr("jpg", width, height);
        break;

      case "SVG":
      case "SVG Tiny (Illustrator)":
        await downloadQr("svg", width, height);
        break;

      case "PDF":
        alert("PDF export is not implemented yet.");
        break;

      case "EPS":
        alert("EPS export is not supported.");
        break;

      default:
        await downloadQr("png", width, height);
        break;
    }

    onClose();
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

          <p className="text-[var(--Dark-gray)] text-[16px] leading-[24px]">
            Select the format to download
          </p>
        </DialogHeader>

        <div className="space-y-4">
          {/* File Type */}
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

          {/* Size */}
          <div className="flex flex-col items-start gap-2">
            <Label className="text-[var(--Black)] font-rubik font-medium text-[14px] leading-[16px]">
              Size of the QR code
            </Label>

            <CustomDropDown
              options={[
                "512x512",
                "1024x1024",
                "2048x2048",
                "4096x4096",
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

          <Button
            onClick={() => {
              console.log("DOWNLOAD CLICKED");
              handleDownload();
            }}
            className="h-10 flex items-center justify-center gap-2 py-2 px-4 flex-1 rounded-[var(--Corner-Radius-10)] bg-[var(--Blue)] text-white text-[14px] leading-[22px] hover:bg-[var(--Blue-hover)] transition-all duration-300 ease-linear"
          >
            <Download className="text-white" />
            Download
          </Button>
        </div>

        {/* Hidden QR for export */}
        <div
          ref={exportRef}
          style={{
            position: "fixed",
            left: "-99999px",
            top: "-99999px",
            background: "#ffffff",
            padding: "40px",
          }}
        >
          {item && <QrCodePreview qrCodeData={item} />}
        </div>
      </DialogContent>
    </Dialog>
  );
}