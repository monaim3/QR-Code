interface Props {
  label: string;
  color: string;
}

export default function ColorPicker({ label, color }: Props) {
  return (
    <div className="flex flex-col items-start gap-2 p-0 flex-1">
      <p className="text-[var(--Black)] text-[16px] leading-[24px] font-medium">
        {label}
      </p>

      <div className="flex h-12 items-center gap-2 self-stretch px-4 py-2 rounded-[var(--Corner-Radius-10)] border border-[var(--Boarder-Grey)] bg-white">
        <input
          type="text"
          className="text-[var(--Black)] text-[16px] leading-[24px] flex-1 focus:outline-none w-full"
          defaultValue={color}
          maxLength={7}
        />

        <div
          className="w-6 h-6 border rounded-full cursor-pointer"
          style={{
            backgroundColor: color,
            borderColor: color === "#FFFFFF" ? "var(--Boarder-Grey)" : color,
          }}
        />
      </div>
    </div>
  );
}
