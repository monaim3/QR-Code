"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import ColorPicker from "./ColorPicker";

interface Props {
  label: string;
  color: string;
  onChange: (color: string) => void;
}

export default function ColorInput({ label, color, onChange }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [pickerStyle, setPickerStyle] = useState<React.CSSProperties>({});
  const triggerRef = useRef<HTMLDivElement>(null);
  const pickerContainerRef = useRef<HTMLDivElement>(null);

  const calculatePosition = (pickerHeight: number) => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const top =
      spaceBelow >= pickerHeight + 8
        ? rect.bottom + 8
        : rect.top - pickerHeight - 8;

    setPickerStyle({
      position: "fixed",
      top,
      left: rect.left,
      width: rect.width,
      zIndex: 9999,
    });
  };

  // After picker renders, measure its actual height and reposition
  useEffect(() => {
    if (!showPicker) return;
    const frame = requestAnimationFrame(() => {
      const height = pickerContainerRef.current?.offsetHeight ?? 420;
      calculatePosition(height);
    });
    return () => cancelAnimationFrame(frame);
  }, [showPicker]);

  useEffect(() => {
    if (!showPicker) return;
    const handleUpdate = () => {
      const height = pickerContainerRef.current?.offsetHeight ?? 420;
      calculatePosition(height);
    };
    window.addEventListener("scroll", handleUpdate, true);
    window.addEventListener("resize", handleUpdate);
    return () => {
      window.removeEventListener("scroll", handleUpdate, true);
      window.removeEventListener("resize", handleUpdate);
    };
  }, [showPicker]);

  return (
    <div className="flex flex-col items-start gap-2 p-0 flex-1">
      <p className="text-[var(--Black)] text-[16px] leading-[24px] font-semibold">
        {label}
      </p>

      <div
        ref={triggerRef}
        className={`flex h-12 items-center gap-2 self-stretch px-4 py-2 rounded-[var(--Corner-Radius-10)] bg-white border ${isFocused ? "ring-2 ring-[var(--Blue)] border-[var(--Blue)]" : "border-[var(--Boarder-Grey)] hover:ring-2 hover:ring-[var(--Boarder-Grey)]"} relative`}
      >
        <input
          type="text"
          className="text-[var(--Black)] text-[16px] leading-[24px] flex-1 focus:outline-none w-full"
          value={color}
          maxLength={7}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => onChange(e.target.value)}
        />

        <div
          onClick={() => setShowPicker((prev) => !prev)}
          className="w-6 h-6 border rounded-full cursor-pointer shrink-0"
          style={{
            backgroundColor: color,
            borderColor: color === "#FFFFFF" ? "var(--Boarder-Grey)" : color,
          }}
        />
      </div>

      {showPicker &&
        typeof window !== "undefined" &&
        createPortal(
          <div ref={pickerContainerRef} style={pickerStyle}>
            <ColorPicker
              color={color}
              onChange={onChange}
              setShowPicker={setShowPicker}
            />
          </div>,
          document.body,
        )}
    </div>
  );
}
