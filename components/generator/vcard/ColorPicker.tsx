"use client";

import { useState, useEffect, useMemo } from "react";
import Saturation from "@uiw/react-color-saturation";
import Hue from "@uiw/react-color-hue";
import {
  hsvaToHex,
  hexToHsva,
  hsvaToRgba,
  hsvaToHsla,
  rgbaToHsva,
  hslaToHsva,
} from "@uiw/color-convert";
import Picker from "@/components/icons/picker";
import ChevronUpSmall from "@/components/icons/chevron-up-small";
import ChevronDownSmall from "@/components/icons/chevron-down-small";
import { paletteColors } from "@/lib/colorPIcker";
import { useRef } from "react";

// Type declaration for EyeDropper API
declare global {
  interface Window {
    EyeDropper?: {
      new (): {
        open(): Promise<{ sRGBHex: string }>;
      };
    };
  }
}

interface Props {
  color: string;
  onChange: (color: string) => void;
  setShowPicker: (show: boolean) => void;
}

export default function ColorPicker({ color, onChange, setShowPicker }: Props) {
  const [isSolid, setIsSolid] = useState(true);
  const [hsva, setHsva] = useState(hexToHsva(color));
  const [colorMode, setColorMode] = useState<"hex" | "rgb" | "hsl">("hex");
  const pickerRef = useRef<HTMLDivElement>(null);

  // Update hsva when color prop changes
  useEffect(() => {
    setHsva(hexToHsva(color));
  }, [color]);

  // Compute RGB and HSL from HSVA (extract r, g, b from rgba and h, s, l from hsla)
  const rgb = useMemo(() => {
    const rgba = hsvaToRgba(hsva);
    return { r: rgba.r, g: rgba.g, b: rgba.b };
  }, [hsva]);
  const hsl = useMemo(() => {
    const hsla = hsvaToHsla(hsva);
    return {
      h: parseFloat(hsla.h.toFixed(2)),
      s: parseFloat(hsla.s.toFixed(2)),
      l: parseFloat(hsla.l.toFixed(2)),
    };
  }, [hsva]);

  const handleColorChange = (hsva: {
    h: number;
    s: number;
    v: number;
    a: number;
  }) => {
    if (isSolid) {
      onChange(hsvaToHex(hsva));
      setHsva(hsva);
    } else {
    }
  };

  const handleRgbChange = (channel: "r" | "g" | "b", value: string) => {
    const numValue = Math.max(0, Math.min(255, parseInt(value) || 0));
    const rgba = hsvaToRgba(hsva);
    const newRgba = { ...rgba, [channel]: numValue };
    const newHsva = rgbaToHsva(newRgba);
    handleColorChange(newHsva);
  };

  const handleHslChange = (channel: "h" | "s" | "l", value: string) => {
    const maxValue = channel === "h" ? 360 : 100;
    const numValue = Math.max(0, Math.min(maxValue, parseInt(value) || 0));
    const hsla = hsvaToHsla(hsva);
    const newHsla = { ...hsla, [channel]: numValue };
    const newHsva = hslaToHsva(newHsla);
    handleColorChange(newHsva);
  };

  const rgbStringToHex = (rgbString: string): string => {
    const match = rgbString.match(
      /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/i,
    );
    if (!match) {
      return rgbString.startsWith("#")
        ? rgbString.toUpperCase()
        : `#${rgbString.toUpperCase()}`;
    }

    const r = parseInt(match[1], 10);
    const g = parseInt(match[2], 10);
    const b = parseInt(match[3], 10);

    const hex = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
    return hex.toUpperCase();
  };

  const handlePaletteColorClick = (color: string) => {
    onChange(color);
  };

  const handleEyedropper = async () => {
    // Check if EyeDropper API is supported
    if (!window.EyeDropper) {
      alert(
        "Eyedropper tool is not supported in your browser. Please use Chrome, Edge, or Opera.",
      );
      return;
    }

    try {
      const eyeDropper = new window.EyeDropper();
      const result = await eyeDropper.open();
      if (result.sRGBHex) {
        onChange(rgbStringToHex(result.sRGBHex));
      }
    } catch (error: unknown) {
      // User cancelled the eyedropper or an error occurred
      if (error instanceof Error && error.name !== "AbortError") {
        console.error("Eyedropper error:", error);
      }
    }
  };

  const cycleColorMode = () => {
    switch (colorMode) {
      case "hex":
        setColorMode("rgb");
        break;
      case "rgb":
        setColorMode("hsl");
        break;
      default:
        setColorMode("hex");
        break;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current &&
        event.target instanceof Node &&
        !pickerRef.current.contains(event.target)
      ) {
        setShowPicker(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setShowPicker]);

  return (
    <div
      ref={pickerRef}
      className="absolute right-0 top-full mt-2 z-10 bg-white w-full rounded-[var(--Corner-Radius-10)] shadow-[0_4px_14px_0_rgba(54,66,140,0.16)] p-4 flex flex-col items-center gap-4"
    >
      {/* Tab Navigation */}
      <div className="flex justify-center items-center gap-4 self-stretch">
        <div className="flex h-10 p-1 items-center gap-1 flex-1 rounded-full border border-[var(--Boarder-Grey)]">
          <button
            onClick={() => setIsSolid(true)}
            className={`px-6 h-8 text-[14px] leading-[22px] flex-1 flex items-center justify-center rounded-full border ${isSolid ? "bg-[var(--Generator-Background)] border-[var(--Boarder-Grey)] text-[var(--Black)]" : "border-transparent text-[var(--Grey)]"} `}
          >
            Solid
          </button>

          <button
            onClick={() => setIsSolid(false)}
            className={`px-6 h-8 text-[14px] leading-[22px] flex-1 flex items-center justify-center rounded-full border ${isSolid ? " border-transparent text-[var(--Grey)]" : "bg-[var(--Generator-Background)] border-[var(--Boarder-Grey)] text-[var(--Black)]"}`}
          >
            Palette
          </button>
        </div>

        {/* Picker */}
        <button
          onClick={handleEyedropper}
          className="flex flex-col w-10 h-10 p-2 justify-center items-center rounded-full bg-white border border-[var(--Border-color)] shrink-0"
        >
          <Picker />
        </button>
      </div>

      {isSolid ? (
        <>
          <div className="relative rounded-[var(--Corner-Radius-10)] overflow-hidden w-full desktop:h-[160px] h-[135px]">
            <Saturation
              hsva={hsva}
              onChange={handleColorChange}
              className="w-full h-full cursor-crosshair"
              style={{
                width: "100%",
                height: "100%",
                cursor: "crosshair",
              }}
            />
          </div>

          <div className="w-full h-3 rounded-full">
            <Hue
              hue={hsva.h}
              onChange={(newHue) => {
                const newHsva = { ...hsva, h: newHue.h };
                handleColorChange(newHsva);
              }}
              style={{
                width: "100%",
                height: "12px",
                borderRadius: "9999px",
              }}
            />
          </div>

          <div className="flex items-center gap-8 flex-1 w-full">
            <button
              onClick={cycleColorMode}
              className="flex w-12 h-auto items-center gap-2 text-[var(--Black)] text-[16px] leading-[24px]"
            >
              {colorMode.toUpperCase()}
              <div className="shrink-0">
                <ChevronUpSmall className="text-[var(--Black)] w-[10px] h-[10px]" />
                <ChevronDownSmall className="text-[var(--Black)] w-[10px] h-[10px]" />
              </div>
            </button>

            <div className="flex-1">
              {colorMode === "hex" && (
                <input
                  type="text"
                  value={color}
                  onChange={(e) => onChange(e.target.value.toUpperCase())}
                  className="flex-1 px-2 py-1 border border-[var(--Boarder-Grey)] rounded-full focus:outline-none text-[var(--Black)] text-[14px] leading-[22px] text-center w-full"
                />
              )}

              {colorMode === "rgb" && (
                <div className="flex-1 flex gap-2">
                  <input
                    type="text"
                    min="0"
                    max="255"
                    value={rgb.r}
                    onChange={(e) => handleRgbChange("r", e.target.value)}
                    className="w-full px-2 py-1 border border-[var(--Boarder-Grey)] rounded-full focus:outline-none text-[var(--Black)] text-[14px] leading-[22px] text-center"
                  />
                  <input
                    type="text"
                    min="0"
                    max="255"
                    value={rgb.g}
                    onChange={(e) => handleRgbChange("g", e.target.value)}
                    className="w-full px-2 py-1 border border-[var(--Boarder-Grey)] rounded-full focus:outline-none text-[var(--Black)] text-[14px] leading-[22px] text-center"
                  />
                  <input
                    type="text"
                    min="0"
                    max="255"
                    value={rgb.b}
                    onChange={(e) => handleRgbChange("b", e.target.value)}
                    className="w-full px-2 py-1 border border-[var(--Boarder-Grey)] rounded-full focus:outline-none text-[var(--Black)] text-[14px] leading-[22px] text-center"
                  />
                </div>
              )}

              {colorMode === "hsl" && (
                <div className="flex-1 flex gap-2">
                  <input
                    type="text"
                    min="0"
                    max="360"
                    value={hsl.h}
                    onChange={(e) => handleHslChange("h", e.target.value)}
                    className="w-full px-2 py-1 border border-[var(--Boarder-Grey)] rounded-full focus:outline-none text-[var(--Black)] text-[14px] leading-[22px]"
                  />
                  <input
                    type="text"
                    min="0"
                    max="100"
                    value={hsl.s}
                    onChange={(e) => handleHslChange("s", e.target.value)}
                    className="w-full px-2 py-1 border border-[var(--Boarder-Grey)] rounded-full focus:outline-none text-[var(--Black)] text-[14px] leading-[22px]"
                  />
                  <input
                    type="text"
                    min="0"
                    max="100"
                    value={hsl.l}
                    onChange={(e) => handleHslChange("l", e.target.value)}
                    className="w-full px-2 py-1 border border-[var(--Boarder-Grey)] rounded-full focus:outline-none text-[var(--Black)] text-[14px] leading-[22px]"
                  />
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Color Palette Grid */}
          <div className="grid desktop:grid-cols-10 grid-cols-6 gap-[5px]">
            {paletteColors.flat().map((color, index) => (
              <button
                key={index}
                onClick={() => handlePaletteColorClick(color)}
                className={`w-8 h-8 rounded-[6px] `}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
