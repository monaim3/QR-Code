"use client";
import { useEffect, useRef, useState } from "react";
import { IoIosSwap } from "react-icons/io";
import { TextInput } from "./TextInput";

import { CheckboxInput } from "./CheckboxInput";
import ColorInput from "./ColorInput";

const QrCodeFrameAllInput = ({
  frameText,
  setFrameText,
  frameBackgroundColor,
  setFrameBackgroundColor,
  frameTextColor,
  setFrameTextColor,
  frameTransparent,
  setFrameTransparent,
  frameColor,
  setFrameColor,
  backgroundColor,
  transparentBg,
  setTransparentBg,
  handleSwapColors,
}: any) => {
  const prevBgRef = useRef<string | null>(null);

  useEffect(() => {
    if (transparentBg) {
      prevBgRef.current = frameBackgroundColor;
      setFrameBackgroundColor("transparent");
    } else if (prevBgRef.current) {
      setFrameBackgroundColor(prevBgRef.current);
    }
  }, [transparentBg]);
  return (
    <div className=" ">
      <div className=" bg-[#F8F9FC] rounded-xl shadow-sm p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[72px] mb-6">
          <TextInput
            label="Frame text"
            value={frameText}
            onChange={setFrameText}
            placeholder="Scan me!"
          />

          <ColorInput
            label="Frame color"
            value={frameColor}
            onChange={setFrameColor}
            showColorIndicator={true}
          />
        </div>

        <div className="bg-[#F8F9FC] rounded-xl !space-y-0 !m-0 !p-0 relative">
          <div className="flex items-end justify-center gap-6 pt-6 pb-8 relative z-10">
            {/* <ColorInput
              label="Background color"
              value={frameBackgroundColor ?? ""}
              onChange={setFrameBackgroundColor}
              showColorIndicator={true}
            /> */}
            <ColorInput
              label="Background color"
              value={
                transparentBg ? "Transparent" : (frameBackgroundColor ?? "")
              }
              onChange={transparentBg ? undefined : setFrameBackgroundColor}
              showColorIndicator={!transparentBg}
            />
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center text-gray-500"
              onClick={() => {
                backgroundColor;
                setFrameColor(backgroundColor);
              }}
            >
              <IoIosSwap className="text-2xl" onClick={handleSwapColors} />
            </button>

            <ColorInput
              label="Text color"
              value={frameTextColor ?? ""}
              onChange={setFrameTextColor}
              showColorIndicator={true}
            />
          </div>
        </div>

        <CheckboxInput
          label="Transparent background"
          checked={transparentBg}
          onChange={setTransparentBg}
        />
      </div>
    </div>
  );
};

export default QrCodeFrameAllInput;
