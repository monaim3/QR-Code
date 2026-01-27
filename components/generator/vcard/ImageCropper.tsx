"use client";

import { useState } from "react";
import Cropper, { Area, Point } from "react-easy-crop";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useCallback } from "react";
import { Slider } from "@/components/ui/slider";
import SwapHorizontal from "@/components/icons/swap-horizontal";
import RefreshCw from "@/components/icons/refresh-cw";
import Swap from "@/components/icons/swap";
import RefreshCcw from "@/components/icons/refresh-ccw";

interface Props {
  open: boolean;
  onClose: () => void;
  onCropComplete: (croppedImage: Blob) => void;
}

export default function ImageCropper({ open, onClose, onCropComplete }: Props) {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [flip, setFlip] = useState({ horizontal: false, vertical: false });
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const onCropChange = (crop: Point) => setCrop(crop);
  const onZoomChange = (zoom: number) => setZoom(zoom);

  const onCropCompleteInternal = useCallback((_: Area, pixels: Area) => {
    setCroppedAreaPixels(pixels);
  }, []);

  const handleSave = async () => {
    console.log("Saving cropped area:", croppedAreaPixels);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className={`!max-w-[500px] w-[calc(100%-40px)] desktop:!w-full p-0 gap-0`}
        onOpenAutoFocus={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <div className="w-full h-[300px] relative">
          <Cropper
            image={"/images/modal-illustration.svg"}
            crop={crop}
            zoom={zoom}
            rotation={rotation}
            aspect={1}
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
              cropAreaClassName: "rounded-t-[var(--Corner-Radius-10)]",
            }}
          />
        </div>

        <div className="flex flex-col items-center gap-8 p-8 self-stretch">
          <div className="flex flex-col items-start gap-2 self-stretch">
            <p className="text-[var(--Black)] font-medium text-[16px] leading-[24px]">
              Zoom
            </p>
            <Slider
              value={[zoom]}
              min={1}
              max={3}
              step={0.1}
              onValueChange={(vals) => setZoom(vals[0])}
              className="[&_[role=slider]]:bg-[var(--Blue)] [&_[role=slider]]:h-3 [&_[role=slider]]:rounded-full [&_[role=slider]]:w-3 w-full rounded-[9px] bg-[rgba(73,129,255,0.50)] h-[2px] [&_[data-slot=slider-range]]:bg-[var(--Blue)] [&_[data-slot=slider-range]]:h-[3px]"
            />
          </div>

          <div className="flex items-center gap-6 self-stretch">
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  setFlip((f) => ({ ...f, horizontal: !f.horizontal }))
                }
                className="flex w-12 h-12 p-2 justify-center items-center rounded-[var(--Corner-Radius-10)] border border-[var(--Border-color)]"
              >
                <SwapHorizontal className="text-[var(--Dark-gray)] w-5 h-5" />
              </button>
              <button
                onClick={() =>
                  setFlip((f) => ({ ...f, vertical: !f.vertical }))
                }
                className="flex w-12 h-12 p-2 justify-center items-center rounded-[var(--Corner-Radius-10)] border border-[var(--Border-color)]"
              >
                <Swap className="text-[var(--Dark-gray)] w-5 h-5" />
              </button>
              <button
                onClick={() => setRotation((r) => r - 90)}
                className="flex w-12 h-12 p-2 justify-center items-center rounded-[var(--Corner-Radius-10)] border border-[var(--Border-color)]"
              >
                <RefreshCcw className="text-[var(--Dark-gray)] w-5 h-5" />
              </button>
              <button
                onClick={() => setRotation((r) => r + 90)}
                className="flex w-12 h-12 p-2 justify-center items-center rounded-[var(--Corner-Radius-10)] border border-[var(--Border-color)]"
              >
                <RefreshCw className="text-[var(--Dark-gray)] w-5 h-5" />
              </button>
            </div>

            <Button
              onClick={handleSave}
              className="h-12 flex items-center justify-center gap-2 py-2 px-4 flex-1 rounded-[var(--Corner-Radius-10)] bg-[var(--Blue)] text-white text-[18px] leading-[26px] font-medium hover:bg-[var(--Blue-hover)] transition-all duration-300 ease-linear self-stretch"
            >
              Save
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
