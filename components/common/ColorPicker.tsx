import { useEffect, useRef, useState } from "react";

function ColorPicker({
  value,
  onChange,
  label,
}: {
  value: string;
  onChange: (color: string) => void;
  label: string;
}) {
  const [mode, setMode] = useState<"solid" | "palette">("solid");
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  const paletteColors = [
    "#000000",
    "#4A4A4A",
    "#9B9B9B",
    "#BDBDBD",
    "#E0E0E0",
    "#FF0000",
    "#FF8C00",
    "#00C853",
    "#2196F3",
    "#9C27B0",
    "#E91E63",
    "#FF5252",
    "#FFAB91",
    "#81C784",
    "#64B5F6",
    "#9575CD",
    "#F48FB1",
    "#FFE082",
    "#FFCC80",
    "#80CBC4",
    "#B0BEC5",
    "#8D6E63",
    "#6D4C41",
    "#D32F2F",
    "#00897B",
    "#0288D1",
    "#AB47BC",
    "#F06292",
    "#7986CB",
    "#FF7043",
    "#78909C",
    "#A1887F",
    "#90A4AE",
    "#BCAAA4",
    "#FFB74D",
    "#4FC3F7",
    "#BA68C8",
    "#EF5350",
    "#FF8A65",
    "#546E7A",
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setShowPicker(false);
      }
    }
    if (showPicker) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [showPicker]);

  return (
    <div className="relative" ref={pickerRef}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <div
          className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 cursor-pointer hover:border-teal-600 bg-white"
          onClick={() => setShowPicker(!showPicker)}
        >
          <div
            className="w-6 h-6 rounded border border-gray-300 flex-shrink-0"
            style={{ backgroundColor: value }}
          />
          <input
            type="text"
            value={value}
            readOnly
            className="flex-1 outline-none text-sm bg-transparent"
          />
        </div>

        {showPicker && (
          <div className="absolute top-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-4  w-80">
            <div className="flex gap-2 mb-4 border-b pb-3">
              <button
                onClick={() => setMode("solid")}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                  mode === "solid"
                    ? "bg-teal-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Solid
              </button>
              <button
                onClick={() => setMode("palette")}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                  mode === "palette"
                    ? "bg-teal-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Palette
              </button>
            </div>

            {mode === "solid" ? (
              <div>
                <div
                  className="relative h-40 rounded-lg mb-4 cursor-crosshair"
                  style={{
                    background: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1)), linear-gradient(to right, rgba(255,255,255,1), ${value})`,
                  }}
                ></div>
                <input
                  type="range"
                  min="0"
                  max="360"
                  defaultValue="0"
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer mb-3"
                  style={{
                    background:
                      "linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)",
                  }}
                  onChange={(e) => {
                    const hue = e.target.value;
                    onChange(`hsl(${hue}, 100%, 50%)`);
                  }}
                />
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium whitespace-nowrap">
                    HEX:
                  </span>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-8 gap-2 max-h-64 overflow-y-auto">
                {paletteColors.map((color) => (
                  <button
                    key={color}
                    onClick={() => {
                      onChange(color);
                      setShowPicker(false);
                    }}
                    className="w-8 h-8 rounded border border-gray-300 hover:scale-110 transition-transform"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ColorPicker;
