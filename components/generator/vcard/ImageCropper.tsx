"use client";

import { useState } from "react";
import Cropper, { Area, Point } from "react-easy-crop";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useCallback } from "react";
import { Slider } from "@/components/ui/slider";
import SwapHorizontal from "@/components/icons/swap-horizontal";
import RefreshCw from "@/components/icons/refresh-cw";
import Swap from "@/components/icons/swap";
import RefreshCcw from "@/components/icons/refresh-ccw";
import { getCroppedImg } from "@/lib/utils";

interface Props {
  open: boolean;
  onClose: () => void;
  imageSrc: string | null;
  onCropComplete: (croppedImageUrl: string) => void;
  aspectRatio?: number;
}

export default function ImageCropper({
  open,
  onClose,
  imageSrc,
  onCropComplete,
  aspectRatio = 1,
}: Props) {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [flip, setFlip] = useState({ horizontal: false, vertical: false });
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const onCropChange = (crop: Point) => setCrop(crop);
  const onZoomChange = (zoom: number) => setZoom(zoom);

  const onCropCompleteInternal = useCallback((_: Area, pixels: Area) => {
    setCroppedAreaPixels(pixels);
  }, []);

  const handleSave = async () => {
    if (!imageSrc || !croppedAreaPixels) {
      return;
    }

    setIsSaving(true);
    try {
      const croppedImageUrl = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation,
        flip,
      );
      onCropComplete(croppedImageUrl);
      onClose();
    } catch (error) {
      console.error("Error cropping image:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleClose = () => {
    // Reset state when closing
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setRotation(0);
    setFlip({ horizontal: false, vertical: false });
    setCroppedAreaPixels(null);
    onClose();
  };

  if (!imageSrc) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className={`!max-w-[500px] w-[calc(100%-40px)] desktop:!w-full p-0 gap-0`}
        onOpenAutoFocus={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogTitle></DialogTitle>
        <div className="w-full desktop:h-[300px] h-[210px] relative">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            rotation={rotation}
            aspect={aspectRatio}
            onCropChange={onCropChange}
            onCropComplete={onCropCompleteInternal}
            onZoomChange={onZoomChange}
            transform={[
              `translate(${crop.x}px, ${crop.y}px)`,
              `rotateZ(${rotation}deg)`,
              `rotateY(${flip.horizontal ? 180 : 0}deg)`,
              `rotateX(${flip.vertical ? 180 : 0}deg)`,
              `scale(${zoom})`,
            ].join(" ")}
            classes={{
              containerClassName:
                "rounded-t-[var(--Corner-Radius-10)] bg-[#D9D9D9]",
              cropAreaClassName: `rounded-t-[var(--Corner-Radius-10)] ${aspectRatio === 1 && "!w-[250px] !h-[240px]"}`,
            }}
          />
        </div>

        <div className="flex flex-col items-center gap-8 desktop:p-8 p-6 self-stretch">
          <div className="flex flex-col items-start gap-2 self-stretch">
            <p className="text-[var(--Black)] font-medium text-[16px] leading-[24px]">
              Zoom
            </p>
            <div className="w-full h-3 flex items-center">
              <Slider
                value={[zoom]}
                min={1}
                max={3}
                step={0.1}
                onValueChange={(vals) => setZoom(vals[0])}
                className="[&_[role=slider]]:bg-[var(--Blue)] [&_[role=slider]]:h-3 [&_[role=slider]]:rounded-full [&_[role=slider]]:w-3 w-full rounded-[9px] bg-[rgba(73,129,255,0.50)] h-[2px] [&_[data-slot=slider-range]]:bg-[var(--Blue)] [&_[data-slot=slider-range]]:h-[3px]"
              />
            </div>
          </div>

          <div className="flex flex-col desktop:flex-row items-center gap-6 self-stretch">
            <div className="flex items-center gap-2 w-full desktop:w-auto">
              <button
                onClick={() =>
                  setFlip((f) => ({ ...f, horizontal: !f.horizontal }))
                }
                className="flex desktop:w-12 flex-1 h-12 p-2 justify-center items-center rounded-[var(--Corner-Radius-10)] border border-[var(--Border-color)]"
              >
                <SwapHorizontal className="text-[var(--Dark-gray)] w-5 h-5" />
              </button>
              <button
                onClick={() =>
                  setFlip((f) => ({ ...f, vertical: !f.vertical }))
                }
                className="flex desktop:w-12 flex-1 h-12 p-2 justify-center items-center rounded-[var(--Corner-Radius-10)] border border-[var(--Border-color)]"
              >
                <Swap className="text-[var(--Dark-gray)] w-5 h-5" />
              </button>
              <button
                onClick={() => setRotation((r) => r - 90)}
                className="flex desktop:w-12 flex-1 h-12 p-2 justify-center items-center rounded-[var(--Corner-Radius-10)] border border-[var(--Border-color)]"
              >
                <RefreshCcw className="text-[var(--Dark-gray)] w-5 h-5" />
              </button>
              <button
                onClick={() => setRotation((r) => r + 90)}
                className="flex desktop:w-12 flex-1 h-12 p-2 justify-center items-center rounded-[var(--Corner-Radius-10)] border border-[var(--Border-color)]"
              >
                <RefreshCw className="text-[var(--Dark-gray)] w-5 h-5" />
              </button>
            </div>

            <Button
              onClick={handleSave}
              disabled={isSaving || !croppedAreaPixels}
              className="h-12 flex items-center justify-center gap-2 py-2 px-4 flex-1 rounded-[var(--Corner-Radius-10)] bg-[var(--Blue)] text-white text-[18px] leading-[26px] font-medium hover:bg-[var(--Blue-hover)] transition-all duration-300 ease-linear self-stretch disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Save
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
