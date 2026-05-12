import { useId, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface Props extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className" | "id"
> {
  label: string;
  error?: string;
}

export default function FormInput({
  label,
  type = "text",
  error,
  ...inputProps
}: Props) {
  const id = useId();

  return (
    <div className="flex flex-col items-start gap-2 p-0 flex-1 w-full">
      <label
        htmlFor={id}
        className="text-[var(--Black)] font-semibold text-[16px] leading-[24px]"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "flex h-12 px-4 py-2 items-center gap-2 self-stretch rounded-[var(--Corner-Radius-8)] border bg-white focus:outline-none text-[var(--Black)] text-[16px] leading-[24px] w-full",
          error
            ? "border-[var(--error)] ring-2 ring-[var(--error)]"
            : "border-[var(--Boarder-Grey)] focus:ring-0",
        )}
        placeholder={label}
        {...inputProps}
      />
      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          className="text-[var(--error)] text-[14px] leading-[22px]"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
