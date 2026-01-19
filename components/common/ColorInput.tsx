// import { useEffect, useRef, useState } from "react";
// import { ChromePicker } from "react-color";

// type Props = {
//   label: string;
//   value: string;
//   onChange?: (value: string) => void;
//   showColorIndicator?: boolean;
//   id?: string;
// };
// const ColorInput = ({
//   label,
//   value,
//   onChange,
//   showColorIndicator = false,
//   id,
// }: Props) => {
//   const [showPicker, setShowPicker] = useState(false);
//   const pickerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         pickerRef.current &&
//         event.target instanceof Node &&
//         !pickerRef.current.contains(event.target)
//       ) {
//         setShowPicker(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div className="w-full ">
//       <label className="block text-base font-roboto font-medium text-gray-900 mb-2">
//         {label}
//       </label>
//       <div className="relative">
//         <input
//           type="text"
//           value={value}
//           onChange={(e) => onChange?.(e.target.value)}
//           placeholder="#000000"
//           className="w-full px-4 py-3 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 pr-14"
//         />
//         {showColorIndicator && (
//           <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
//             <div
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setShowPicker(!showPicker);
//               }}
//               className="w-8 h-8 rounded-full border-2 border-gray-300 cursor-pointer"
//               style={{ backgroundColor: value }}
//             />
//           </div>
//         )}
//         {showPicker && (
//           <div
//             ref={pickerRef}
//             className="absolute right-0 top-full mt-2 z-[9999]"
//           >
//             <ChromePicker
//               color={value}
//               onChange={(color) => {
//                 onChange?.(color.hex);
//               }}
//               onChangeComplete={(color) => {
//                 onChange?.(color.hex);
//               }}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ColorInput;
import React, { useState, useRef, useEffect } from "react";
import { Pipette, ChevronDown } from "lucide-react";

type Props = {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  showColorIndicator?: boolean;
  id?: string;
};

export default function ColorInput({
  label,
  value,
  onChange,
  showColorIndicator = false,
  id,
}: Props) {
  const [showPicker, setShowPicker] = useState(false);
  const [activeTab, setActiveTab] = useState("solid");
  const [colorMode, setColorMode] = useState<"hex" | "rgb" | "hsl">("hex");
  const [hue, setHue] = useState(220);
  const [saturation, setSaturation] = useState(70);
  const [brightness, setBrightness] = useState(93);
  const [isDragging, setIsDragging] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
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

  // Initialize color from value prop on mount and when value changes
  useEffect(() => {
    if (value && value.startsWith("#")) {
      const rgb = hexToRgb(value);
      const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
      setHue(hsl.h);
      // Calculate saturation and brightness for canvas position
      const max = Math.max(rgb.r, rgb.g, rgb.b) / 255;
      const min = Math.min(rgb.r, rgb.g, rgb.b) / 255;
      const delta = max - min;
      const sat = max === 0 ? 0 : (delta / max) * 100;
      const bright = max * 100;
      setSaturation(sat);
      setBrightness(bright);
    }
  }, [value]);

  // Draw gradient whenever hue changes
  useEffect(() => {
    drawGradient();
  }, [hue]);

  // Draw gradient when picker opens
  useEffect(() => {
    if (showPicker) {
      // Small delay to ensure canvas is rendered
      setTimeout(() => {
        drawGradient();
      }, 0);
    }
  }, [showPicker]);

  // Redraw gradient when switching to solid tab
  useEffect(() => {
    if (activeTab === "solid" && showPicker) {
      setTimeout(() => {
        drawGradient();
      }, 0);
    }
  }, [activeTab]);

  const drawGradient = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas first
    ctx.clearRect(0, 0, width, height);

    const horizGrad = ctx.createLinearGradient(0, 0, width, 0);
    horizGrad.addColorStop(0, "#FFFFFF");
    horizGrad.addColorStop(1, `hsl(${hue}, 100%, 50%)`);
    ctx.fillStyle = horizGrad;
    ctx.fillRect(0, 0, width, height);

    const vertGrad = ctx.createLinearGradient(0, 0, 0, height);
    vertGrad.addColorStop(0, "rgba(0, 0, 0, 0)");
    vertGrad.addColorStop(1, "rgba(0, 0, 0, 1)");
    ctx.fillStyle = vertGrad;
    ctx.fillRect(0, 0, width, height);
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, canvas.width));
    const y = Math.max(0, Math.min(e.clientY - rect.top, canvas.height));

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imageData = ctx.getImageData(x, y, 1, 1);
    const [r, g, b] = imageData.data;

    const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
    onChange?.(hex);

    setSaturation(Math.round((x / canvas.width) * 100));
    setBrightness(Math.round((1 - y / canvas.height) * 100));
  };

  const handleCanvasMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true);
    handleCanvasClick(e);
  };

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging) return;
    handleCanvasClick(e);
  };

  const handleCanvasMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mouseup", handleGlobalMouseUp);
      return () => document.removeEventListener("mouseup", handleGlobalMouseUp);
    }
  }, [isDragging]);

  const handleHueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHue = parseInt(e.target.value);
    setHue(newHue);

    const h = newHue / 360;
    const s = saturation / 100;
    const v = brightness / 100;

    const i = Math.floor(h * 6);
    const f = h * 6 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);

    let r: number, g: number, b: number;
    switch (i % 6) {
      case 0:
        r = v;
        g = t;
        b = p;
        break;
      case 1:
        r = q;
        g = v;
        b = p;
        break;
      case 2:
        r = p;
        g = v;
        b = t;
        break;
      case 3:
        r = p;
        g = q;
        b = v;
        break;
      case 4:
        r = t;
        g = p;
        b = v;
        break;
      case 5:
        r = v;
        g = p;
        b = q;
        break;
      default:
        r = v;
        g = t;
        b = p;
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
      onChange?.(result.sRGBHex.toUpperCase());
    } catch (e) {
      console.log("User canceled the eyedropper");
    }
  };

  return (
    <div className="w-full">
      <label className="block text-base font-roboto font-medium text-gray-900 mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          id={id}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder="#000000"
          className="w-full px-4 py-3 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 pr-14"
        />
        {showColorIndicator && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <div
              onClick={(e) => {
                e.stopPropagation();
                setShowPicker(!showPicker);
              }}
              className="w-8 h-8 rounded-full border-2 border-gray-300 cursor-pointer"
              style={{ backgroundColor: value }}
            />
          </div>
        )}
        {showPicker && (
          <div
            ref={pickerRef}
            className="absolute right-0 top-full mt-2 z-[9999]"
          >
            <div className="max-w-[360px] bg-white rounded-2xl shadow-2xl p-4">
              {/* Tab Navigation */}
              <div className="flex gap-2 mb-4">
                <div className="flex flex-1 gap-2 border border-gray-200 rounded-full p-1">
                  {" "}
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
                  {/* Color Gradient Canvas */}
                  <div className="relative mb-4 rounded-xl overflow-hidden shadow-lg">
                    <canvas
                      ref={canvasRef}
                      width={224}
                      height={160}
                      onMouseDown={handleCanvasMouseDown}
                      onMouseMove={handleCanvasMouseMove}
                      onMouseUp={handleCanvasMouseUp}
                      className="w-full h-40 cursor-crosshair"
                    />
                    <div
                      className="absolute w-5 h-5 rounded-full border-2 border-white shadow-lg pointer-events-none"
                      style={{
                        left: `${(saturation / 100) * 100}%`,
                        top: `${(1 - brightness / 100) * 100}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </div>

                  {/* Hue Slider */}
                  <div className="mb-4">
                    <input
                      type="range"
                      min="0"
                      max="360"
                      value={hue}
                      onChange={handleHueChange}
                      className="w-full h-2 rounded-full appearance-none cursor-pointer"
                      style={{
                        background:
                          "linear-gradient(to right, #FF0000 0%, #FFFF00 17%, #00FF00 33%, #00FFFF 50%, #0000FF 67%, #FF00FF 83%, #FF0000 100%)",
                      }}
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
                    <span className="text-sm font-medium text-gray-700">:</span>

                    {colorMode === "hex" && (
                      <input
                        type="text"
                        value={value}
                        onChange={(e) =>
                          onChange?.(e.target.value.toUpperCase())
                        }
                        className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    )}

                    {colorMode === "rgb" && (
                      <div className="flex-1 flex gap-2">
                        <input
                          type="number"
                          min="0"
                          max="255"
                          value={rgb.r}
                          onChange={(e) => handleRgbChange("r", e.target.value)}
                          className="w-full px-2 py-2 border border-gray-200 rounded-lg text-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="number"
                          min="0"
                          max="255"
                          value={rgb.g}
                          onChange={(e) => handleRgbChange("g", e.target.value)}
                          className="w-full px-2 py-2 border border-gray-200 rounded-lg text-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="number"
                          min="0"
                          max="255"
                          value={rgb.b}
                          onChange={(e) => handleRgbChange("b", e.target.value)}
                          className="w-full px-2 py-2 border border-gray-200 rounded-lg text-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    )}

                    {colorMode === "hsl" && (
                      <div className="flex-1 flex gap-2">
                        <input
                          type="number"
                          min="0"
                          max="360"
                          value={hsl.h}
                          onChange={(e) => handleHslChange("h", e.target.value)}
                          className="w-full px-2 py-2 border border-gray-200 rounded-lg text-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={hsl.s}
                          onChange={(e) => handleHslChange("s", e.target.value)}
                          className="w-full px-2 py-2 border border-gray-200 rounded-lg text-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={hsl.l}
                          onChange={(e) => handleHslChange("l", e.target.value)}
                          className="w-full px-2 py-2 border border-gray-200 rounded-lg text-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  {/* Color Palette Grid */}
                  <div className="grid grid-cols-10  gap-[5px] mb-4">
                    {paletteColors.flat().map((color, index) => (
                      <button
                        key={index}
                        onClick={() => handlePaletteColorClick(color)}
                        className={`w-8 h-8 rounded-lg `}
                        style={{ backgroundColor: color }}
                      />
                    ))}
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
                        className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    )}

                    {colorMode === "rgb" && (
                      <div className="flex-1 flex gap-2">
                        <input
                          type="number"
                          min="0"
                          max="255"
                          value={rgb.r}
                          onChange={(e) => handleRgbChange("r", e.target.value)}
                          className="w-full px-2 py-2 border border-gray-200 rounded-lg text-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="number"
                          min="0"
                          max="255"
                          value={rgb.g}
                          onChange={(e) => handleRgbChange("g", e.target.value)}
                          className="w-full px-2 py-2 border border-gray-200 rounded-lg text-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="number"
                          min="0"
                          max="255"
                          value={rgb.b}
                          onChange={(e) => handleRgbChange("b", e.target.value)}
                          className="w-full px-2 py-2 border border-gray-200 rounded-lg text-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    )}

                    {colorMode === "hsl" && (
                      <div className="flex-1 flex gap-2">
                        <input
                          type="number"
                          min="0"
                          max="360"
                          value={hsl.h}
                          onChange={(e) => handleHslChange("h", e.target.value)}
                          className="w-full px-2 py-2 border border-gray-200 rounded-lg text-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={hsl.s}
                          onChange={(e) => handleHslChange("s", e.target.value)}
                          className="w-full px-2 py-2 border border-gray-200 rounded-lg text-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={hsl.l}
                          onChange={(e) => handleHslChange("l", e.target.value)}
                          className="w-full px-2 py-2 border border-gray-200 rounded-lg text-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    )}
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
