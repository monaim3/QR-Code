interface Props {
  label: string;
}

export default function FormInput({ label }: Props) {
  return (
    <div className="flex flex-col items-start gap-2 p-0 flex-1 w-full">
      <label className="text-[var(--Black)] font-semibold text-[16px] leading-[24px]">
        {label}
      </label>
      <input
        className="flex h-12 px-4 py-2 items-center gap-2 self-stretch rounded-[var(--Corner-Radius-8)] border border-[var(--Boarder-Grey)] bg-white focus:ring-0 focus:outline-0 text-[var(--Black)] text-[16px] leading-[24px] w-full"
        placeholder={label}
      />
    </div>
  );
}
