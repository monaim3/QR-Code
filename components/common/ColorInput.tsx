import React, { useState, useRef, useEffect } from "react";
import { Pipette, ChevronDown } from "lucide-react";
import Saturation from "@uiw/react-color-saturation";
import Hue from "@uiw/react-color-hue";
import { hsvaToHex, hexToHsva } from "@uiw/color-convert";

type Props = {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  showColorIndicator?: boolean;
  id?: string;
  disabled?: boolean;
};

export default function ColorInput({
  label,
  value,
  onChange,
  showColorIndicator = false,
  id,
  disabled = false,
}: Props) {
  const [showPicker, setShowPicker] = useState(false);
  const [activeTab, setActiveTab] = useState("solid");
  const [colorMode, setColorMode] = useState<"hex" | "rgb" | "hsl">("hex");
  const [hsva, setHsva] = useState(hexToHsva(value || "#000000"));

  const pickerRef = useRef<HTMLDivElement>(null);

  const paletteColors = [
    ["#000000", "#424242", "#757575", "#BDBDBD", "#FFFFFF", "#FF0000"],
    ["#FF5722", "#00BFA5", "#2196F3", "#9C27B0", "#E91E63", "#FF9800"],
    ["#FFEB3B", "#8BC34A", "#BA68C1", "#F48FB1", "#FFCCBC", "#FFE082"],
    ["#80DEEA", "#64B5F6", "#B39DDB", "#F8BBD0", "#FFCCBC", "#C5E1A5"],
    ["#B2DFDB", "#C5CAE9", "#E1BEE7", "#F5F5F5", "#FFCDD2", "#D7CCC8"],
    ["#D7CCC8", "#E0E0E0", "#A1887F", "#6D4C41", "#5D4037", "#BCAAA4"],
    ["#A5D6A7", "#CDDC39", "#C5E1A5", "#009688", "#00796B", "#80CBC4"],
    ["#4DB6AC", "#81C784", "#26A69A", "#66BB6A", "#4CAF50", "#388E3C"],
    ["#7E57C2", "#FF9800", "#90CAF9", "#A1887F", "#78909C", "#F8BBD0"],
    ["#EF9A9A", "#64B5F6", "#FFAB91", "#BCAAA4", "#B0BEC5", "#CE93D8"],
  ];

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
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (value) {
      try {
        const newHsva = hexToHsva(value);
        setHsva(newHsva);
      } catch (e) {
        // Invalid color, ignore
      }
    }
  }, [value]);

  const handleColorChange = (newHsva: any) => {
    setHsva(newHsva);
    const hex = hsvaToHex(newHsva);
    onChange?.(hex.toUpperCase());
  };

  const handlePaletteColorClick = (color: string) => {
    onChange?.(color);
  };

  const cycleColorMode = () => {
    if (colorMode === "hex") setColorMode("rgb");
    else if (colorMode === "rgb") setColorMode("hsl");
    else setColorMode("hex");
  };

  const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 };
  };

  const rgbToHsl = (
    r: number,
    g: number,
    b: number,
  ): { h: number; s: number; l: number } => {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0,
      s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
          break;
        case g:
          h = ((b - r) / d + 2) / 6;
          break;
        case b:
          h = ((r - g) / d + 4) / 6;
          break;
      }
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
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

  const handleRgbChange = (component: "r" | "g" | "b", newValue: string) => {
    const rgb = hexToRgb(value);
    const numValue = Math.max(0, Math.min(255, parseInt(newValue) || 0));
    rgb[component] = numValue;
    const hex =
      `#${rgb.r.toString(16).padStart(2, "0")}${rgb.g.toString(16).padStart(2, "0")}${rgb.b.toString(16).padStart(2, "0")}`.toUpperCase();
    onChange?.(hex);
  };

  const handleHslChange = (component: "h" | "s" | "l", newValue: string) => {
    const rgb = hexToRgb(value);
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

    let numValue = parseInt(newValue) || 0;
    if (component === "h") {
      numValue = Math.max(0, Math.min(360, numValue));
      hsl.h = numValue;
    } else {
      numValue = Math.max(0, Math.min(100, numValue));
      hsl[component] = numValue;
    }

    // Convert HSL back to RGB
    const h = hsl.h / 360;
    const s = hsl.s / 100;
    const l = hsl.l / 100;

    let r: number, g: number, b: number;

    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    const hex = `#${Math.round(r * 255)
      .toString(16)
      .padStart(2, "0")}${Math.round(g * 255)
      .toString(16)
      .padStart(2, "0")}${Math.round(b * 255)
      .toString(16)
      .padStart(2, "0")}`.toUpperCase();
    onChange?.(hex);
  };

  const rgb = hexToRgb(value);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

  const startEyeDropper = async () => {
    if (!("EyeDropper" in window)) {
      alert("EyeDropper API is not supported in your browser");
      return;
    }

    try {
      const eyeDropper = new (window as any).EyeDropper();
      const result = await eyeDropper.open();
      const hexValue = rgbStringToHex(result.sRGBHex);
      onChange?.(hexValue);
    } catch (e) {
      console.log("User canceled the eyedropper");
    }
  };

  return (
    <div className="w-full">
      <label className="block text-base font-medium text-gray-900 mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          id={id}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder="#000000"
          disabled={disabled}
          className="w-full px-4 py-3 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[var(--Blue)] focus:border-transparent text-gray-700 pr-14"
        />
        {showColorIndicator && !disabled && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <div
              onClick={(e) => {
                e.stopPropagation();
                setShowPicker(!showPicker);
              }}
              className={`w-8 h-8 rounded-full cursor-pointer`}
              style={{
                backgroundColor: value,
                border: `1px solid ${value === "#ffffff" || value === "#FFFFFF" ? "var(--boarder-grey-50)" : value}`,
              }}
            />
          </div>
        )}
        {showPicker && (
          <div
            ref={pickerRef}
            className="absolute right-0 top-full mt-2 z-[9999]"
          >
            <div className="w-full desktop:w-[360px] bg-white rounded-2xl shadow-2xl p-4">
              {/* Tab Navigation */}
              <div className="flex gap-2 mb-4">
                <div className="flex flex-1 gap-2 border border-gray-200 rounded-full p-1">
                  <button
                    onClick={() => setActiveTab("solid")}
                    className={`flex-1 px-4 py-2 rounded-full font-medium transition-all ${
                      activeTab === "solid"
                        ? "bg-[#F5F6FB] text-gray-900"
                        : "bg-white text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    Solid
                  </button>
                  <button
                    onClick={() => setActiveTab("palette")}
                    className={`flex-1 px-4 py-2 rounded-full font-medium transition-all ${
                      activeTab === "palette"
                        ? "bg-[#F5F6FB] text-gray-900"
                        : "bg-white text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    Palette
                  </button>
                </div>
                <button
                  onClick={startEyeDropper}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white hover:bg-gray-50 transition-all"
                >
                  <Pipette size={18} className="text-gray-600" />
                </button>
              </div>

              {activeTab === "solid" ? (
                <>
                  {/* Color Gradient Canvas using @uiw/react-color-block */}
                  <div className="color-picker relative mb-4 rounded-xl overflow-hidden shadow-lg">
                    <Saturation
                      hsva={hsva}
                      onChange={handleColorChange}
                      className="w-full h-[160px] cursor-crosshair"
                      style={{
                        width: "100%",
                        height: "160px",
                        cursor: "crosshair",
                      }}
                    />
                  </div>

                  <div className="mb-4">
                    <Hue
                      hue={hsva.h}
                      onChange={(newHue) => {
                        const newHsva = { ...hsva, h: newHue.h };
                        handleColorChange(newHsva);
                      }}
                      className="w-full h-[8px] rounded-full"
                    />
                  </div>

                  {/* Color Mode Input */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={cycleColorMode}
                      className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      {colorMode.toUpperCase()}
                      <ChevronDown size={16} />
                    </button>

                    {colorMode === "hex" && (
                      <input
                        type="text"
                        value={value}
                        onChange={(e) =>
                          onChange?.(e.target.value.toUpperCase())
                        }
                        className="flex-1 px-2 py-1 border border-[var(--Boarder-Grey)] rounded-full text-sm font-mono focus:outline-none text-[var(--Black)] text-[14px] leading-[22px] text-center"
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
                          className="w-full px-2 py-1 border border-[var(--Boarder-Grey)] rounded-lg text-sm text-center focus:outline-none"
                        />
                        <input
                          type="text"
                          min="0"
                          max="255"
                          value={rgb.g}
                          onChange={(e) => handleRgbChange("g", e.target.value)}
                          className="w-full px-2 py-1 border border-[var(--Boarder-Grey)] rounded-lg text-sm text-center focus:outline-none"
                        />
                        <input
                          type="text"
                          min="0"
                          max="255"
                          value={rgb.b}
                          onChange={(e) => handleRgbChange("b", e.target.value)}
                          className="w-full px-2 py-1 border border-[var(--Boarder-Grey)] rounded-lg text-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                          className="w-full px-2 py-1 border border-[var(--Boarder-Grey)] rounded-lg text-sm text-center focus:outline-none"
                        />
                        <input
                          type="text"
                          min="0"
                          max="100"
                          value={hsl.s}
                          onChange={(e) => handleHslChange("s", e.target.value)}
                          className="w-full px-2 py-1 border border-[var(--Boarder-Grey)] rounded-lg text-sm text-center focus:outline-none"
                        />
                        <input
                          type="text"
                          min="0"
                          max="100"
                          value={hsl.l}
                          onChange={(e) => handleHslChange("l", e.target.value)}
                          className="w-full px-2 py-1 border border-[var(--Boarder-Grey)] rounded-lg text-sm text-center focus:outline-none"
                        />
                      </div>
                    )}
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
          </div>
        )}
      </div>
    </div>
  );
}
