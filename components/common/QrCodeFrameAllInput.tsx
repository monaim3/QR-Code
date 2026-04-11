"use client";
import { useEffect, useRef } from "react";
import { IoIosSwap } from "react-icons/io";
import { TextInput } from "./TextInput";
import { CheckboxInput } from "./CheckboxInput";
// import ColorInput from "./ColorInput";
import Swap from "../icons/swap";
import { useAppSelector } from "@/store/hooks";
import { QRFrameArray } from "./QRFrameArray";
import ColorInput from "../generator/vcard/ColorInput";

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
  const { selectedFrameIndex } = useAppSelector((state) => state.qr);

  const selectedFrame = QRFrameArray[selectedFrameIndex].frameColor;

  useEffect(() => {
    if (transparentBg) {
      prevBgRef.current = frameBackgroundColor;
      setFrameBackgroundColor("transparent");
    } else if (prevBgRef.current) {
      setFrameBackgroundColor(prevBgRef.current);
    }
  }, [transparentBg]);
  const handleLocalSwap = () => {
    if (transparentBg) return;

    const temp = frameBackgroundColor;
    setFrameBackgroundColor(frameTextColor);
    setFrameTextColor(temp);
  };
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
            color={frameColor}
            onChange={setFrameColor}
            // disabled={selectedFrameIndex === 1}
          />
        </div>

        <div className="bg-[#F8F9FC] rounded-xl !space-y-0 !m-0 !p-0 relative">
          <div className="flex flex-col lg:flex-row lg:items-end justify-center gap-4 lg:gap-3  pt-4 lg:pt-0  pb-4 lg:pb-8 relative ">
            <ColorInput
              label="Background color"
              color={
                transparentBg ? "Transparent" : (frameBackgroundColor ?? "")
              }
              onChange={transparentBg ? undefined : setFrameBackgroundColor}
            />
            <button
              type="button"
              className="hidden lg:flex  h-12 w-12 items-center justify-center text-gray-500"
              onClick={handleLocalSwap}
            >
              <IoIosSwap className="text-2xl" />
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
              color={
                frameTextColor
                  ? frameTextColor
                  : selectedFrame === "black"
                    ? "#FFFFFF"
                    : "#000000"
              }
              onChange={setFrameTextColor}
            />
          </div>
        </div>

        <CheckboxInput
          label="Transparent background"
          checked={transparentBg}
          onChange={setTransparentBg}
          id="frame-transparent-bg"
          bgColor="#01A56D"
        />
      </div>
    </div>
  );
};

export default QrCodeFrameAllInput;
