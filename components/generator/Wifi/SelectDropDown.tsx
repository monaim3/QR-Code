import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

interface EncryptionDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

const SelectDropDown: React.FC<EncryptionDropdownProps> = ({
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    { label: "WEP", value: "WEP" },
    { label: "WPA / WPA2", value: "WPA / WPA2" },
    { label: "WPA - EAP", value: "WPA - EAP" },
    { label: "NONE", value: "NONE" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className="w-full" ref={dropdownRef}>
      <label className="block text-[16px] leading-[24px] font-medium text-[var(--Black)] mb-2">
        Encryption type
      </label>

      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-white  px-4 py-[12px]
          border border-[var(--Boarder-Grey)]
          rounded-[10px] text-left text-[16px] leading-[24px] font-normal text-[var(--Black)]  flex items-center justify-between focus:ring-2 focus:ring-[var(--Blue)]
          focus:border-transparent
          transition-all duration-200 ease-in-out "
        >
          <span>{value}</span>
          <ChevronDown
            className={`w-4 h-4 text-black  transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden p-4">
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={`px-4 py-2.5 text-[16px] leading-[24px] font-medium text-[var(--Black)] cursor-pointer flex items-center justify-between transition-colors rounded-[6px] ${
                  value === option.value ? "bg-white" : "hover:bg-[#F5F6FB]"
                }`}
              >
                <span className="text-[16px] leading-[24px] font-normal text-[var(--Black)]">
                  {option.label}
                </span>
                {value === option.value && (
                  <Check className="w-4 h-4 text-[var(--Green)]  " />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectDropDown;
