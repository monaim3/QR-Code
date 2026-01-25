interface Props {
  label: string;
  placeholder?: string;
  id: string;
  type?: string;
}

export default function Input({
  label,
  placeholder,
  id,
  type = "text",
}: Props) {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <label
        htmlFor={id}
        className="text-[var(--Black)] text-[16px] leading-[24px] font-medium"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="h-12 py-2 px-4 text-[var(--Black)] text-[16px] leading-[24px] placeholder:text-[var(--Grey)] rounded-[var(--Corner-Radius-10)] border border-[var(--Boarder-Grey)] focus:outline-none"
      />
    </div>
  );
}
