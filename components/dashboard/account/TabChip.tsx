interface Props {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export default function TabChip({ label, isActive = false, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex h-10 px-4 py-2 justify-center items-center gap-2.5 rounded-full border text-[14px] leading-[22px] transition-colors duration-300 ease-in-out shrink-0 ${
        isActive
          ? "border-[var(--Blue)] text-[var(--Blue)] hover:border-[var(--Blue-hover)] hover:text-[var(--Blue-hover)]"
          : "border-transparent text-[var(--Grey)] hover:border-[var(--Grey)] hover:text-[var(--Grey)]"
      }`}
    >
      {label}
    </button>
  );
}
