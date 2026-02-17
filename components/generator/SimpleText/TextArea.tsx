import { useAppSelector } from "@/store/hooks";
import { useEffect, useRef } from "react";

interface TextareaProps {
  label: string;
  placeholder?: string;
  id: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  maxLength?: number;
  rows?: number;
  validationKey?: string;
  required?: boolean;
}

export default function Textarea({
  label,
  placeholder,
  id,
  value = "",
  onChange = () => {},
  error,
  maxLength = 500,
  rows = 4,
  validationKey,
  required = false,
}: TextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const validationErrors = useAppSelector((state) => state.validation.errors);
  const showErrors = useAppSelector((state) => state.validation.showErrors);

  const validationError =
    validationKey && showErrors ? validationErrors[validationKey] : "";
  const characterCount = value.length;
  const hasError = error || validationError || characterCount >= maxLength;

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-[var(--Black)] text-[16px] leading-[24px] font-medium"
      >
        {label}
        {required && <span className="text-black">*</span>}
      </label>
      <textarea
        ref={textareaRef}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={maxLength}
        rows={rows}
        className={`py-2 px-4 text-[var(--Black)] text-[16px] font-normal leading-[24px] placeholder:text-[var(--Grey)] rounded-[var(--Corner-Radius-10)] border bg-[var(--White)] focus:outline-none resize-none overflow-hidden ${
          hasError
            ? "border-red-500 ring-2 ring-red-500 focus:border-red-500 "
            : "border-[var(--Boarder-Grey)] focus:border-[var(--Blue)] focus:ring-2 focus:ring-[var(--Blue)] hover:ring-2 hover:ring-[var(--Boarder-Grey)]"
        }`}
      />
      {hasError && (
        <p className="text-red-500 text-[12px] font-normal leading-[20px]">
          {validationError ||
            error ||
            `Only the first ${maxLength} characters were pasted. Extra text was removed.`}
        </p>
      )}
    </div>
  );
}
