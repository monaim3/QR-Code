interface TextareaProps {
  label: string;
  placeholder?: string;
  id: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  maxLength?: number;
  rows?: number;
}

export default function Textarea({
  label,
  placeholder,
  id,
  value = "",
  onChange = () => {},
  error,
  maxLength = 500,
  rows = 6,
}: TextareaProps) {
  const characterCount = value.length;
  const hasError = error || characterCount >= maxLength;

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-[var(--Black)] text-[16px] leading-[24px] font-medium"
      >
        {label}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={maxLength}
        rows={rows}
        className={`py-2 px-4 text-[var(--Black)] text-[16px] font-normal leading-[24px] placeholder:text-[var(--Grey)] rounded-[var(--Corner-Radius-10)] border bg-[var(--White)] focus:outline-none resize-none ${
          hasError
            ? "border-red-500 focus:border-red-500 "
            : "border-[var(--Boarder-Grey)] focus:border-[var(--Blue)] focus:ring-2 focus:ring-[var(--Blue)] hover:ring-2 hover:ring-[var(--Boarder-Grey)]"
        }`}
      />
      {hasError && (
        <p className="text-red-500 text-[12px] font-normal leading-[20px]">
          {error ||
            `Only the first ${maxLength} characters were pasted. Extra text was removed.`}
        </p>
      )}
    </div>
  );
}
