import { useEffect, useState } from "react";

interface Props {
  checked?: boolean;
  onChange?: () => void;
  isRounded?: boolean;
}

export default function CheckBox({
  checked = false,
  onChange,
  isRounded,
}: Props) {
  const [isSelected, setIsSelected] = useState(checked);

  const handleChange = () => {
    setIsSelected(!isSelected);
    onChange?.();
  };

  useEffect(() => {
    setIsSelected(checked);
  }, [checked]);

  return (
    <button
      onClick={handleChange}
      className={`!w-6 !h-6 border ${isRounded ? "rounded-[var(--Corner-Radius-Full)]" : "rounded-[var(--Corner-Radius-6)]"} p-1 cursor-pointer flex items-center
        ${
          isSelected
            ? "bg-[var(--Blue)] border-[var(--Blue)]"
            : "bg-white border-[var(--Boarder-Grey)] hover:border-2"
        }`}
    >
      {isSelected && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M13.5318 3.92992C13.9137 4.32138 13.9137 4.95593 13.5318 5.3472L6.97315 12.0703C6.59125 12.4616 5.97239 12.4616 5.5905 12.0703L2.46831 8.86974C2.08641 8.47847 2.08641 7.84392 2.46831 7.45266C2.85001 7.0612 3.46906 7.0612 3.85077 7.45266L6.28173 9.94449L12.1492 3.92992C12.5311 3.53866 13.1501 3.53866 13.5318 3.92992Z"
            fill="white"
          />
        </svg>
      )}
    </button>
  );
}
