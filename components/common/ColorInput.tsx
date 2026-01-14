import { useEffect, useRef, useState } from "react";
import { ChromePicker } from "react-color";

type Props = {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  showColorIndicator?: boolean;
  id?: string;
};
const ColorInput = ({
  label,
  value,
  onChange,
  showColorIndicator = false,
  id,
}: Props) => {
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setShowPicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full ">
      <label className="block text-sm font-medium text-gray-900 mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
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
          <div ref={pickerRef} className="absolute right-0 top-full mt-2 z-50">
            <ChromePicker
              color={value}
              onChange={(color) => {
                onChange?.(color.hex);
              }}
              onChangeComplete={(color) => {
                onChange?.(color.hex);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorInput;
