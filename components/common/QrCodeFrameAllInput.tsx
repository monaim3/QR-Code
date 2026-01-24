"use client";
import { useEffect, useRef, useState } from "react";
import { IoIosSwap } from "react-icons/io";
import { TextInput } from "./TextInput";
import { IoSwapVertical } from "react-icons/io5";

import { CheckboxInput } from "./CheckboxInput";
import ColorInput from "./ColorInput";
import Swap from "../icons/swap";

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
    <div className="!mt-0 md:!mt-0">
      <div className=" bg-[#F8F9FC] rounded-xl shadow-sm p-4 desktop:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-[72px] mb-2 lg:mb-6">
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
          <div className="flex flex-col lg:flex-row lg:items-end justify-center gap-4 lg:gap-6  pt-4 lg:pt-0  pb-4 lg:pb-8 relative z-10">
            <ColorInput
              label="Background color"
              value={
                transparentBg ? "Transparent" : (frameBackgroundColor ?? "")
              }
              onChange={transparentBg ? undefined : setFrameBackgroundColor}
              showColorIndicator={!transparentBg}
            />
            {/* <div
              className={`transparentBg ? "pointer-events-none opacity-50" : "" w-full `}
            >
              <ColorInput
                label="Background color"
                value={
                  transparentBg ? "Transparent" : (frameBackgroundColor ?? "")
                }
                onChange={transparentBg ? undefined : setFrameBackgroundColor}
                showColorIndicator={!transparentBg}
              />
            </div> */}
            <button
              type="button"
              className="hidden lg:flex  h-12 w-12 items-center justify-center text-gray-500"
              onClick={() => {
                backgroundColor;
                setFrameColor(backgroundColor);
              }}
            >
              <IoIosSwap className="text-2xl" onClick={handleSwapColors} />
            </button>
            <button
              type="button"
              className="flex lg:hidden p-2  items-center justify-center text-gray-500"
              onClick={() => {
                backgroundColor;
                setFrameColor(backgroundColor);
              }}
            >
              <p className="flex gap-2">
                <span className="text-[#79809A] text-sm leading-[22px] font-normal">
                  Swap the colours
                </span>
                <Swap className="text-2xl" onClick={handleSwapColors} />
              </p>
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
