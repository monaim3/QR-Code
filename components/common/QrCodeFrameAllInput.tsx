"use client";
import { useState } from "react";
import { IoIosSwap } from "react-icons/io";
import { TextInput } from "./TextInput";

import { CheckboxInput } from "./CheckboxInput";
import ColorInput from "./ColorInput";

const QrCodeFrameAllInput = () => {
  const [frameText, setFrameText] = useState("Scan me!");
  const [frameColor, setFrameColor] = useState("#0A0909");
  const [backgroundColor, setBackgroundColor] = useState("#0A0909");
  const [textColor, setTextColor] = useState("#FFFFFF");
  const [transparentBg, setTransparentBg] = useState(false);
  const handleSwapColors = () => {
    const temp = backgroundColor;
    setBackgroundColor(textColor);
    setTextColor(temp);
  };
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[72px] mb-6 relative">
          <ColorInput
            label="Background color"
            value={backgroundColor}
            onChange={setBackgroundColor}
            showColorIndicator={true}
          />

          <div className="absolute left-1/2 top-12 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
            <button
              onClick={handleSwapColors}
              className="p-2 "
              aria-label="Swap colors"
            >
              <IoIosSwap className="w-6 h-6 text-gray-400" />
            </button>
          </div>
          <ColorInput
            label="Text color"
            value={textColor}
            onChange={setTextColor}
            showColorIndicator={true}
          />
        </div>

        <div className="flex justify-center mb-6 md:hidden">
          <button
            onClick={handleSwapColors}
            className="p-2 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
            aria-label="Swap colors"
          >
            <IoIosSwap className="w-5 h-5 text-gray-400" />
          </button>
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
