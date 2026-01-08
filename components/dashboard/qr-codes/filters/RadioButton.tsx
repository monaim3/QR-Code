import { useEffect, useState } from "react";

interface Props {
  checked?: boolean;
}

export default function RadioButton({ checked = true }: Props) {
  const [isSelected, setIsSelected] = useState(checked);
  const onChange = () => {
    setIsSelected(!isSelected);
  };

  useEffect(() => {
    setIsSelected(checked);
  }, [checked]);

  return (
    <button
      onClick={onChange}
      className={`w-6 h-6 border border-[var(--Boarder-Grey)] rounded-[var(--Corner-Radius-Full)] p-1 cursor-pointer flex items-center justify-center
        ${
          isSelected
            ? "bg-[var(--Blue)] border-[var(--Blue)]"
            : "bg-white hover:border-2"
        }`}
    >
      {isSelected && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M6 11C3.2425 11 1 8.7575 1 6C1 3.2425 3.2425 1 6 1C8.7575 1 11 3.2425 11 6C11 8.7575 8.7575 11 6 11Z"
            fill="white"
          />
        </svg>
      )}
    </button>
  );
}
