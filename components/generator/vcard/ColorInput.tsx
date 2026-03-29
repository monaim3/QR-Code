"use client";

import { useState } from "react";
import ColorPicker from "./ColorPicker";

interface Props {
  label: string;
  color: string;
  onChange: (color: string) => void;
}

export default function ColorInput({ label, color, onChange }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div className="flex flex-col items-start gap-2 p-0 flex-1">
      <p className="text-[var(--Black)] text-[16px] leading-[24px] font-medium">
        {label}
      </p>

      <div
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
          onClick={() => setShowPicker(!showPicker)}
          className="w-6 h-6 border rounded-full cursor-pointer"
          style={{
            backgroundColor: color,
            borderColor: color === "#FFFFFF" ? "var(--Boarder-Grey)" : color,
          }}
        />

        {showPicker && (
          <ColorPicker
            color={color}
            onChange={onChange}
            setShowPicker={setShowPicker}
          />
        )}
      </div>
    </div>
  );
}
